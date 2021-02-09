//demo json postal information
var data =
{
    "address":
        [
            {
                "code": "RH10",
                "addresses": [
                    "Barclays Bank plc Po Box 1102 CRAWLEY RH10 0AG",
                    "Ultimate Technologies Ltd Po Box 1135 Maidenbower CRAWLEY RH10 0BX",
                    "Kiddesigns Po Box 1279 CRAWLEY RH10 0UR"
                ]
            },
            {
                "code": "SW1A",
                "addresses": [
                    "Southwest 15 30 Fore Street KINGSBRIDGE TQ7 1NY",
                    "House of Lords, Houses Of Parliament",
                    "House of Commons, Postmasters Redirection Service",
                    "Anthony Carter Ltd, Po Box 54896"
                ]
            }
        ]
}

//This resource comes from https://getaddress.io/
//The apikey can be found there. 
function findByPostCodeInternet(postcode, apikey = "apikey goes here") {
    $.ajax({
        contentType: "application/json",
        url: "https://api.getAddress.io/find/" + postcode + "?api-key=" + apikey + "",
        type: "GET",
        crossDomain: true,
        dataType: "json",
        success: function (data) {
            var countries = "";
            for (var i = 0; i < data.addresses.length; i++) {
                countries += "<p><a target='_blank' href='https://www.google.com/maps/search/" + data.addresses[i] + "'>" + data.addresses[i] + "</a><p>";
            }

            var ser = $(".searchresult");
            ser.append(countries);
        }
    });
}

function search() {
    var txt = $("#txtser");
    var ser = $(".searchresult");
    ser.text("");
    ser.css("display", "block");
    //var code = address.code.toLowerCase();
        /**comment this if findByPostCodeInternet() is used*/
        for (var i = 0; i < data.address.length; i++) {                
                    for(var ii=0;ii<data.address[i].addresses.length;ii++){
                        if(txt.val().length < 1) break;
                        if(data.address[i].code.toLowerCase().includes(txt.val().toLowerCase()))
                           ser.append("<p><a target='_blank' href='https://www.google.com/maps/search/" + data.address[i].addresses[ii] + "'>" + data.address[i].addresses[ii] + "</a><p>");                
                    }
        /** */
        //To find via https://getaddress.io/ api, call the findByPostCodeInternet() function and pas required params
        //findByPostCodeInternet(txt.val(), "key goes here");
    // }
    // else {
    //     change();
     }
}

function change() {
    $(".searchresult").text("");
    $(".searchresult").css("display", "none");
}

function cleared() {
    $("#txtser").keyup(function () {
        if (!this.value) {
            change();
        }
    });
}