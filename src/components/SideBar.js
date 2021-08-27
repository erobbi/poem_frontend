import SearchBar from "./SearchBar";
import PoemContainer from "./PoemsContainer";
import SideBarPoemItem from "./SideBarPoemItem";
import { useState } from "react";

function Sidebar({ poemData, setSelectPoem }) {
  const [search, setSearch] = useState("");

  const searchItems = poemData.filter((poem) => {
    return poem.title.toLowerCase().includes(search.toLowerCase());
  });

  let poem = searchItems || poemData;

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div id="side-bar">
      <SearchBar />
      <div id="sidebar" className="ui left fixed vertical menu">
        <div className="item">
          <div className="ui transparent icon input">
            <input
              type="text"
              placeholder="Search Poems..."
              onChange={handleChange}
            />
            <i className="search icon"></i>
          </div>
        </div>

        {poem.map((eachPoem) => (
          <SideBarPoemItem
            key={eachPoem.id}
            setSelectPoem={setSelectPoem}
            eachPoem={eachPoem}
          />
        ))}

        <PoemContainer />
      </div>
    </div>
  );
}

export default Sidebar;
