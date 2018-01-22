import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image, TextInput, ScrollView,Button } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { actPostLoad } from '../actions';
import ListItem from './ListItem';
import { CardSection } from '../ortak/index';
 
class ProfileFriends extends Component {

    render() {
        console.log('post list form render oldu');
        console.log(this.props.postArray);
        return (
            <ScrollView style={styles.container}>
                <View style={styles.subContainerStyle} >
                    <Image source={require('../images/kanserhastasi1.png')} style={{ width: 100, height: 100 }} />
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={styles.profileNameStyle} >Ufuk Armağan Özgür</Text>
                        <Text>        </Text>
                        <Button style={{ marginLeft:10, marginRight:10 }} title="KONUŞMA BAŞLAT"
                        onPress={ () => Actions.message_form() }>
                        </Button>
                    </View>
                </View>
                <View>
                <Text></Text>
                        <Text style={{ fontSize:20 }}>
                        <Text style={{ color: 'blue' }} >Kanser Türü:</Text>
                        <Text style={{ fontWeight:'bold' }} >Lenfoma</Text></Text>
                <Text></Text>
                        <Text style={{ fontSize:20 }}> 
                        <Text style={{ color: 'blue' }} >Yaş: </Text>
                        <Text style={{ fontWeight:'bold' }} >25 </Text></Text>
                <Text></Text>
                        <Text style={{ fontSize:20 }}> 
                        <Text style={{ color: 'blue' }} >Şehir:</Text>
                        <Text style={{ fontWeight:'bold' }} >Ankara </Text></Text>
                <Text></Text>
                        <Text style={{ fontSize:20 }}> 
                        <Text style={{ color: 'blue' }} >Evre:</Text>
                        <Text style={{ fontWeight:'bold' }} > 2B </Text> </Text>
                <Text></Text>
                        <Text style={{ fontSize:20 }}> 
                        <Text style={{ color: 'blue' }} >Hastane:</Text>
                        <Text style={{ fontWeight:'bold' }} >Ankara Onkoloji Hastanesi </Text></Text>
                <Text></Text>
                        <Text style={{ fontSize:20 }}> 
                        <Text style={{ color: 'blue' }} >Kemoterapi Kür Sayısı: </Text>
                        <Text style={{ fontWeight:'bold' }} >4 </Text></Text>
                <Text></Text>
                        <Text style={{ fontSize:20 }}> 
                        <Text style={{ color: 'blue' }} >Bağlantılı Savaşçı Sayısı: </Text>
                        <Text style={{ fontWeight:'bold' }} >12 </Text></Text>
                <Text></Text>
                        <Text style={{ fontSize:20 }}> 
                        <Text style={{ color: 'blue' }} >Bağlantılı Kahraman Sayısı: </Text>
                        <Text style={{ fontWeight:'bold' }} >8 </Text></Text>
                <Text></Text>

                </View>

                <View style={styles.subContainerStyle} >
                    <Image source={require('../images/kanserhastasi1.png')} style={{ width: 100, height: 100 }} />
                    <Image source={require('../images/kanserhastasi2.jpg')} style={{ width: 100, height: 100 }} />
                    <Image source={require('../images/kanserhastasi3.jpg')} style={{ width: 100, height: 100 }} />
                </View>
                <Text></Text>
                <View style={{ alignContent:'center' }}>
                    <Text style={{ fontsize:60,  color:'blue' }} > KANSER SERÜVENİM </Text>
                    <Text style={{ fontWeight:'bold', fontStyle:'italic' }}>
                    9 Aralık Cumartesi saat 19:51 (Bu yazıyı yazmaya başladığım tarih ve şuan 2018deyiz, uzun zamandır yazmadığımı söylemiştim bir yazıya başlayınca bile verdiğim aranın uzunluğuna siz bakın 😅. Hastalığımı öğrendiğim tarih 1 Şubat)

Hastane yolundayım. Yine.. kulaklığım takılı yine evreni sorguluyorum. İnsanları, yaşamı, ağaçları, gökyüzünü, binaları her şeyi düşünüyorum. Yaratılış büyülüyor beni. Sonra bu düşüncelerden beni sıyırıp alan başka bir düşünceye geçiyorum. Son zamanlarda hastaneye giderken sürekli aklıma gelmeye başlıyor; hastaneye ilk gidişim. Şimdi ezbere bildiğim bu yolları ilk geçtiğim sabahı düşünüp duruyorum. O gün bitmek bilmeyen yol şimdi çok yakın bir mesafe, o gün bilmediğim yol şimdi evimin yolu gibi gözüm kapalı gideceğim bir yer. 

O gün… ‘1Şubat’; 
                   
Daha dün gece İstanbul’a döndüm. Evde sadece 8 9 saat durdum. Sabah kalkıp direk hastaneye gittik. Yolda giderken telefondan not defterini açıp bir şeyler yazmıştım. Bir şeyler olduğunu biliyordum. Kötü bir şeyler vardı henüz bilmediğim.. yolda ki trafik bitmek bilmiyordu. İlk defa geçiyorum buralardan hiçbir yeri bilmiyorum. Uzun bir trafik sonrasında hastaneye geldik. Mavi büyük binaya girdik çocuk hastalıkları yazıyordu. Hemen giriş katta bir kapının önüne geldik. Hemotoloji-Onkoloji yazıyordu. Ne olduğunu bilmiyordum. Burada ki çocuk cerrahisi bu bölümde mi oluyor diye düşündüm. Çünkü çocuk cerrahisine geldiğimi düşünüyordum. Daha sonra şifreli kapının üzerinde yazan dikkatimi çekti “DUR ! GİRMEK YASAKTIR. İÇERİDE YATAN ÇOCUKLARIMIZA MİKROP BULAŞABİLİR”. Ardından babam kapının yanındaki telefondan içeriyi arayıp Başak hanımı çağırdı. Doktor kapıya geldiginde direk içim ısınmıştı. Gülerek hoş geldin Yağmur dedi bende güldüm konuştum. İçeriye girdik. Duvarlarda çizgi film karakterleri vardı. Acaba hastanenin kreş bölümü varda oraya mı geldik falan diye düşündüm. Ardından bir kapıdan daha geçtik. İçeri de küçük çocuklar vardı. Bir sürü kadın vardı resmen pijamayla dolanıyorlardı. Çocuklar pijamalarla oynuyordu koridorda. Nereye geldik burası ne böyle diye düşünmeden edemedim. Sonra koridorun sonunda sağda bir oda vardı toplantı odası olduğunu düşündüm. Koridorda ilerlerken insanların bize neden baktığını anlamıyordum (şimdiyse sebebini çok iyi biliyorum). Odaya girdik. Bir kaç kişi daha vardı. Başak konuşmaya başladı. “Normalde bu konuşmayı yaparken çocukları içeri almam ama benim kapıda gördüğüm Yağmur güler yüzlü kendinden emin korkmayan bir kızdı. Eğer o kapıda korkak yaprak gibi titreyen bir kızı görseydim bu konuşmaya seni almazdım” dedi. Ne alaka diye düşünmeye devam ediyordum ama yinede gülümseyerek dinlememi bozmuyordum. Konuşmasına devam etti. Kitle diye bildiğim şeye artık tümör diye hitap ediliyordu. Daha sonra konuşmaya devam ederken kemoterapi dedi. Kanser dedi. Kanser ? Kim ? Ben mi ? Ne kanseri be altı üstü bir kitle vardı masum olmadığını bir önceki doktordan bizzat ilk ben duydum, kemoterapi görme ihtimalim olduğunu da direk bana hiçbir açıklama yapmadan pat diye söyledi hepsi tamam ama kanser neydi şimdi kitle tümöre döndü üstüne birde kanser mi eklendi ? ( Açıkçası kemoterapi göreceğimi duyduğum da bile kanser olduğumu düşünmemiştim neden bilmiyorum ama düşünmedim işte. Giresun da doktorun arayıp bu şeyin masum olmadığını söylediğin de de kanser olduğum gelmedi aklıma o yüzden anlam verememiştim. Ailemden kimse de çıkıp kansersin demedi, bilmiyordum. ) O an anlamıştım işte. Kanserdim… İnanır mısınız gülümsememi bozmadım. Gülümseyerek dinlemeye devam ettim. Ama kanser olduğumu anladığım o an varya işte orayı tarif edemem size. Gözlerimin dolmaya başladığını hissediyordum. Gözümden yaş akmasına izin veremezdim. Eğer o gözyaşı akarsa ailemin çok daha kötü olacağını biliyordum. Hiç kimsenin bana üzülmesini buna üzüldüğümü sanmasını istemiyordum. Ama sanırım kabul etmesemde o an biraz üzülmüştüm. Her neyse devam edelim :)) Gözüm dolmaya başlıyordu üstümde ki o sıcaklık gözümden yaş akacak gerginliği yüzünden daha çok artıyordu. Kendimi o kadar çok sıktım ki o an. Yağmur sakın ağlama bundan hiçbir şey yok sen iyisin ağlama gülmeye devam et gülümsemek zorundasın ağlama tut kendini hiçbir şey yok ki bunda sen gayet iyisin güçlüsün! Ağlamadım. Babam hemen yanımda oturuyordu yüzünün kırmızı olduğunu görebiliyordum. Annem duvar gibiydi hislerini belli etmek istemiyordu ama canının yandığını o kadar iyi görüyordum ki yüzünde. Babaannem zaten gözleri dolu doktorun konuşmayı bitirmesine yakın odadan çıkmadan daha ağlamaya başladı. Ah babaanne ne ağlıyorsun. O an sana kızmadım değil. Ben zaten zor tutuyorum kendimi yanımda birisi ağlarsa o zaman daha zor oluyor kendimi tutmak. Konuşmayı bitirdik. Boy-kilo ölçümü yapılması gerekiyordu o zaman ki asistanın adını şuan hatırlamıyorum zaten bir tek o gün görmüştüm onu. Boy ölçümü için odadan dışarı adım attığım o an nefes aldım gözlerimi sildim hemen arkam odaya dönüktü. O an ailemin orada olmamasını istedim. Güçlü gibi yapmak zorunda kalmamak istedim. Onlara sırtımın dönük olduğu o iki saniyede hüngür hüngür ağlamak istedim. İnsanların bana bakmamasını istedim. İki saniye de çok şey istedim. Ama sonra arkamı geri döndüm gülümsememi yüzüme geri taktım. Annem vardı hemen yanımda sonra asistan geldi. Nereye gidiyoruz dedim gülümseyerek. Gülmek zorundaydım. Ağlayamazdım. O gün bir kere bile ağlamadım. Ondan sonraki günlerde ağlamadım. Yapamadım.. saçlarım kesilirken de gülümsedim ben. İnsanlar gençsin atlatırsın dediği zamanda gülümsedim aman korkmuyorum zaten kanser ne tınlamıyorum ben rahat olun dedim. Ben kimseye hissettiklerimi söyleyemedim ki. İçimde olan biteni hiç kimseye anlatıp yansıtamadım. Ben hep gülümsedim! 

Şuan bedenim o günkü sıcaklığında. O gün tuttuğum gözyaşlarımı şuan tutmuyorum. Ama yine gülümsüyorum. Belki şuan benim gibi sulu göz olmuş olanlar vardır. Sizi gülmeye davet ediyorum 😇 Ben Yağmur Pehlivan ağlasam da illa gülerim o yüzden konudan sapmadan o güne geri dönüp toparlıyorum. 🙆

