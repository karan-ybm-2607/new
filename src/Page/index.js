import React from 'react'
import Styles from './index.module.scss'

const index = () => {
    return (
        <div className={Styles.MainContainer}    >
            <div> 1 </div>
            <div className={Styles.BodyContainer}        >
                <div className={Styles.SidebarContainer}        > 2.1 </div>
                <div className={Styles.ContentContainer}        > 2.2 </div>
            </div>
            <div> 3 </div>
        </div>
    )
}

export default index