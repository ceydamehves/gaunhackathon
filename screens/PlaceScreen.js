import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Text,
  ImageBackground,
  Platform,
  Dimensions,
} from 'react-native';

export default class EmojiScreen extends React.Component {
  state = {
    places: [
      {
        title: 'Elihan Simit Sarayi',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Rötar Lounge Cafe',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Türkan Manti & Ev Yemekleri',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Mangal Ciğer & Kebap',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Kahve Tiryakisi',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Bayramefendi Osmanlı Kahvecisi',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Mahmood Coffee Kitchen & Cake',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Nazar Doner',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Mahmood Coffee Shop',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Başak Tavukçuluk',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Karınca Yuvası',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Tekerlek Cafe',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Efes Iskenderun Doner',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Başak Kafe',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Düşler Kahvesi',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Şiraz Cafe',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Eflatun Cafe',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Efes İskenderun Döner',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Tırtıl Kokoreç',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Tatbak Üniversite',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Üzüm Kampüs',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Üniversite Pizza Pizza',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Sopa',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Rotar Lounge',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Türkinoy Lezzet Durağı',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Kıtır',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Köfte Sos',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Korkmaz Lahmacun Salonu',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Gazoz Kapağı',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Öz Simit Evi',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'His Börek & Fast Food',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Starbucks',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Bellavista Cafe Cuisine',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Koza Pastanesi',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Hasbihal Cafe',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Hanımlar Mutfağı',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Üniversite 27 Ocakbaşı',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: "F'Eat Me",
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Gaziantep Üniversitesi Mâvera Kongre ve Sanat Merkezi',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Cekirdek Cafe Dinleti Restorant',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'David People',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Varil Çorba',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Kahveland Gaziantep',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Kahve Meydanı',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Mix Etiler Park',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Kahve Deposu',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Özikizler Künefe',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Horon Pide Gaziantep',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Sosyete Giyim',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Burgerst',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Bogazkoy',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Onat Kutlar Devlet Tiyatrosu',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: "Kraps'y Bc",
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Sarayli Kunefe',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Şen Baba 2',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Pizza2go Gaziantep',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: '10 Numara Tobacco Shop',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Köfteci Gazi Usta Meşhur',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Pizzarama',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Kahve Aşkı',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Kahve Tanem',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Döner Box',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Avrupa Yakası',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Çalışkan Simit Sarayı',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Ck Arzum Bebe',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Thomruk Cafe',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Friends Restaurant & Caffee',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Mandalin Park Cafe Enjoy The Music',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Arzum Giyim',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Cafed Cafe - Gaün Fen Edebiyat Cafe',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Al Waha Cafe & Restaurant',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Tostcu Aliço',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Enes Pide ve Lahmacun Salonu',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Dev Center',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'My Sound Coffee',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Vr Mask Gaziantep',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Tepe Pastanesi',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Oxygen Cafe',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Tche Tche',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Berlin Kebap',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Altın Bahçe',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Berceste Park',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Öz Birecik Sofrasi',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Kumrucu Asımm',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Çankaya Pastanesi',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Şahinbey Köy Pazarı',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Urfa Çiger Salonu',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Cici Takı Dünyası',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Kamelya Cafe',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Kahve Tanem',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Cergibozanlar - Marketler Zinciri',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Şahinbey Plaza',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Pilazza Pide Lahmacun',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Çergibozanlar',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Grand Taze',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Zeugma Park Cafe Restaurant',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Türkan Manti & Ev Yemekleri',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Eski Kafa Üniversite',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Bulgurpark',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
      {
        title: 'Oses Çiğ Köfteci Osman Usta',
        photo: {
          uri: 'https://via.placeholder.com/728x150',
        },
      },
    ],
  };
  _renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <ImageBackground style={styles.itemPhoto} source={item.photo}>
        <View style={styles.itemTxtContainer}>
          <Text style={styles.itemText}>{item.title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
  render () {
    return (
      <ImageBackground
        style={styles.container}
        source={require ('../assets/img/bg.jpg')}
      >
        <FlatList data={this.state.places} renderItem={this._renderItem} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  itemContainer: {},
  itemPhoto: {
    width: Dimensions.get ('screen').width,
    height: 150,
    justifyContent: 'flex-end',
  },
  itemTxtContainer: {
    alignSelf: 'stretch',
    backgroundColor: 'rgba(173, 175, 172,0.1)',
    paddingVertical: 15,
  },
  itemText: {
    color: 'white',
    fontSize: 28,
  },
});
