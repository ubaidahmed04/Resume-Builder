import './form.css'
import * as React from 'react';
import Container from '@mui/material/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { validateName, validatePhoneNumber, validateEmail } from './formFunction';
import { json } from 'react-router-dom';


function ResumeForm() {
    const [modalShow, setModalShow] = React.useState(false);

    const [formDetails, setDetails] = React.useState({
        yourName: '',
        email: '',
        phoneNo: '',
        address: '',
        summary: '',
        profession: '',
        careerObjective: '',
        company: '',
        roleInCompany: '',
        qualification: [],
    })
    // console.log(formDetails)
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setDetails({
            ...formDetails,
            [name]: value
        });
    };


    const fullNameState = validateName(formDetails.yourName)
    const phoneNumberState = validatePhoneNumber(formDetails.phoneNo)
    const emailState = validateEmail(formDetails.email)
console.log(formDetails)

    const submitResume = (e) => {
        e.preventDefault();
        if (formDetails.yourName == '') {
            alert("Please enter your name")
            return
        } else if (formDetails.email == "") {
            alert("please enter your email")
            return
        } else if (formDetails.phoneNo == "") {
            alert("please enter your phone no")
            return
        } else if (formDetails.address == "") {
            alert("please enter your address")
            return
        } else if (formDetails.summary == "") {
            alert("please enter your summary")
            return
        } else if (formDetails.profession == "") {
            alert("please enter your profession")
            return
        } else if (formDetails.careerObjective == "") {
            alert("please enter your career objective")
            return
        } else {
            const data = JSON.stringify(formDetails)
            localStorage.setItem("resumeData", data)
            console.log(data)
        }
    }


    return (
        <Container maxWidth="lg" className='resume-form'>
            <Form>
                <h1>personal details</h1>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" required placeholder="Your name" name='yourName' onChange={handleFormChange} />
                    <span className='error-lable'>{formDetails.yourName && !fullNameState.state ? fullNameState.message : ""}</span>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="email" name='email'
                        onChange={handleFormChange} />
                        <span className='error-lable'>{formDetails.email && !emailState.state ? emailState.message : ""}</span>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Phone no</Form.Label>
                    <Form.Control type="number" placeholder="phone no" name='phoneNo'
                        onChange={handleFormChange} maxLength={11}/>
                        <span className='error-lable'>{formDetails.phoneNo && !phoneNumberState.state ? phoneNumberState.message : ""}</span>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Address</Form.Label>
                    <Form.Control type="text" placeholder="address" name='address'
                        onChange={handleFormChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Summary</Form.Label>
                    <Form.Control as="textarea" rows={3} name='summary'
                        onChange={handleFormChange} />
                </Form.Group>
                <hr />
                <h1>Professional Details</h1>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Proffesion</Form.Label>
                    <Form.Control type="text" placeholder="profession" name='profession'
                        onChange={handleFormChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Career Objective</Form.Label>
                    <Form.Control as="textarea" rows={3} name='careerObjective'
                        onChange={handleFormChange} />
                </Form.Group>
                <hr />
                <h1>Work Experience <span>(Optionnal)</span></h1>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" placeholder="company" name='company'
                        onChange={handleFormChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Role in Comapny</Form.Label>
                    <Form.Control type="text" placeholder="Role in company" name='roleInCompany' onChange={handleFormChange} />
                </Form.Group>
                <hr />
                <h1>Qualification</h1>
                <Button variant="info" onClick={() => setModalShow(true)}>
                    + Add Your Qualification
                </Button>
                <AddQualification
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <br />
                <Container className='mt-3 d-flex justify-content-end'>
                    <Button type='submit' variant='primary' onClick={submitResume}>Generate Resume</Button>
                </Container>
            </Form>
        </Container>
    )
}


function AddQualification(props) {
    const [qualification, setQualification] = React.useState({
        schoolName: '',
        faculty: '',
        passingYear: '',
    })

    const addQualification = (e) => {
        const { name, value } = e.target;
        setQualification({
            ...qualification,
            [name]: value
        });
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Your Qualification
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>University/College name</Form.Label>
                    <Form.Control type="text" placeholder="University/College name" name='schoolName' onChange={addQualification} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Faculty</Form.Label>
                    <Form.Control type="text" placeholder="Faculty" name='faculty' onChange={addQualification} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Year Passing</Form.Label>
                    <Form.Control type="text" placeholder="passing year" name='passingYear' onChange={addQualification} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ResumeForm

