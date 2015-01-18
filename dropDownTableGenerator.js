/**
 * <script src="/exel/js/handsontable.full.js"></script><script src="/exel/dropDownTableGenerator.js"></script><script src="/exel/wardMontlyEntryFormConfigurations.js"></script><script src="/exel/slaughtaredAnimals.js"></script>
 *
 * */


function dataEventResource(parentContainerId, containerId, program, orgUnit, dataset, period, dataElementUIds, headers, columConfigurations) {
    console.log(dataElementUIds.length);

    var Programs = [];
    / ////////////////////////////////////////////////////////////////////////////////
    ////////////////////Preparing Mechanism to pull data from api/////////////////////
    //////////////////////////////////////////////////////////////////////////////////

    /// Check if there is values in Programs

    if (Programs.length > 0) {

        // This looping helps to insert row in a certain program table
        $.each(Programs, function (programIndex, programValue) {
            if (programValue.programUI != program && programIndex + 1 == Programs.length) {

                Programs.push({"programUI": program, "container": containerId, "data": new Array()});
            }
        });
    } else {
        Programs.push({"programUI": program, "container": containerId, "data": new Array()});
    }


    /// Creaning containers

    var parentContainer = document.getElementById(parentContainerId);
    $(parentContainer).remove("#" + containerId);
    $(parentContainer).append("<div id='" + containerId + "'></div>");
    var container = document.getElementById(containerId);
    $(container).html("");


    var dataSetUID = "vcCK3NPZ4xm";/// DataSet UID
    var periodUID = "W0PdgUM7JWB";// Period UID

    /// Query data from events API
    $.get("../api/events.json?program=" + program, function (data) {
            ///console.log("Start Showing Events Of program " + program);

            //Checking if there is events available
            if (data.events) {
                //Declaring variable that carries events as table rows
                var eventsRowsArray = new Array();
                //Looping Through the Available Events of a program
                $.each(data.events, function (index, value) {


                    /** DELETE CODES
                     ///console.log("EVENT TO BE DELETED");
                     ///console.log(value.event);

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
						///console.log("DELETE RESPONSE");
						///console.log(data);
						}
				});
                     **/


                    ///console.log((index + 1) + "nth Event of a Progam ");
                    ///console.log(value);

                    var rowData = [];

                    if (value.dataValues && checkPeriod(value.dataValues, period) && checkDataset(value.dataValues, dataset)) {///
                        ///console.log("There checking is done");
                        $.each(value.dataValues, function (eventIndex, eventValue) {
                            var lastIndex = 0;
                            rowData[lastIndex] = value.eventDate + "_" + value['event'];
                            rowData[dataElementUIds.indexOf(eventValue.dataElement)] = eventValue.value;
                            ///console.log("ONLY BELONGS TO THIS PERIOD DATASET AND ORG");
                            ///console.log(rowData);
                        });
                        eventsRowsArray.push(rowData);
                        ///console.log("CREATED ROW");
                        ///console.log(eventsRowsArray);
                    }

                });
                //// This looping helps to insert row in a certain program table
                $.each(Programs, function (programIndex, programValue) {
                    if (programValue.programUI == program) {
                        Programs[programIndex].data = eventsRowsArray;
                    }
                });

            }

            if (Programs.length >= 1) {
                for (var indexCounter = 0; indexCounter < Programs.length; indexCounter++) {
                    ///console.log(Programs[indexCounter]['data']);


                    var container = document.getElementById(Programs[indexCounter]['container'])
                console.log(Programs[indexCounter]['data']);
                    hot1 = new Handsontable(container, {
                        data: Programs[indexCounter]['data'],
                        startCols: 13,
                        minSpareRows: 1,
                        startRows: 1,
                        rowHeaders: false,
                        colWidths:preparedColumnWidths(dataElementUIds),
                        rowHeights: preparedRowHeights(),
                        colHeaders: headers,
                        columnSorting: {
                            column: 0,
                            sortOrder: true
                        },
                        contextMenu:['row_above', 'row_below', 'remove_row'],
                        columns: columConfigurations,
                        afterChange: function (change, source) {


                            if (source == "edit") {
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
                                   var ChangedRowData =  this.getDataAtRow(change[0][0]);

                                 var eventDate = null;
                                console.log(change);
                                console.log(change[0][0]);
                                console.log(ChangedRowData);
                                console.log(ChangedRowData[0]);
                                if (typeof ChangedRowData[0] != 'undefined') {
                                    ///checking if it is first event registry or update

                                    var dataValuesArray = [];/// Preparing data for updating event
                                    var FirstColumn= ChangedRowData[0].split("_");
                                    var changedEvent = FirstColumn[1];
                                    var changedDataElement = dataElementUIds[change[0][1]];
                                    var newValue = change[0][3];
                                    var eventDate = FirstColumn[0];
                                    console.log(changedEvent);
                                    console.log(newValue);
                                    console.log(changedDataElement );
                                    console.log(eventDate);

                                    dataValuesArray.push({
                                        "dataElement": changedDataElement,
                                        "value": newValue
                                    });

                                    /**
                                     * PUSHING PERIOD AND DATASET
                                     * */
                                    dataValuesArray.push({"dataElement": dataSetUID, "value": dataset});///adding dataset
                                    dataValuesArray.push({"dataElement": periodUID, "value": period});///adding period

                                    /**
                                     *
                                     * Assembling the Event object
                                     * */
                                    var dhis2Event = {
                                        "program": program,
                                        "orgUnit": orgUnit,
                                        "eventDate": eventDate,
                                        "status": "COMPLETED",
                                        "storedBy": "admin",
                                        "dataValues": dataValuesArray
                                    };


                                    $.EventJsonPut('../api/events/'+changedEvent +'.json', dhis2Event, function (response) {
                                        $(container).remove();//Wipe the old table from div
                                        $(parentContainer).remove("#" + containerId).append("<div id='" + containerId + "'></div>");

                                        var poller = window.setInterval(function () {
                                            var container = document.getElementById(containerId);
                                            if (container) { //DOM is much more efficient
                                                window.clearInterval(poller);
                                                dataEventResource(parentContainerId, containerId, program, orgUnit, dataset, period, dataElementUIds, headers, columConfigurations);
                                                /** Start all over again**/

                                            }
                                        }, 100);
                                    });


                                }else{

                                    ///// This is first time entry
                                    var dataValuesArray = [];/// Preparing data for saving new event
                                    var addedDataElement = dataElementUIds[change[0][1]];
                                    var newValue = change[0][3];
                                    var eventDate = eventDateFormat();
                                    console.log(addedDataElement);
                                    console.log(eventDate);

                                    dataValuesArray.push({
                                        "dataElement": addedDataElement,
                                        "value": newValue
                                    });

                                    /**
                                     * PUSHING PERIOD AND DATASET
                                     * */
                                    dataValuesArray.push({"dataElement": dataSetUID, "value": dataset});///adding dataset
                                    dataValuesArray.push({"dataElement": periodUID, "value": period});///adding period

                                    console.log("Dataset: "+dataset);
                                    console.log("Period"+period);
                                    console.log(dataValuesArray);

                                    /**
                                     *
                                     * Assembling the Event object
                                     * */
                                    var dhis2Event = {
                                        "program": program,
                                        "orgUnit": orgUnit,
                                        "eventDate": eventDate,
                                        "status": "COMPLETED",
                                        "storedBy": "admin",
                                        "dataValues": dataValuesArray
                                    };


                                    var cloneInstance = this;

                                    $.EventJsonPost('../api/events', dhis2Event, function (response) {
                                        cloneInstance.setDataAtCell(change[0][0],0,preparedId(eventDate,response));
                                        ////$(container).remove();//Wipe the old table from div
                                        //$(parentContainer).remove("#" + containerId).append("<div id='" + containerId + "'></div>");
                                        //
                                        //var poller = window.setInterval(function () {
                                        //    var container = document.getElementById(containerId);
                                        //    if (container) { //DOM is much more efficient
                                        //        window.clearInterval(poller);
                                        //        dataEventResource(parentContainerId, containerId, program, orgUnit, dataset, period, dataElementUIds, headers, columConfigurations);
                                        //        /** Start all over again**/
                                        //
                                        //    }
                                        //}, 100);

                                        secondTime = true;
                                    });


                                }
                            }
                        },
                        beforeRemoveRow: function (index, amount) {
                            if (amount > 1) {

                                for (var deletedRowCounter = index; deletedRowCounter < amount; deletedRowCounter++) {

                                    ///localhost/api/events/ID
                                    $.ajax({
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json',
                                            'admin': 'district'
                                        },
                                        'type': 'DELETE',
                                        'url': "../api/events/" + ((this.getDataAtRow(deletedRowCounter)[0]).split("_"))[1],
                                        'data': "",
                                        'dataType': 'json',
                                        'success': function (data) {
                                        }
                                    });
                                }

                            } else {


                                $.ajax({
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                        'admin': 'district'
                                    },
                                    'type': 'DELETE',
                                    'url': "../api/events/" + ((this.getDataAtRow(index)[0]).split("_"))[1],
                                    'data': "",
                                    'dataType': 'json',
                                    'success': function (data) {
                                    }
                                });
                            }
                        }

                    });


                }
            }


        }
    );

}

