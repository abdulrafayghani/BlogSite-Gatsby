import { Box, createStyles, Button } from '@material-ui/core';
import React from 'react';
import Layout from '../components/Layout/Layout';
import style from './index.module.css';
import blog from '../styles/blog.jpg';

const useStyle = createStyles({
  front: {
    fontFamily: 'Oswald',
  },
});

const indexPage = () => {
  // const classes = useStyle()

  return (
    <div>
      <Layout>
        <div style={{ width: '100%' }}>
          <div style={{ overflow: 'hidden' }}>
            <div className={style.main}>
              <Box className={style.front}>
                <p>Words that Work for Smarter Digital Marketing and Sales</p>
              </Box>
            </div>
            <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Box style={{ height:'50px' ,display: 'flex', justifyContent:'space-around'}}>
                <Button variant='outlined'>Login</Button>
                <Button variant='outlined'>Sign Up</Button>
              </Box>
              <Box>
                <img style={{borderRadius:'5px'}} src='https://copyblogger.com/wp-content/uploads/2006/01/copyblogger-bible-content-marketing.jpg' alt="" height="400px" width='700px' />
              </Box>
            </Box>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default indexPage;