 O gün belimden sıvı alındı yani sanırım bel iğnesi olmuştum. Normalde hastalar bu iğne operasyonundan sonra 3 4 saat yüz üstü yatarken ben kendime gelir gelmez kalkıp tomografi çekilmeye koştum. Tabi ağrısı sonradan çıktı. Daha sonra doktor hemen yarın sabah yeniden biyopsi yapılması gerektiğini söyledi. Fakat bu seferki ameliyatla olacakmış. Yapılan ilk biyopside tümörden alınan parça yeterli değilmiş. O gün üst katta cerrahiye yatışım yapıldı. İlk defa hastaneye yatırıldım. İlk defa ameliyata girecektim. Ve bana kötü hissettiren şey o gün annemin doğum günü olmasıydı. Kendime resmen sövüyordum. Kadının doğum günü ve o benim yüzümden o gün hastaneye yatıyordu bana bakması gerekiyordu. Ertesi sabah ameliyat oldum. Normalde bu şekilde olan ameliyatlarda hastayı akşama taburcu ediyorlarmış. Ama ağrım o kadar çok vardı ki hastaneden çıkamadım. Sürekli ağrı kesici takıldı. Bir sonraki sabah doktorlar vizite geldiğin de ağrılarım devam ediyordu. Hatta doktor bana bence sen rol yapıyorsun minicik bir kesik var bu kadar ağrı yapmaz demişti. Yerimde olsaydın da o ağrıyı hissedebilseydin bakalım dayanabilecek miydin? Doktorlar odadan çıkınca zar zor kalkıp lavaboya gittim. O an bir garip hissetmeye başladım. Tuhaflaşmıştım bir şey olacaktı hissediyordum. Zar zor ellerimi yıkadım lavaboya yaslandım bir iki saniye sonra annemin koluna girdim odaya geri dönüyorduk. Koridorda daha da kötü olmuştum. Yürüyemiyordum sanki yer ayaklarımın altından çekiliyordu. Bedenim alevler içinde yanıyordu adeta. Karşıda sekreter vardı. ( Size bunu anlatmadım ama adam tam fiyasko aşırı komedi yani. Gelene gidene canım cicim kızlarla sürekli bir yakın temas sürekli bir resim çekilme falan. Habire gülüyor annemle bazen adama bakıp sonra birbirimize bakıp gülüyorduk hatta ameliyattan sonra bile bir ara onun yüzünden gülmüştüm. Her neyse devam edelim) adam yine gülüyordu. Annem iyi değilim ben dedim. Artık adamın yüzünü seçemiyordum. Bulanıklaşmaya başladı her şey. “Anne ben gidiyorum.” dedim ve ekran kapandı…
                    </Text>
                </View>
               
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create(
    {
        profileNameStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            //fontFamily: 'Comic Sans MS',
        },
        profileStroyStyle: {
            fontSize: 15,
            //fontFamily: 'Comic Sans MS',
        },
        mystil: {
            backgroundColor: 'red'
        },
        container: {
            marginTop: 55,
            marginBottom: 55,
            flex: 1,
            //justifyContent: 'center',
            //alignItems: 'center',
            backgroundColor: 'white'
        },
        navBar: {
            height: 65,
            backgroundColor: 'white',
            elevation: 3
        },
        subContainerStyle: {
            borderBottomWidth: 1,
            padding: 5,
            backgroundColor: '#fff',
            justifyContent: 'center',
            flexDirection: 'row',
            borderColor: '#ddd',
            position: 'relative'
      },
      inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
      },
    }
);

export default ProfileFriends;
