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
dataEventResource("parent_Extensions_container","Extensions_container",programExtensions,window.orgUnit,window.dataSet,window.period,dataElementUIdsExtensions,headersExtensions,columConfigurationsExtensions);




var programPopulation = "JtnHRSFhC5e";
var dataElementUIdspopulation= ['','uEtHzkz12Mh','ua8t910KDwq','gMnAGCPi4oc','uEtHzkz12Mh','ua8t910KDwq','gMnAGCPi4oc','uEtHzkz12Mh','ua8t910KDwq','gMnAGCPi4oc'];
var headersPopulation = ['','Name of the Farm/Farmer (i)','Type of Ownership (ii)','Registration Number (iii)','Number of Livestock </br>Cattle(iv)','Number of Livestock</br>Sheet(v) ','Number of Livestock</br>Pigs(vii) ','Number of Livestock</br>Layers (viii) ','Number of Livestock Broillers (ix)','Remarks (x)'],
   columConfigurationsPopulation= [{readOnly: true},{type: 'text'},{type: 'text'},{type: 'text'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'}];
dataEventResource("parent_population_container","population_container",programPopulation,window.orgUnit,window.dataSet,window.period,dataElementUIdspopulation,headersPopulation,columConfigurationsPopulation);



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
