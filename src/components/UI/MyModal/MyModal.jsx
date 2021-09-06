import React from 'react'
import style from './MyModal.module.css'

const MyModal = ({children, setVisible, visible}) => {
    
    const rootClasses = [style.myModal]

    if (visible) {
        rootClasses.push(style.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible()}>
            <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal