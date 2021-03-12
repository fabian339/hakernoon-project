import React, {  } from 'react'

// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Post from '../post/Post';
const data = require('../../data/data.json')

//funtional component
const Home = () => {
    // const [post, setPost] = useState(0);

    // useEffect(() => {
        //check if there is data to fetch
        //fetch data
    // });
    
    // because we only have one object, I did not use any fetching method
    const strData = {
        title: data.title,
        image: data.mainImage,
        profileImg: data.profile.avatar,
        handle: data.profile.handle,
        userName: data.profile.displayName,
        slug: data.slug
    }
    return (
        <div style={styles.root}>
            <Grid container>
                <Grid item xs={6} className="post-border">
                    <Post postData={strData} />
                </Grid>
                <Grid item xs={6} className="post-border">
                    <Post postData={strData} />
                </Grid>
                <Grid item xs={6} className="post-border">
                    <Post postData={strData} />
                </Grid>
                <Grid item xs={6} className="post-border">
                    <Post postData={strData} />
                </Grid>
            </Grid>
        </div>
    )
}

const styles = {
    root: {
        flexGrow: 1,
        backgroundColor: "#181918"
    },
};

export default Home;
