import React from 'react'


function SideBarPoemItem({setSelectPoem, eachPoem}) {

    function handleClick(e) {
        console.log(e.target.id)
        setSelectPoem(e.target.id)
    }
    return (
            <a onClick={handleClick} id={eachPoem.id} className="item">{eachPoem.title}</a>
    )
}

export default SideBarPoemItem


// 