function btnSubmit_Click() {
    var controlID = "";
    var textBox = null;
    var dropDown = null;

    var firstName = "";
    var lastName = "";
    var email = "";
    var busName = "";
    var phone = "";
    var type = "";
    var fico = "";
    var annRev = "";
    var grossPerc = "";
    var year = "";
    var error = "";

    //Retrieves data from textBoxes
    firstName = getTextboxValue("txtFirstName");
    lastName = getTextboxValue("txtLastName");
    email = getTextboxValue("txtEmail");
    busName = getTextboxValue("txtBusName");
    phone = getTextboxValue("txtPhone");
    fico = getTextboxValue("txtFico");
    annRev = getTextboxValue("txtRev");
    grossPerc = getTextboxValue("txtRevCards");
    year = getTextboxValue("txtYear");

    //Retrieves data from combo box
    type = getDropdownValue("cmbType");

    //For Testing
    firstName = "John";
    lastName = "Doe";
    email = "john.doe@company.com";
    busName = "Acme Inc.";
    phone = "800-555-1234";
    year = "2003";
    fico = "601";
    annRev = "99000";
    grossPerc = "85";
    type = "AutoRepair";

    //Formats text properly.
    grossPerc = grossPerc.replace("%", "");
    annRev = annRev.replace(",", "");
    annRev = annRev.replace("$", "");
    fico = fico.replace(",", "");
    fico = fico.replace("$", "");

    error = validateData(firstName, lastName, email, busName, phone, type, year, fico, annRev, grossPerc);

    if (error == "") {
        getKabbageQual(firstName, lastName, email, busName, phone, type, year, fico, annRev, grossPerc);
    }
    else {
        alert(error);
    }
}

function getTextboxValue(controlID) {
    var textBox = null;
    var value = "";

    textBox = document.getElementById(controlID);
    value = textBox.value;

    return value;
}

function getDropdownValue(controlID) {
    var dropDown = null;
    var value = "";

    dropDown = document.getElementById(controlID);
    value = dropDown.value;

    return value;
}

function validateData(firstName, lastName, email, busName, phone, type, year, fico, annRev, grossPerc) {
    var text = "";

    if (firstName == "") {
        text = "Please enter a First Name";
    }
    else if (lastName == "") {
        text = "Please enter a Last Name";
    }
    else if (email == "") {
        text = "Please enter an email address";
    }
    else if (email.search("@") == -1) {
        text = "Your email address is incorrect";
    }
    else if (busName == "") {
        text = "Your business name is invalid";
    }
    else if (phone == "") {
        text = "Your phone number is incorrect";
    }
    else if (type == "ChooseaTypeofBusiness") {
        text = "Please select a business type";
    }
    else if (year == "" || isNaN(parseFloat(year))) {
        text = "The year you've entered in is incorrect";
    }
    else if (fico == "" || isNaN(parseFloat(fico))) {
        text = "Your FICO amount is incorrect";
    }
    else if (annRev == "" || isNaN(parseFloat(annRev))) {
        text = "Your annual revenue is incorrect";
    }
    else if (grossPerc == "" || isNaN(parseFloat(grossPerc))) {
        text = "Your gross revenue from cards is incorrect";
    }

    return text;
}

function getKabbageQual(firstName, lastName, email, busName, phone, type, year, fico, annRev, grossPerc) {
    var apiKey = "vauwg9sbqkrdnzdmr7eyk92t"
    var xhttp = new XMLHttpRequest();
    var api = "https://api.kabbage.com/v2/prequalify";
    var jsonResponse = null;
    var qual = "";
    var amount = "";
    var qualUrl = "";
    var url = "?"

    //Creates URL string
    url = url + "&firstName=" + encodeURIComponent(firstName);
    url = url + "&lastName=" + encodeURIComponent(lastName);
    url = url + "&emailAddress=" + encodeURIComponent(email);
    url = url + "&businessName=" + encodeURIComponent(busName);
    url = url + "&phoneNumber=" + encodeURIComponent(phone);
    url = url + "&yearStarted=" + encodeURIComponent(year);
    url = url + "&estimatedFICO=" + encodeURIComponent(fico);
    url = url + "&estimatedAnnualRevenue=" + encodeURIComponent(annRev);
    url = url + "&grossPercentageFromCards=" + encodeURIComponent(grossPerc);
    url = url + "&typeOfBusiness=" + encodeURIComponent(type);
    url = url + "&api_key=" + encodeURIComponent(apiKey);

    //Sends data to API
    xhttp.open("POST", api, false);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.setRequestHeader("Cache-Control", "no-cache")
    xhttp.send(url);

    //Parse data to JSON
    jsonResponse = JSON.parse(xhttp.responseText);
    qual = jsonResponse["Qualified"];
    amount = jsonResponse["QualifyAmount"];
    qualUrl = jsonResponse["RedirectUrl"];

    //If success show succcess window else show failure window
    if (qual == true) {
        ShowQualifiedSuccess(firstName, amount, qualUrl);
    }
    else {
        ShowQualifiedFail();
    }
}


function ShowQualifiedSuccess(firstName, qualAmount, url) {
    var controlID = "";
    var div = null;
    var label = null;
    var hiddenField = null;

    controlID = "results";
    div = document.getElementById(controlID);
    div.className = "results";

    controlID = "formContent";
    div = document.getElementById(controlID);
    div.className = "formContent_Hidden"

    controlID = "lblResultsDesc";
    label = document.getElementById(controlID);
    label.innerHTML = "Congratulations " + firstName + ",  you qualified!";

    controlID = "lblQualAmount";
    label = document.getElementById(controlID);
    label.innerHTML = "Qualified Amount: $" + qualAmount;

    //Retrieves Redirect URL from hidden field
    controlID = "hdnRedirect";
    hiddenField = document.getElementById(controlID);
    hiddenField.value = url;
}

function ShowQualifiedFail() {
    var controlID = "";
    var div = null;
    var label = null;
    var button = null;

    controlID = "results_Failure";
    div = document.getElementById(controlID);
    div.className = "results";

    controlID = "formContent";
    div = document.getElementById(controlID);
    div.className = "formContent_Hidden"

    controlID = "lblResultsFailure";
    label = document.getElementById(controlID);
    label.innerHTML = "We regret to inform you that you did not qualify.";
}

function btnClose_Click() {
    var controlID = "";
    var div = null;

    controlID = "results";
    div = document.getElementById(controlID);
    div.className = "results_Hidden";

    controlID = "results_Failure";
    div = document.getElementById(controlID);
    div.className = "results_Hidden";

    controlID = "formContent";
    div = document.getElementById(controlID);
    div.className = "formContent"
}




