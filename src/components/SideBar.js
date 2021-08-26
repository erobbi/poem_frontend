import SearchBar from "./SearchBar";
import PoemContainer from "./PoemsContainer";
import SideBarPoemItem from "./SideBarPoemItem";

function Sidebar({poemData, setSelectPoem}) {

  return (
    <div id="side-bar">
        <SearchBar />
        <div id="sidebar" className="ui left fixed vertical menu">
          <div className="item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search Poems..." />
              <i className="search icon"></i>
            </div>
          </div>

          {/* return list here */}
          {poemData.map((eachPoem) => <SideBarPoemItem key={eachPoem.id} setSelectPoem={setSelectPoem} eachPoem={eachPoem} />)}
          
          <PoemContainer />
        </div>
      </div>
  );
}

export default Sidebar;
