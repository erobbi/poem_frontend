import React from "react";
import LikeButton from './LikeButton'
import NewPoemForm from './NewPoemForm'
import CommentForm from './CommentForm'
import CommentSection from './CommentSection'
import {useState, useEffect} from 'react'

function PoemCard() {

    useEffect(() => {
        fetch("http://localhost:9293/poems")
        .then((r) => r.json())
        .then((data) => {
          console.log(data)
        })
      }, [])

    return (
        <div id="poem-card" className="ui container">
            <LikeButton/>
            <NewPoemForm/>
            <CommentForm/>
            <CommentSection/>
            <div id="nav-bar" class="ui three item menu">
                <a class="item">New Poem</a>
                <a class="item">View Comments</a>
                <a class="item">Other?</a>
            </div>
        <div class="ui segments">
            <div class="ui segment">
                <h1>Ruby on Rails</h1>
            </div>
        <div class="ui segments">
            <div class="ui segment">
                <p>By William Badger</p>
            </div>
            <div class="ui black segment">
                <p>Roses are red</p>
                <p>Violets are pale</p>
                <p>I can't for ruby</p>
                <p>To be on a rail</p>
            </div>
                <div class="ui black segment">
                    <div class="ui form">
                        <div class="field">
                            <input type="text" placeholder="Comment" maxLength="20"/>
                        </div>
                        <div class="ui submit button">Submit</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default PoemCard;