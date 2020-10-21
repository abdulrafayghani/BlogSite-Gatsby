import React, { FC, Fragment, useState } from 'react';
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
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

  const useStyles: any = makeStyles((theme) =>
  createStyles({
    header: {
      boxShadow: 'none',
      backgroundColor: 'transparent',
    },
    menu: {
      color: 'white',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#11171A',
      fontWeight: 700,
      [theme.breakpoints.down("sm")]: {
        width: '100%'
      }
    },
    iconText: {
      fontSize: '20px',
      fontWeight: 'bold',
      letterSpacing:'0.3px',
      [theme.breakpoints.down("sm")]: {
        marginLeft: '-17px'
      },
    },
    buttons: {
      color: '#263238',
      fontWeight: 'bold',
      width: 275,
      display: 'flex',
      justifyContent: 'space-around',
      [theme.breakpoints.down("sm")]: {
        height: '35px',
        // width: '400px',
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '20px',
      }
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
    const [alignment, setAlignment] = useState<string | null>('button')
    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
      setAlignment(newAlignment);
    };

    return (
        <div>
            <Fragment>
              <HideOnScroll>
                <AppBar position='fixed' className={classes.header}>
                  <Toolbar className={classes.toolbar}>
                   {/* <ToggleButtonGroup 
                           value={alignment}
                           exclusive
                           onChange={handleAlignment}
                      > */}
                        {/* <ToggleButton> */}
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
                    {/* </ToggleButton> */}
                    <Box className={classes.buttons} >
                      {/* <ToggleButtonGroup 
                           value={alignment}
                           exclusive
                           onChange={handleAlignment}
                      > */}
                      {/* <ToggleButton value='button' onClick={()=> navigate('/blog')}>
                        Blogs */}
                        <Button variant='text' onClick={()=> navigate('/blog')}>Blogs</Button>
                      {/* </ToggleButton> */}
                    <Button  variant='text'>Log out</Button>
                    {/* </ToggleButtonGroup> */}
                    </Box>
                  </Toolbar>
                </AppBar>
              </HideOnScroll>
            </Fragment>
        </div>
  );
};       
    


export default Header
