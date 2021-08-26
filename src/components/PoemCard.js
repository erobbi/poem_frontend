import React from "react";
import LikeButton from './LikeButton'
import NewPoemForm from './NewPoemForm'
import CommentForm from './CommentForm'
import CommentSection from './CommentSection'
import {useState, useEffect} from 'react'
import EachLineRender from "./EachLineRender";

function PoemCard({ selectPoem, authorData }) {
    const [individualPoem, setIndividualPoem] = useState([])
    // console.log(authorData)
    let authorName = ""
    authorData.forEach(author => {
        if (author.id === individualPoem.author_id){
            authorName = author.name
        }
    })

    useEffect(() => {
        const fetchData = async () => {
            console.log(`http://localhost:9292/poems/${selectPoem}`)
            const res = await fetch(`http://localhost:9292/poems/${selectPoem}`)
            const newData = await res.json()
            console.log(newData)
            if ( newData!=(null) ) {
                setIndividualPoem(newData)
            }
        }
        
        fetchData()
    }, [selectPoem])

    console.log(individualPoem.content)


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
                <h1>{individualPoem.title}</h1>
            </div>
        <div className="ui segments">
            <div className="ui segment">
                <h2>By {authorName}</h2>
            </div>
            <div className="ui black segment">
                <p></p>
                {individualPoem.content ? individualPoem.content.split(",").map(e => {
                    e = e.replace(/["]+/g,'');
                    e = e.replace(/[\[\]']+/g,'');
                    console.log(e)
                    return (e.length > 0) ? <p>{e}</p> : <br/>
                    }) : ""    
                }
                {/* { individualPoem.content.forEach( (eachLine) => <p>{eachLine}</p> ) } */}
                {/* <p>Violets are pale</p>
                <p>I can't for ruby</p>
                <p>To be on a rail</p> */}
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