function checkPeriod(dataJsonArray, period) {

    var periodUID = "W0PdgUM7JWB";
    var exist = false;
    if (dataJsonArray != null) {
        $.each(dataJsonArray, function (index, val) {

            if (val.dataElement == periodUID && val.value == period) {
                exist = true;
            }
        });
    }

    return exist;
}
function checkDataset(dataJsonArray, dataset) {


    var dataSetUID = "vcCK3NPZ4xm";
    var exist = false;
    if (dataJsonArray != null) {
        $.each(dataJsonArray, function (index, val) {

            if (val.dataElement == dataSetUID && val.value == dataset) {
                exist = true;
            }
        });
    }

    return exist;
}
function preparedColumnWidths(dataElementUIds){

    var widthsArray = [];
    // making the number of dataelements
    var expectedLengthOfArray = dataElementUIds.length;
    for(var index = 0;index<expectedLengthOfArray;index++){
        if(index == 0){
            // checking if is the first element and fix the width to 1px
         widthsArray.push(1);
        }else{
            // this handle the with of the lest of the columns
           widthsArray.push(144);
        }
    }

    return widthsArray;
}

function preparedId(eventDate,response){
    var responseJsonObject = response;

    var eventUI =  responseJsonObject.importSummaries[0].reference;

    return eventDate+"_"+eventUI;

}
function preparedRowHeights(){

    var heighsArray = [];
    // making the number of dataelements
    var expectedLengthOfArray = 400;
    for(var index = 0;index<expectedLengthOfArray;index++){
            // checking if is the first element and fix the height to 34px
            heighsArray.push(36);

    }
    return heighsArray;

}
/**
 * Preparing custom post function to handle addition of new even
 *
 * */
$.EventJsonPost = function (url, data, callback) {

    return jQuery.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'admin': 'district'
        },
        'type': 'POST',
        'url': url,
        'data': JSON.stringify(data),
        'dataType': 'json',
        'success': callback
    });
}

$.EventJsonPut = function (url, data, callback) {

    return jQuery.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'admin': 'district'
        },
        'type': 'PUT',
        'url': url,
        'data': JSON.stringify(data),
        'dataType': 'json',
        'success': callback
    });
}


function eventDateFormat() {
    var today = new Date();
    return today.toISOString();
}


function trackeSelectionsChangesGlobally(){

    if(dhis2.de.currentOrganisationUnitId){
        window.orgUnit = dhis2.de.currentOrganisationUnitId;
    }
    if(dhis2.de.currentDataSetId){

        window.dataSet = dhis2.de.currentDataSetId;
    }
    if($("#selectedPeriodId :selected").val()){

        window.period  = $("#selectedPeriodId :selected").val();
    }




}


function checkNetConnection(){
    jQuery.ajaxSetup({async:false});
    re="";
    r=Math.round(Math.random() * 10000);
    $.get("http://yoursite.com/somefile.png",{subins:r},function(d){
        re=true;
    }).error(function(){
        re=false;
    });
    return re;
}