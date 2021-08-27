import React from "react";
import NewPoemForm from "./NewPoemForm";
import PoemRender from "./PoemRender";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function PoemCard({ selectPoem, authorData }) {
  const [isNewPoem, setIsNewPoem] = useState(false);
  let history = useHistory()

  function renderPoem() {
    setIsNewPoem(false);
  }

  function renderPoemForm() {
    setIsNewPoem(true);
  }

  function logout() {
      console.log('helllo logout')
      history.push('/')
  }

  return (
    <div>
      <div id="nav-bar-container" class="ui container">
        <h1>🥔 PO(tato)EMS 🥔</h1>
        <div id="nav-bar" className="ui three item menu">
          <a onClick={renderPoemForm} className="item">
            New Poem
          </a>
          <a onClick={renderPoem} className="item">
            Poem
          </a>
        <a className="item" onClick={logout}>Log-Out</a>
        </div>
      </div>
      {!isNewPoem ? (
        <PoemRender selectPoem={selectPoem} authorData={authorData} />
      ) : (
        <NewPoemForm authorData={authorData} />
      )}

      <h3>Website by William Badger, Daniel Ezekiel, and Eli Robbins 🥔</h3>
    </div>
  );
}

export default PoemCard;
