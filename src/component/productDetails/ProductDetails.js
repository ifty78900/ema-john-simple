import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../products';
import ProductContainer from '../product-container/product-container';

const ProductDetails = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    console.log(product);
    return (
        <div>
            <ProductContainer product={product} hasAddBtn = {false}></ProductContainer>
        </div>
    );
};

export default ProductDetails;