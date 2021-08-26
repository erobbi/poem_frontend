import React from "react";
import {useState, useEffect} from 'react'
const axios = require("axios");


function NewPoemForm() {

    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");
    const [poemSubmitted, setPoemSubmitted] = useState(false)

    

    function handleClick() {
        let poemSubmit = {
            author_id: 5,
            title: newTitle,
            poem: newContent
        }
        
      axios.post('http://localhost:9292/newpoem', {
        author_id: 5,
        title: newTitle,
        content: newContent
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
    }

    return (
        <div id="new-poem" class="ui container">
            <div className="ui segments">
            <div className="ui segment">
                <h1>New Poem</h1>
            </div>
        <div className="ui segments">
            <div className="ui segment">
            <form>
                    <div className="ui form">
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
                        <div className="ui submit button" type="submit" onClick={handleClick}>Submit</div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}

export default NewPoemForm;