import React from 'react'
import MatchingCards from '../Maching Cards/MatchingCards'
import Styles from './BodyContainer.module.scss'
import ProfileCardData from '../../DATA/MarigeProfile'
const BodyContent = () => {
    const ProfileCard = ProfileCardData.map(data => {
        // console.log(data)
        return (

            <MatchingCards CardDetails={data} key={data.id} />

        )
    })

    return (
        <div>

            <div className={Styles.Tagline}>Profiles</div>
            <div className={Styles.ContentContainer}>

                {ProfileCard}

            </div>
        </div>
    )
}

export default BodyContent
