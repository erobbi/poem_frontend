import React from 'react';
import {useState, useEffect} from 'react'

const Poem = ({ selectPoem, authorData }) => {

    const [newComment, setNewComment] = useState("");
    const [individualPoem, setIndividualPoem] = useState([])

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
        <div className="ui container">
        <div className="ui segments">
            <div className="ui segment">
                <h1 id="poem-title">{individualPoem.title}</h1>
            </div>
        <div className="ui segments">
            <div className="ui segment">
                <h2 id="poem-author">By {authorName}</h2>
            </div>
        <div className="ui black segment">
            <p id="poem-body">
                {individualPoem.content ? individualPoem.content.split(",").map(e => {
                    e = e.replace(/["]+/g,'');
                    e = e.replace(/[\[\]']+/g,'');
                    return (e.length > 0) ? <p>{e}</p> : <br/>
                    }) : ""}
                    </p>
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

export default Poem;
