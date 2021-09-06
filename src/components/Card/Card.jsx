import React from 'react'
import style from './Card.module.css'

const Card = ({repo, cotributors, languages}) => {
    console.log(languages)
    return (
        <div className={style.container}>
            <div className={style.card}>
                <img src={repo.owner.avatar_url} alt=""/>
                <div className={style.name}>{repo.name}</div>
                <div className={style.stars}>{repo.stargazers_count}</div>
            </div>
            <div className={style.cotributors}>
                {cotributors.map((c, index) =>
                    <div key={index} className={style.items}>{index+1}. {c.login}</div>
                )}
            </div>
        </div>
    ) 
}

export default Card