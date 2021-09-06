import React, { useState } from 'react'
import './Repo.css'

import Card from '../Card/Card'
import MyModal from '../UI/MyModal/MyModal'
import {getCotributors, getLanguages} from '../../actions/index'

const  Repo = ({repo}) => {

    const [visible, setVisible] = useState(false)
    const [cotributors, setCotributors] = useState([])
    const [languages, setLanguages] = useState({})

    const closeModal = () => setVisible(false)

    const clickHandler = () => {
        getCotributors(repo.owner.login, repo.name, setCotributors)
        getLanguages(repo.owner.login, repo.name, setLanguages)
        setVisible(true)
    }

    return (
        <div className="repo">
            <div className="repo-header">
                <button className="btn" onClick={() => clickHandler()}>
                <div className="repo-header-name">{repo.name}</div>
                </button>
                <div className="repo-header-stars">Количество звезд: {repo.stargazers_count}</div>
            </div>
            <div className="repo-last-commit">Последний коммит: {repo.updated_at}</div>
            <a href={repo.html_url} className="repo-link">Ссылка на репозиторий: {repo.html_url}</a>
            <MyModal setVisible={closeModal} visible={visible}>
                {cotributors.length ?  <Card repo={repo} cotributors={cotributors} languages={languages}></Card> : <p>Lodaing...</p> } 
            </MyModal>
        </div>
    );
}

export default Repo