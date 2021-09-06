const SET_REPOS = "SET_REPOS"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_PAGE = "SET_PAGE"
const SET_ERROR = "SET_ERROR"


const defaultState = {
    items: [],
    isFetching : true,
    currentPage: 1,
    perPage: 10,
    totalCount:0,
    isError: false,
    plants: [{
        id: 1,
        name: "Rose",
        type: "цветковые растения",
        
    }]
}

export default function reposReducer(state = defaultState, action){
    switch(action.type){
        case SET_REPOS:
            return {
                ...state,
                items: action.payload.items,
                isFetching: false,
                totalCount: action.payload.total_count,
            }
        case SET_IS_FETCHING:
                return {
                    ...state,
                    isFetching: action.payload
                }
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                isError: action.payload
            }
        default:
            return state
    }
}


export const setRepos = (repos) => ({type: SET_REPOS, payload: repos})
export const setIsFetching = (bool) => ({type: SET_IS_FETCHING, payload: bool})
export const setPage = (page) => ({type: SET_PAGE, payload: page})
export const setError = (bool) => ({type: SET_ERROR, payload: bool})