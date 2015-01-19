/**
 * Created by leo on 1/18/15.
 */
/**
 * Track selection changes
 * **/
trackeSelectionsChangesGlobally();

var programMashine = "Mz5daHozMlm";
var dataElementUIdsMashine = ['','czEbKERfS9g','f43vTAWaiTs','Zv0PLqRHxKN','x00TtXga6fq','meIu7yMJD4j','Iq4pLwvWi7X'];
var headersMashine = ['','Aina ya Mashine</br>/ Vifaa </br>(i)','Nzima Binafsi (ii)','Nzima kikundi (iii)','Mbovu Binafsi (iv)','Mbovu kikundi','Sababu ya Ubovu </br>wa Masihne/Kifaa (vi)'],
    columConfigurationsMashine= [{readOnly: true},{type: 'text'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'text'}];
dataEventResource("parent_mashine_container","mashine_container",programMashine,window.orgUnit,window.dataSet,window.period,dataElementUIdsMashine,headersMashine,columConfigurationsMashine);




var programTrecta = "xf0i4rI7MZ2";
var dataElementUIdstrecta= ['','oJNdi45E50h','N3pjDn1fR1h','WRBkZLbpEd5'];
var headersTrecta = ['','Aina ya Zana','Nzima Binafsi','Nzima Kikundi'],
    columConfigurationsTrecta= [{readOnly: true},{type: 'text'},{type: 'numeric'},{type: 'numeric'}];
dataEventResource("parent_trecta_container","trecta_container",programTrecta,window.orgUnit,window.dataSet,window.period,dataElementUIdstrecta,headersTrecta,columConfigurationsTrecta);




var programWanyamakazi = "NA1ZBJQral2";
var dataElementUIdswanyamakazi= ['','oJNdi45E50h','WRBkZLbpEd5','N3pjDn1fR1h'];
var headersWanyamakazi = ['','Aina ya Zana','Nzima Binafsi','Nzima Kikundi'],
    columConfigurationsWanyamakazi= [{readOnly: true},{type: 'text'},{type: 'numeric'},{type: 'numeric'}];
dataEventResource("parent_wanyamakazi_container","wanyamakazi_container",programWanyamakazi,window.orgUnit,window.dataSet,window.period,dataElementUIdswanyamakazi,headersWanyamakazi,columConfigurationsWanyamakazi);




var programMmomonyoko = "SefQmQrUQjQ";
var dataElementUIdsmmomonyoko = ['','r8KABLTN2Xw','nWuqBQxjRLa','lueYliTfGAz','ODweTr4uyfV','lc6DqdaH13G','ZH0t98IGHTL'];
var headersMmomonyoko = ['','Aina ya Mmomonyoko(i)','Jina la kijiji/Vijiji vilivyohusika','Eneo lililohalibiwa (ha)','Mbinu zilizo tumika','Eneo lililo karabatiwa (ha)','Maelezo'],
    affectedMmomonyoko = ['','Gully erosion','Rill erosion','Sheet erosion','Others'];
    mbinuMmomonyoko = ['','Others'];
columConfigurationsMmomonyoko= [{readOnly: true},{type: 'dropdown',source: mbinuMmomonyoko },{type: 'text'},{type: 'numeric'},{type: 'dropdown',source: mbinuMmomonyoko },{type: 'numeric'},{type: 'text'}];
dataEventResource("parent_mmomonyoko_container","mmomonyoko_container",programMmomonyoko,window.orgUnit,window.dataSet,window.period,dataElementUIdsmmomonyoko ,headersMmomonyoko,columConfigurationsMmomonyoko);



var programMikiono = "Q76nDF7ufkZ";
var dataElementUIdsmikiono= ['','kOV8VM2T50O','CQG41gjEMqt'];
var headersMikiono = ['','Jina la Kifaa','Idadi'],
    columConfigurationsMikiono= [{readOnly: true},{type: 'text'},{type: 'numeric'}];
dataEventResource("parent_mikiono_container","mikiono_container",programMikiono,window.orgUnit,window.dataSet,window.period,dataElementUIdsmikiono,headersMikiono,columConfigurationsMikiono);




