import { test, expect } from "@playwright/test";

let actoken: any;
let insturl: any;
let oppId: any
let firstId: any

test.describe.serial("Salesforce Opportunity creation", async () => {
test(`Generate Token`, async ({ request }) => {
  const response = await request.post(
    "https://login.salesforce.com/services/oauth2/token",
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Connection: "keep-alive",
      },
      form: {
        grant_type: "password",
        client_id:
          "3MVG9PwZx9R6_Ure0UB88C0o0EtzYTMfDhrdDPhv2OYY8QMISDZ._wNFMuhu5R9zWHrlanM47FILAkRrU4hhK",
        client_secret:
          "223C9439846D45A96537627DE047933E495A6CF952DCE7419773832F6578FACE",
        username: "mukta@testleaf.com",
        password: "qazwsx123",
      },
    }
  );

  const tokenResponse = await response.json();
  actoken = tokenResponse.access_token;
  insturl = tokenResponse.instance_url;
  console.log("The generated token is " + actoken);
  console.log("The instance url is " + insturl);
});

test(`Create a record using POST in SalesForce OPPORTUNITIES`, async ({ request }) => {
  const response = await request.post(`${insturl}/services/data/v59.0/sobjects/Opportunity`, {
    headers:{
      "Content-Type": "application/json",
      "Authorization": `Bearer ${actoken}`
    },
    data: {
      "Name": "Mukta Playwright",
      "StageName": "Qualification",
      "CloseDate": "2024-12-12",
      "Type": "Existing Customer - Upgrade"
  }
})

const createdOpp = await response.json()
//console.log(createdOpp)
oppId = createdOpp.id
console.log("Generated oppID is: "+oppId)
console.log(response.status())     
expect(response.status()).toBe(201)
expect(response.statusText()).toBe("Created")
});


test(`Retrieve all SalesForceOpportunity using GET`, async({request})=>{
  const response = await request.get(`${insturl}/services/data/v59.0/sobjects/Opportunity/`, {
    headers:{
      "Content-Type": "application/json",
      "Authorization": `Bearer ${actoken}`
    },
})

const fetchedAllOpp = await response.json()
firstId = fetchedAllOpp.recentItems[0].Id
console.log("Fetched First Id: "+ firstId)
console.log(response.status())     
expect(response.status()).toBe(200)
expect(response.statusText()).toBe("OK")
})



test(`Retrieve above posted SalesForceOpportunity using GET`, async({request})=>{
  console.log(insturl, actoken)
  const response = await request.get(`${insturl}/services/data/v59.0/sobjects/Opportunity/${oppId}`, {
    headers:{
      "Content-Type": "application/json",
      "Authorization": `Bearer ${actoken}`
    },
})

const fetchedOpp = await response.json()
//console.log(fetchedOpp.Id)
console.log(fetchedOpp.Id," , "+fetchedOpp.Type+" , "+fetchedOpp.StageName)
//console.log(fetchedOpp)
console.log(response.status())     
expect(response.status()).toBe(200)
expect(response.statusText()).toBe("OK")
})



test(`Update above posted SalesForceOpportunity using PATCH`, async({request})=>{
  console.log(insturl, actoken)
  const response = await request.patch(`${insturl}/services/data/v59.0/sobjects/Opportunity/${oppId}`, {
    headers:{
      "Content-Type": "application/json",
      "Authorization": `Bearer ${actoken}`
    },
    data:{
        "Type": "New Customer",
        "StageName": "Prospecting"
    }
})
console.log(response.status())     
expect(response.status()).toBe(204)
expect(response.statusText()).toBe("No Content")
})


test(`Retrieve above updated SalesForceOpportunity using GET`, async({request})=>{
  const response = await request.get(`${insturl}/services/data/v59.0/sobjects/Opportunity/${oppId}`, {
    headers:{
      "Content-Type": "application/json",
      "Authorization": `Bearer ${actoken}`
    },
})

const fetchedUpdOpp = await response.json()
console.log(fetchedUpdOpp.Id," , "+fetchedUpdOpp.Type+" , "+fetchedUpdOpp.StageName)
console.log(response.status())     
expect(response.status()).toBe(200)
expect(response.statusText()).toBe("OK")
})



test(`Delete first retrieved SalesForceOpportunity using DELETE`, async({request})=>{
  const response = await request.delete(`${insturl}/services/data/v59.0/sobjects/Opportunity/${firstId}`, {
    headers:{
      "Content-Type": "application/json",
      "Authorization": `Bearer ${actoken}`
    },
})

console.log(response.status())     
expect(response.status()).toBe(204)
expect(response.statusText()).toBe("No Content")
})

})
