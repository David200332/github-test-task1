import axios from 'axios'
import { setRepos, setIsFetching, setError } from '../reducer/reposReducer'

export const getRepo = (searchQuery, currentPage, perPage) => {
    if(searchQuery === ""){
        searchQuery = "stars:%3E1"
    }

    return async(dispatch) => {

        try{     
            dispatch(setIsFetching(true))
            const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
            dispatch(setRepos(response.data))
            dispatch(setIsFetching(false))
        }catch(e){
            setError(true)
        }

    }   
}

export const getCurrentRepo = async (username, repoName, setRepo) => {
    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
    setRepo(response.data)
}

export const getCotributors = async (username, repoName, setContributors) => {
    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}/contributors?page=1&per_page=10`)
    setContributors(response.data)
}

export const getLanguages = async(username, repoName, setLang) => {
    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}/languages`)
    setLang(response.data)
}