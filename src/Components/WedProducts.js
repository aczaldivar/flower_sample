import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$19.99',
    description: 'This is a short description of product 1.',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSS5PZ7VzBSSRFLP-9v20ibA03r5ZyiPm2p6Rx5RqPLSOIiH_Td8PzycPzpcazPVK6USij03-DHXdL_Bc65MH49VbXr4_IoYrioZLykziT1c_SEltZXsc9HyA'
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$29.99',
    description: 'This is a short description of product 2.',
    image: 'https://www.kukkaflowers.com/cdn/shop/products/Lush_Blush_Bridal_Bouquet_460x.jpg?v=1640649377'
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$39.99',
    description: 'This is a short description of product 3.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8OxCS3tZce-GUFl5vYEgqy1EfkGHrLdRkxh9i-uaKQlTgvNdJiXMjbgb_g&s'
  }
];

const WedProducts = () => {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WedProducts;
