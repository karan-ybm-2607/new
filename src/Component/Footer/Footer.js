import React from 'react'
import Styles from './Footer.module.scss'
const Footer = () => {
    return (
        <div className={`${Styles.Footer} d-flex justify-content-center`}>
            <h4 className={Styles.Credit}>Aman Chandra</h4>
        </div>
    )
}

export default Footer
