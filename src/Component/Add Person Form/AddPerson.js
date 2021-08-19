import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Styles from './AddPerson.module.scss'
import swal from 'sweetalert';
import { Uploader, Alert, Loader, Icon } from 'rsuite';

const SuccessMsg = () => {
    swal({
        title: "Are you sure?",
        text: "Please check all detais carefully before saving",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Data added to record successfully", {
                    icon: "success",
                });
            } else {
                swal("Check all details and save again !");
            }
        });
}
const fileList = [];
const AddPerson = () => {
    const [uploading, setUploading] = React.useState(false);
    const [fileInfo, setFileInfo] = React.useState(null);
    return (
        <div>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="text" placeholder="Enter Name" className={Styles.Input} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control type="email" placeholder="Enter Email Address" className={Styles.Input} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="text" placeholder="Enter Age" className={Styles.Input} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control type="text" placeholder="Enter Cast" className={Styles.Input} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="text" placeholder="Enter Gotra" className={Styles.Input} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control type="email" placeholder="Enter Skin Tone" className={Styles.Input} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <FloatingLabel controlId="floatingSelect" label="I am a">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select Gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Others</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <FloatingLabel controlId="floatingTextarea2" label="About Yourself">
                            <Form.Control
                                as="textarea"
                                placeholder="Write something about yourself"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <div>
                        <p className={Styles.InputImg}>Image Upload</p>
                        <Uploader
                            listType="picture-text"
                            defaultFileList={fileList}
                            action="//jsonplaceholder.typicode.com/posts/"
                        />
                    </div>
                </Row>

            </Form>

            <ButtonToolbar aria-label="Toolbar with button groups" className="mt-5 justify-content-center">
                <ButtonGroup aria-label="Third group">
                    <Button className={Styles.BtnTheme} onClick={() => SuccessMsg()}>Save Changes</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
    )
}

export default AddPerson
