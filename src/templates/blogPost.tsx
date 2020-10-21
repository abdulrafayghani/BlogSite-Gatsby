import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Box, Typography, makeStyles, createStyles, Avatar } from '@material-ui/core'

export const query = graphql`
    query ($slug: String) {
        contentfulBlogPost(slug: {eq: $slug}) {
          title
          publishDate(formatString: "DD MMMM, YYYY")
          featuredImage {
            fluid(maxWidth: 750) {
                ...GatsbyContentfulFluid
            }
          }
          body {
              json
          }
        }
      }    
`

const useStyle = makeStyles((theme) => createStyles({
    root: {
        overflow:'hidden',
        width: '100%'
    },
    main: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        color: '#11171A',
        marginTop: '120px',
        alignContent: 'space-around'

    },
    title: {
        fontSize: '60px',
        fontWeight: 1000,
        width: '80%',
        textAlign: 'center',
        [theme.breakpoints.down("sm")]: {
            fontSize: '35px'
        }
    },
    details:{
        display: 'flex',
        justifyContent:'space-evenly',
        textAlign: 'center',
        marginTop:'10px',
        width: '22%',
        [theme.breakpoints.down("sm")]: {
            width: '70%'
        }
    },
    img: {
        marginTop:'12px',
        width:'75%',
        borderRadius: '5px'
    },
    body: {
        color: '#263238',
        width:'66%',
        fontSize: '19px',
    }
}))

const blogPost = ({ data: { contentfulBlogPost }}) => {
    const { title, publishDate, featuredImage, body } = contentfulBlogPost
    const classes = useStyle()

    const options = {
        renderNode: {
          "embedded-asset-block": node => {
            const alt = node.data.target.fields.title["en-US"]
            const url = node.data.target.fields.file["en-US"].url
            return <img width='80%' alt={alt} src={url} />
          },
        },
      }

    return (
        <Layout>
            <div>
                <Box className={classes.root}>
                    <Box className={classes.main}>
                        <Typography variant='h2' className={classes.title}>
                            {title}
                        </Typography>
                        <Box className={classes.details}>
                            <Avatar style={{ marginTop: '-10px'}} >H</Avatar>
                            <Typography style={{ fontFamily: 'Dancing' }}>by</Typography>
                            <Typography style={{ fontFamily: 'Architects Daughter', fontWeight: 'bold'}}>User</Typography>
                            <Typography>on</Typography>
                            <Typography style={{ fontFamily: 'Architects Daughter', fontWeight: 'bold'}}> {publishDate} </Typography>
                        </Box>
                    </Box>
                    {featuredImage.fluid && (
                            <Box style={{ display: 'flex', justifyContent:'center'}}>
                                <Img className={classes.img} fluid={featuredImage.fluid} alt={title}/>
                            </Box>
                        )}
                    <Box display='flex' justifyContent='center' >
                            <Typography className={classes.body}>
                                {documentToReactComponents(body.json,options)}
                            </Typography>
                    </Box>
                </Box>
            </div>
        </Layout>
    )
}

export default blogPost
