import React from 'react';
import PoemCard from './PoemCard'
import SideBar from './SideBar'
import {useState, useEffect} from 'react'


const MainContainer = () => {

    const [poemData, setPoemData] = useState([])
    const [authorData, setAuthorData] = useState([])
    const [isSideBar, setSideBar] = useState(false);


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
            const res = await fetch ('http://localhost:9292/authors')
            const newData = await res.json()
            setAuthorData(newData)
        }

        fetchData()
    }, [])

    console.log(poemData)
    console.log(authorData)

    function openSideBar() {
        setSideBar(true)
    }

    function closeSideBar() {
        setSideBar(false)
    }

    return (
        <div id="main-page">
            <button id="sidebar-button" class="ui icon button">{isSideBar ? <i class="x icon" onClick={closeSideBar}/> : <i class="search icon" onClick={openSideBar} />}</button>
            {isSideBar ? <SideBar poemData = {poemData}/> : '' }
            <PoemCard />
        </div>
    );
}

export default MainContainer;
