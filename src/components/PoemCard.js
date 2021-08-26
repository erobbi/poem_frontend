import React from "react";
import LikeButton from './LikeButton'
import NewPoemForm from './NewPoemForm'
import CommentForm from './CommentForm'
import CommentSection from './CommentSection'
import PoemRender from "./PoemRender"

function PoemCard({ selectPoem, authorData }) {
    return (
        <div> 
            <PoemRender selectPoem={selectPoem} authorData={authorData}/>
            <LikeButton/>
            <NewPoemForm/>
            <CommentForm/>
            <CommentSection/>
        </div>
    );
}

export default PoemCard;



