// src/Products.js
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$19.99',
    description: 'Grad signs with flowers.',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTaZ8Eb9KQ0P2S-KkohTpUdRhS29y39B7REoQncGxxCxne5SsKqXYoSFZxYyPrpvZ6CM-RcDQcXPvp6JbFCNbE4wVTuiDk6A8n8Ppq_UOVM22KKE7vC4wdo-4qSOKIGNurZHl7MR4J1Mw&usqp=CAc'
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$29.99',
    description: 'Colorful Yellow Flower Mug.',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT3Y2K7PdESlySwtqkquzZ9eFFBZdhyH3IHRrUf7ipFitFyPnN5Qln2MPGlyI4Wl4ilF5IL96U3UW-Lv3OEqWI6RgQBu-9v4435_XODQDHB5as5Cqm_Ia2n7eTk8eDi13-GQAwRA3dZGWc&usqp=CAc'
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$39.99',
    description: 'Grad Balloons with Teddy Bear',
    image: 'https://cdn.media.amplience.net/i/partycity/949836?$pdpMedium$&fmt=auto&qlt=default'
  },
  {
    id: 4,
    name: 'Product 4',
    price: '$49.99',
    description: 'Teddy with Flowers',
    image: 'data:image/jpeg;base64,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'
  },
  {
    id: 5,
    name: 'Product 5',
    price: '$19.99',
    description: 'Many (5) of Grad Balloons.',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTPeD2u1R1xC4anDV6SGZzwL2tmti9gsXLfFLcXHLb_Vcw9bAcapxFWBzDqunDGvZOVFA5QnQ0Q98u8dht8JekxaxrXB88YsIC1o1VAqFY6KImiqwIkjbegWCWyrU65YbIZjQBopMseEvU&usqp=CAchttps://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQWnNj1vNM9dce-tF7IUOyOgRD-YnHLIgdo6QXM-cc_NpPCyKJQjKMEoROac3m9cEOz8l8IJBZCmx4dD752C3e2GPIIQLmXZ1UnJQU_R64F9_GyHdey2P9H2R-pO3v3bBnmaJmaHZ3DLQ&usqp=CAc'
  },
  {
    id: 6,
    name: 'Product 6',
    price: '$69.99',
    description: 'Grad Cap with Flowers.',
    image: 'data:image/jpeg;base64,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'
  }
];

const ProductCard = ({ product }) => (
  <Col sm={12} md={6} lg={4} className="mb-4">
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
);

const GradProducts = () => (
  <Container>
    <Row>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Row>
  </Container>
);

export default GradProducts;