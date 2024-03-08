import './form.css'
import * as React from 'react';
import Container from '@mui/material/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { validateName, validatePhoneNumber, validateEmail } from './formFunction';
import { Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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
    })
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
            let check = JSON.parse(localStorage.getItem("resumeData"))
            if (check) {
                let send = {
                    ...check,
                    ...formDetails
                }
                const data = JSON.stringify(send)
                localStorage.setItem("resumeData", data)
                location.href = "/resume"
            } else {
                const data = JSON.stringify(formDetails)
                console.log(formDetails)
                localStorage.setItem("resumeData", data)
                location.href = "/resume"
            }
        }
    }

    const data = JSON.parse(localStorage.getItem("resumeData"));

    function deleteData(id) {
        const newArray = data.qualification.filter(obj => obj.id != id);
        data.qualification = newArray
        localStorage.setItem("resumeData", JSON.stringify(data))
        window.location.reload();
    }

    return (
        <Container maxWidth="lg" className='resume-form'>
            <Form>
                <h1>personal details</h1>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control value={formDetails.yourName} type="text" required placeholder="Your name" name='yourName' onChange={handleFormChange} />
                            <span className='error-lable'>{formDetails.yourName && !fullNameState.state ? fullNameState.message : ""}</span>
                        </Form.Group>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={formDetails.email} type="email" placeholder="email" name='email'
                                onChange={handleFormChange} />
                            <span className='error-lable'>{formDetails.email && !emailState.state ? emailState.message : ""}</span>
                        </Form.Group>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Phone no</Form.Label>
                            <Form.Control value={formDetails.phoneNo} type="number" placeholder="phone no" name='phoneNo'
                                onChange={handleFormChange} maxLength="11" />
                            <span className='error-lable'>{formDetails.phoneNo && !phoneNumberState.state ? phoneNumberState.message : ""}</span>
                        </Form.Group>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Address</Form.Label>
                            <Form.Control value={formDetails.address} type="text" placeholder="address" name='address'
                                onChange={handleFormChange} />
                        </Form.Group>
                    </Grid>
                </Grid>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Summary</Form.Label>
                    <Form.Control value={formDetails.summary} as="textarea" rows={3} name='summary'
                        onChange={handleFormChange} />
                </Form.Group>
                <hr />
                <h1>Professional Details</h1>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Proffesion</Form.Label>
                    <Form.Control value={formDetails.profession} type="text" placeholder="profession" name='profession'
                        onChange={handleFormChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Career Objective</Form.Label>
                    <Form.Control value={formDetails.careerObjective} as="textarea" rows={3} name='careerObjective'
                        onChange={handleFormChange} />
                </Form.Group>
                <hr />
                <h1>Work Experience <span>(Optional)</span></h1>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Company</Form.Label>
                    <Form.Control value={formDetails.company} type="text" placeholder="company" name='company'
                        onChange={handleFormChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Role in Comapny</Form.Label>
                    <Form.Control value={formDetails.roleInCompany} type="text" placeholder="Role in company" name='roleInCompany' onChange={handleFormChange} />
                </Form.Group>
                <hr />
                <h1>Qualification <span>(Optional)</span></h1>
                <div>
                    <div className='qualification'>{data && data.qualification && data.qualification.map((v) => (
                        <div key={v.id} className='mt-3 mb-3 d-flex justify-content-between'>
                            <div>
                                <h4>{v.schoolName}</h4>
                                <p>{v.faculty} - {v.passingYear}</p>
                            </div>
                            <Container className='d-flex justify-content-end'>
                                <Button onClick={() => deleteData(`${v.id}`)} variant='danger' style={{ width: "50px", height: "50px" }}>
                                    <CloseIcon />
                                </Button>
                            </Container>
                        </div>
                    ))}</div>
                </div>
                <Button variant="dark" onClick={() => setModalShow(true)}>
                    + Add Your Qualification
                </Button>
                <AddQualification
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <br />
                <Button type='submit' className='mt-3' variant='primary' onClick={submitResume}>Generate Resume</Button>

            </Form>
        </Container>
    )
}


function AddQualification(props) {
    let [edu, setQualification] = React.useState({
        schoolName: '',
        faculty: '',
        passingYear: '',
    })

    const addQualification = (e) => {
        const { name, value } = e.target;
        setQualification({
            ...edu,
            [name]: value
        });
    };

    function saveData() {
        if (edu.schoolName == "" || edu.faculty == "" || edu.passingYear == "") {
            alert("Please fill all fields")
            return false
        }
        const data = JSON.parse(localStorage.getItem("resumeData"))

        if (data) {
            edu.id = data.qualification.length +
                data.qualification.push(edu);
            localStorage.setItem("resumeData", JSON.stringify(data))
            props.onHide();
        } else {
            edu.id = 1
            let arr = []
            arr.push(edu)
            let sender = {
                ...data,
                qualification: arr
            }
            localStorage.setItem("resumeData", JSON.stringify(sender))
            props.onHide();
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='open-modal'
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
                    <Form.Control value={edu.schoolName} type="text" placeholder="University/College name" name='schoolName' onChange={addQualification} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Faculty</Form.Label>
                    <Form.Control value={edu.faculty} type="text" placeholder="Faculty" name='faculty' onChange={addQualification} />
                </Form.Group>
                <Form.Group value={edu.passingYear} className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Year Passing</Form.Label>
                    <Form.Control type="number" placeholder="passing year" name='passingYear' onChange={addQualification} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={saveData}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ResumeForm

