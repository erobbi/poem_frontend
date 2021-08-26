import React from "react";
import LikeButton from './LikeButton'
import NewPoemForm from './NewPoemForm'
import CommentForm from './CommentForm'
import CommentSection from './CommentSection'
import PoemRender from "./PoemRender"
import { useState } from 'react';

function PoemCard({ selectPoem, authorData }) {

    const [isNewPoem, setIsNewPoem] = useState(false);

    function renderPoem() {
        setIsNewPoem(false)
    }

    function renderPoemForm() {
        setIsNewPoem(true)
    }

    return (
        <div> 
            <div id="nav-bar-container" class="ui container">
            <div id="nav-bar" className="ui three item menu">
                <a onClick={renderPoemForm} className="item">New Poem</a>
                <a onClick={renderPoem} className="item">Poem</a>
                <a className="item">Log-Out</a>
            </div>
            </div>
            {!isNewPoem ? <PoemRender selectPoem={selectPoem} authorData={authorData}/> : <NewPoemForm/> }
        </div>
    );
}

export default PoemCard;



