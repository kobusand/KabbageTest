<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="KabbageTest.aspx.cs" Inherits="KabbageTest.KabbageTest" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Kabbage Test</title>

    <link rel="stylesheet" type="text/css" href="css/main.css"/>

    <script language="javascript" type="text/javascript" src="scripts/KababgeTest_Main.js"></script>

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
                        <asp:Button ID="btnSubmit" runat="server" Text="Submit" />
                        <asp:Button ID="btnClear" runat="server" Text="Clear" />
                    </td> 
                </tr>
            </table>
       </div>
    </form>
</body>
</html>
