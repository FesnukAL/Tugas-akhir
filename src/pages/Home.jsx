import React from 'react'
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, } from 'react-bootstrap';
import heroimage from '../assets/img/emyu.jpg'; // Tambahkan import gambar
import '../css/main.css';  // Tambahkan import CSS

const Home = () => {
  const products = [
    {
      id: 1,
      title: "Sejarah Liverpool FC",
      image: "/public/img2/Liv_1.jpg",
      description: "Sejarah tentang liverpool FC yang didirikan pada tahun 1892 dan menjadi salah satu klub sepak bola paling sukses di dunia.",
    },
    {
      id: 1,
      title: "Awal Kebangkitan Liverpool FC",
      image: "/public/img2/Liv2.jpg",
      description: "Liverpool FC mengalami kebangkitan pada tahun 1970-an dan 1980-an, dengan meraih banyak gelar domestik dan Eropa.",
    },
    {
      id: 1,
      title: "Rivalitas Liverpool FC dan Manchester United", 
      image: "/public/img2/Liv3.jpg",
      description: "Rivalitas antara Liverpool FC dan Manchester United adalah salah satu yang paling terkenal dalam sepak bola Inggris, dengan kedua klub memiliki sejarah panjang dan banyak penggemar.",
    },
    {
      id: 1,
      title: "Tragedi Heysel",
      image: "/public/img2/Liv4.jpg",
      description: "Tragedi Heysel terjadi pada tahun 1985 ketika kerusuhan di final Piala Eropa menyebabkan kematian 39 orang, yang mengakibatkan larangan bagi klub-klub Inggris di kompetisi Eropa.",
    },
    {
      id: 1,
      title: "Tragedi Pembantaian emyu",
      image: "/public/img2/Liv5.jpg",
      description: "Tragedi Pembantian emyu vs Liverpool 🤣🤣",
    },
    {
      id: 1,
      title: "Liverpool FC di Era Modern",
      image: "/public/img2/Liv6.jpg",
      description: "liverpool sukses mengunci liga inggris pada tahun 2025, mengakhiri penantian selama 1 tahun untuk meraih gelar liga, Wajar klub jago",
    },
    {
      id: 1,
      title: "Pelatih baru liverpool FC",
      image: "/public/img2/Liv7.jpg",
      description: "Arne slot adalah pelatih baru liverpool FC yang sukses membawa klub ini meraih gelar liga inggris pada tahun 2025",
    },
    {
      id: 1,
      title: "Kematian Legenda Liverpool FC",
      image: "/public/img2/Liv8.jpg",
      description: "Kematian Diogo Jota pada tahun 2025 adalah kehilangan besar bagi Liverpool FC, karena ia adalah salah satu pemain kunci dalam kesuksesan klub.",
    },
  ]
  return (
    <Container className="hero-section py-5">
    <Row className="align-items-start">
      <Col lg={6} className="hero-text mt-5">
        <h1 className="mb-4"> 
          Website <br/> baju Sepak bola Keren <br/> 
          <span className="text">cari jersey klub terbaik mu</span>
        </h1>
        <p className="mb-4">
          Temukan jersey klub sepak bola favoritmu di sini! Kami menyediakan berbagai macam jersey dari klub-klub terbaik dunia.
        </p>
        <NavLink 
                to="/produk" 
                className="btn btn-outline-danger rounded text-decoration-none"
              >
                Belanja sekarang
              </NavLink>
        
      </Col>
      <Col lg={6} className="hero-image">
        <img 
          src={heroimage} 
          alt="Jersey Football" 
          className="img-fluid"
        />
      </Col>
      <h1 className='text-center'>Tentang Liverpool FC</h1>
    </Row>
    <Row className="g-4">
    {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src={product.image}
                className="product-image"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold text-center">{product.title}</Card.Title>
                <Card.Text className="text-danger fw-bold">
                  {product.price}
                </Card.Text>
                <Card.Text className='text-center'>
                  {product.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
              
            </Row>
  </Container>
  
  
  );
}

export default Home