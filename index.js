//demo json postal information
var data =
{
    "address":
        [
            {
                "code": "RH10",
                "addresses": [
                    { "name": "Barclays Bank plc Po Box 1102 CRAWLEY RH10 0AG", "info": "Addition information of address goes here" },
                    { "name": "Ultimate Technologies Ltd Po Box 1135 Maidenbower CRAWLEY RH10 0BX", "info": "Addition information of address goes here" },
                    { "name": "Kiddesigns Po Box 1279 CRAWLEY RH10 0UR", "info": "Addition information of address goes" }
                ]
            },
            {
                "code": "SW1A",
                "addresses": [
                    { "name": "Southwest 15 30 Fore Street KINGSBRIDGE TQ7 1NY", "info": "Addition information of address goes here" },
                    { "name": "House of Lords, Houses Of Parliament", "info": "Addition information of address goes here" },
                    { "name": "House of Commons, Postmasters Redirection Service", "info": "Addition information of address goes here" },
                    { "name": "Anthony Carter Ltd, Po Box 54896", "info": "Addition information of address goes here" }

                ]
            }
        ]
}




//$('.collapse').collapse()


//This resource comes from https://getaddress.io/
//The apikey can be found there. 
function findByPostCodeInternet(postcode) {
    var txt = $("#txtser");
    var ser = $("#acclist");
    ser.text("");
    ser.css("display", "block");
    var item = "";

    ser.css("display", "block");
    $.ajax({
        contentType: "application/json",
        url: "https://nominatim.openstreetmap.org/search/" + postcode + "?format=json",
        type: "GET",
        crossDomain: true,
        dataType: "json",
        success: function (data) {
            ser.text("");
            var countries = "";
            for (var i = 0; i < data.length; i++) {
                if (txt.val().length < 3) break;
                //countries += "<p>"+data[i].display_name+"<p>";
                // countries += "<div class='accordion' id='accordionExample'><div class='card'><div class='card-header' id='headingOne'><h2 class='mb-0'><button class='btn btn-link' type='button' data-toggle='collapse' data-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>" + data[i].display_name + "</button></h2></div><div id='collapseOne' class='collapse show' aria-labelledby='headingOne' data-parent='#accordionExample'><div class='card-body'><p class=''>More information goes here</p></div></div></div></div>";

                var heading = "heading" + ii;
                var collapse = "collapse" + ii;

                ser.append("<div class='card'><div class='card-header' id='" + heading + "'><h2 class='mb-0'><button class='btn btn-link' type='button' data-toggle='collapse' data-target='#" + collapse + "' aria-expanded='true' aria-controls='" + collapse + "'>" + data[i].display_name + "</button></h2></div><div id='" + collapse + "' class='collapse' aria-labelledby='" + heading + "' data-parent='#acclist'><div class='card-body'><p class=''>" + data[i].display_name + "</p></div></div></div>");
            }
        }
    });
}

function search() {
    var txt = $("#txtser");
    var ser = $("#acclist");
    ser.text("");
    ser.css("display", "block");
    var item = "";
    //var code = address.code.toLowerCase();
    /**comment this if findByPostCodeInternet() is used*/
    for (var i = 0; i < data.address.length; i++) {
        for (var ii = 0; ii < data.address[i].addresses.length; ii++) {
            if (txt.val().length < 1) break;
            if (data.address[i].code.toLowerCase().includes(txt.val().toLowerCase())) {
                //ser.append("<p><a target='_blank' href='https://www.google.com/maps/search/" + data.address[i].addresses[ii].name + "'>" + data.address[i].addresses[ii].name + "</a><p>");     
                var heading = "heading" + ii;
                var collapse = "collapse" + ii;

                ser.append("<div class='card'><div class='card-header' id='" + heading + "'><h2 class='mb-0'><button class='btn btn-link' type='button' data-toggle='collapse' data-target='#" + collapse + "' aria-expanded='true' aria-controls='" + collapse + "'>" + data.address[i].addresses[ii].name + "</button></h2></div><div id='" + collapse + "' class='collapse' aria-labelledby='" + heading + "' data-parent='#acclist'><div class='card-body'><p class=''>" + data.address[i].addresses[ii].name + "</p></div></div></div>");
            }

        }
    }
}

function change() {
    $("#acclist").text("");
    $("#acclist").css("display", "none");
}

function cleared() {
    $("#txtser").keyup(function () {
        if (!this.value) {
            change();
        }
    });
}