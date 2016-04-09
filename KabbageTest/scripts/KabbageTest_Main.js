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
    //firstName = "John";
    //lastName = "Doe";
    //email = "john.doe@company.com";
    //busName = "Acme Inc.";
    //phone = "800-555-1234";
    //year = "2003";
    //fico = "601";
    //annRev = "99000";
    //grossPerc = "85";
    //type = "AutoRepair";

    getKabbageQual(firstName, lastName, email, busName, phone, type, year, fico, annRev, grossPerc);
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

function getKabbageQual(firstName, lastName, email, busName, phone, type, year, fico, annRev, grossPerc) {

}