var programKusindika = "KtDerZdqu3U";
var dataElementUIdskusindika= ['','czEbKERfS9g','f43vTAWaiTs','Zv0PLqRHxKN','x00TtXga6fq','meIu7yMJD4j','Iq4pLwvWi7X'];
var headersKusindika = ['','Aina ya mashine (i)','Nzima Binafsi (ii)','Nzima kikundi (iii)','Mbovu Binafsi (iv)','Mbovu kikundi(v)','Sababu ya ubovu wa mashine'],
    columConfigurationsKusindika= [{readOnly: true},{type: 'text'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'text'}];
dataEventResource("parent_kusindika_container","kusindika_container",programKusindika,window.orgUnit,window.dataSet,window.period,dataElementUIdskusindika,headersKusindika,columConfigurationsKusindika);


var programMbolea = "DDIRnsPWn8y";
var dataElementUIdsmbolea= ['','AujxvifiH40','ZFJ9w1Digwj','YeCExOmJlhA','ZH0t98IGHTL'];
var headersmbolea = ['','Aina ya mbolea','Mahitaji kwa mwaka (tani)','Matumizi kwa mwaka (tani)','Maelezo'],
    columConfigurationsMbolea= [{readOnly: true},{type: 'text'},{type: 'numeric'},{type: 'numeric'},{type: 'text'}];
dataEventResource("parent_mbolea_container","mbolea_container",programMbolea,window.orgUnit,window.dataSet,window.period,dataElementUIdsmbolea,headersmbolea,columConfigurationsMbolea);


var programViatilifu = "UxgM8OXpaDp";
var dataElementUIdsviatilifu= ['','vYnFmCnuONc','xyXyI82OSNc','Yhca7RcnK1h','YeCExOmJlhA','ZH0t98IGHTL'];
var headersViatilifu = ['','Aina ya kiatilifu/kiuadudu','Jina la kiatilifu/kiuadudu','Kipimo (kg/lita)','Matumizi kwa mwaka','Maelezo'],
    columConfigurationsViatilifu= [{readOnly: true},{type: 'text'},{type: 'text'},{type: 'text'},{type: 'numeric'},{type: 'text'}];
dataEventResource("parent_viatilifu_container","viatilifu_container",programViatilifu,window.orgUnit,window.dataSet,window.period,dataElementUIdsviatilifu,headersViatilifu,columConfigurationsViatilifu);


var programMiundombinu = "SM9CIXDVVT2";
var dataElementUIdsmiundombinu= ['','gzWNLjqnPlY','a9DPtnEbqcd','VcrxkAGYwzO','KwYVy5TE6GH','fW08p20nmQa','Xq03rwYWvxT'];
var headersMiundombinu = ['','Aina ya miundombinu','Nzima','Mbovu','Mahitaji halisi','Idadi ya zilizosajiliwa','Sababu ya ubovu wa miundombinu'],
    columConfigurationsMiundombinu= [{readOnly: true},{type: 'text'},{type: 'text'},{type: 'text'},{type: 'numeric'},{type: 'text'},{type: 'text'}];
dataEventResource("parent_miundombinu_container","miundombinu_container",programMiundombinu,window.orgUnit,window.dataSet,window.period,dataElementUIdsmiundombinu,headersMiundombinu,columConfigurationsMiundombinu);


var programMasalia = "PflBYSkhjQd";
var dataElementUIdsmasalia= ['','FwKVhKccqqb','Wpo0mYdaUyJ','NozgaNLyz4n','ZH0t98IGHTL'];
var headersMasalia = ['','Aina ya Zao','Idadi ya marobota/bandali(bundle)</br> yaliyozalishwa (Hei*)','Eneo la mashamba yaliyotumika</br> kwa malisho (grazed in situ)(ha)','Maelezo'],
    masaliaMazao = ['','Mahindi	Mahindi','Mpunga','Mtama','Uwele','Ulezi','Ngano','Shayiri','Mihogo','Viazi vitamu','Viazi mviringo','Viazi vikuu','Gimbi','Pamba','Tumbaku','Kahawa','Chai','Pareto','Kakao','Mpira',
        'Miwati','Miwa','Jute','Katani','Korosho','Alizeti','Ufuta','Karanga','Mawese','Nazi','Maharage ya Soya','Mbegu za nyonyo','Mibono','Kunde','Mbaazi','Choroko','Njegere','Dengu','Njugu mawe',
        'Maharage','Tangawizi','Pilipili manga','Giligilani','Mdalasini','Binzari','Vanila','Pilipili kali','Karafuu','Vitunguu swaumu','Iliki','Paprika',
        'Matango','Uy\'oga','Cauliflower','Kabichi','Mchicha','Spinachi','Kabichi china(Chinese cabbage)','Nyanya','Biringanya','Vitunguu','Pilipili hoho','Karoti',
        'Nyanya chungu','Mnafu','Figiri','Leek','Saladi','Bamia','Ndizi mbivu (sweet banana)','Ndizi mbichi (plantain)','Embe','Papai','Chungwa','Chenza','Pera',
        'Apple','Nanasi','Parachichi','Tikiti maji','Limau','Ndimu','Tunda damu','Mapeasi','Mapensheni(Passion fluit)','Waridi(Rose)','Chrysanthemum','Camation',
        'Aster','Gypsophylla','Ginger rose','Helianthus','Choya(Rozella)','Others'];
