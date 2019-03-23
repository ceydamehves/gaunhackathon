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



export default class ThanksScreen extends React.Component {
    render () {
        return( 
            <ImageBackground
            style={styles.container}
            source={require ('../assets/img/bg.jpg')} >

            <View style={styles.txtContainer}>
                <Text style={styles.text} >Bildiriminiz için teşekkürler! </Text>
                           </View>

            <View style={styles.buttonsContainer}>
            
          
            </View>
            <View style={styles.txtContainer}>
            <Text style={styles.text}>Emojinize göre mekan araması yapmak ister misiniz?</Text>
            </View>
            <View style={styles.buttonContainer}>
            
            <TouchableOpacity
            style={styles.button}
            //TO DO
            onPress={() => {
                this.props.navigation.navigate ('EmojiScreen')               
            }}>
            <Image
                source={require ('../assets/img/magnifier.png')}
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
            justifyContent: 'center',
            flexDirection:'column'
            
        },
        txtContainer:{
            alignSelf: 'center'
            
        },
        buttonContainer:{
        
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: 'rgba(171, 184, 206,0.7)',
            borderRadius: 70,
            padding: 20,
            marginBottom: 20,
        },
        img:{
            width: 110,
            height: 110
      },
      text:{
        fontWeight:'bold',
        color : 'black',
        fontSize:30,
        alignSelf:'center',
        textAlign: 'center',
        fontFamily:'Arial'
      },
      buttonsContainer:{
          flexDirection: 'row'
    },
      
        
    });