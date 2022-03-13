import React from "react";

import axios from "axios";

import savedData from "../data.json";

import MainTable from "./MainTable";

function Main() {
  // const [apiData, setApiData] = React.useState([]);
  const [apiData, setApiData] = React.useState(savedData.data);
  const [loading, setLoading] = React.useState(false);

  const fetchApiData = async () => {
    // setLoading(true);
    const url =
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

    try {
      const apiData = await axios.get(url);
      const data = apiData.data;
      // console.log(data);
      // setLoading(false);
      return data;
    } catch (e) {
      // console.error(e);
      throw e;
    }
  };

  React.useEffect(() => {
    // console.log(apiData);
    //   (async function () {
    //     console.log("Main re-rendered");
    //     const data = await fetchApiData();
    //     setApiData(data);
    //   })();
  }, [apiData]);

  return (
    <>
      <MainTable apiData={apiData} loading={loading} />
    </>
  );
}

export default Main;
