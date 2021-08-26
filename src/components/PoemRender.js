import React from 'react';
import {useState, useEffect} from 'react'
import CommentSection from './CommentSection';


const Poem = ({ selectPoem, authorData }) => {

    const [newComment, setNewComment] = useState("");
    const [individualPoem, setIndividualPoem] = useState([])
    const [poemLikes, setPoemLikes] = useState(0);

    let authorName = ""
    authorData.forEach(author => {
        if (author.id === individualPoem.author_id){
            authorName = author.name
        }
    })

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:9292/poems/${selectPoem}`)
            const newData = await res.json()
            if ( newData!=(null) ) {
                setIndividualPoem(newData)
                setPoemLikes(newData.likes)
            }
        }
        fetchData()
    }, [selectPoem])

    function handleClick() {
            fetch(`http://localhost:9292/poems/${selectPoem}/like/`)
                .then(res => res.json())
                .then(data => updateLikes(data))

                function updateLikes(data) {
                    setPoemLikes(data.likes)
                }
    }


    return (
        <div id="render-container" className="ui container">
        <div className="ui segments">
            <div id="render-segments" className="ui segment">
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
                        {/* <div className="field">
                            <input type="text" placeholder="Comment" maxLength="20"/>
                        </div> */}
                            <div id="like-button" class="ui labeled button" tabindex="0">
                                <div class="ui gray button">
                                    <i onClick={handleClick} class="heart icon"></i> Like
                                </div>
                                <a class="ui basic gray left pointing label">
                                {poemLikes}
                                </a>
                                </div>
                        {/* <div id="comment-submit" className="ui submit button">Submit</div> */}
                    </div>
                </div>
                {/* <div className="ui black segment">
                    <CommentSection />
                </div> */}
            </div>
        </div>
        </div>
    );
}

export default Poem;
