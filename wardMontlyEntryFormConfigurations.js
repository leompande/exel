
if(dhis2.de.currentOrganisationUnitId){	
	window.orgUnit = dhis2.de.currentOrganisationUnitId;
	}
if(dhis2.de.currentDataSetId){
	
	window.dataSet = dhis2.de.currentDataSetId;
	}
if($("#selectedPeriodId :selected").val()){
	
	window.period  = $("#selectedPeriodId :selected").val();
	}



		/***
		 * 
		 * TESTING OUR FUNCTION FOR ONE TABLE PARAMETERS
		 * 
		 * 
		 *
		 */
			var programKemikali = "AQQj1mfXjPD";			
			var dataElementUIdsKemikali = ['','fxddwVskpX0','m1zhpRKwAJa','jAPsjU8L10X','ZlQTZV0QVEX','BH9v8zsf48O','rMEX3mx0FsU','AZhg3H7UH5T','dk5G5GP4Z27','Ai8EZdUMcJA','vayGIDYy4sf','N1xjnidYe6O','ZH0t98IGHTL'];
			var headersKemikali = ['','Jina la ugonjwa </br>/ kisumbufu </br>(i)','Zao lililoathirika</br> (ii)','Kiasi cha uharibifu</br> (Kidogo ,Wastan,Kubwai)','Eneo lililoathiriwa</br> (ha)(iv)','Idadi ya vijiji</br> vilivyoathirika</br> (v)','Dawa iliyotumika </br>(vi)','Kiasi cha dawa','Kipimo(Kg/Litre)','Idadi ya vijiji </br>vilivyo hudumiwa</br> (ix)','Idadi ya kaya </br>zilizo hudumiwa</br> (xi)','Eneo liliookolewa</br>(ha)(xi)','Maelezo</br>(xii)'],
				deseaseName = ['','American ball worm','Aphids','Amyworm','Bean flies','Bean Flower Thrips','Bean leaf beetle','Bean looper'],
				affectedProduct = ['','Mahindi','Mpunga','Mtama','Uwele','Ulezi','Ngano','Shayiri'],
				damageExtent = ['Kidogo','Wastan','Kubwa'],
				usedPesticide = [],
				columConfigurationsKemikali = [{readOnly: true},{type: 'dropdown',source: deseaseName},{type: 'dropdown',source: affectedProduct},{type: 'dropdown',source: damageExtent},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'text'}];
		dataEventResource("parent_kemikali_container","kemikali_container",programKemikali,window.orgUnit,window.dataSet,window.period,dataElementUIdsKemikali,headersKemikali,columConfigurationsKemikali);

	var programMifugo = "pbpOXTgtxmL";
			var dataElementUIdsMifugo = ['','REqV80kqyua','KlcJjRSG5Qn','Mk1O9On7Q2U'];
			var headersMifugo = ['','Aina ya Mifugo','Idadi ya walio chinjwa kwa mwezi','Bei ya wastani kwa Kg(Tsh)'],
				mifugo = ['','Ng\'ombe','Kondoo','Mbuzi','Nguruwe','Kuku wa asili','Kuku wa kisasa'],
				columConfigurationsMifugo = [{readOnly: true},{type: 'dropdown',source: mifugo},{type: 'numeric'},{type: 'numeric'}];
		 
		dataEventResource("parent_mifugoiliyochinjwa_container","mifugoiliyochinjwa_container",programMifugo,window.orgUnit,window.dataSet,window.period,dataElementUIdsMifugo,headersMifugo,columConfigurationsMifugo);

	var programUkaguzi = "mpqyWF2ttBH";
			var dataElementUIdsUkaguzi = ['','W5qXfFehNtx','REqV80kqyua','UvPBis5Pwtl','Jnvz6Z3fKly','EgFvIZjwjs2'];
			var headersUkaguzi = ['','Jina la eneo la machinjio/</br> ukaguzi','Aina ya mifugo(i)','Idadi ya wanyama</br>walio athirika(ii)','Viungo vilivyotupwa(Mzoga mzima/Moyo/Mapafu/Maini nk.</br> Sababu ya kutupa viungo/mzoga mzima(iii))','Viungo vilivyotupwa(Mzoga mzima/Moyo/Mapafu/Maini nk.</br>Idadi ya matukio kwa kila sababu(iv))'],
				mifugoUkaguzi = ['','Ng\'ombe','Kondoo','Mbuzi','Nguruwe','Kuku wa asili','Kuku wa kisasa'],
				sababuUkaguzi = ['','Others'],				
				columConfigurationsUkaguzi = [{readOnly: true},{type: 'text'},{type: 'dropdown',source: mifugoUkaguzi},{type: 'numeric'},{type: 'dropdown',source:sababuUkaguzi},{type: 'numeric'}];
		 
		dataEventResource("parent_ukaguzi_wanyama_container","ukaguzi_wanyama_container",programUkaguzi,window.orgUnit,window.dataSet,window.period,dataElementUIdsUkaguzi,headersUkaguzi,columConfigurationsUkaguzi);
			
		
			var programTiba = "bUTO4nlZ635";			
			var dataElementUIdsTiba = ['','REqV80kqyua','I90eMQH1F0r','qNoRzceKVGI','KKL77TtGhYb','bqN4vvKmRZA','rMEX3mx0FsU','XjCyT6M56up','kP8qnpfRER4'];
			var headersTiba = ['','Aina ya Mifugo','Aina ya ugonjwa/hali','Idadi ya walioathirika','Idadi ya waliotibiwa','Idadi ya waliopona','Idadi ya waliokufa','Matibabu/Dawa iliyotumika'],
				deseaseType = ['','Others'],
				mifugoTiba = ['','Ng\'ombe','Kondoo','Mbuzi','Nguruwe','Kuku wa asili','Kuku wa kisasa'],
				usedPesticide = ['','Alphactpermethrin','Cypermethrin','Deltamethrin','Others'],
				columConfigurationsTiba = [{readOnly: true},{type: 'dropdown',source: mifugoTiba},{type: 'dropdown',source: deseaseType},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'}];
		 
		dataEventResource("parent_tiba_container","tiba_container",programTiba,window.orgUnit,window.dataSet,window.period,dataElementUIdsTiba,headersTiba,columConfigurationsTiba);




 var programUogeshaji = "EW32RGLP2at";
			var dataElementUIdsUogeshaji = ['','REqV80kqyua','y6teP1aMwh4','tXeOwfTWPMV','JXGshPEy8Io','','G7ncBhkJe5e','BTZ1MEe7e1B','vcCK3NPZ4xm','W0PdgUM7JWB'];
			var headersUogeshaji = ['','Aina ya Mifugo','Idadi ya walioogeshwa','Dawa iliyo tumika','Idadi ya walio nyunyizwa','Dawa iliyo tumika (vi)','Idadi ya walio chanjwa','Chanjo iliyotumika'],
				mifugoUogeshaji = ['','Ng\'ombe','Kondoo','Mbuzi','Nguruwe','Kuku wa asili','Kuku wa kisasa'],
                usedPesticide = ['','Alphactpermethrin','Cypermethrin','Deltamethrin','Others'],
                usedVaccine = ['','Anthrax','BQ','CBPP','Chicken pox','East coast feaver','Infectious Bursal','New castle','PPR','Rabies','RVF','S.19','Others'],
                columConfigurationsUogeshaji = [{readOnly: true},{type: 'dropdown',source: mifugoUogeshaji},{type: 'numeric'},{type: 'dropdown',source:  usedPesticide },{type: 'numeric'},{type: 'dropdown',source:  usedPesticide },{type: 'numeric'},{type: 'dropdown',source:  usedVaccine }];
		 
		dataEventResource("parent_uogeshaji_container","uogeshaji_container",programUogeshaji,window.orgUnit,window.dataSet,window.period,dataElementUIdsUogeshaji,headersUogeshaji,columConfigurationsUogeshaji);

/**		var programTiba = "AQQj1mfXjPD";
			var dataElementUIds = ['','fxddwVskpX0','m1zhpRKwAJa','jAPsjU8L10X','ZlQTZV0QVEX','BH9v8zsf48O','rMEX3mx0FsU','AZhg3H7UH5T','dk5G5GP4Z27','Ai8EZdUMcJA','vayGIDYy4sf','N1xjnidYe6O','ZH0t98IGHTL',''];
			var headers = ['','Jina la ugonjwa </br>/ kisumbufu </br>(i)','Zao lililoathirika</br> (ii)','Kiasi cha uharibifu</br> (Kidogo ,Wastan,Kubwai)','Eneo lililoathiriwa</br> (ha)(iv)','Idadi ya vijiji</br> vilivyoathirika</br> (v)','Dawa iliyotumika </br>(vi)','Kiasi cha dawa','Kipimo(Kg/Litre)','Idadi ya vijiji </br>vilivyo hudumiwa</br> (ix)','Idadi ya kaya </br>zilizo hudumiwa</br> (xi)','Eneo liliookolewa</br>(ha)(xi)','Maelezo</br>(xii)'],
				deseaseName = ['American ball worm','Aphids','Amyworm','Bean flies','Bean Flower Thrips','Bean leaf beetle','Bean looper'],
				affectedProduct = ['Mahindi','Mpunga','Mtama','Uwele','Ulezi','Ngano','Shayiri'],
				damageExtent = ['Kidogo','Wastan','Kubwa'],
				usedPesticide = [],
				columConfigurations = [{},{type: 'dropdown',source: deseaseName},{type: 'dropdown',source: affectedProduct},{type: 'dropdown',source: damageExtent},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'text'}];
		 
		dataEventResource("parent_kemical_container","kemical_container",program,orgUnit,dataElementUIds,headers,columConfigurations);

*/






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
		    dataEventResource("parent_kemikali_container","kemikali_container",programKemikali,window.orgUnit,window.dataSet,window.period,dataElementUIdsKemikali,headersKemikali,columConfigurationsKemikali);
            dataEventResource("parent_tiba_container","tiba_container",programTiba,window.orgUnit,window.dataSet,window.period,dataElementUIdsTiba,headersTiba,columConfigurationsTiba);
			dataEventResource("parent_mifugoiliyochinjwa_container","mifugoiliyochinjwa_container",programMifugo,window.orgUnit,window.dataSet,window.period,dataElementUIdsMifugo,headersMifugo,columConfigurationsMifugo);
			dataEventResource("parent_ukaguzi_wanyama_container","tukaguzi_wanyama_container",programUkaguzi,window.orgUnit,window.dataSet,window.period,dataElementUIdsUkaguzi,headersUkaguzi,columConfigurationsUkaguzi);
            dataEventResource("parent_uogeshaji_container","uogeshaji_container",programUogeshaji,window.orgUnit,window.dataSet,window.period,dataElementUIdsUogeshaji,headersUogeshaji,columConfigurationsUogeshaji);
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
		dataEventResource("parent_kemikali_container","kemikali_container",programKemikali,window.orgUnit,window.dataSet,window.period,dataElementUIdsKemikali,headersKemikali,columConfigurationsKemikali);
        dataEventResource("parent_tiba_container","tiba_container",programTiba,window.orgUnit,window.dataSet,window.period,dataElementUIdsTiba,headersTiba,columConfigurationsTiba);
		dataEventResource("parent_mifugoiliyochinjwa_container","mifugoiliyochinjwa_container",programMifugo,window.orgUnit,window.dataSet,window.period,dataElementUIdsMifugo,headersMifugo,columConfigurationsMifugo);
		dataEventResource("parent_ukaguzi_wanyama_container","tukaguzi_wanyama_container",programUkaguzi,window.orgUnit,window.dataSet,window.period,dataElementUIdsUkaguzi,headersUkaguzi,columConfigurationsUkaguzi);
        dataEventResource("parent_uogeshaji_container","uogeshaji_container",programUogeshaji,window.orgUnit,window.dataSet,window.period,dataElementUIdsUogeshaji,headersUogeshaji,columConfigurationsUogeshaji);
        /***/
		});
	}
	
