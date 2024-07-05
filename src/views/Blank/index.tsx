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
} from './styles';
import CameraButton from '../../common/ui/components/CameraButton';

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
  return maxNumber > 0 ? formattedTotal : 'No se reconoce el total';
};

export const Blank: Props = () => {
  const [imageUri, setImageUri] = useState(null);
  // const [recognizedText, setRecognizedText] = useState('');
  const [total, setTotal] = useState('');

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
              <ButtonContainer>
                <CameraButton
                  title="Take Picture"
                  onPress={() => takePicture(camera)}
                />
              </ButtonContainer>
            );
          }}
        </Camera>
        {imageUri && <PreviewImage source={{uri: imageUri}} />}
        {/* <TextRecognized>
          {recognizedText
            ? `Recognized Text:\n${recognizedText}`
            : 'No se reconoce ningún texto'}
        </TextRecognized> */}
        <TextRecognized>
          {total ? `Total: ${total}` : 'No se reconoce el total'}
        </TextRecognized>
      </Container>
    </ScrollView>
  );
};

export default Blank;
