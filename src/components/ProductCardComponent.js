import React from 'react';
import { Card, Box, CardContent, CardActions, Button } from '@material-ui/core';

export default function ProductCard(props) {
    return (
        <Box p={2}>
            {
                props.products.map( product => {
                    return(
                        <Card variant="outlined">
                            {/* <CardHeader
                                title={product.name}
                                subheader={`Pledge ${product.pledge} or more`}
                            /> */}
                            <CardContent>
                                <h3>{product.name}</h3>
                                <h4>Pledge {product.pledge} or more</h4>
                                <p>{product.desc}</p>
                            </CardContent>
                            <CardActions>
                                <span><h1>{product.stock}</h1></span><span><p>left</p></span>
                                <Button variant="contained" color="primary">{product.stock > 0 ? "Select Reward" : "Out of stock"}</Button>
                            </CardActions>
                        </Card>
                    )
                })
            }
        </Box>
    );
}