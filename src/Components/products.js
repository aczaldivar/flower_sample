import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$19.99',
    description: 'This is a short description of product 1.',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQDhFAcZxXsZyHob9wmVdaCM6qP6ePUTwcw_Dm921rA4uBjoX6aMTXhQwcegDWLr3Ae1NBt7P1ml5hNa81NNTiXdIA7sNt_DykMAwXvUSqIBfFZOP5UodMWvw'
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$29.99',
    description: 'This is a short description of product 2.',
    image: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/174313lx.jpg?width=545&height=597&auto=webp'
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$39.99',
    description: 'This is a short description of product 3.',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwGQhyzwCekeF4AzFmyVqDyUcm6DFfvhC-_5pUwQWfylkFQWiTWEoGaVt9Tgbj-ESPYEKTOlVH4Rxrkfhh7pBvm2EotCiL'
  }
];

const Products = () => {
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

export default Products;
