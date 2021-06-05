import React, {Component} from 'react';
import { Card, CardContent, Box, Container, Paper } from '@material-ui/core';
import { PRODUCTS } from '../shared/products';
import ProductCard from './ProductCardComponent';

class About extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            products: PRODUCTS
        }
    }

    render () {
        return (
            
            <Box p={2} my={1} border={1} borderRadius="borderRadius" borderColor="grey.300" bgcolor="white">
                <h3>About this project</h3>
                <p>
                    The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                    to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                    your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                </p>
                <p>
                    Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                    to allow notepads, pens, and USB sticks to be stored under the stand.
                </p>
                <ProductCard products={this.state.products} />
            </Box>
            
        );
    }
}

export default About;