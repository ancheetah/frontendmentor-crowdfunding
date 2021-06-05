import React from 'react';
import { Container, Card, CardContent, CardActions, Button, IconButton, 
    Avatar, LinearProgress } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import About from './AboutComponent';

export default function Main() {
    return (
        <Container maxWidth="xs">

            {/* Project Info */}
            <Card className="project-info" variant="outlined">
                <Avatar alt="Mastercraft Logo" src="/images/logo-mastercraft.svg" />
                <h2>Mastercraft Bamboo Monitor Riser</h2>
                <CardContent>
                    <p>A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary">
                        Back this project
                    </Button>
                    <IconButton>
                        <BookmarkIcon/>
                    </IconButton>
                    {/* <Button variant="contained" startIcon={<BookmarkIcon/>}>
                        Bookmark
                    </Button> */}

                </CardActions>
            </Card>

            {/* Project Progress */}
            <Card className="progress" variant="outlined">
                <CardContent>
                    <h1>$89,914</h1>
                    <p>of $100,000 backed</p>
                    <hr style={{width: "6rem"}} />
                    <h1>5,007</h1>
                    <p>total backers</p>
                    <hr style={{width: "6rem"}} />
                    <h1>56</h1>
                    <p>days left</p>
                    <LinearProgress variant="determinate" value={ 89914 * 100 / 100000 }/>
                </CardContent>
            </Card>

            <About />

        </Container>
    );
}