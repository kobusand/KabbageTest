﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="KabbageTest.aspx.cs" Inherits="KabbageTest.KabbageTest" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Kabbage Test</title>

    <link rel="stylesheet" type="text/css" href="css/main.css" />

    <script lang="javascript" type="text/javascript" src="scripts/KabbageTest_Main.js"></script>

</head>
<body>
    <form id="form1" runat="server">
        <div id="header">
            Kabbage API Test
        </div>

        <br />

        <div id="formContent" class="formContent">
            <table>
                <tr>
                    <td class="itemLabel">
                        First Name:
                    </td>

                    <td>
                        <asp:TextBox ID="txtFirstName" runat="server" Width="100px" />
                    </td>
                </tr>

                <tr>
                    <td class="itemLabel">
                        Last Name:
                    </td>

                    <td>
                        <asp:TextBox ID="txtLastName" runat="server" Width="100px" />
                    </td>
                </tr>

                <tr>
                    <td class="itemLabel">
                        Email:
                    </td>

                    <td>
                        <asp:TextBox ID="txtEmail" runat="server" Width="100px" />
                    </td>
                </tr>

                <tr>
                    <td class="itemLabel">
                        Business Name:
                    </td>

                    <td>
                        <asp:TextBox ID="txtBusName" runat="server" Width="100px" />
                    </td>
                </tr>

                <tr>
                    <td class="itemLabel">
                        Phone Number:
                    </td>

                    <td>
                        <asp:TextBox ID="txtPhone" runat="server" Width="100px" />
                    </td>
                </tr>

                <tr>
                    <td colspan="2" style="padding-top:5px; padding-bottom:5px;">
                        <asp:DropDownList ID="cmbType" runat="server" Width="100%" />
                    </td>
                </tr>

                <tr>
                    <td class="itemLabel">
                        Year:
                    </td>

                    <td>
                        <asp:TextBox ID="txtYear" runat="server" Width="100px" />
                    </td>
                </tr>

                <tr>
                    <td class="itemLabel">
                        Estimated Fico: 
                    </td>

                    <td>
                        <asp:TextBox ID="txtFico" runat="server" Width="100px" />
                    </td>
                </tr>

                <tr>
                    <td class="itemLabel">
                        Estimated Annual Revenue:
                    </td>

                    <td>
                        <asp:TextBox ID="txtRev" runat="server" Width="100px" />
                    </td>
                </tr>

                <tr>
                    <td class="itemLabel">
                        Gross Percentages From Cards:
                    </td>

                    <td>
                        <asp:TextBox ID="txtRevCards" runat="server" Width="100px" />
                    </td>
                </tr>

                <tr>
                    <td colspan="2" style="text-align:center;">
                        <asp:Button ID="btnSubmit" runat="server" Text="Submit" OnClientClick="btnSubmit_Click(); return false;" />
                        <asp:Button ID="btnClear" runat="server" Text="Clear" />
                    </td> 
                </tr>
            </table>
       </div>

       <div id="results" class="results_Hidden">
            <div id="resultsHeader" class="resultsHeader">
                <asp:Label ID="lblResultsDesc" runat="server" />
            </div>

            <br />
            <br />
                        
            <div id="resultsContent" class="resultsContent">
                <asp:Label ID="lblQualAmount" runat="server" />
            </div>  
                
            <div id="resultsButtons" class="resultsButtons">
                <asp:Button ID="btnSignup" runat="server" Text="Apply Now" Width="80px" OnClientClick="btnSignUp_Click();"/>
                <asp:Button ID="btnClose" runat="server" Text="Close" Width="80px" OnClientClick="btnClose_Click(); return false;" />
            </div> 

           <asp:HiddenField ID="hdnRedirect" runat="server" />
       </div>

       <div id="results_Failure" class="results_Hidden">
            <div id="results_Failure_Header" class="resultsHeader">
                <asp:Label ID="lblResultsFailure" runat="server" />
            </div>

            <br />
            <br />

            <div id="results_Failure_Buttons" class="resultsButtonsFailure">
                <asp:Button ID="btnCloseFailure" runat="server" Text="Close" Width="80px" OnClientClick="btnClose_Click(); return false;" />
            </div> 
       </div>
    </form>
</body>
</html>
