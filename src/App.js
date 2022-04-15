import axios from "axios";
import React, { useEffect, useState } from "react";
import StatusMonitor from "./components/StatusMonitor";

import "./App.css";

function App() {
  //state variables to store response data from API
  const [dataApiAll, setDataApiAll] = useState([]);
  const [assetsData, setAssetsData] = useState("");
  const [accountsData, setAccountsData] = useState("");
  const [customersData, setCustomersData] = useState("");
  const [datapointsData, setDatapointsData] = useState("");
  const [devicesData, setDevicesData] = useState("");
  const [documentsData, setDocumentsData] = useState("");
  const [formsData, setFormsData] = useState("");
  const [invitesData, setInvitesData] = useState("");
  const [mediaData, setMediaData] = useState("");
  const [messagesData, setMessagesData] = useState("");
  const [namespacesData, setNamespacesData] = useState("");
  const [ordersData, setOrdersData] = useState("");
  const [patientsData, setPatientsData] = useState("");
  const [relationshipsData, setRelationshipsData] = useState("");
  const [rulesData, setRulesData] = useState("");
  const [templatesData, setTemplatesData] = useState("");
  const [usersData, setUsersData] = useState("");
  const [workflowsData, setWorkflowsData] = useState("");

  //state boolean var to control when to fetch data.
  const [requestTimeout, setRequestTimeout] = useState(true);

  //fetching data from api everytime requestTimeout is true, which is set to by the timer function
  useEffect(() => {
    if (requestTimeout) {
      fetchTest();
      //fetchDataFromAPI();
      //timer();
    }
    setRequestTimeout(false);
  }, [requestTimeout]);

  //this variable controls the time interval between API calls.
  const timerInterval = 15000;

  //this function triggers the api call after a time interval with setTimeout
  const timer = () => {
    setTimeout(() => {
      setRequestTimeout(true);
    }, timerInterval);
  };

  const fetchTest = () => {
    const setEndpoint = (endpoint) => {
      return `https://api.factoryfour.com/${endpoint}/health/status`;
    };
    // const accountsRes = axios.get(setEndpoint("users"));
    // const assetsRes = axios.get(setEndpoint("assets"));

    const accountsRes = axios.get(setEndpoint("accounts"));
    const assetsRes = axios.get(setEndpoint("assets"));

    // accountsRes.then(console.log("hola then")).catch((err) => console.log(err));

    // Promise.allSettled([accountsRes, assetsRes])
    //   .then(
    //     axios.spread((...allData) => {
    //       console.log(allData);
    //       console.log(allData[0]);
    //       setAccountsData(allData[0]);
    //       setAssetsData(allData[1]);
    //     })
    //   )
    //   .catch((err) => console.log(err));

    Promise.allSettled([accountsRes, assetsRes])
      .then((dataaa) => setDataApiAll(dataaa))
      .catch((err) => console.log(err));
  };

  //main function
  const fetchDataFromAPI = () => {
    //setting endpoints in a more flexible way
    const setEndpoint = (endpoint) => {
      return `https://api.factoryfour.com/${endpoint}/health/status`;
    };

    //vars to capture the api responses
    const accountsRes = axios.get(setEndpoint("accounts"));
    const assetsRes = axios.get(setEndpoint("assets"));
    const customersRes = axios.get(setEndpoint("customers"));
    const datapointsRes = axios.get(setEndpoint("datapoints"));
    const devicesRes = axios.get(setEndpoint("devices"));
    const documentsRes = axios.get(setEndpoint("documents"));
    const formsRes = axios.get(setEndpoint("forms"));
    const invitesRes = axios.get(setEndpoint("invites"));
    const mediaRes = axios.get(setEndpoint("media"));
    const messagesRes = axios.get(setEndpoint("messages"));
    const namespacesRes = axios.get(setEndpoint("namespaces"));
    const ordersRes = axios.get(setEndpoint("orders"));
    const patientsRes = axios.get(setEndpoint("patients"));
    const relationshipsRes = axios.get(setEndpoint("relationships"));
    const rulesRes = axios.get(setEndpoint("rules"));
    const templatesRes = axios.get(setEndpoint("templates"));
    const usersRes = axios.get(setEndpoint("users"));
    const workflowsRes = axios.get(setEndpoint("workflows"));
    const test = axios.get("https://api.github.com/users/lipitt");

    //a combination of promise.allsettled and axios.spread to set the data in the corresponding vars
    Promise.allSettled([
      accountsRes,
      assetsRes,
      customersRes,
      datapointsRes,
      devicesRes,
      documentsRes,
      formsRes,
      invitesRes,
      mediaRes,
      messagesRes,
      namespacesRes,
      ordersRes,
      patientsRes,
      relationshipsRes,
      rulesRes,
      templatesRes,
      usersRes,
      workflowsRes,
      test,
    ])
      .then(
        axios.spread((...allData) => {
          setAccountsData(allData[0]);
          setAssetsData(allData[1]);
          setCustomersData(allData[2]);
          setDatapointsData(allData[3]);
          setDevicesData(allData[4]);
          setDocumentsData(allData[5]);
          setFormsData(allData[6]);
          setInvitesData(allData[7]);
          setMediaData(allData[8]);
          setMessagesData(allData[9]);
          setNamespacesData(allData[10]);
          setOrdersData(allData[11]);
          setPatientsData(allData[12]);
          setRelationshipsData(allData[13]);
          setRulesData(allData[14]);
          setTemplatesData(allData[15]);
          setUsersData(allData[16]);
          setWorkflowsData(allData[17]);
        })
      )
      .catch((err) => console.log("holisss"));
  };

  return (
    <div className="App">
      {/* passing the stored api data as props */}

      {dataApiAll.map((item) => {
        return <StatusMonitor apiData={item} />;
      })}
      {/* <StatusMonitor name="ACCOUNTS" apiData={accountsData} />
      <StatusMonitor name="ASSETS" apiData={assetsData} />
      <StatusMonitor name="CUSTOMERS" apiData={customersData} />
      <StatusMonitor name="DATAPOINTS" apiData={datapointsData} />
      <StatusMonitor name="DEVICES" apiData={devicesData} />
      <StatusMonitor name="DOCUMENTS" apiData={documentsData} />
      <StatusMonitor name="FORMS" apiData={formsData} />
      <StatusMonitor name="INVITES" apiData={invitesData} />
      <StatusMonitor name="MEDIA" apiData={mediaData} />
      <StatusMonitor name="MESSAGES" apiData={messagesData} />
      <StatusMonitor name="NAMESPACES" apiData={namespacesData} />
      <StatusMonitor name="ORDERS" apiData={ordersData} />
      <StatusMonitor name="PATIENTS" apiData={patientsData} />
      <StatusMonitor name="RELATIONSHIPS" apiData={relationshipsData} />
      <StatusMonitor name="RULES" apiData={rulesData} />
      <StatusMonitor name="TEMPLATES" apiData={templatesData} />
      <StatusMonitor name="USERS" apiData={usersData} />
      <StatusMonitor name="WORKFLOWS" apiData={workflowsData} /> */}
    </div>
  );
}

export default App;
