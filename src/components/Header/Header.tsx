import React, { FC, Fragment } from 'react';
import { navigate } from "gatsby";
import {
    AppBar,
    Button,
    IconButton,
    Slide,
    Toolbar,
    useScrollTrigger,
    Box,
    makeStyles,
    createStyles,
    Typography,
    
  } from '@material-ui/core';
  import shop from '@material-ui/icons/Shop'

  const useStyles: any = makeStyles(() =>
  createStyles({
    header: {
      // boxShadow: 'none',
      backgroundColor: 'transparent',
      // margin:'auto'
    },
    menu: {
      color: 'white',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      // fontFamily: 'museo-sans', sans-serif,
      color: '#11171A',
      fontWeight: 700
    },
    iconText: {
      fontSize: '20px',
      fontWeight: 'bold',
      letterSpacing:'0.3px',
    }
  })
);
  
const HideOnScroll: FC<any> = ({ children }) => {
    const trigger = useScrollTrigger();
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

const Header = () => {

    const classes = useStyles();
    return (
        <div>
            <Fragment>
              <HideOnScroll>
                <AppBar position='fixed' className={classes.header}>
                  <Toolbar className={classes.toolbar}>
                    <IconButton style={{paddingLeft:'50px', backgroundColor:'transparent'}}
                      onClick={() => navigate('/')}
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                    >
                        <Typography variant='h5' className={classes.iconText}>
                          copyblogger
                        </Typography>
                    </IconButton>
                    <Box display='flex' justifyContent='space-around' width='275px' >
                    <Button variant='outlined' onClick={()=> navigate('/blog')}>Blogs</Button>
                    <Button  variant='outlined'>Log out</Button>
                    </Box>
                  </Toolbar>
                </AppBar>
              </HideOnScroll>
            </Fragment>
        </div>
  );
};       
    


export default Header
