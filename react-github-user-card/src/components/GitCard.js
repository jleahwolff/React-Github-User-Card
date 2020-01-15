import React from 'react';
import './gitcard.css';

// import { CardBlock, CardSubtitle, CardText, CardTitle } from 'bootstrap';

export default function GitCard(props) {
    return (
        <div className="user-div">

        <div className="card-column">
                <div className="card"
                    style={{
                        width: "70%",
                        margin: '0 auto',
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "pink",
                    }}>
                    <img
                        top
                        width="50%"
                        src={props.user.avatar_url}
                        alt="profile photo"
                        />
                    <div className="card-block">
                        <h1>{props.user.name}</h1>
                        <h3>location: {props.user.location}</h3>
                        <p>{props.user.bio}</p>
                        <button href={`${props.user.html_url}`} target='_blank'> Go To Github </button>
                    </div>
                    </div>
            </div>
            <div className="card-groups"
                style={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    // justify-content: 'space-evenly',
                    margin: '0 auto',
                    color: 'lightblue'
                }}>

                {props.followers.map(followers => (
                    <div className="card"
                    style={{
                        width: "25%",
                        background:"dodgerblue",
                        color:"white"
                    }}>
                    {/* <img
                        top
                        width= '100%'
                        src={props.followers.avatar_url}
                        alt="Followers profile image"
                        /> */}
                    <div className="card-block">
                        <h3>{followers.login}</h3>
                        <button href={`${followers.html_url}`} target='_blank'>
                            Go to Github
                        </button>
                    </div>    
                </div>
                ))}
                </div>
                </div>
    );
}