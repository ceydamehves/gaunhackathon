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
    constructor(props){
        super(props)
        this.state = {
          text: 'Welcome'
        }
    }
  render () {
    return (
        <ImageBackground
        style={styles.container}
        source={require ('../assets/img/bg.jpg')} >
           
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
                this.props.navigation.navigate ('')               
            }}>
            <Image
                source={require ('../assets/img/rainbow.png')}
                style={styles.img}
            />
          </TouchableOpacity>
          </View>

        <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
                this.props.navigation.navigate ('')               
            }}>
            <Image
                source={require ('../assets/img/laughing1.png')}
                style={styles.img}
            />
            
          </TouchableOpacity>
          </View>

<View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
                this.props.navigation.navigate ('')               
            }}>
            <Image
                source={require ('../assets/img/cry.png')}
                style={styles.img}
            />
            
          </TouchableOpacity>     
</View>
    
        </ImageBackground>
            
          
                
    );
    
}
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        
    },
    buttonContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    button: {
        borderRadius: 80,
        padding: 10,
        marginBottom: 10,
      },
      img:{
          width: 120,
          height: 120
    } 
});