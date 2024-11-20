import { expect, test } from "playwright/test";
import { parse } from "csv-parse/sync";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//read login credentials from csv file
const valueLogin = parse(fs.readFileSync("data/day09login.csv", "utf-8"), {
  columns: true,
  skip_empty_lines: true,
});

//read Create Lead mandatory data from csv file
const valueCreateLead = parse(
  fs.readFileSync("data/day09CreateLead.csv", "utf-8"),
  {
    columns: true,
    skip_empty_lines: true,
  }
);

//read BASE_URL from environment file
dotenv.config({ path: path.resolve(__dirname, "../../../data/day09dev.env") });

//read dropdown values from JSON file
const dropDownJSON = JSON.parse(
  fs.readFileSync("data/day09dropdown.json", "utf-8")
);

//run test using two datas in login csv file
for (let eachData of valueLogin) {
  test(`LeafTaps with ${eachData.TestCaseId}`, async ({ page }) => {
    //open application URL from environment file
    const url = process.env.BASE_URL;
    await page.goto(url);

    //fill user details from CSV file
    await page.locator("#username").fill(eachData.userName);
    await page.locator("#password").fill(eachData.password);

    //click on login button
    await page.locator(".decorativeSubmit").click();

    //Click on CRM/SFA link
    await page.locator('text="CRM/SFA"').click();

    //Click on Leads
    await page.locator('text="Leads"').click();

    //Click on Create Lead
    await page.locator('text="Create Lead"').first().click();

    //enter mandatory details using index of data from csv file, read first data only
    await page.locator("#createLeadForm_companyName").fill(valueCreateLead[0].CompanyName);
    await page.locator("#createLeadForm_firstName").fill(valueCreateLead[0].firstName);
    await page.locator("#createLeadForm_lastName").fill(valueCreateLead[0].lastName);

    //locators of all dropdowns
    const source = page.locator("#createLeadForm_dataSourceId");
    const mrktCampaign = page.locator("#createLeadForm_marketingCampaignId");
    const industry = page.locator("#createLeadForm_industryEnumId");
    const currency = page.locator("#createLeadForm_currencyUomId");
    const country = page.locator("#createLeadForm_generalCountryGeoId");
    const state = await page.locator("#createLeadForm_generalStateProvinceGeoId");

    //select value of all dropdowns from multiple set of JSON before submitting
    for (let dropDownData of dropDownJSON) {
      await source.selectOption({ label: dropDownData.Source });
      await mrktCampaign.selectOption({ label: dropDownData.Marketing });
      await industry.selectOption({ label: dropDownData.Industry });
      await currency.selectOption({ value: dropDownData.Currency });
      await country.selectOption({ value: dropDownData.Country });
      await state.selectOption({ value: dropDownData.State });
    }

    //count and print all the values in the Marketing Campaign dropdown
    const countMrktCampaign = await mrktCampaign.locator("option").count();
    console.log(`Total no of options in Marketing Campaign: ${countMrktCampaign - 1}`);
    const allValuesMrktCampaign = await mrktCampaign.locator("option").allInnerTexts();
    const valueMrketCampaign = allValuesMrktCampaign.slice(1);
    console.log("All options in Marketing Campaign: " + valueMrketCampaign);

    //count and print of all values in the states dropdown
    const countState = await state.locator("option").count();
    console.log(`Total no of options in States: ${countState - 1}`);
    const allValuesState = await state.locator("option").allInnerTexts();
    const valueState = allValuesState.slice(1);
    console.log("All options in States: " + valueState);

    //click submit
    await page.locator(".smallSubmit").click();
  });
}
