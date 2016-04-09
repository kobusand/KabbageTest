using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace KabbageTest
{
    public partial class KabbageTest : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            LoadBusinessTypes();
        }

        private void LoadBusinessTypes()
        {
            //Ideally this would come from a database
            List<String> types = new List<String>();

            cmbType.Items.Clear();

            types.Add("Choose a Type of Business");
            types.Add("Accounting");
            types.Add("Amusement");
            types.Add("Auto Repair");
            types.Add("Business Services");
            types.Add("Catering");
            types.Add("Child Care");
            types.Add("Computer Services");
            types.Add("Consumer Goods Retail Store");
            types.Add("Consumer Goods Online Store");
            types.Add("Consumer Goods Online And Offline");
            types.Add("Construction");
            types.Add("Dentists");
            types.Add("DryCleaning");
            types.Add("Equipment");
            types.Add("FoodServices");
            types.Add("Grocery");
            types.Add("Health");
            types.Add("HomeRepair");
            types.Add("Hotels");
            types.Add("Insurance");
            types.Add("Janitorial");
            types.Add("Landscape");
            types.Add("Optometrists");
            types.Add("Physician");
            types.Add("Restaurants");
            types.Add("Salons");
            types.Add("Taxis");
            types.Add("Trucking");
            types.Add("Veterinarians");

            cmbType.Items.Add(new ListItem(types[0], types[0].Replace(" ", "")));

            for (Int32 i = 1; i < types.Count; i++)
            {
                cmbType.Items.Add(new ListItem(types[i], types[i].Replace(" ", "")));

            }
        }
    }
}