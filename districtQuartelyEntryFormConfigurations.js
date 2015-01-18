/**
 * Created by leo on 1/17/15.
 */

/**
 * Track selection changes
 * **/
trackeSelectionsChangesGlobally();
var programLivestock = "JtnHRSFhC5e";
var dataElementUIdsLivestock = ['','uEtHzkz12Mh','ua8t910KDwq','gMnAGCPi4oc','cuTNA7qZYUM','e2WtxFQVnve','ZH0t98IGHTL','vcCK3NPZ4xm','W0PdgUM7JWB'];
var headersLivestock = ['','Type of Livestock</br>(i)','Animals moved into the </br>district from other areas</br> Non-Trade</br>(ii)','Animals moved into the </br>district from other areas</br>Trade</br>From other LGA\'s in Tanzania</br>(ii)','Animals moved into the </br>district from other areas</br>Trade</br> From other countries (imported)</br>(iv)','Animals moved to other</br> areas from the districts</br> Non-Trade</br>(v)','Animals moved to other</br> areas from the districts</br>Trade</br>To other LGA\'s in Tanzania</br>(vi)','Animals moved to other</br> areas from the districts </br>Trade</br> To other countries (iExported)</br>(vii)','Animals translocated</br> within the district</br>Non-trade</br>(viii)','Animals translocated</br> within the district</br>Trade</br>(ix)'],
   columConfigurationsLivestock= [{readOnly: true},{type: 'text'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'}];
dataEventResource("parent_livestock_container","livestock_container",programLivestock,window.orgUnit,window.dataSet,window.period,dataElementUIdsLivestock,headersLivestock,columConfigurationsLivestock);




var programProduct = "JtnHRSFhC5e";
var dataElementUIdsproduct = ['','uEtHzkz12Mh','ua8t910KDwq','gMnAGCPi4oc','cuTNA7qZYUM','e2WtxFQVnve','ZH0t98IGHTL','vcCK3NPZ4xm','W0PdgUM7JWB'];
var headersProduct = ['','Type of Livestock </br> (i)','Livestock Product </br>movement in the district </br>Products sold within the district</br> (ii)','Livestock Product </br>movement in the district </br>Products sold to other district</br> (iii)','Livestock Product </br>movement in the district </br> Products sold to other countries</br> (exported)(iv)'],
  columConfigurationsProduct= [{readOnly: true},{type: 'text'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'}];
dataEventResource("parent_product_container","product_container",programProduct,window.orgUnit,window.dataSet,window.period,dataElementUIdsproduct,headersProduct,columConfigurationsProduct);




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
