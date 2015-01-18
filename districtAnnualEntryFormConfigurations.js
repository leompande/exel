/**
 * Created by leo on 1/18/15.
 */
/**
 * Track selection changes
 * **/
trackeSelectionsChangesGlobally();

var programExtensions = "JtnHRSFhC5e";
var dataElementUIdsExtensions = ['','uEtHzkz12Mh','ua8t910KDwq','gMnAGCPi4oc','cuTNA7qZYUM','e2WtxFQVnve','ZH0t98IGHTL'];
var headersExtensions = ['','Name of Service Provider(i)','Type of Service Provider(ii)','Nzima kikundi (iii)','Type of Services(iii)','Number of Villages Services by Providers(iv)'],
    columConfigurationsExtensions= [{readOnly: true},{type: 'numeric'},{type: 'text'},{type: 'text'},{type: 'numeric'}];
dataEventResource("parent_mashine_container","mashine_container",programExtensions,window.orgUnit,window.dataSet,window.period,dataElementUIdsExtensions,headersExtensions,columConfigurationsExtensions);




var programPopulation = "JtnHRSFhC5e";
var dataElementUIdspopulation= ['','uEtHzkz12Mh','ua8t910KDwq','gMnAGCPi4oc','uEtHzkz12Mh','ua8t910KDwq','gMnAGCPi4oc','uEtHzkz12Mh','ua8t910KDwq','gMnAGCPi4oc'];
var headersPopulation = ['','Name of the Farm/Farmer (i)','Type of Ownership (ii)','Registration Number (iii)','Number of Livestock </br>Cattle(iv)','Number of Livestock</br>Sheet(v) ','Number of Livestock</br>Pigs(vii) ','Number of Livestock</br>Layers (viii) ','Number of Livestock Broillers (ix)','Remarks (x)'],
   columConfigurationsPopulation= [{readOnly: true},{type: 'text'},{type: 'text'},{type: 'text'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'}];
dataEventResource("parent_population_container","population_container",programPopulation,window.orgUnit,window.dataSet,window.period,dataElementUIdspopulation,headersPopulation,columConfigurationsPopulation);




var programWanyamakazi = "JtnHRSFhC5e";
var dataElementUIdswanyamakazi= ['','uEtHzkz12Mh','ua8t910KDwq','gMnAGCPi4oc'];
var headersWanyamakazi = ['','Aina ya Zana','Nzima Binafsi','Nzima Kikundi'],
    affectedWanyamakazi = ['','Mahindi	Mahindi','Mpunga','Mtama','Uwele','Ulezi','Ngano','Shayiri','Mihogo','Viazi vitamu','Viazi mviringo','Viazi vikuu','Gimbi','Pamba','Tumbaku','Kahawa','Chai','Pareto','Kakao','Mpira',
        'Miwati','Miwa','Jute','Katani','Korosho','Alizeti','Ufuta','Karanga','Mawese','Nazi','Maharage ya Soya','Mbegu za nyonyo','Mibono','Kunde','Mbaazi','Choroko','Njegere','Dengu','Njugu mawe',
        'Maharage','Tangawizi','Pilipili manga','Giligilani','Mdalasini','Binzari','Vanila','Pilipili kali','Karafuu','Vitunguu swaumu','Iliki','Paprika',
        'Matango','Uy\'oga','Cauliflower','Kabichi','Mchicha','Spinachi','Kabichi china(Chinese cabbage)','Nyanya','Biringanya','Vitunguu','Pilipili hoho','Karoti',
        'Nyanya chungu','Mnafu','Figiri','Leek','Saladi','Bamia','Ndizi mbivu (sweet banana)','Ndizi mbichi (plantain)','Embe','Papai','Chungwa','Chenza','Pera',
        'Apple','Nanasi','Parachichi','Tikiti maji','Limau','Ndimu','Tunda damu','Mapeasi','Mapensheni(Passion fluit)','Waridi(Rose)','Chrysanthemum','Camation',
        'Aster','Gypsophylla','Ginger rose','Helianthus','Choya(Rozella)','Others'];
columConfigurationsWanyamakazi= [{readOnly: true},{type: 'text'},{type: 'numeric'},{type: 'numeric'}];
dataEventResource("parent_wanyamakazi_container","wanyamakazi_container",programWanyamakazi,window.orgUnit,window.dataSet,window.period,dataElementUIdswanyamakazi,headersWanyamakazi,columConfigurationsWanyamakazi);




var programMmomonyoko = "JtnHRSFhC5e";
var dataElementUIdsmmomonyoko = ['','uEtHzkz12Mh','ua8t910KDwq','gMnAGCPi4oc','cuTNA7qZYUM','e2WtxFQVnve','ZH0t98IGHTL'];
var headersMmomonyoko = ['','Aina ya Mmomonyoko(i)','Jina la kijiji/Vijiji vilivyohusika','Eneo lililohalibiwa (ha)','Mbinu zilizo tumika','Eneo lililo karabatiwa (ha)','Maelezo'],
    affectedMmomonyoko = ['','Mahindi	Mahindi','Mpunga','Mtama','Uwele','Ulezi','Ngano','Shayiri','Mihogo','Viazi vitamu','Viazi mviringo','Viazi vikuu','Gimbi','Pamba','Tumbaku','Kahawa','Chai','Pareto','Kakao','Mpira',
        'Miwati','Miwa','Jute','Katani','Korosho','Alizeti','Ufuta','Karanga','Mawese','Nazi','Maharage ya Soya','Mbegu za nyonyo','Mibono','Kunde','Mbaazi','Choroko','Njegere','Dengu','Njugu mawe',
        'Maharage','Tangawizi','Pilipili manga','Giligilani','Mdalasini','Binzari','Vanila','Pilipili kali','Karafuu','Vitunguu swaumu','Iliki','Paprika',
        'Matango','Uy\'oga','Cauliflower','Kabichi','Mchicha','Spinachi','Kabichi china(Chinese cabbage)','Nyanya','Biringanya','Vitunguu','Pilipili hoho','Karoti',
        'Nyanya chungu','Mnafu','Figiri','Leek','Saladi','Bamia','Ndizi mbivu (sweet banana)','Ndizi mbichi (plantain)','Embe','Papai','Chungwa','Chenza','Pera',
        'Apple','Nanasi','Parachichi','Tikiti maji','Limau','Ndimu','Tunda damu','Mapeasi','Mapensheni(Passion fluit)','Waridi(Rose)','Chrysanthemum','Camation',
        'Aster','Gypsophylla','Ginger rose','Helianthus','Choya(Rozella)','Others'];
columConfigurationsMmomonyoko= [{readOnly: true},{type: 'dropdown',source: affectedMmomonyoko },{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'}];
dataEventResource("parent_mmomonyoko_container","mmomonyoko_container",programMmomonyoko,window.orgUnit,window.dataSet,window.period,dataElementUIdsmmomonyoko ,headersMmomonyoko,columConfigurationsMmomonyoko);



var programMikiono = "JtnHRSFhC5e";
var dataElementUIdsmikiono= ['','uEtHzkz12Mh','ua8t910KDwq'];
var headersMikiono = ['','Jina la Kifaa','Idadi'],
    columConfigurationsMikiono= [{readOnly: true},{type: 'text'},{type: 'numeric'}];
dataEventResource("parent_mikiono_container","mikiono_container",programMikiono,window.orgUnit,window.dataSet,window.period,dataElementUIdsmikiono,headersMikiono,columConfigurationsMikiono);




var programKusindika = "JtnHRSFhC5e";
var dataElementUIdskusindika= ['','uEtHzkz12Mh','ua8t910KDwq','uEtHzkz12Mh','ua8t910KDwq','uEtHzkz12Mh','ua8t910KDwq'];
var headersKusindika = ['','Aina ya mashine (i)','Nzima Binafsi (ii)','Nzima kikundi (iii)','Mbovu Binafsi (iv)','Mbovu kikundi(v)','Sababu ya ubovu wa mashine'],
    columConfigurationsKusindika= [{readOnly: true},{type: 'text'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'text'}];
dataEventResource("parent_kusindika_container","kusindika_container",programKusindika,window.orgUnit,window.dataSet,window.period,dataElementUIdskusindika,headersKusindika,columConfigurationsKusindika);


var programMbolea = "JtnHRSFhC5e";
var dataElementUIdsmbolea= ['','uEtHzkz12Mh','ua8t910KDwq'];
var headersmbolea = ['','Aina ya mbolea','Mahitaji kwa mwaka (tani)','Matumizi kwa mwaka (tani)','Maelezo'],
    columConfigurationsMbolea= [{readOnly: true},{type: 'text'},{type: 'numeric'},{type: 'numeric'},{type: 'text'}];
dataEventResource("parent_mbolea_container","mbolea_container",programMbolea,window.orgUnit,window.dataSet,window.period,dataElementUIdsmbolea,headersmbolea,columConfigurationsMbolea);


var programViatilifu = "JtnHRSFhC5e";
var dataElementUIdsviatilifu= ['','uEtHzkz12Mh','ua8t910KDwq','uEtHzkz12Mh','ua8t910KDwq','uEtHzkz12Mh'];
var headersViatilifu = ['','Aina ya kiatilifu/kiuadudu','Jina la kiatilifu/kiuadudu','Kipimo (kg/lita)','Matumizi kwa mwaka','Maelezo'],
    columConfigurationsViatilifu= [{readOnly: true},{type: 'text'},{type: 'text'},{type: 'text'},{type: 'text'},{type: 'text'}];
dataEventResource("parent_viatilifu_container","viatilifu_container",programViatilifu,window.orgUnit,window.dataSet,window.period,dataElementUIdsviatilifu,headersViatilifu,columConfigurationsViatilifu);


var programMiundombinu = "JtnHRSFhC5e";
var dataElementUIdsmiundombinu= ['','uEtHzkz12Mh','ua8t910KDwq','uEtHzkz12Mh','ua8t910KDwq','uEtHzkz12Mh'];
var headersMiundombinu = ['','Aina ya miundombinu','Nzima','Mbovu','Mahitaji halisi','Idadi ya zilizosajiliwa','Sababu ya ubovu wa miundombinu'],
    columConfigurationsMiundombinu= [{readOnly: true},{type: 'text'},{type: 'text'},{type: 'text'},{type: 'numeric'},{type: 'text'},{type: 'text'}];
dataEventResource("parent_miundombinu_container","miundombinu_container",programMiundombinu,window.orgUnit,window.dataSet,window.period,dataElementUIdsmiundombinu,headersMiundombinu,columConfigurationsMiundombinu);


var programMasalia = "JtnHRSFhC5e";
var dataElementUIdsmasalia= ['','uEtHzkz12Mh','ua8t910KDwq','uEtHzkz12Mh','ua8t910KDwq','uEtHzkz12Mh'];
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


var programRadio = "JtnHRSFhC5e";
var dataElementUIdsradio= ['','uEtHzkz12Mh','ua8t910KDwq'];
var headersRadio = ['','Kituo cha TV kinachopatikana','Idadi ya vijiji vinavyofikiwa na huduma'],
    columConfigurationsRadio= [{readOnly: true},{type: 'text'},{type: 'numeric'}];
dataEventResource("parent_radio_container","radio_container",programRadio,window.orgUnit,window.dataSet,window.period,dataElementUIdsradio,headersRadio,columConfigurationsRadio);



var programTV = "JtnHRSFhC5e";
var dataElementUIdsTV= ['','uEtHzkz12Mh','ua8t910KDwq'];
var headersTV = ['','Kituo cha TV kinachopatikana','Idadi ya vijiji vinavyofikiwa na huduma'],
    columConfigurationsTV= [{readOnly: true},{type: 'text'},{type: 'numeric'}];
dataEventResource("parent_TV_container","TV_container",programTV,window.orgUnit,window.dataSet,window.period,dataElementUIdsTV,headersTV,columConfigurationsTV);

var programVipindi = "JtnHRSFhC5e";
var dataElementUIdsVipindi= ['','uEtHzkz12Mh','ua8t910KDwq','ua8t910KDwq','ua8t910KDwq'];
var headersVipindi = ['','Jina la chombo cha habari','Jina la kipindi','Mara ngapi kwa wiki','Aina ya taarifa'],
    columConfigurationsVipindi= [{readOnly: true},{type: 'text'},{type: 'text'},{type: 'numeric'},{type: 'text'}];
dataEventResource("parent_vipindi_container","vipindi_container",programVipindi,window.orgUnit,window.dataSet,window.period,dataElementUIdsVipindi,headersVipindi,columConfigurationsVipindi);


var programSimu = "JtnHRSFhC5e";
var dataElementUIdsSimu= ['','uEtHzkz12Mh','ua8t910KDwq'];
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
            dataEventResource("parent_kemikali_container","kemikali_container",programKemikali,window.orgUnit,window.dataSet,window.period,dataElementUIdsKemikali,headersKemikali,columConfigurationsBiologia);
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
        dataEventResource("parent_kemikali_container","kemikali_container",programKemikali,window.orgUnit,window.dataSet,window.period,dataElementUIdsKemikali,headersKemikali,columConfigurationsBiologia);
        /***/
    });
}
DataSet();
/** if changed period **/
var Period = function(){
    $("#selectedPeriodId").on("change",function(){
        window.period = $(this).val();
        dataEventResource("parent_kemikali_container","kemikali_container",programKemikali,window.orgUnit,window.dataSet,window.period,dataElementUIdsKemikali,headersKemikali,columConfigurationsBiologia);
        /***/
    });
}

Period();
