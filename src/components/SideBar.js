import SearchBar from "./SearchBar";
import PoemContainer from "./PoemsContainer";

function Sidebar({poemData, setSinglePoem}) {

  function handleClick(e) {
    const name = e.target.textContent
    poemData.forEach(poem => {
      if (poem.title === name) {
        setSinglePoem(poem.id)
      }
    })
  }

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
          {poemData.map((eachPoem) => <a className="item">{eachPoem.title}</a>)}
          
          <PoemContainer />
        </div>
      </div>
  );
}

export default Sidebar;
