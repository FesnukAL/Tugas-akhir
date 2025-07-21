import React from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap';

const products = [
  {
    id: 1,
    title: "Pembeli Jersey Dari Jakarta",
    image: "/public/img2/pemjer1.jpg",
    description: "Kata mas danang jersey ini sangat nyaman dipakai dan bahannya bagus, mas danang sangat merekomendasikan jersey ini untuk dibeli",
  },
  {
    id: 1,
    title: "Pembeli Jersey",
    image: "/public/img2/pemjer2.jpg",
    description: "Mas Ando pembeli Jersey dari Palembang "
  },
  {
    id: 1,
    title: "Pembeli Jersey",
    image: "/public/img2/pemjer3.jpg",
    description: "Pembeli Jersey dari daerah Batang"
  },
  {
    id: 1,
    title: "Sejarah Liverpool FC",
    image: "/public/img2/pemjer4.jpg",
    description: "Sejarah tentang liverpool FC yang didirikan pad"
  },
]
const Review = () => {
  return (
    <div className="container text-center my-5">
       <h1 className="typewriter text-center">Bingkai Foto Pembeli</h1>
       <Container className="py-5">
        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100 shadow">
                <Card.Img
                  variant="top"
                  src={product.image}
                  className="product-image "
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{product.title}</Card.Title>
                  <Card.Text className="text-danger fw-bold">
                    {product.price}
                  </Card.Text>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
      
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Review
