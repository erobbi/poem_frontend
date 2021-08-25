import React from "react";
import LikeButton from './LikeButton'
import NewPoemForm from './NewPoemForm'
import CommentForm from './CommentForm'
import CommentSection from './CommentSection'
import PoemRender from './PoemRender';
import {useState, useEffect} from 'react'

function PoemCard() {
    

    return (
        <div id="poem-card" className="ui container">
            <LikeButton/>
            <CommentForm/>
            <CommentSection/>
            {/* <PoemRender /> */}
        <NewPoemForm/>
    </div>
    );
}

export default PoemCard;