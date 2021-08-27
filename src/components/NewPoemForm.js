import React from "react";
import { useState, useEffect } from "react";
const axios = require("axios");

function NewPoemForm({ authorData }) {
  const [newUser, setNewUser] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [poemSubmitted, setPoemSubmitted] = useState(false);

  let userListArray = [];
  let userListObjects = [];
  function userList() {
    authorData.map((eachAuthor) => {
      if (eachAuthor.is_user === true) {
        userListArray.push(eachAuthor);
        userListObjects.push(
          <option
            value={eachAuthor.id}
            onClick={(e) => setNewUser(e.target.value)}
          >
            {eachAuthor.name}{" "}
          </option>
        );
      }
    });
    // maybe add an alphabatizer sort here
    // this should really be on backend
  }
  userList();

  function handleClick() {
    let poemSubmit = {
      author_id: 5,
      title: newTitle,
      poem: newContent,
    };

    axios
      .post("http://localhost:9292/newpoem", {
        author_id: newUser,
        title: newTitle,
        content: newContent,
      })
      .then(function (res) {
        if (res.data.error) {
          alert(res.data.error);
        } else {
          setPoemSubmitted(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    setNewContent("");
    setNewTitle("");
    setNewUser("");
  }

  return (
    <div id="new-poem" class="ui container">
      <div className="ui segments">
        <div id="new-segments" className="ui segment">
          <h1>New Poem</h1>
        </div>
        <div className="ui segments">
          <div className="ui segment">
            <form>
              <div className="ui form">
                <select class="ui search dropdown">
                  <option value="">User</option>
                  {userListObjects}
                </select>
                <div className="field">
                  <input
                    type="text"
                    placeholder="Title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    required
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="ui blue segment">
            <form>
              <div className="ui form">
                <div className="field">
                  <textarea
                    type="textarea"
                    placeholder="Poem"
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    required
                  />
                </div>
                <div
                  className="ui submit button"
                  type="submit"
                  onClick={handleClick}
                >
                  Submit
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPoemForm;
