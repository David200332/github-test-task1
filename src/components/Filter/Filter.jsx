import React from 'react'
import style from './Filter.module.css'

function Filter({inputHandler, inputValue, setInputValue}){

    return (
        <div className={style.wapper}>   
            <input type="text" placeholder="Enter name" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={inputHandler}>Find</button>
        </div>
    )
}

export default Filter