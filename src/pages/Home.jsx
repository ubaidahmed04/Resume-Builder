import './home.css'
import React from 'react'
import { Container, Grid, Typography, Button } from '@mui/material'
import { builder } from './../assets'
import { NavLink } from 'react-router-dom'


function Home() {

    return (
        <div className='home-main'>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} className='text-container'>
                        <Typography variant='subtitle1'>
                        </Typography>
                        <Typography variant='h3'>
                            A free resume builder for open source contributer
                        </Typography>
                        <Typography variant='subtitle1' className='text-para'>
                            An intuitive, free, and open-source resume builder that makes resume creation, updates, and sharing easy for job seekers.
                        </Typography>
                        <br />
                        <NavLink to="/form">
                        <Button variant="contained" className='btn'>
                            Get start
                        </Button>
                        </NavLink>
                    </Grid>
                    <Grid item xs={12} sm={6} className='img-container' display={{ xs: 'none', sm: 'block' }}>
                        <img src={builder} alt="resume - index image" className='resume-img' />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Home