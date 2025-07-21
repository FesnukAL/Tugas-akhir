import { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, } from 'react-bootstrap';
const produk = () => {
  const [keranjang, setKeranjang] = useState([]);
  
  // Fungsi untuk menambah produk ke keranjang
  const tambahKeKeranjang = (produk) => {
    const produkAda = keranjang.find(item => item.id === produk.id);
    
    if (produkAda) {
      // Jika produk sudah ada, tambah jumlahnya
      setKeranjang(keranjang.map(item => 
        item.id === produk.id 
          ? {...item, jumlah: item.jumlah + 1}
          : item
      ));
    } else {
      // Jika produk belum ada, tambahkan dengan jumlah 1
      setKeranjang([...keranjang, {...produk, jumlah: 1}]);
    }
  };
  const tambahJumlah = (id) => {
    setKeranjang(keranjang.map(item => 
      item.id === id 
        ? {...item, jumlah: item.jumlah + 1}
        : item
    ));
  };

  // Fungsi untuk mengurangi jumlah item
  const kurangiJumlah = (id) => {
    setKeranjang(keranjang.map(item => 
      item.id === id && item.jumlah > 0
        ? {...item, jumlah: item.jumlah - 1}
        : item
    ).filter(item => item.jumlah > 0));
  };

  const products = [
    {
      id: 1,
      title: "Jersey liverpool Home",
      price: "Rp. 800.000",
      image: "/public/img/Jer-ipul1.jpg",
      description: "Jersey liverpool Home 2023/2024 Original"
    },
    {
      id: 2,
      title: "Jersey liverpool Away",
      price: "Rp. 850.000",
      image: "/public/img/Jer-ipul2.jpg",
      description: "Jersey liverpool Away 2023/2024 Original"
    },
    {
      id: 3,
      title: "jersey liverpool Third",
      price: "Rp. 900.000",
      image: "public/img/jer-ipul3.jpg",
      description: "jersey liverpool Third 2023/2024 Original"
    },
    {
      id: 4,
      title: "jersey liverpool Away",
      price: "Rp. 950.000",
      image: "public/img/jer-ipul4.jpg",
      description: "jersey liverpool Away 2023/2024 Original"
    },
    {
      id: 5,
      title: "Jersey Manchester United Home",
      price: "Rp. 550.000",
      image: "public/img/Jer-mu1.jpg",
      description: "Jersey Manchester United Home 2023/2024 Original"
    },
    {
      id: 6,
      title: "Jersey Manchester United Away",
      price: "Rp. 899.000",
      image: "public/img/Jer-mu2.jpg",
      description: "Jersey Manchester United Away 2023/2024 Original"
    },
    {
      id: 7,
      title: "Jersey Manchester United ",
      price: "Rp. 599.000",
      image: "public/img/Jer-mu3.jpg",
      description: "Jersey Manchester United Yang sukanya di bantai"
    },
    {
      id: 8,
      title: "Jersey Manchester United ",
      price: "Rp. 550.000",
      image: "public/img/Jer-mu4.jpg",
      description: "Jaket The North Face Waterproof"
    },
    {
      id: 9,
      title: "Jersey Manchester City Ori",
      price: "Rp. 500.000",
      image: "public/img/Jer-city1.jpg",
      description: "Jersey Manchester City Home 2023/2024 Original"
    },
    {
      id: 10,
      title: "Jersey Manchester City OrI buat bantai emyu",
      price: "Rp.420.000",
      image: "public/img/Jer-city2.jpg",
      description: "Jersey Manchester City Away 2023/2024 Original"
    },
    {
      id: 11,
      title: "Jersey city retro",
      price: "Rp 830.000",
      image: "public/img/Jer-city3.jpg",
      description: "Jersey Manchester City Retro Original"
    },
    {
      id: 12,
      title: "Jersey city Retro",
      price: "Rp. 700.000",
      image: "public/img/Jer-city4.jpg",
      description: "Jersey Manchester City Retro Edisi terbatas"
    },
    {
      id: 13,
      title: "Jersey As Roma",
      price: "Rp. 500.000",
      image: "public/img/Jer-roma1.jpg",
      description: "Jesrsey romaa  Ori"
    },
    {
      id: 14,
      title: "Jesrsey As Roma home",
      price: "Rp. 700.000",
      image: "public/img/Jer-roma2.jpg",
      description: "Jersey As Roma Home 2023/2024 Original"
    },
    {
      id: 15,
      title: "Jersey retro As Roma",
      price: "Rp. 450.000",
      image: "public/img/Jer-roma3.jpg",
      description: "Jersey retro As Roma Original"
    },
    {
      id: 16,
      title: "Jersey AS roma old",
      price: "Rp. 600.000",
      image: "public/img/Jer-roma4.jpg",
      description: "Jersey As Roma Old Original"
    },
    {
      id: 17,
      title: "Jersey AC Milan retro",
      price: "Rp. 599.000",
      image: "public/img/Jer-acm1.jpg",
      description: "Jersey Ac Milan Retro Original"
    },
    {
      id: 18,
      title: "Jersey AC Milan old",
      price: "Rp. 500.000",
      image: "public/img/Jer-acm2.jpg",
      description: "Jersey milan old "
    },
    {
      id: 19,
      title: "Jersey Inter Milan",
      price: "Rp. 599.000",
      image: "public/img/Jer-int3.jpg",
      description: "Jersey Inter Milan Home 2023/2024 Original"
      
    },
    {
      id: 20,
      title: "Jaket The North Face",
      price: "Rp. 1.200.000",
      image: "public/img/Jer-roma5.jpg",
      description: "Jersey Inter Milan Away 2023/2024 Original"
    },
    
  ]
  return (
    <div className="text-center">
      <h1 className="typewriter text-center">Selamat Datang di toko 🛒 Al Store</h1>
     
    <div className="mb-4">
      <Badge bg="danger" className="p-2 fs-6">
        🛒 Keranjang: {keranjang.reduce((total, item) => total + item.jumlah, 0)} item
      </Badge>
    </div>

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
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <Button
                      variant="danger"
                      className="mt-auto w-100"
                      onClick={() => tambahKeKeranjang(product)}
                    >
                      Beli Sekarang
                    </Button>
                    
                    
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {keranjang.length > 0 && (
        <Container className="mb-5">
          <h2>Keranjang Belanja</h2>
          {keranjang.map(item => (
            <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom py-2">
              <div>
                <h5>{item.title}</h5>
                <div className="d-flex align-items-center gap-2">
                  <Button 
                    variant="outline-danger" 
                    size="sm"
                    onClick={() => kurangiJumlah(item.id)}
                  >
                    -
                  </Button>
      <span className="mx-2">{item.jumlah}</span>
                  <Button 
                    variant="outline-success" 
                    size="sm"
                    onClick={() => tambahJumlah(item.id)}
                  >
                    +
                  </Button>
                  <span className="ms-3">{item.price}</span>
                </div>
              </div>
              <div>
                Total: Rp. {
                  (parseInt(item.price.replace(/[^\d]/g, '')) * item.jumlah)
                    .toLocaleString('id-ID')
                }
              </div>
            </div>
          ))}
          <div className="mt-3">
            <h4>Total Belanja: Rp. {
              keranjang.reduce((total, item) => 
                total + (parseInt(item.price.replace(/[^\d]/g, '')) * item.jumlah)
              , 0).toLocaleString('id-ID')
            }</h4>
          </div>
        </Container>
      )}
       <Button 
              variant="success" 
              className="mt-3 px-4"
              onClick={() => {
                const total = keranjang.reduce((total, item) => 
                  total + (parseInt(item.price.replace(/[^\d]/g, '')) * item.jumlah)
                , 0);
                
                const pesanan = keranjang.map(item => 
                  `${item.title} (${item.jumlah}x)`
                ).join('\n');

                const text = `Halo, saya ingin memesan:\n\n${pesanan}\n\nTotal: Rp. ${total.toLocaleString('id-ID')}`;
                
                window.open(`https://wa.me/6285741909786?text=${encodeURIComponent(text)}`);
              }}
            >
              <i className="bi bi-whatsapp me-2"></i>
              Pesan Sekarang via WhatsApp
            </Button>
    </div>
  )
}

export default produk
