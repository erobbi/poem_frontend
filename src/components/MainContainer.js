import React from "react";
import PoemCard from "./PoemCard";
import SideBar from "./SideBar";
import { useState, useEffect } from "react";
import axios from "axios";

const MainContainer = () => {
  const [poemData, setPoemData] = useState([]);
  const [authorData, setAuthorData] = useState([]);
  const [isSideBar, setSideBar] = useState(true);
  const [selectPoem, setSelectPoem] = useState("");

  useEffect(
    () => {
      const fetchData = async () => {
        const res = await fetch("http://localhost:9292/poems");
        const newData = await res.json();
        setPoemData(newData);
        if (selectPoem.length == 0) {
          setSelectPoem(newData[0].id);
        }
      };
      fetchData();

      const interval = setInterval(() => {
        fetchData();
      }, 10000);
      return () => clearInterval(interval);
    },
    // this will refetch poems every 10 seconds, to fetch any new poems that have been added to the DB
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:9292/authors");
      const newData = await res.json();
      setAuthorData(newData);
    };
    fetchData();
  }, []);

  function openSideBar() {
    setSideBar(true);
  }

  function closeSideBar() {
    setSideBar(false);
  }

  return (
    <div id="main-page">
      <button id="sidebar-button" class="ui icon button">
        {isSideBar ? (
          <i class="x icon" onClick={closeSideBar} />
        ) : (
          <i class="search icon" onClick={openSideBar} />
        )}
      </button>
      {isSideBar ? (
        <SideBar poemData={poemData} setSelectPoem={setSelectPoem} />
      ) : (
        ""
      )}
      <PoemCard selectPoem={selectPoem} authorData={authorData} />
    </div>
  );
};

export default MainContainer;
