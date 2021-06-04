import React from 'react';
import { Container, Card, CardContent, Button, IconButton } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';

export default function Main() {
    return (
        <Container maxWidth="xs">
            <Card variant="outlined">
                <h3>Mastercraft Bamboo Monitor Riser</h3>
                <CardContent>
                    A beautifully handcrafted monitor stand to reduce neck and eye strain.
                </CardContent>
                <Button variant="contained" color="primary" disableElevation>
                    Back this project
                </Button>
                <IconButton color="secondary">
                    <BookmarkIcon/>
                </IconButton>
            </Card>
        </Container>
    );
}