import React from 'react'
import "./resume.css"
import { Button } from 'react-bootstrap'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Resume() {
    const quotesRef = React.useRef(null);
    const data = JSON.parse(localStorage.getItem("resumeData"))

    const makePDF = () => {
        const quotes = quotesRef.current;

        html2canvas(quotes).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgWidth = 210; // PDF width
            const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate PDF height
            pdf.addImage(imgData, 0, 0, imgWidth, imgHeight);
            pdf.save('resume.pdf'); // Download the PDF
        });
    };

    return (
        <div className='main'>
            <NavLink to="/">
                <ArrowBackIcon className='icon' />
            </NavLink>
            <div className="container" ref={quotesRef}>
                <div className="header">
                    <div className="full-name">
                        <span className="first-name">{data?.yourName}</span>
                    </div>
                    <div className="contact-info">
                        <span className="email">Email: </span>
                        <span className="email-val">{data?.email}</span>
                        <span className="separator" />
                        <span className="phone">Phone: </span>
                        <span className="phone-val">{data?.phoneNo}</span>
                        <span className="separator" />
                        <span className="phone">Street Address: </span>
                        <span className="phone-val">{data?.address}</span>
                    </div>
                    <div className="about">
                        <span className="position">{data?.profession} </span>
                        <span className="desc">
                            {data.careerObjective}
                        </span>
                    </div>
                </div>
                <div className="details">
                    <div className="section">
                        <div className="section__title">Experience</div>
                        <div className="section__list">
                            <div className="section__list-item">
                                <div className="left">
                                    {data.company ? (
                                        <>
                                            <div className="name">{data?.company}</div>
                                            <div className="duration">{data?.roleInCompany}</div>
                                        </>
                                    ) : (
                                        <li>
                                            Fresh
                                        </li>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="section">
                        <div className="section__title">Education</div>
                        <div className="section__list">
                            <div className="section__list-item">
                                {
                                    data?.qualification.length ? (
                                        <>
                                            <div className="left">
                                                <div className="name">Sample Institute of technology</div>
                                                <div className="addr">San Fr, CA</div>
                                                <div className="duration">Jan 2011 - Feb 2015</div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            Middle
                                        </>
                                    )
                                }
                                {/* <div className="right">
                                <div className="name">Fr developer</div>
                                <div className="desc">did This and that</div>
                            </div> */}
                            </div>

                        </div>
                    </div>
                    <div className="section">
                        {/* <div className="section__title">Skills</div> */}
                        {/* <div className="skills">
                        <div className="skills__item">
                            <div className="left">
                                <div className="name">Javascript</div>
                            </div>
                            <div className="right">
                                <input id="ck1" type="checkbox" defaultChecked="" />
                                <label htmlFor="ck1" />
                                <input id="ck2" type="checkbox" defaultChecked="" />
                                <label htmlFor="ck2" />
                                <input id="ck3" type="checkbox" />
                                <label htmlFor="ck3" />
                                <input id="ck4" type="checkbox" />
                                <label htmlFor="ck4" />
                                <input id="ck5" type="checkbox" />
                                <label htmlFor="ck5" />
                            </div>
                        </div>
                    </div> */}
                        {/* <div className="skills__item">
                        <div className="left">
                            <div className="name">CSS</div>
                        </div>
                        <div className="right">
                            <input id="ck1" type="checkbox" defaultChecked="" />
                            <label htmlFor="ck1" />
                            <input id="ck2" type="checkbox" defaultChecked="" />
                            <label htmlFor="ck2" />
                            <input id="ck3" type="checkbox" />
                            <label htmlFor="ck3" />
                            <input id="ck4" type="checkbox" />
                            <label htmlFor="ck4" />
                            <input id="ck5" type="checkbox" />
                            <label htmlFor="ck5" />
                        </div>
                    </div> */}
                    </div>
                    {/* <div className="section">
                    <div className="section__title">Interests</div>
                    <div className="section__list">
                        <div className="section__list-item">Football, programming.</div>
                    </div>
                </div> */}
                </div>
            </div>
            <div className='btn-div'>
            <Button variant='primary' className='save-btn' onClick={makePDF}>Save as PDF</Button>
            </div>
        </div>

    )
}

export default Resume