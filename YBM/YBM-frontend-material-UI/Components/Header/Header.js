import React from 'react'
import styles from './Header.module.css'
import ProfileSection from './ProfileSection'

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={`${styles.HeaderContainer} w-full flex justify-end flex-1`}>

                <div className={styles.profileSection}>
                    <ProfileSection />
                </div>

            </div>
        </div>
    )
}

export default Header