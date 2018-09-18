import LocalizedStrings from 'react-native-localization';

export const strings = new LocalizedStrings({
 "en-US":{
    location: 'your location',
    herLocation: 'her location',
    yourPhoto: 'your photo',
    herPhoto: 'her photo',
    buttonText: 'Create Map',
    takePhotoButtonTitle: 'Take photo',
    chooseFromLibraryButtonTitle: 'Choose from lib',
    cancelButtonTitle: 'Cancel',
    title: 'Choose Photo',
    textPhoto: require('../img/textRoadEn.png'),
    shareImage: 'Share Image',
    shareApp: 'Share App',
    givePoint: 'Give Points!',
    bottomTex: 'all rights reserved  of Happines Map App.',
    shareTitle: 'Mutluluk Haritası',
    shareMessage: 'uygulamayı indir sen de mutluluk haritanı oluştur!'
 },
 tr: {
     location: 'konumunuz',
     herLocation: 'sevdiceğin konumu',
     yourPhoto: 'senin fotoğrafın',
    herPhoto: 'sevdiceğinin fotoğrafı',
    buttonText: 'Yol Haritası Oluştur',
    takePhotoButtonTitle: 'Fotoğraf çek',
    chooseFromLibraryButtonTitle: 'Galeriden seç',
    cancelButtonTitle: 'Kapat',
    title: 'Fotoğraf Seç',
    textPhoto: require('../img/textRoad.png'),
    shareImage: 'Fotoğrafı Paylaş',
    shareApp: 'Uygulamayı Paylaş',
    givePoint: 'Puan Ver!',
    bottomTex: 'mutluluğa giden yol haritası uygulamasının tüm haklrı saklıdır.',
    shareTitle: 'Mutluluk Haritası',
    shareMessage: 'uygulamayı indir sen de mutluluk haritanı oluştur!'
}
});

export const IMAGE = {
    lastImage: ''
}