import React from "react";

import fetchApiData from "../actions/fetchEmpList";

import MainTable from "./MainTable";
import SearchBar from "./SearchBar";

// import savedData from "../data.json";

import { useState, useEffect } from "react";

function Main() {
  const [apiData, setApiData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [searchText, setSearchText] = useState("");

  const handleSearchText = (newText) => {
    if (newText) {
      setSearchText(newText);
      const searchResult = performSearch();
      setDisplayData(searchResult);
    } else {
      setDisplayData(apiData);
    }
  };

  const performSearch = () => {
    console.log("performSearch");
    return apiData.filter((o) =>
      Object.keys(o).some((k) =>
        o[k].toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  const fetchEmployees = async () => {
    setLoading(true);
    const response = await fetchApiData();
    setLoading(false);
    if (response.success) {
      setApiData(response.data);
      setDisplayData(response.data);
    } else {
      console.error(response.message);
      alert(response.message || "Something went wrong while fetching data.");
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div style={{ margin: "1rem 4rem" }}>
      <SearchBar handleSearchText={handleSearchText} />
      <MainTable apiData={displayData} loading={loading} />
    </div>
  );
}

export default Main;
