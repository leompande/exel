angular.module('ngHandsontableEventCapture',
	[
		'ngHandsontable'
	])
	.controller(
		'EventExcelCtrl', [
			'$scope','$http',
			function ($scope,$http) {
		// Simple GET request example :
		$http.get('/api/events.json?orgUnit=wrdId99184').
		  success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			angular.forEach(data, function(value, key) {	
				angular.forEach(value, function(datas, keys) {	
				if(datas.dataValues){	
					angular.forEach(datas.dataValues, function(dataz, keyz) {
					// console.log(dataz);
					});						  
					}
				});
			});
			
		  }).
		  error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		  });		
			
				$scope.db = {};
				$scope.db.dataElements = [];
				angular.extend($scope.db.dataElements, [
					{
						"name":"Jina la ugonjwa / kisumbufu (i)",
						"uid":"fxddwVskpX0",
						"type":"string",
						"options": [
							{"uid":"smGrYbifXns",name:"American ball worm"},
							{"uid":"z6Ty17U31lk",name:"Aphids"},
							{"uid":"sDuKbWU6hlN",name:"Amyworm"},
							{"uid":"eZ7LbQoLVKB",name:"Bean flies"},
							{"uid":"RDfd1KeRODF",name:"Bean Flower Thrips"},
							{"uid":"T8p9ZxPKK9v",name:"Bean leaf beetle"},
							{"uid":"nI39JESQhDS",name:"Bean looper"}
						],
						"optionSetURL":"/api/optionSets/H5MRDYDIbMd"
					},
					{
						"name":"Zao lililoathirika (ii)",
						"uid":"m1zhpRKwAJa",
						"type":"string",
						"options": [
							{"uid":"IQjDw8QyTrR",name:"Mahindi"},
							{"uid":"jPn7M7bMOMD",name:"Mpunga"},
							{"uid":"QyMECE9mC2U",name:"Mtama"},
							{"uid":"W0uxqR3sZ6Y",name:"Uwele"},
							{"uid":"cO7ZNXiSamn",name:"Ulezi"},
							{"uid":"jKOwaVcWgzG",name:"Ngano"},
							{"uid":"oDw7kSB903C",name:"Shayiri"}
						],
						"optionSetURL":"/api/optionSets/JcXh1bCj5C3"	
					},
					{
						"name":"Kiasi cha uharibifu (Kidogo ,Wastan,Kubwai)",
						"uid":"jAPsjU8L10X",
						"type":"string",
						"options": [
							{"uid":"o1oFxtSGGXz",name:"Kidogo"},
							{"uid":"bn5AvRIEPWS",name:"Wastani"},
							{"uid":"ww84jp3jXQl",name:"Kubwa"}
						],
						"optionSetURL":"/api/optionSets/tFyEns1XKGG"	
					},
					{
						"name":"Eneo lililoathiriwa (ha)(iv)",
						"uid":"ZlQTZV0QVEX",
						"options": [
						],
						"optionSetURL":""
					},
					{
						"name":"Idadi ya vijiji vilivyoathirika (v)",
						"uid":"BH9v8zsf48O",
						"options": [
						],
						"optionSetURL":""
					},
					{
						"name":"Dawa iliyotumika (vi)",
						"uid":"rMEX3mx0FsU",
						"options": [
						],
						"optionSetURL":""
					},
					{
						"name":"Kiasi cha dawa",
						"uid":"AZhg3H7UH5T",
						"options": [
						],
						"optionSetURL":""
					},
					{
						"name":"Kipimo(Kg/Litre)",
						"uid":"dk5G5GP4Z27",
						"options": [
						],
						"optionSetURL":""
					},
					{
						"name":"Idadi ya vijiji vilivyo hudumiwa (ix)",
						"uid":"Ai8EZdUMcJA",
						"options": [
						],
						"optionSetURL":""
					},
					{
						"name":"Idadi ya kaya zilizo hudumiwa (xi)",
						"uid":"vayGIDYy4sf",
						"options": [
						],
						"optionSetURL":""
					},
					{
						"name":"Eneo liliookolewa(ha)(xi)",
						"uid":"N1xjnidYe6O",
						"options": [
						],
						"optionSetURL":""
					},
					{
						"name":"Maelezo(xii)",
						"uid":"ZH0t98IGHTL",
						"options": [
						],
						"optionSetURL":""
					}
				]);

				$scope.minSpareRows = 1;
				$scope.colHeaders = true;
				$scope.db.items = [];
				
				for (var i = 0; i < 2; i++) {
					//Prepare a list of values for dataelements
					var eventData={};
					$.each($scope.db.dataElements, function(i, dataElement) {
						// Constructing single event data
						if(dataElement.options.length<1) {
							//Event is not drop down
							var eventValue=100;
						}else {
							//Event value is drop down
							var eventValue=dataElement.options[Math.floor(Math.random() * dataElement.options.length)].name;
						}
						
						eventData[dataElement.uid]=eventValue;
					});
					$scope.db.items.push( eventData );
				}
			}
		]
	);