/** if changed period **/	
var Period = function(){
	$("#selectedPeriodId").on("change",function(){
		window.period = $(this).val();
		dataEventResource("parent_kemikali_container","kemikali_container",programKemikali,window.orgUnit,window.dataSet,window.period,dataElementUIdsKemikali,headersKemikali,columConfigurationsKemikali);
        dataEventResource("parent_tiba_container","tiba_container",programTiba,window.orgUnit,window.dataSet,window.period,dataElementUIdsTiba,headersTiba,columConfigurationsTiba);
		dataEventResource("parent_mifugoiliyochinjwa_container","mifugoiliyochinjwa_container",programMifugo,window.orgUnit,window.dataSet,window.period,dataElementUIdsMifugo,headersMifugo,columConfigurationsMifugo);
        dataEventResource("parent_ukaguzi_wanyama_container","tukaguzi_wanyama_container",programUkaguzi,window.orgUnit,window.dataSet,window.period,dataElementUIdsUkaguzi,headersUkaguzi,columConfigurationsUkaguzi);
		dataEventResource("parent_uogeshaji_container","uogeshaji_container",programUogeshaji,window.orgUnit,window.dataSet,window.period,dataElementUIdsUogeshaji,headersUogeshaji,columConfigurationsUogeshaji);
 /***/
		});
	}
	
	Period();
