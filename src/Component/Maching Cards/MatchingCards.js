import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ReadMoreReact from 'read-more-react';
import { Modal } from 'rsuite';
import Styles from './MatchingCards.module.scss';

function DataContainerModal(props) {
    console.log(props.cardMdelDetails)
    return (
        <Modal
            {...props}

            full
        >
            <Modal.Header className={Styles.ModalHeader}> </Modal.Header>
            <Modal.Body>
                <div className={Styles.ModalCards}>
                    <div>
                        <Image src={props.cardMdelDetails.ProfileImg} className={Styles.ModalImg} />
                    </div>
                    <div className={Styles.DetailsContainer}>
                        <div className={Styles.ModalName}>Name: <span>{props.cardMdelDetails.Name}</span></div>
                        <div className={Styles.ModalGender}>Address: <span>{props.cardMdelDetails.Address}</span></div>
                        <div style={{ display: 'inline-flex', justifyContent: 'space-between', width: '100%' }}>
                            <div className={Styles.ModalCast}>Email Address: <span>{props.cardMdelDetails.Email}</span></div>
                            <div className={Styles.ModalCast}>Contact No: <span>{props.cardMdelDetails.ContactNo}</span></div>
                        </div>
                        <div style={{ display: 'inline-flex', justifyContent: 'space-between', width: '100%' }}>
                            <div className={Styles.ModalGender}>Religion: <span>{props.cardMdelDetails.Religion}</span></div>
                            <div className={Styles.ModalGender}>Color: <span>{props.cardMdelDetails.Color}</span></div>
                        </div>
                        <div style={{ display: 'inline-flex', justifyContent: 'space-between', width: '100%' }}>
                            <div className={Styles.ModalGender}>Gnder: <span>{props.cardMdelDetails.Gender}</span></div>
                            <div className={Styles.ModalGender}>Age: <span>{props.cardMdelDetails.Age}</span></div>
                        </div>
                        <div style={{ display: 'inline-flex', justifyContent: 'space-between', width: '100%' }}>
                            <div className={Styles.ModalCast}>Cast: <span>{props.cardMdelDetails.Cast}</span></div>
                            <div className={Styles.ModalCast}>Gotra: <span>{props.cardMdelDetails.Gotra}</span></div>
                        </div>
                        <div className={Styles.ModalCast}>Occupation: <span>{props.cardMdelDetails.Occupation}</span></div>
                        <div className={Styles.ModalCast}>Biography: <span>{props.cardMdelDetails.Desc}</span></div>

                    </div>
                </div>
            </Modal.Body>

        </Modal>
    );
}


const MatchingCards = (props) => {
    const { id, Name, Age, Excerpt, ProfileImg } = props.CardDetails
    const [modalShow, setModalShow] = React.useState(false);
    const [CardMdelDetails, setCardMdelDetails] = useState({})
    const showCardDetails = (CardDetails) => {
        console.log(CardDetails)
        setCardMdelDetails(CardDetails)
        setModalShow(true)
    }
    return (
        <div className={Styles.CardContainer}>
            <Card style={{ width: '20rem', border: 'none', borderRadius: 35 }} key={id} onClick={() => showCardDetails(props.CardDetails)}>
                <Card.Img variant="top" className={Styles.ProfileImage} src={ProfileImg} />
                <Card.Body className={`${Styles.CardContainerBody} ${Styles.NameBody}`} >
                    <div className={Styles.BasicDetails}>
                        <Card.Title className={Styles.Name}>{Name}</Card.Title>
                        <Card.Text className={Styles.Age}>{Age}</Card.Text>
                    </div>
                    <Card.Text>
                        <ReadMoreReact
                            text={Excerpt}
                            min={100}
                            ideal={100}
                            max={120}
                            readMoreText="Read More"
                        />
                    </Card.Text>
                </Card.Body>

                <Card.Body className={Styles.CardContainerBody}>
                    <Card.Link>See Details</Card.Link>
                </Card.Body>
            </Card>

            <DataContainerModal
                show={modalShow}
                className={Styles.Modal90w}
                onHide={() => setModalShow(false)}
                cardMdelDetails={CardMdelDetails}
            />
        </div >
    )
}

export default MatchingCards
