/**
 * Created by leo on 1/17/15.
 */

/**
 * Track selection changes
 * **/
trackeSelectionsChangesGlobally();

var programKemikali = "ON9LwVMbryZ";
var dataElementUIdsKemikali = ['','uEtHzkz12Mh','ua8t910KDwq','gMnAGCPi4oc','cuTNA7qZYUM','e2WtxFQVnve','ZH0t98IGHTL'];
var headersKemikali = ['','Aina ya ugonjwa </br>/ kisumbufu </br>(i)','Aina ya zao','Njia zilizo tumika','Eneo lililodhibitiwa(ha)','Kaya zilizo husika','Maelezo'],
    deseaseName = ['','American ball worm','Aphids','Amyworm','Bean flies','Bean Flower Thrips','Bean leaf beetle','Bean looper','Black bean aphid','Bruchids','Caterpillers',
        'Corn earworms','Cut worm','Flower beetles','Foliage beetles','Giant coreid bug','Giant beetle','Green aphids','Green leaf hoppers','Green stink bug','Harvester termites',
        'Helmet bug','Khapra beetle','Larger grainborer','Leafhoppers','Legume bean pod borer','Locust (red and desert)','Mole crickets','Pea blue butterfly','Pod beetle borer',
        'Pod sucking bug','Pollen beetle','Sitophillus spp','Spiny brown bugs','Stalk borer','Stem borer','Sweet potato moth','Termites','Thrips','Weevils','White flies',
        'Altemaria leaf spot','Angular leaf spot','Anthracnose','Aspergillus ear rot','Black sigatoka','Blue mold','Brown leaf spot','Cercospora leaf spot','Cob rot','Damping off',
        'Down mildew','Early rot of maize','Early blight','Fusarium kernel of maize','Gray leaf spot','Gray mold','Green mold','Head smut','Late blight','Leaf blight','Leaf rust',
        'Panama disease','','Pod blight	','Powdery mildew','Root and foot rot','Rust','Scab','Shealth brown rot','Smut','Stalk rot','Tip rot of banana','Wilt','Leaf blight','Mosaic disease',
        'Streak disease','Stripe disease','Bacterial leaf bright','Bacterial leaf spot','Banana Xanthomonas Wilt','Bean blight','Halo blight','Broad leaves','Couch grass','Mexican poppy',
        'Narrow leaves','SedgesStar grass','Striga/witchweed','Hedge hog','Moles','Porcupine','Rats','Love birds','Pegion','Quelea birds','Green mite','Monkeys','Nematodes','Root lession nematode','Spiral nematode'];
    affectedProduct = ['','Mahindi	Mahindi','Mpunga','Mtama','Uwele','Ulezi','Ngano','Shayiri','Mihogo','Viazi vitamu','Viazi mviringo','Viazi vikuu','Gimbi','Pamba','Tumbaku','Kahawa','Chai','Pareto','Kakao','Mpira',
                        'Miwati','Miwa','Jute','Katani','Korosho','Alizeti','Ufuta','Karanga','Mawese','Nazi','Maharage ya Soya','Mbegu za nyonyo','Mibono','Kunde','Mbaazi','Choroko','Njegere','Dengu','Njugu mawe',
                        'Maharage','Tangawizi','Pilipili manga','Giligilani','Mdalasini','Binzari','Vanila','Pilipili kali','Karafuu','Vitunguu swaumu','Iliki','Paprika',
                        'Matango','Uy\'oga','Cauliflower','Kabichi','Mchicha','Spinachi','Kabichi china(Chinese cabbage)','Nyanya','Biringanya','Vitunguu','Pilipili hoho','Karoti',
                        'Nyanya chungu','Mnafu','Figiri','Leek','Saladi','Bamia','Ndizi mbivu (sweet banana)','Ndizi mbichi (plantain)','Embe','Papai','Chungwa','Chenza','Pera',
                        'Apple','Nanasi','Parachichi','Tikiti maji','Limau','Ndimu','Tunda damu','Mapeasi','Mapensheni(Passion fluit)','Waridi(Rose)','Chrysanthemum','Camation',
                        'Aster','Gypsophylla','Ginger rose','Helianthus','Choya(Rozella)','Others'];
    columConfigurationsBiologia= [{readOnly: true},{type: 'dropdown',source: deseaseName},{type: 'dropdown',source:affectedProduct},{type: 'text'},{type: 'numeric'},{type: 'numeric'},{type: 'text'}];
