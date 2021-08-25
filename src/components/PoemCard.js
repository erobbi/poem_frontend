import React from "react";
import LikeButton from './LikeButton'
import NewPoemForm from './NewPoemForm'
import CommentForm from './CommentForm'
import CommentSection from './CommentSection'
import {useState, useEffect} from 'react'

function PoemCard() {

    

    return (
        <div id="poem-card" className="ui container">
            <LikeButton/>
            <NewPoemForm/>
            <CommentForm/>
            <CommentSection/>
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
                <p>Roses are red</p>
                <p>Violets are pale</p>
                <p>I can't for ruby</p>
                <p>To be on a rail</p>
            </div>
                <div className="ui black segment">
                    <div className="ui form">
                        <div className="field">
                            <input type="text" placeholder="Comment" maxLength="20"/>
                        </div>
                        <div className="ui submit button">Submit</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default PoemCard;