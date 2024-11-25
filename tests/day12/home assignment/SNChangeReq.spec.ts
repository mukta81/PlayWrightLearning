import { test, expect } from "@playwright/test";

let sysUniqueId: any;

test.describe.serial(`Servicenow Resource creation`, async () => {
  test(`Create incident using API Post method`, async ({ request }) => {
    const response = await request.post(
      `https://dev198115.service-now.com/api/now/table/change_request`,
      {
        headers: {
          "Content-Type": "application/json", //request -->
          Authorization: "Basic YWRtaW46TkZEMCRVc3I2ZD12", //admin:UY2mOUe^7p@f
        },
        data: {
          //body
          short_description: "Learning API via POstman",
        },
      }
    );
    const incidentRespose = await response.json(); //pm.response.json()
    console.log(response.status());
    console.log(incidentRespose.result.sys_id);
    sysUniqueId = incidentRespose.result.sys_id; //store the sys_id as global variable
    expect(response.status()).toBe(201);
    expect(response.statusText()).toBe("Created");
    console.log("url---" + response.url());
    console.log("text----" + (await response.text()));
    console.log("body----" + (await response.body()));

    console.log("particular data--", (await response.json()).result.sys_id);
  });

  test(`Get the incident using API GET method`, async ({ request }) => {
    const response = await request.get(
      `https://dev198115.service-now.com/api/now/table/change_request/${sysUniqueId}`,
      {
        headers: {
          "Content-Type": "application/json", //request -->
          Authorization: "Basic YWRtaW46TkZEMCRVc3I2ZD12", //admin:UY2mOUe^7p@f
        },
      }
    );
    const getspecificIncident = await response.json(); //pm.response.json()
    console.log(response.status());
    console.log(getspecificIncident.result.number);
    //store the sys_id as global variable
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
  });

  test(`Update the incident using API Patch method`, async ({ request }) => {
    const response = await request.patch(
      `https://dev198115.service-now.com/api/now/table/change_request/${sysUniqueId}`,
      {
        headers: {
          "Content-Type": "application/json", //request -->
          Authorization: "Basic YWRtaW46TkZEMCRVc3I2ZD12", //admin:UY2mOUe^7p@f
        },
        data: {
          short_description: "Learning API PATCH via POstman",
        },
      }
    );
    const updatedspecificIncident = await response.json(); //pm.response.json()
    console.log(response.status());
    //store the sys_id as global variable
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
    console.log(updatedspecificIncident);
  });


  test(`Update the incident using API PUT method`, async ({ request }) => {
    const response = await request.put(
      `https://dev198115.service-now.com/api/now/table/change_request/${sysUniqueId}`,
      {
        headers: {
          "Content-Type": "application/json", //request -->
          Authorization: "Basic YWRtaW46TkZEMCRVc3I2ZD12", //admin:UY2mOUe^7p@f
        },
        data: {
          short_description: "Learning API PUT via POstman",
        },
      }
    );
    const updatedspecificIncident = await response.json(); //pm.response.json()
    console.log(response.status());
    //store the sys_id as global variable
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
    console.log(updatedspecificIncident);
  });


  test(`Delete the incident using API Delete method`, async ({ request }) => {
    const response = await request.delete(
      `https://dev198115.service-now.com/api/now/table/change_request/${sysUniqueId}`,
      {
        headers: {
          "Content-Type": "application/json", //request -->
          Authorization: "Basic YWRtaW46TkZEMCRVc3I2ZD12", //admin:UY2mOUe^7p@f
        },
      }
    );
    // const deletedIncident=await response.json() //pm.response.json()
    console.log(response.status());
    //store the sys_id as global variable
    expect(response.status()).toBe(204);
    expect(response.statusText()).toBe("No Content");
  });

  // test(`endto end`,async({page})=>{
  // //login step
  // //click all
  // //filter->incident
  // //serach ->incident number -->pass the value get from the api
  // })
});
