import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('0');
  const [degree, setDegree] = useState('20°');
  const message = [
    'actualmente soleado',
    'actualmente nublado',
    'actualmente lluvioso',
    'actualmente en tormenta'
  ];
  const background = [
    require('./assets/images/fondo-soleado.png'),
    require('./assets/images/fondo-nublado.jpg'),
    require('./assets/images/fondo-lluvioso.jpg'),
    require('./assets/images/fondo-tormenta.jpg'),
  ];
  const img = [
    require('./assets/images/soleado.png'),
    require('./assets/images/nublado.png'),
    require('./assets/images/lluvioso.png'),
    require('./assets/images/tormenta.png'),
  ];

  const handleSunny = () => {
    setWeather(1);
  };
  const handleCloudy = () => {
    setWeather(2);
  };
  const handleRainy = () => {
    setWeather(3);
  };
  const handleStormy = () => {
    setWeather(4);
  };


  return (
    <ImageBackground
      source={require('./assets/images/fondo-soleado.png')}
      style={styles.container}
      resizeMode='cover'
    >
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu ciudad"
        placeholderTextColor='black'
        value={city}
        onChangeText={setCity}
      />
      <Text style={styles.degrees}>{degree}</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('./assets/images/soleado.png')}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.message}>{city} actualmente {weather}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleSunny} style={styles.buttonImage}>
          <Image
            style={styles.image}
            source={require('./assets/images/soleado.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCloudy} style={styles.buttonImage}>
          <Image
            style={styles.image}
            source={require('./assets/images/nublado.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRainy} style={styles.buttonImage}>
          <Image
            style={styles.image}
            source={require('./assets/images/lluvioso.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleStormy} style={styles.buttonImage}>
          <Image
            style={styles.image}
            source={require('./assets/images/tormenta.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    height: '5%',
    marginTop: 80,
    fontFamily: 'monospace',
    fontWeight: 'bold'

  },
  degrees: {
    height: '15%',
    color: '#3D3D3D',
    fontSize: 120,
    fontFamily: 'arial',
  },
  imageContainer: {
    width: '70%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  message: {
    fontFamily: 'monospace',
    fontSize: 15,
  },
  buttonsContainer: {
    height: '50%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 40,
    gap: 20,
  },
  buttonImage: {
    width: '15%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});
