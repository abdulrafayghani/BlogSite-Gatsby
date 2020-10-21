import React, { FC } from 'react'
// import style from './blogCard.module.css'
import { Avatar, Box, Button, Card, CardContent, Typography, makeStyles, createStyles } from '@material-ui/core'
import { navigate } from 'gatsby'

interface Props {
    title: string
    slug: string
    excerpt: string
    publishDate: string
}

const useStyle = makeStyles((theme) =>
 createStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignContent:'center'
    },
    card: {
        marginTop: '100px',
        width: '65%',
        height:'100%',
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            display: 'flex',
            // justifyContent: 'center'
            // textAlign: 'center'
        }   
    },
    text: {
        fontSize: '45px',
        fontWeight: 1000,
        [theme.breakpoints.down("xs")] : {
            fontSize: '30px'
        }
    },
    cardHead: {
        [theme.breakpoints.down("xs")] : {
            width: '250%',
            // display: 'flex'
        }   
    }
})

)

const BlogCard: FC<Props> = ({  title, slug, excerpt, publishDate }) => {
    const classes = useStyle()
    
    return (
        <div >
            <Box className={classes.root}>
            <Card className={classes.card} variant='outlined'>
                <CardContent >
                    <Box className={classes.cardHead} display='flex'>
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
                        <Typography style={{ fontSize:'20px'}}>
                            {excerpt}
                        </Typography>
                    <Box>
                        <Button variant='outlined' style={{borderRadius:'20px'}} onClick={() => navigate(`/blog/${slug}`)}>
                            Continue Reading
                        </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            </Box>
        </div>
    )
}

export default BlogCard
