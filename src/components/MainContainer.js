import React from 'react';
import PoemCard from './PoemCard'
import SideBar from './SideBar'
import {useState, useEffect} from 'react'


const MainContainer = () => {

    const [poemData, setPoemData] = useState([])
    const [authorData, setAuthorData] = useState([])


    useEffect(() =>{
        const fetchData = async () => {
            const res = await fetch ('http://localhost:9293/poems')
            const newData = await res.json()
            setPoemData(newData)
        }

        fetchData()
    }, [])

    useEffect(() =>{
        const fetchData = async () => {
            const res = await fetch ('http://localhost:9293/authors')
            const newData = await res.json()
            setAuthorData(newData)
        }

        fetchData()
    }, [])

    console.log(poemData)
    console.log(authorData)

    return (
        <div>
            <PoemCard />
            <SideBar poemData = {poemData}/>
        </div>
    );
}

export default MainContainer;
