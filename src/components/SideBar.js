import SearchBar from "./SearchBar";
import PoemContainer from "./PoemsContainer";

function Sidebar({poemData}) {

  console.log(poemData)

  return (
    <div id="side-bar">
      <SearchBar />
        <div className="ui left fixed vertical menu">
          <div className="item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search Poems..." />
              <i className="search icon"></i>
            </div>
          </div>

          {/* return list here */}
          {poemData.map((eachPoem) => <a className="item">{eachPoem.title}</a>)}
          
          <PoemContainer />
        </div>
      </div>
  );
}

export default Sidebar;