columConfigurationsMasalia= [{readOnly: true},{type: 'dropdown',source: masaliaMazao},{type: 'numeric'},{type: 'numeric'},{type: 'text'}];
dataEventResource("parent_masalia_container","masalia_container",programMasalia,window.orgUnit,window.dataSet,window.period,dataElementUIdsmasalia,headersMasalia,columConfigurationsMasalia);


var programRadio = "jrFxXErUPLX";
var dataElementUIdsradio= ['','Qwgg6lkNJVW','BH5qcI7St1k'];
var headersRadio = ['','Kituo cha Radio kinachopatikana','Idadi ya vijiji vinavyofikiwa na huduma'],
    columConfigurationsRadio= [{readOnly: true},{type: 'text'},{type: 'numeric'}];
dataEventResource("parent_radio_container","radio_container",programRadio,window.orgUnit,window.dataSet,window.period,dataElementUIdsradio,headersRadio,columConfigurationsRadio);



var programTV = "xTqU38obaLD";
var dataElementUIdsTV= ['','AKg44uTtvnw','BH5qcI7St1k'];
var headersTV = ['','Kituo cha TV kinachopatikana','Idadi ya vijiji vinavyofikiwa na huduma'],
    columConfigurationsTV= [{readOnly: true},{type: 'text'},{type: 'numeric'}];
dataEventResource("parent_TV_container","TV_container",programTV,window.orgUnit,window.dataSet,window.period,dataElementUIdsTV,headersTV,columConfigurationsTV);

var programVipindi = "XhMpk7WN1b3";
var dataElementUIdsVipindi= ['','exs4kovdDhl','qJzFKG1SCqR','lehYQHPxVt0','W23t2V1xFJR'];
var headersVipindi = ['','Jina la chombo cha habari','Jina la kipindi','Mara ngapi kwa wiki','Aina ya taarifa'],
    columConfigurationsVipindi= [{readOnly: true},{type: 'text'},{type: 'text'},{type: 'numeric'},{type: 'text'}];
dataEventResource("parent_vipindi_container","vipindi_container",programVipindi,window.orgUnit,window.dataSet,window.period,dataElementUIdsVipindi,headersVipindi,columConfigurationsVipindi);


var programSimu = "usUPzGFRpTl";
var dataElementUIdsSimu= ['','f9SHAfie0d2','ua8t910KDwq'];
var headersSimu = ['','Jina la kampuni','Idadi ya vijiji vinavyofikiwa na huduma'],
    columConfigurationsSimu= [{readOnly: true},{type: 'text'},{type: 'numeric'}];
dataEventResource("parent_simu_container","simu_container",programSimu,window.orgUnit,window.dataSet,window.period,dataElementUIdsSimu,headersSimu,columConfigurationsSimu);



