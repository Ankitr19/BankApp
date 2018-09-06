var modal = document.getElementById('ModalContent');
var span = document.getElementsByClassName("close")[0];
$( document ).ready(function(){
    modal.style.display = "block";
    span.onclick = function() {
    modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target != modal) {
        modal.style.display = "none";
    }
}
});


function ifscapi(){
    //var id = this.id;
    //console.log(id);
    var ifsc = document.getElementById("IFSCBox");
    var ifsc_code = ifsc.value;
    //console.log(typeof(ifsc_code));
    //console.log(ifsc_code);
    $.ajax({
        url: "rest/ifscapi/"+ifsc_code+"/",
        type: 'GET',
        success: function (response) {
            //console.log(response);
            var DataApi = jQuery.parseJSON(JSON.stringify(response));
            //console.log(DataApi);
            var ulElement = document.getElementById("IFSCResult");
            var index=1;

            for (var data_b in DataApi) {
                //var data = JSON.parse(data_b);
                //console.log(typeof data_b);
                var liElement = document.createElement("li");
                liElement.innerHTML = '<div class="IFSCinfo '+index+'" ><span>These are the details:-</span>\
                                        <ul id="IFSC '+index+'" style="list-style: none">\
                                            <li>Bank name is : <span>' + DataApi[data_b].bank_name + '</span></li>\
                                            <li>The branch is : <span>' + DataApi[data_b].branch + '</span></li>\
                                            <li>The city is : <span> ' + DataApi[data_b].city + '</span></li>\
                                            <li>The district is : <span>' + DataApi[data_b].district + '</span></li>\
                                            <li>The state is : <span>' + DataApi[data_b].state + '</span></li>\
                                            <li>The address is: <span>' + DataApi[data_b].address + '</span></li>\
                                            <li>The IFSC code is : <span>' + DataApi[data_b].ifsc + '</span></li>\
                                        </ul></div><hr>'
                ulElement.appendChild(liElement);
                index = index + 1;
            }
        }

    });
}
function banknameapi(){
    //var id = this.id;
    //console.log(id);
    var bank = document.getElementById("BankBox");
    var bank_name = bank.value;
    var city = document.getElementById("CityBox");
    var City = city.value;
    $.ajax({
       url: "rest/BankApi/",
       data : {
           "bank_name" : bank_name,
           "City" : City
       },
       type: 'GET',
       contentType : "application/json",
       success: function (response) {
           console.log(response);
           var ULElement = document.getElementById("BankResult");
           var count = 1;
           $("MainBody").css("overflow","scroll");
           $("ResultContainer2").css("overflow","scroll");
           $("BankResult").css("overflow","scroll");

           for (var data_b in response){

               var LIElement = document.createElement("li");
               LIElement.innerHTML = '<div id="BankInfo '+count+'"><span>Branch number '+count+'</span>\
                                        <ul id="BankInfoList '+count+'">\
                                            <li>Bank name is : <span>' + response[data_b].bank_name + '</span></li>\
                                            <li>The branch is : <span>' + response[data_b].branch + '</span></li>\
                                            <li>The city is : <span> ' + response[data_b].city + '</span></li>\
                                            <li>The district is : <span>' + response[data_b].district + '</span></li>\
                                            <li>The state is : <span>' + response[data_b].state + '</span></li>\
                                            <li>The address is: <span>' + response[data_b].address + '</span></li>\
                                            <li>The IFSC code is : <span>' + response[data_b].ifsc + '</span></li>\
                                           </ul></div><hr>';
               ULElement.appendChild(LIElement);
               count = count + 1;

           }

       }
    });

}