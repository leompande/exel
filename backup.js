/**
 * Created by leo on 1/15/15.
 */
/**
 * <script src="/exel/js/handsontable.full.js"></script><script src="/exel/dropDownTables.js"></script><script src="/exel/wardMontlyEntryFormConfigurations.js"></script><script src="/exel/slaughtaredAnimals.js"></script>
 *
 * */


function dataEventResource(parentContainerId,containerId,program,orgUnit,dataSet,period,dataElementUIds,headers,columConfigurations){


    var parentContainer	 = document.getElementById(parentContainerId),	 /** getting the parent container*/
    container		 = document.getElementById(containerId),	 /** getting the container*/
    columsConfig	 = columConfigurations;/** custome column configurations */
    var dataSetUID	 = "vcCK3NPZ4xm";
    var periodUID	 = "W0PdgUM7JWB";
    /**Wipe the old table from div		*/
    $(parentContainer).remove("#"+containerId);
    $(parentContainer).append("<div id='"+containerId+"'></div>");
    var container = document.getElementById(containerId);
    $(container).html("");
    /**	var poller = window.setInterval(function(){
						var container = document.getElementById(containerId);
						if(container){ //DOM is much more efficient
							window.clearInterval(poller);

						}
					}, 100); */



    window.data = [];/// scope variable to house events data

    /**
     * Loading events from dhis2 API, and use them to create events table using handsontables plugin
     *
     * */
    $.get("../api/events.json?program="+program,function(data){
        var rowCounter = 0;

        /**
         * Preparing events data in a formatt that is acceptable by handsontable plugin,
         *
         * */

        if(data.events){
            console.log(data.events);
            $.each(data.events,function(key,value){
                /** DELETE CODES
                 console.log("EVENT TO BE DELETED");
                 console.log(value.event);

                 $.ajax({
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'admin':'district'
					},
					'type': 'DELETE',
					'url':"../api/events/"+value.event,
					'data': "",
					'dataType': 'json',
					'success': function(data){
						console.log("DELETE RESPONSE");
						console.log(data);
						}
				});
                 **/
                var rowData = [];
                if(value.dataValues && checkPeriodAndDataset(value.dataValues)){
                    $.each(value.dataValues,function(index,val){
                        var lastIndex = 0;
                        rowData[lastIndex] = value.eventDate+"_"+value['event'];
                        rowData[dataElementUIds.indexOf(val.dataElement)] = val.value;
                    });
                }
                window.data[rowCounter] = rowData;
                rowCounter ++;
            });


        }


        /**
         * Creating instance of handsontable in a container that has a id contained in variable containerId
         * */

        var noteBlank = $.extend(true, [], window.data);/// this prevent instances to interfare

        console.log(noteBlank+": For -> "+containerId);

        hot1= new Handsontable(container,{
            data:window.data,
            startCols: 13,
            minSpareRows:1,
            startRows:1,
            rowHeaders: false,
            colHeaders: headers,
            columnSorting: {
                column: 0,
                sortOrder:true
            },
            contextMenu: true,
            columns: columsConfig,
            afterChange: function (change, source) {

                if(source=="edit"){
                    /**
                     *  Monitoring changes occuring in each cell in a table
                     * and act accodingly ie. ADD, EDIT or DELETE cell value
                     * */

                    /**
                     *
                     * change[0][0] give the index of the row at which there is cell changed
                     * window.data[change[0][0]][0] give value of the cell changed
                     *
                     * */
                    var eventDate = null;
                    if(window.data[change[0][0]][0]==null){
                        /** check if event has date(ie.its updated) or is fresh event */
                        eventDate = eventDateFormat();///assigning date for newly created events


                        /**
                         *
                         * Preparing datavalues for new created event
                         *
                         * */
                        var dataValuesArray = [];
                        $.each(dataElementUIds,function(dataElementIndex,dataElementValue){
                            if(dataElementIndex==0){
                                /**
                                 *
                                 * this first column has event date
                                 *
                                 * */
                            }else{

                                if(dataElementUIds[change[0][1]] == dataElementValue){
                                    dataValuesArray.push({"dataElement": dataElementUIds[change[0][1]], "value":change[0][3]});
                                }else{
                                    if(window.data[change[0][0]][dataElementIndex]== null){
                                        /** dataelements that has null value are discarded from json array of datavalue*/
                                    }else{
                                        var valueChange	  = "";
                                        valueChange		  = window.data[change[0][0]][dataElementIndex];
                                        dataValuesArray.push({"dataElement":dataElementValue, "value":valueChange});
                                    }
                                }
                            }

                        });

                        /**
                         * PUSHING PERIOD AND DATASET
                         * */
                        dataValuesArray.push({"dataElement": dataSetUID, "value":dataSet});///adding dataset
                        dataValuesArray.push({"dataElement": periodUID, "value":period});///adding period

                        /**
                         *
                         * Assembling the Event object
                         * */
                        var dhis2Event =    {
                            "program": program,
                            "orgUnit": window.orgUnit,
                            "eventDate": eventDate.split("_")[0],
                            "status": "COMPLETED",
                            "storedBy": "admin",
                            "dataValues": dataValuesArray,
                        };
                        console.log("PREPARED JSON FOR SAVING");
                        console.log(dhis2Event);
                        console.log('THE CHANGES DATA MATRIX');
                        console.log(change);
                        /**
                         * Preparing custom post function to handle addition of new even
                         *
                         * */
                        $.postJSON = function(url, data, callback) {
                            return jQuery.ajax({
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                    'admin':'district'
                                },
                                'type': 'POST',
                                'url': url,
                                'data': JSON.stringify(data),
                                'dataType': 'json',
                                'success': callback
                            });
                        };


                        /**$.postJSON('../api/events',dhis2Event,function(response){

				$(container).remove();Wipe the old table from div
				$(parentContainer).remove("#"+containerId).append("<div id='"+containerId+"'></div>");

				var poller = window.setInterval(function(){
						var container = document.getElementById(containerId);
						if(container){ //DOM is much more efficient
							window.clearInterval(poller);
							dataEventResource(parentContainerId,containerId,program,orgUnit,dataSet,period,dataElementUIds,headers,columConfigurations);  /** Start all over again

						}
					}, 100);


			});	*/



                    }else{

                        /**
                         *
                         * Here events alredy exist and is subjected to be updated
                         *
                         * **/
                        var lastIndex = 0;
                        eventDate = (window.data[change[0][0]][lastIndex]).split(",")[0];/** taking event date*/

                        /**
                         *
                         * Preparing datavalues for updated event
                         *
                         * */
                        var dataValuesArray = [];
                        $.each(dataElementUIds,function(dataElementIndex,dataElementValue){
                            if(dataElementIndex==0){
                            }else{

                                if(dataElementUIds[change[0][1]] == dataElementValue){
                                    dataValuesArray.push({"dataElement": dataElementUIds[change[0][1]], "value":change[0][3]});
                                }else{
                                    if(window.data[change[0][0]][dataElementIndex]== null){

                                    }else{
                                        var valueChange = "";
                                        valueChange  = window.data[change[0][0]][dataElementIndex];
                                        dataValuesArray.push({"dataElement":dataElementValue, "value":valueChange});
                                    }
                                }
                            }

                        });

                        /**
                         *
                         * Assembling the updated Event object
                         * */
                        var dhis2Event =    {
                            "program": program,
                            "orgUnit": orgUnit,
                            "eventDate": eventDate.split("_")[0],
                            "status": "COMPLETED",
                            "storedBy": "admin",
                            "dataValues": dataValuesArray,
                        };

                        /**
                         * Preparing custom post function to handle udating even
                         *
                         * */

                        $.postJSON = function(url, data, callback) {
                            return jQuery.ajax({
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                    'admin':'district'
                                },
                                'type': 'PUT',
                                'url': url,
                                'data': JSON.stringify(data),
                                'dataType': 'json',
                                'success': callback
                            });
                        };


                        $.postJSON('../api/events/'+(window.data[change[0][0]][0]).split("_")[1]+'.json',dhis2Event,function(response){
                            $(container).html("");/**Wipe the old table from div*/
                            dataEventResource(parentContainerId,containerId,program,orgUnit,dataSet,period,dataElementUIds,headers,columConfigurations);  /** Start all over again*/
                        });


                    }

                }




            },
            beforeRemoveRow:function (index, amount){
                if(amount>1){

                    for(var deletedRowCounter = index;deletedRowCounter<amount;deletedRowCounter++){

                        ///localhost/api/events/ID
                        $.ajax({
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'admin':'district'
                            },
                            'type': 'DELETE',
                            'url':"../api/events/"+((hot1.getDataAtRow (deletedRowCounter)[0]).split("_"))[1],
                            'data': "",
                            'dataType': 'json',
                            'success': function(data){
                            }
                        });
                    }

                }else{


                    $.ajax({
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'admin':'district'
                        },
                        'type': 'DELETE',
                        'url':"../api/events/"+((hot1.getDataAtRow (index)[0]).split("_"))[1],
                        'data': "",
                        'dataType': 'json',
                        'success': function(data){
                        }
                    });
                }
            },

        });


        function eventDateFormat(){
            var today = new Date();
            return today.toISOString();
        }


    });


    function checkPeriodAndDataset(dataJsonArray){
        var checkPeriod = 0;
        var checkDataset = 0;

        var dataSetUID = "vcCK3NPZ4xm";
        var periodUID = "W0PdgUM7JWB";

        $.each(dataJsonArray,function(index,val){
            if(val.dataElement == periodUID && val.value == window.period){
                checkPeriod++;
            }

            if(val.dataElement == dataSetUID && val.value == window.dataSet){
                checkDataset++;
            }

        });

        if(checkDataset>0 && checkPeriod>0){
            return true;
        }else{
            return false;
        }

    }


}

