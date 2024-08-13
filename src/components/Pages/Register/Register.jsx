import React from 'react'
import {Box, Button, Grid, TextField} from '@mui/material'

const Register = () => {
  return (
    <div>
        <Grid container spacing={4} className='flex items-center justify-center' sx={{mt:"2rem"}}>
            <Grid item xs={12} lg={7}>
                <Box className="border rounded-s-md shadown-md p-5">
                    <form>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                required
                                id='firstname'
                                name='firstname'
                                label="First Name"
                                fullWidth
                                autoComplete='given-name'
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                required
                                id='lastname'
                                name='lastname'
                                label="Last Name"
                                fullWidth
                                autoComplete='given-name'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                required
                                id='email-id'
                                name='email-id'
                                label="email-id"
                                fullWidth
                                autoComplete='given-name'
                                
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                required
                                id='password'
                                name='password'
                                label="Password"
                                fullWidth
                                
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                required
                                id='phonenumber'
                                name='phonenumber'
                                label="Phone Number"
                                fullWidth
                                autoComplete='phonenumber'
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Button sx={{mt:"25px"}} size='large' variant='contained' type='submit'>Register</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    </div>
  )
}

export default Register