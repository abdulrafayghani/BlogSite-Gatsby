import React, { FC } from 'react'
// import style from './blogCard.module.css'
import { Avatar, Box, Button, Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

interface Props {
    title: string
    excerpt: string
    publishDate: string
}

const useStyle = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignContent:'center'
    },
    main: {
        marginTop: '100px',
        width: '65%',
        height:'100%'   
    },
    text: {
        fontSize: '45px',
        fontWeight: 1000
    }
})

const BlogCard: FC<Props> = ({ title, excerpt, publishDate }) => {
    const classes = useStyle()
    
    return (
        <div >
            <Box className={classes.root}>
            <Card className={classes.main} variant='outlined'>
                <CardContent >
                    <Box display='flex'>
                        <Avatar >H</Avatar>
                        <Box width='25%' display='flex' justifyContent='space-evenly' mt='5px'>
                            <Typography style={{ fontFamily: 'Dancing'}}>by {' '} </Typography>
                            <Typography style={{ fontFamily: 'Architects Daughter', fontWeight:'bold'}}>User</Typography>
                            <Typography>on </Typography>
                            <Typography style={{ fontFamily: 'Architects Daughter', fontWeight: 'bold'}}> {publishDate} </Typography>
                        </Box>
                    </Box>
                    <Box height='300px' display='flex' flexWrap='wrap' alignContent='space-around' >
                        <Typography className={classes.text} variant='h2'>
                            {title}
                        </Typography>
                        <Typography style={{ fontSize:'22px'}}>
                            {excerpt}
                        </Typography>
                    <Box>
                        <Button variant='outlined' style={{borderRadius:'20px'}}>
                            Continue Reading
                        </Button>
                        </Box>
                    </Box>
                    <Box>
                        <Typography>
                            
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
            </Box>
        </div>
    )
}

export default BlogCard