/** if changed Administrative unnit**/
var AdminUnit = function(){
    var org = [];
    var i = 0;
    $("#orgUnitTree ul li").on("click",function(event){
        event.stopPropagation();
        org[i] = $(this).attr("id");
        if(i==0){
            window.orgUnit = (org[0].split("orgUnit"))[1];
            window.Programs = [];
            dataEventResource("parent_mashine_container","mashine_container",programMashine,window.orgUnit,window.dataSet,window.period,dataElementUIdsMashine,headersMashine,columConfigurationsMashine);
            dataEventResource("parent_trecta_container","trecta_container",programTrecta,window.orgUnit,window.dataSet,window.period,dataElementUIdstrecta,headersTrecta,columConfigurationsTrecta);
            dataEventResource("parent_wanyamakazi_container","wanyamakazi_container",programWanyamakazi,window.orgUnit,window.dataSet,window.period,dataElementUIdswanyamakazi,headersWanyamakazi,columConfigurationsWanyamakazi);
            dataEventResource("parent_mmomonyoko_container","mmomonyoko_container",programMmomonyoko,window.orgUnit,window.dataSet,window.period,dataElementUIdsmmomonyoko ,headersMmomonyoko,columConfigurationsMmomonyoko);
            dataEventResource("parent_mikiono_container","mikiono_container",programMikiono,window.orgUnit,window.dataSet,window.period,dataElementUIdsmikiono,headersMikiono,columConfigurationsMikiono);
            dataEventResource("parent_kusindika_container","kusindika_container",programKusindika,window.orgUnit,window.dataSet,window.period,dataElementUIdskusindika,headersKusindika,columConfigurationsKusindika);
            dataEventResource("parent_mbolea_container","mbolea_container",programMbolea,window.orgUnit,window.dataSet,window.period,dataElementUIdsmbolea,headersmbolea,columConfigurationsMbolea);
            dataEventResource("parent_viatilifu_container","viatilifu_container",programViatilifu,window.orgUnit,window.dataSet,window.period,dataElementUIdsviatilifu,headersViatilifu,columConfigurationsViatilifu);
            dataEventResource("parent_miundombinu_container","miundombinu_container",programMiundombinu,window.orgUnit,window.dataSet,window.period,dataElementUIdsmiundombinu,headersMiundombinu,columConfigurationsMiundombinu);
            dataEventResource("parent_masalia_container","masalia_container",programMasalia,window.orgUnit,window.dataSet,window.period,dataElementUIdsmasalia,headersMasalia,columConfigurationsMasalia);
            dataEventResource("parent_radio_container","radio_container",programRadio,window.orgUnit,window.dataSet,window.period,dataElementUIdsradio,headersRadio,columConfigurationsRadio);
            dataEventResource("parent_TV_container","TV_container",programTV,window.orgUnit,window.dataSet,window.period,dataElementUIdsTV,headersTV,columConfigurationsTV);
            dataEventResource("parent_vipindi_container","vipindi_container",programVipindi,window.orgUnit,window.dataSet,window.period,dataElementUIdsVipindi,headersVipindi,columConfigurationsVipindi);
            dataEventResource("parent_simu_container","simu_container",programSimu,window.orgUnit,window.dataSet,window.period,dataElementUIdsSimu,headersSimu,columConfigurationsSimu);
            /***/
        }else{

        }
        i++;

    });
}

