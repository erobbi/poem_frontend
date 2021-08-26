import React from 'react';
import PoemCard from './PoemCard'
import SideBar from './SideBar'
import {useState, useEffect} from 'react'


const MainContainer = () => {

    const [poemData, setPoemData] = useState([])
    const [authorData, setAuthorData] = useState([])
    const [isSideBar, setSideBar] = useState(true);
    const [selectPoem, setSelectPoem] = useState()


    // default poem will just be the first in the database
    useEffect(() => {
        setSelectPoem(7)
    }, [])
    
    useEffect(() =>{
        const fetchData = async () => {
            const res = await fetch ('http://localhost:9292/poems')
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

    function openSideBar() {
        setSideBar(true)
    }

    function closeSideBar() {
        setSideBar(false)
    }

    return (
        <div id="main-page">
            <button id="sidebar-button" class="ui icon button">{isSideBar ? <i class="x icon" onClick={closeSideBar}/> : <i class="search icon" onClick={openSideBar} />}</button>
            {isSideBar ? <SideBar poemData = {poemData} setSelectPoem={setSelectPoem}/> : '' }
            <PoemCard selectPoem={selectPoem} authorData = {authorData}/>
        </div>
    );
}

export default MainContainer;
