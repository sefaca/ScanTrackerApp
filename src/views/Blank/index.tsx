import React, {useState} from 'react';
import {Text, Image, ScrollView} from 'react-native';
import {RNCamera} from 'react-native-camera';
import TextRecognition from 'react-native-text-recognition';
import {Props} from './types';
import Button from '../../common/ui/components/Button';
import {
  Container,
  TextRecognized,
  Camera,
  PreviewImage,
  PendingView,
  AppTitle,
} from './styles';

// Componente para mostrar una vista de carga mientras la cámara se inicializa
const PendingViewComponent = () => (
  <PendingView>
    <Text>Loading...</Text>
  </PendingView>
);

// Función para encontrar el número más grande en el texto reconocido
const findTotalWithCurrencySymbol = text => {
  // Buscar todas las líneas que contengan números y el símbolo "€" o palabras clave
  const lines = text.split('\n');
  const totalKeywords = [
    'total',
    'a pagar',
    'importe',
    'saldo',
    'monto',
    'total iva',
    'importe total',
    'total factura',
  ];
  const numberWithCurrencyRegex = /(\d+[\.,]?\d{0,2})\s*€/;

  for (const line of lines) {
    // Buscar en cada línea los números precedidos o seguidos por el símbolo "€"
    const numberMatch = line.match(numberWithCurrencyRegex);
    if (numberMatch) {
      return parseFloat(numberMatch[1].replace(',', '.')).toFixed(2);
    }
    // Buscar en cada línea los números precedidos por palabras clave
    for (const keyword of totalKeywords) {
      if (line.toLowerCase().includes(keyword)) {
        const numberMatch = line.match(/(\d+[\.,]?\d{0,2})/);
        if (numberMatch) {
          return parseFloat(numberMatch[1].replace(',', '.')).toFixed(2);
        }
      }
    }
  }
  return 'No se reconoce el total';
};

export const Blank: Props = () => {
  const [imageUri, setImageUri] = useState(null);
  const [recognizedText, setRecognizedText] = useState('');
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
              <Button
                title="Take Picture"
                onPress={() => takePicture(camera)}
              />
            );
          }}
        </Camera>
        {imageUri && <PreviewImage source={{uri: imageUri}} />}
        <TextRecognized>
          {recognizedText
            ? `Recognized Text: ${recognizedText}`
            : 'No se reconoce ningún texto'}
        </TextRecognized>
        <TextRecognized>
          {total ? `Total: ${total}` : 'No se reconoce el total'}
        </TextRecognized>
      </Container>
    </ScrollView>
  );
};

export default Blank;
