import React from 'react';
import {
    CardColumns,
    Card,
    CardImg,
    CardBlock,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    CardGroup
} from '@bootstrap-styled/v4';

export default function GitCard(props) {
    return (
        <div className="user-div">
            <CardColumns>
                <Card
                    style={{
                        width: "20%",
                        margin: '0 auto',
                        backgroundColor: "pink",
                    }}>
                    <CardImg
                        top
                        width="100%"
                        src={props.user.avatar_url}
                        alt="profile photo"
                        />
                    <CardBlock>
                        <CardTitle>{props.user.name}</CardTitle>
                        <CardSubtitle>location: {props.user.location}</CardSubtitle>
                        <CardText>{props.user.bio}</CardText>
                        <Button href={`${props.user.html_url}`} target='_blank'> Go To Github </Button>
                    </CardBlock>
                    </Card>
            </CardColumns>
            <CardGroup
                style={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justify-content: 'space-evenly',
                    margin: '0 auto',
                    color: 'lightblue'
                }}>

                {props.followers.map(followers => (
                    <Card
                        style={{
                            width= "25%",
                            background="dodgerblue",
                            color="white"
                        }}>
                    <CardImg
                        top
                        width= '100%',
                        src={props.followers.avatar_url},
                        alt="Followers profile image"
                        />
                    <CardBlock>
                        <CardTitle>{followers.login}</CardTitle>
                        <Button href={`${followers.html_url}`} target='_blank'>
                            Go to Github
                        </Button>
                    </CardBlock>    
                </Card>
                ))}
                <CardGroup/>
        </div>
    );
}