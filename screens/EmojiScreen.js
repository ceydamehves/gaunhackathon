import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ImageBackground,
  Platform,
  Dimensions,
} from 'react-native';

export default class EmojiScreen extends React.Component {
  state = {
    emotions: [
      //satir 1
      [
        {
          emotionName: 'rainbow',
          image: require ('../assets/img/rainbow.png'),
        },
        {
          emotionName: 'laughing',
          image: require ('../assets/img/laughing1.png'),
        },
        {
          emotionName: 'happy',
          image: require ('../assets/img/happy.png'),
        },
      ],
      //satir 2
      [
        {
          emotionName: 'in-love',
          image: require ('../assets/img/in-love.png'),
        },
        {
          emotionName: 'cool',
          image: require ('../assets/img/reaction.png'),
        },
        {
          emotionName: 'cool',
          image: require ('../assets/img/wondering.png'),
        },
      ],
      //satir 4
      [
        {
          emotionName: 'cool',
          image: require ('../assets/img/sleep.png'),
        },
        {
          emotionName: 'cool',
          image: require ('../assets/img/thinking.png'),
        },
        {
          emotionName: 'cool',
          image: require ('../assets/img/scream.png'),
        },
      ],
      //satir 2
      [
        {
          emotionName: 'cool',
          image: require ('../assets/img/sad1.png'),
        },
        {
          emotionName: 'cool',
          image: require ('../assets/img/zipped.png'),
        },
        {
          emotionName: 'cool',
          image: require ('../assets/img/straight.png'),
        },
      ],
    ],
  };
  render () {
    return (
      <ImageBackground
        style={styles.container}
        source={require ('../assets/img/bg.jpg')}
      >
        <View style={styles.mapContainer}>
          <Image
            style={styles.map}
            source={{
              uri: 'https://image.maps.api.here.com/mia/1.6/mapview?app_id=hhwBjH2mzHNeXcc6oabp&app_code=givwFuDpCLJIJvW8dhu3Xg&lat=37.0311168&lon=37.3293056&h=300&w=728&z=15',
            }}
          />
        </View>
        {this.state.emotions.map ((v, a) => (
          <View style={styles.satirContainer} key={a}>
            <View style={styles.buttonContainer}>
              {v.map ((k, i) => (
                <TouchableOpacity
                  key={a + ':' + i}
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.navigate ('ThanksScreen', {
                      name: k.name,
                    });
                  }}
                >
                  <Image source={k.image} style={styles.img} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  satirContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    borderRadius: 80,
    padding: 5,
  },
  img: {
    width: 100,
    height: 100,
  },
  mapContainer: {
    marginBottom: 30,
  },
  map: {
    width: Dimensions.get ('screen').width - 50,
    height: 250,
    borderRadius: 9,
  },
});
('');
