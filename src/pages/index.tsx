import React from 'react';
import { Box, createStyles, Button, makeStyles, TextField, FormControl } from '@material-ui/core';
import Layout from '../components/Layout/Layout';
// import style from './index.module.css';
// import blog from '../styles/blog.jpg';

const useStyle = makeStyles((theme) => createStyles({
  main: {
    display: 'flex',
    justifyContent: 'center'
  },
  front: {
    padding: '110px',
    color: '#11171A',
    maxWidth: '1200px',
    fontSize: '80px',
    fontWeight: 1000,
    textAlign: 'center',
    [theme.breakpoints.down("sm")]: {
      width: '100%',
      fontSize: '55px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
      width: '500px',
      height: '200px'
    }
  },
  img: {
    borderRadius: '5px',
    [theme.breakpoints.down('xs')]: {
      height: '100%',
      width: '100%'
    }
  }
}))


const indexPage = () => {
  const classes = useStyle()

  return (
    <div>
      <Layout>
        <div style={{ width: '100%' }}>
          <div style={{ overflow: 'hidden' }}>
            <div className={classes.main}>
              <Box className={classes.front}>
                <p>Words that Work for Smarter Digital Marketing and Sales</p>
              </Box>
            </div>
            <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Box>
                {/* <FormControl>
                   <TextField label='Name' variant='outlined' />
                   <TextField type='password' label='Password' variant='outlined' />
                   <TextField label='Email' variant='outlined' />
                   <TextField label='Name' variant='outlined' />
                </FormControl> */}
              </Box>
              <Box display='flex' justifyContent='center'>
                <img className={classes.img} src='https://copyblogger.com/wp-content/uploads/2006/01/copyblogger-bible-content-marketing.jpg' alt="" height="400px" width='700px' />
              </Box>
            </Box>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default indexPage;