dataEventResource("parent_kemikali_container","kemikali_container",programKemikali,window.orgUnit,window.dataSet,window.period,dataElementUIdsKemikali,headersKemikali,columConfigurationsBiologia);




var programUmwagiliaji = "V8tLhRm35cD";
var dataElementUIdsUmwagiliaji = ['','ua8t910KDwq','w03rfpPSOxO','FtpehJLcD89','j5XQ5uFTx4n','E05PhcRTZFK','vcCK3NPZ4xm','W0PdgUM7JWB'];
var headersUmwagiliaji = ['','Aina ya Mazao(i)','Eneo lililopandwa(ha)(ii) </br>Masika/Vuli(iv)','Eneo lililopandwa(ha)(ii) </br>Kiangazi','Uzalishaji/Tija(tani/ha)(iii)</br>Masika/Vuli','Uzalishaji/Tija(tani/ha)(iii)</br>Kiangazi','Mavuno (tani)(iv)=(ii)x(iii)</br>Masika/Vuli(viii)','Mavuno (tani)(iv)=(ii)x(iii)</br>Masika/Vuli(ix)'],
    affectedUmwagiliaji = ['','Mahindi	Mahindi','Mpunga','Mtama','Uwele','Ulezi','Ngano','Shayiri','Mihogo','Viazi vitamu','Viazi mviringo','Viazi vikuu','Gimbi','Pamba','Tumbaku','Kahawa','Chai','Pareto','Kakao','Mpira',
    'Miwati','Miwa','Jute','Katani','Korosho','Alizeti','Ufuta','Karanga','Mawese','Nazi','Maharage ya Soya','Mbegu za nyonyo','Mibono','Kunde','Mbaazi','Choroko','Njegere','Dengu','Njugu mawe',
    'Maharage','Tangawizi','Pilipili manga','Giligilani','Mdalasini','Binzari','Vanila','Pilipili kali','Karafuu','Vitunguu swaumu','Iliki','Paprika',
    'Matango','Uy\'oga','Cauliflower','Kabichi','Mchicha','Spinachi','Kabichi china(Chinese cabbage)','Nyanya','Biringanya','Vitunguu','Pilipili hoho','Karoti',
    'Nyanya chungu','Mnafu','Figiri','Leek','Saladi','Bamia','Ndizi mbivu (sweet banana)','Ndizi mbichi (plantain)','Embe','Papai','Chungwa','Chenza','Pera',
    'Apple','Nanasi','Parachichi','Tikiti maji','Limau','Ndimu','Tunda damu','Mapeasi','Mapensheni(Passion fluit)','Waridi(Rose)','Chrysanthemum','Camation',
    'Aster','Gypsophylla','Ginger rose','Helianthus','Choya(Rozella)','Others'];
columConfigurationsUmwagiliaji= [{readOnly: true},{type: 'dropdown',source: affectedUmwagiliaji},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'}];
dataEventResource("parent_umwagiliaji_container","umwagiliaji_container",programUmwagiliaji,window.orgUnit,window.dataSet,window.period,dataElementUIdsUmwagiliaji,headersUmwagiliaji,columConfigurationsUmwagiliaji);






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
dataEventResource("parent_mmomonyoko_container","mmomonyoko_container",programMmomonyoko,window.orgUnit,window.dataSet,window.period,dataElementUIdsmmomonyoko,headersMmomonyoko,columConfigurationsMmomonyoko);




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
