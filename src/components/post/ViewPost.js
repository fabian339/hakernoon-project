import React, { Component } from 'react'
// import Paper from '@material-ui/core/Paper';
import ReactHtmlParser from 'react-html-parser'; 
import Grid from '@material-ui/core/Grid';
import '../../styles/post.css'
const data = require('../../data/data.json')

//Class-based component
export class Post extends Component {
    constructor(){
        super();
        this.state = {
            post: {},
            user: {},
            displayError: false
          }
    }

    //fetching data
    componentDidMount = () => {
        const { match : { params : { slug }}} = this.props;
        this.getData(slug)
    }
    //fetching the right data based on the slug, this could also be a request
    getData = slug => {
        if(data.slug === slug){
            this.setState({post: data, user: data.profile})
        } else { // output error if the params do not match
            this.setState({displayError: true})
        }
    }
    //formating post publishedAt date
    postDate = () => {
        let date = new Date(this.state.post.publishedAt * 1000);
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleString('default', options)
    }

    //this component could be split in a few other components
    render() {
        const {post, user, displayError} = this.state;
        // console.log(post)
        return (
            <div>
                {/* tenary condition to check if the post exist */}
                {displayError ? (
                    <h1 style={{color: "red", textAlign: "center"}}>The post could not be found!</h1>
                ) : (
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
                                            <img className="emoji" src="/heart.png" alt="heart"/>
                                        </div>
                                        <div className="emoji-container">
                                            <img data-usertype="user" className="emoji not-active" src="/light.png" alt="light"/>
                                        </div>
                                        <div className="emoji-container">
                                            <img data-usertype="user" className="emoji not-active" src="/boat.png" alt="boat"/>
                                        </div>
                                        <div className="emoji-container">
                                            <img data-usertype="user" className="emoji not-active" src="/money.png" alt="money"/>
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
                        <Grid container style={{padding: "0 16.5%"}} spacing={1}>
                            <Grid item xs={3}>
                                <div>
                                    <a href="/">
                                        <img src={user.avatar} width="50" height="50" alt="profile" />
                                    </a>
                                    <p><strong>@{user.displayName}</strong></p>
                                    <p style={{fontSize: "0.9em", lineHeight: 0}}><strong>{user.handle}</strong></p>
                                    <p className="bio">{user.bio}</p>
                                    <span style={{marginRight: "10px"}}>
                                        <img src="/twitter-new.png" alt="Twitter social icon" width="20" height="20" loading="lazy"></img>
                                    </span>
                                    <span>
                                        <img src="/github-new.png" alt="github social icon" width="20" height="20" loading="lazy"></img>
                                    </span>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                { ReactHtmlParser (post.markup) } 
                            </Grid>
                        </Grid>
                        {/* bad implementation here, repeating code. Could be split as its own component for the emojis */}
                        <Grid container spacing={2} style={{marginTop: "30px", justifyContent: "center"}}>
                            <Grid item>
                                <div className="reactions">
                                    <div className="emojis-icons">
                                        <div className="total">
                                            {/* for some reason this is returning underfine */}
                                            <span>{post.reactions ? (
                                                post.reactions.total
                                            ) : (6)}</span>
                                        </div>
                                        <div className="emoji-container">
                                            <img className="emoji" src="/heart.png" alt="heart"/>
                                        </div>
                                        <div className="emoji-container">
                                            <img data-usertype="user" className="emoji not-active" src="/light.png" alt="light"/>
                                        </div>
                                        <div className="emoji-container">
                                            <img data-usertype="user" className="emoji not-active" src="/boat.png" alt="boat"/>
                                        </div>
                                        <div className="emoji-container">
                                            <img data-usertype="user" className="emoji not-active" src="/money.png" alt="money"/>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                )}
            </div>
        )
    }
}


export default (Post);