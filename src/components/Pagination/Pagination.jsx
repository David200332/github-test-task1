import React from 'react'
import { useDispatch } from 'react-redux'
import style from './Pagination.module.css'

import {setPage} from '../../reducer/reposReducer'

const Pagination = ({currentPage}) => {
    const dispatch = useDispatch();
    const pages = Array.from({length: 10}, (v, k) => k+1) //[1,2,3...10]
    
    return (
        <div className={style.pages}>
        {
            pages.map((item, key) => {
                return <span 
                key={key} 
                className={currentPage === item ? style.currentpage : style.page}
                onClick={() => dispatch(setPage(item))}
                >{item}</span>
            })
        }
    </div>
    )
}   

export default Pagination