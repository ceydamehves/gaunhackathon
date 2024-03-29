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
    loading: true,
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
    ],
  };
  render () {
    return (
      <ImageBackground
        style={styles.container}
        source={require ('../assets/img/bg.jpg')}
      >
        {this.state.emotions.map ((v, a) => (
          <View style={styles.satirContainer} key={a}>
            <View style={styles.buttonContainer}>
              {v.map ((k, i) => (
                <TouchableOpacity
                  key={a + ':' + i}
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.navigate ('PlaceScreen', {
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
});
