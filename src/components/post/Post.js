import React, { Component } from 'react'
// import Paper from '@material-ui/core/Paper';
import ReactHtmlParser from 'react-html-parser'; 
import Grid from '@material-ui/core/Grid';
import './post.css'
const data = require('../../data/data.json')
// import Link from 'react-router-dom/Link'
// import Typography from '@material-ui/core/Typography';

// // MUI stuff
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';


// const Link = require("react-router-dom").Link


export class Post extends Component {
    constructor(){
        super();
        this.state = {
            post: {}
          }
    }

    componentDidMount = () => {
        const { match : { params : { slug }}} = this.props;
        this.getData(slug)
    }
    //fetching the right data based on the slug, this could also be a request
    getData = slug => {
        if(data.slug === slug){
            this.setState({post: data})
        }
    }
    
    postDate = () => {
        let date = new Date(this.state.post.publishedAt * 1000);
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleString('default', options)
    }

    render() {
        const {post} = this.state;
        console.log(post)
        return (
            <div>
                <Grid container spacing={2}>
                <Grid item sm={2}></Grid>
                    <Grid item sm={8}>
                        <h1 className="post-title">{post.title}</h1>
                    </Grid>
                    <Grid item sm={2}></Grid>
                </Grid>
                {/* statistics bar */}
                <Grid container spacing={1}>
                    <Grid item sm>
                        <a className="post-date" href={`https://hackernoon.com/archives/${new Date(this.postDate()).toLocaleDateString()}`} target="_blank" rel="noreferrer">{this.postDate()}</a>
                        <span className="number-read">
                            <i aria-hidden="true" className="fas fa-star"></i> 
                            402 reads
                        </span>
                        <button className="bookmark">
                            <i aria-hidden="true" className="fas fa-bookmark "></i>
                        </button>
                    </Grid>
                    <Grid item sm={2}></Grid>
                    <Grid item sm>
                        <div className="reactions">
                            <div className="emojis-icons">
                                <div className="total">
                                    {/* for some reason this is returning underfine */}
                                    <span>{post.reactions ? (
                                        post.reactions.total
                                    ) : (6)}</span>
                                </div>
                                <div className="emoji-container">
                                    <img className="emoji" src="/heart.png" />
                                </div>
                                <div className="emoji-container">
                                    <img data-usertype="user" data-emoji="light" className="emoji not-active" src="/light.png" />
                                </div>
                                <div className="emoji-container">
                                    <img data-usertype="user" data-emoji="light" className="emoji not-active" src="/boat.png" />
                                </div>
                                <div className="emoji-container">
                                    <img data-usertype="user" data-emoji="light" className="emoji not-active" src="/money.png" />
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>                   
                <Grid container style={{marginTop: '30px'}}>
                    <Grid item lg={2}></Grid>
                     <Grid item lg={8}>
                        <img className="post-img" alt="" src={post.mainImage} />
                    </Grid>
                    <Grid item lg={2}></Grid>
                </Grid>
                <Grid container style={{marginTop: '30px'}}>
                    <Grid item xs={3}>
                        <h1>YOOOO</h1>
                    </Grid>
                     <Grid item xs={6}>
                        { ReactHtmlParser (post.markup) } 
                    </Grid>
                    <Grid item xs={3}>
                    <h1>YOOOO</h1>

                    </Grid>
                </Grid>
            </div>
        )
    }
}

// const styles = {
//     navContainer: {
//         backgroundColor: "rgb(0, 59, 0)",
//         justifyContent: 'center',
//         minHeight: '45px',
//     },
//     navButtons: {
//         fontSize: "1rem",
//         color: "#ffff",
//         fontWeight: "bold",
//         textTransform: 'none',
//     },
//     spectra: {
//         display: 'flex',
//         justifyContent: 'center',
//         padding: '10px',
//         color: 'rgb(102, 97, 5)',
//         textDecoration: 'none',
//         fontWeight: 'bold'
//     }
// };


export default (Post);