import { Button, Grid } from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router-dom';

const Role = () => {

    const navigate = useNavigate();



    
  return (
    <div>
        <div className='p-4 mt-4 m-4 border h-full'>
            <Grid container spacing={4}>
            <Grid item xs={12} lg={5}>
                <div>
                    <Button>Admin</Button>
                </div>
                <div>
                    <Button>Faculty</Button>
                </div>
                <div>
                    <Button>Student</Button>
                </div>
            </Grid>

            <Grid item>
                <img src="" alt="" />
            </Grid>

        </Grid>

        </div>
        
    </div>
  )
}

export default Role