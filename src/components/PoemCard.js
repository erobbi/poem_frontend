import React from "react";
import NewPoemForm from "./NewPoemForm";
import PoemRender from "./PoemRender";
import { useState } from "react";
import { Link } from "react-router-dom";

function PoemCard({ selectPoem, authorData }) {
  const [isNewPoem, setIsNewPoem] = useState(false);

  function renderPoem() {
    setIsNewPoem(false);
  }

  function renderPoemForm() {
    setIsNewPoem(true);
  }

  return (
    <div>
      <div id="nav-bar-container" class="ui container">
        <h1>PO(tato)EMS</h1>
        <div id="nav-bar" className="ui three item menu">
          <a onClick={renderPoemForm} className="item">
            New Poem
          </a>
          <a onClick={renderPoem} className="item">
            Poem
          </a>
            <Link style={{ color: "black" }} to="/">
                 <a className="item">Log-Out</a>
            </Link>
        </div>
      </div>
      {!isNewPoem ? (
        <PoemRender selectPoem={selectPoem} authorData={authorData} />
      ) : (
        <NewPoemForm authorData={authorData} />
      )}
    </div>
  );
}

export default PoemCard;
