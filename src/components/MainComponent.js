import React from 'react';
import { Container, Card, CardContent, CardActions, Button, 
    Avatar, LinearProgress } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import About from './AboutComponent';

export default function Main() {
    return (
        <Container maxWidth="xs">

            {/* Project Info */}
            <Card variant="outlined">
                <Avatar alt="Mastercraft Logo" src="/images/logo-mastercraft.svg" />
                <h2>Mastercraft Bamboo Monitor Riser</h2>
                <CardContent>
                    <p>A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" disableElevation>
                        Back this project
                    </Button>
                    <Button variant="contained" color="default">
                        <BookmarkIcon/>
                    </Button>
                </CardActions>
            </Card>

            {/* Project Progress */}
            <Card variant="outlined">
                <h1>$89,914</h1>
                <p>of $100,000 backed</p>
                <hr />
                <h1>5,007</h1>
                <p>total backers</p>
                <hr />
                <h1>56</h1>
                <p>days left</p>
                <LinearProgress variant="determinate" value={ 89914 * 100 / 100000 }/>
            </Card>

            <About />

        </Container>
    );
}