AdminUnit();
/** if Changed dataset**/
var DataSet = function(){
    $("#selectedDataSetId").on("change",function(){
        window.dataSet = $(this).val();
        dataEventResource("parent_mashine_container","mashine_container",programMashine,window.orgUnit,window.dataSet,window.period,dataElementUIdsMashine,headersMashine,columConfigurationsMashine);
        dataEventResource("parent_trecta_container","trecta_container",programTrecta,window.orgUnit,window.dataSet,window.period,dataElementUIdstrecta,headersTrecta,columConfigurationsTrecta);
        dataEventResource("parent_wanyamakazi_container","wanyamakazi_container",programWanyamakazi,window.orgUnit,window.dataSet,window.period,dataElementUIdswanyamakazi,headersWanyamakazi,columConfigurationsWanyamakazi);
        dataEventResource("parent_mmomonyoko_container","mmomonyoko_container",programMmomonyoko,window.orgUnit,window.dataSet,window.period,dataElementUIdsmmomonyoko ,headersMmomonyoko,columConfigurationsMmomonyoko);
        dataEventResource("parent_mikiono_container","mikiono_container",programMikiono,window.orgUnit,window.dataSet,window.period,dataElementUIdsmikiono,headersMikiono,columConfigurationsMikiono);
        dataEventResource("parent_kusindika_container","kusindika_container",programKusindika,window.orgUnit,window.dataSet,window.period,dataElementUIdskusindika,headersKusindika,columConfigurationsKusindika);
        dataEventResource("parent_mbolea_container","mbolea_container",programMbolea,window.orgUnit,window.dataSet,window.period,dataElementUIdsmbolea,headersmbolea,columConfigurationsMbolea);
        dataEventResource("parent_viatilifu_container","viatilifu_container",programViatilifu,window.orgUnit,window.dataSet,window.period,dataElementUIdsviatilifu,headersViatilifu,columConfigurationsViatilifu);
        dataEventResource("parent_miundombinu_container","miundombinu_container",programMiundombinu,window.orgUnit,window.dataSet,window.period,dataElementUIdsmiundombinu,headersMiundombinu,columConfigurationsMiundombinu);
        dataEventResource("parent_masalia_container","masalia_container",programMasalia,window.orgUnit,window.dataSet,window.period,dataElementUIdsmasalia,headersMasalia,columConfigurationsMasalia);
        dataEventResource("parent_radio_container","radio_container",programRadio,window.orgUnit,window.dataSet,window.period,dataElementUIdsradio,headersRadio,columConfigurationsRadio);
        dataEventResource("parent_TV_container","TV_container",programTV,window.orgUnit,window.dataSet,window.period,dataElementUIdsTV,headersTV,columConfigurationsTV);
        dataEventResource("parent_vipindi_container","vipindi_container",programVipindi,window.orgUnit,window.dataSet,window.period,dataElementUIdsVipindi,headersVipindi,columConfigurationsVipindi);
        dataEventResource("parent_simu_container","simu_container",programSimu,window.orgUnit,window.dataSet,window.period,dataElementUIdsSimu,headersSimu,columConfigurationsSimu);
        /***/
    });
}
DataSet();
/** if changed period **/
var Period = function(){
    $("#selectedPeriodId").on("change",function(){
        window.period = $(this).val();
        dataEventResource("parent_mashine_container","mashine_container",programMashine,window.orgUnit,window.dataSet,window.period,dataElementUIdsMashine,headersMashine,columConfigurationsMashine);
        dataEventResource("parent_trecta_container","trecta_container",programTrecta,window.orgUnit,window.dataSet,window.period,dataElementUIdstrecta,headersTrecta,columConfigurationsTrecta);
        dataEventResource("parent_wanyamakazi_container","wanyamakazi_container",programWanyamakazi,window.orgUnit,window.dataSet,window.period,dataElementUIdswanyamakazi,headersWanyamakazi,columConfigurationsWanyamakazi);
        dataEventResource("parent_mmomonyoko_container","mmomonyoko_container",programMmomonyoko,window.orgUnit,window.dataSet,window.period,dataElementUIdsmmomonyoko ,headersMmomonyoko,columConfigurationsMmomonyoko);
        dataEventResource("parent_mikiono_container","mikiono_container",programMikiono,window.orgUnit,window.dataSet,window.period,dataElementUIdsmikiono,headersMikiono,columConfigurationsMikiono);
        dataEventResource("parent_kusindika_container","kusindika_container",programKusindika,window.orgUnit,window.dataSet,window.period,dataElementUIdskusindika,headersKusindika,columConfigurationsKusindika);
        dataEventResource("parent_mbolea_container","mbolea_container",programMbolea,window.orgUnit,window.dataSet,window.period,dataElementUIdsmbolea,headersmbolea,columConfigurationsMbolea);
        dataEventResource("parent_viatilifu_container","viatilifu_container",programViatilifu,window.orgUnit,window.dataSet,window.period,dataElementUIdsviatilifu,headersViatilifu,columConfigurationsViatilifu);
        dataEventResource("parent_miundombinu_container","miundombinu_container",programMiundombinu,window.orgUnit,window.dataSet,window.period,dataElementUIdsmiundombinu,headersMiundombinu,columConfigurationsMiundombinu);
        dataEventResource("parent_masalia_container","masalia_container",programMasalia,window.orgUnit,window.dataSet,window.period,dataElementUIdsmasalia,headersMasalia,columConfigurationsMasalia);
        dataEventResource("parent_radio_container","radio_container",programRadio,window.orgUnit,window.dataSet,window.period,dataElementUIdsradio,headersRadio,columConfigurationsRadio);
        dataEventResource("parent_TV_container","TV_container",programTV,window.orgUnit,window.dataSet,window.period,dataElementUIdsTV,headersTV,columConfigurationsTV);
        dataEventResource("parent_vipindi_container","vipindi_container",programVipindi,window.orgUnit,window.dataSet,window.period,dataElementUIdsVipindi,headersVipindi,columConfigurationsVipindi);
        dataEventResource("parent_simu_container","simu_container",programSimu,window.orgUnit,window.dataSet,window.period,dataElementUIdsSimu,headersSimu,columConfigurationsSimu);
        /***/
    });
}

Period();
