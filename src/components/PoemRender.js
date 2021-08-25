import React from 'react';
import { useState } from 'react';

const Poem = () => {

    const [newComment, setNewComment] = useState("");

    function handleClick() {
        console.log(newComment)
    }

    return (
        <div>
            <div id="nav-bar" className="ui three item menu">
                <a className="item">New Poem</a>
                <a className="item">View Comments</a>
                <a className="item">Other?</a>
            </div>
        <div className="ui segments">
            <div className="ui segment">
                <h1>Ruby on Rails</h1>
            </div>
        <div className="ui segments">
            <div className="ui segment">
                <p>By William Badger</p>
            </div>
            <div className="ui black segment">
                <p>{newComment}</p>
            </div>
                <div className="ui black segment">
                    <form>
                    <div className="ui form">
                        <div className="field">
                            <label>Please type "/n" at the end of each line</label>
                            <textarea 
                            type="textarea" 
                            placeholder="Comment"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
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

export default Poem;