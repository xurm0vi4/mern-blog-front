import React from 'react'
import styles from './Registration.module.scss';
import { Button, Paper, TextField, Typography } from '@mui/material';
const Registration = () => {
  
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography variant="h4" textAlign="center" mb={3}>Sign up</Typography>
      <form>
        <TextField className={styles.field} label="Full name" type="fullName" fullWidth/>
        <TextField className={styles.field} label="Email" type="email" fullWidth/>
        <TextField className={styles.field} label="Password" type="password" fullWidth/>
        <Button size='large' variant="contained" type='submit' fullWidth>
          Enter
        </Button>
      </form>
    </Paper>
  )
}

export default Registration
