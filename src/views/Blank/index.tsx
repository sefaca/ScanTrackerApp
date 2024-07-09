import React, {useState} from 'react';
import {Text, ScrollView} from 'react-native';
import {RNCamera} from 'react-native-camera';
import TextRecognition from 'react-native-text-recognition';
import {Props} from './types';
import {
  Container,
  TextRecognized,
  Camera,
  PreviewImage,
  PendingView,
  AppTitle,
  ButtonContainer,
  TextContainer,
  ButtonCameraContainer,
} from './styles';
import CameraButton from '../../common/ui/components/CameraButton';
import Button from '../../common/ui/components/Button';
import {useNavigation} from '@react-navigation/native';

// Componente para mostrar una vista de carga mientras la cámara se inicializa
const PendingViewComponent = () => (
  <PendingView>
    <Text>Loading...</Text>
  </PendingView>
);

// Función para encontrar el número más grande en el texto reconocido
const findTotalWithCurrencySymbol = text => {
  // Expresión regular para buscar números con coma y exactamente dos decimales
  const numberWithCommaRegex = /\b\d+,\d{2}\b/;

  // Inicializar variable para almacenar el número más grande encontrado
  let maxNumber = 0;

  // Separar el texto en líneas y buscar el número más grande que coincida con el formato
  const lines = text.split('\n');
  lines.forEach(line => {
    const matches = line.match(numberWithCommaRegex);
    if (matches) {
      matches.forEach(match => {
        const cleanedNumber = match.replace(',', '.').replace('O', '0'); // Reemplazar 'O' con '0' y la coma con un punto
        const number = parseFloat(cleanedNumber);
        if (number > maxNumber) {
          maxNumber = number;
        }
      });
    }
  });

  // Formatear el número más grande encontrado con dos decimales
  const formattedTotal = maxNumber.toFixed(2);

  // Si se encontró algún número válido, devolverlo; de lo contrario, indicar que no se reconoce el total
  return maxNumber > 0 ? formattedTotal : 'The total is not recognized';
};

export const Blank: Props = () => {
  const [imageUri, setImageUri] = useState(null);
  const [recognizedText, setRecognizedText] = useState('');
  const [total, setTotal] = useState('');

  const [expenses1, setExpenses1] = useState([]);
  const [expenses2, setExpenses2] = useState([]);
  const [expenses3, setExpenses3] = useState([]);

  const navigation = useNavigation(); // Usa useNavigation

  // Función para tomar una foto usando la cámara
  const takePicture = async camera => {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    setImageUri(data.uri);

    // Reconocimiento de texto en la imagen capturada
    const text = await TextRecognition.recognize(data.uri);
    const recognizedText = text.join('\n');
    setRecognizedText(recognizedText);
    console.log('Texto reconocido:', recognizedText); // Aquí se agrega el console.log

    // Encontrar el número más grande en el texto reconocido
    const total = findTotalWithCurrencySymbol(recognizedText);
    setTotal(total);
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Container>
        <AppTitle>Scan Expense Tracker</AppTitle>
        <Camera
          captureAudio={false}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
          {({camera, status}) => {
            if (status !== 'READY') {
              return <PendingViewComponent />;
            }
            return (
              <ButtonCameraContainer>
                <CameraButton
                  title="Take Picture"
                  onPress={() => takePicture(camera)}
                />
              </ButtonCameraContainer>
            );
          }}
        </Camera>
        <TextContainer>
          {imageUri && <PreviewImage source={{uri: imageUri}} />}
          {/* <TextRecognized>
          {recognizedText
            ? `Recognized Text:\n${recognizedText}`
            : 'No se reconoce ningún texto'}
        </TextRecognized> */}
          <TextRecognized>
            {total ? `Total: ${total}` : 'The total is not recognized'}
          </TextRecognized>
          <ButtonContainer>
            <Button
              title="Food"
              onPress={() =>
                setExpenses1([
                  ...expenses1,
                  {label: 'Expense', value: parseFloat(total)},
                ])
              }
            />
            <Button
              title="Entertainment"
              onPress={() =>
                setExpenses2([
                  ...expenses2,
                  {label: 'Expense', value: parseFloat(total)},
                ])
              }
            />
            <Button
              title="Transport"
              onPress={() =>
                setExpenses3([
                  ...expenses3,
                  {label: 'Expense', value: parseFloat(total)},
                ])
              }
            />
            <Button
              title="See Charts"
              onPress={() =>
                navigation.navigate('DataScreen', {
                  expenses1,
                  expenses2,
                  expenses3,
                })
              }
            />
          </ButtonContainer>
        </TextContainer>
      </Container>
    </ScrollView>
  );
};

export default Blank;
