import SearchBar from "./SearchBar";
import PoemContainer from "./PoemsContainer";

function Sidebar() {


  return (
    <div>
      <SearchBar />
      <div id="main-page">
        <div class="ui left fixed vertical menu">
          <div class="item">
            <div class="ui transparent icon input">
              <input type="text" placeholder="Search Poems..." />
              <i class="search icon"></i>
            </div>
          </div>
          <a class="item">Poem Name</a>
          <a class="item">Poem Name</a>
          <a class="item">Poem Name</a>
          <PoemContainer />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
