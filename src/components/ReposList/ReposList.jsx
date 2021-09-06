import React , {useEffect, useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "./ReposList.module.css"
//functions
import {getRepo} from '../../actions/index'
//components
import Filter from '../Filter/Filter'
import Repo from '../Repo/Repo'
import Pagination from '../Pagination/Pagination'
import Error from '../Error/Error'

const ReposList = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const IsFetching = useSelector(state => state.repos.isFetching)
    const currentPage = useSelector(state => state.repos.currentPage)
    const perPage = useSelector(state => state.repos.perPage)
    const isError = useSelector(state => state.repos.isError)
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        dispatch(getRepo(inputValue, currentPage, perPage))
    }, [currentPage])

    const inputHandler = () => {
        dispatch(getRepo(inputValue, currentPage, perPage))
    }

    if(isError){
        return <Error></Error>
    }

    return (
     <div className={style.main}>
         <Filter inputHandler={inputHandler} inputValue={inputValue} setInputValue={setInputValue}></Filter>
         {
            IsFetching ? <p>Loading...</p> : (repos.map(item => (<Repo repo={item} key={item.id}></Repo>))) 
         }  
        {
            IsFetching ? <></> : <Pagination currentPage={currentPage}></Pagination>
        }
     </div>
   
    )
}

export default ReposList