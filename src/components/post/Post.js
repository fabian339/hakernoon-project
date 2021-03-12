import React, { } from 'react'
import './post.css'
const Link = require("react-router-dom").Link

//functional Component
const Post = (props) => {
    // const [post, setPost] = useState(0);

    // useEffect(() => {
        //check if there is data to fetch
         //fetch data
    // });

    // return style object for main image
    const imgStyles = (src) => {
        return {
            height: "250px",
            backgroundImage: `url("${src}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }
    }

    const { postData } = props;
    return (
        <div style={styles.root}>
            <h1 style={{textAlign: "center", color: "rgb(193, 202, 212)"}}>{postData.title}</h1>
            <Link to={`/${postData.slug}`}>
                <div className="post-img" style={imgStyles(postData.image)}></div>
            </Link>
            <div style={{display: 'flex', alignItems: "center"}}>
                <img style={{padding: "0 10px"}} src={postData.profileImg} alt="profileImg" width="50" height="50" />
                <h3>
                    <p style={{color: 'rgb(0, 255, 0)', margin: "0"}}><strong>@{postData.handle}</strong></p>
                    <small style={{color: "rgb(193, 202, 212)"}}><strong>{postData.userName}</strong></small>
                </h3>
            </div>
        </div>
    )
}

const styles = {
    root: {
        flexGrow: 1,
    },
};

export default Post;
