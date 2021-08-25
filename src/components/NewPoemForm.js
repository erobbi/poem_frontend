import React from "react";
import {useState, useEffect} from 'react'

function NewPoemForm() {

    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");

    

    function handleClick() {
        let poemSubmit = {
            title: newTitle,
            poem: newContent
        }
        console.log(poemSubmit)
    }

    return (
        <div id="new-poem">
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