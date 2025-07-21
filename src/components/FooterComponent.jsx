import { Container, Row, Col } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <div>
      <footer className=" py-5">
            <Container>
                <Row>
                    <Col md={3} className="mb-4 mb-md-0 text-dark">
                        <div className="d-flex align-items-center mb-3">
                            <span className="fs-5 fw-bold">AL Store</span>
                        </div>
                        <p>
                            Toko jersey sepak bola terbaik di Bandar. Kami menyediakan berbagai macam jersey dari klub-klub terbaik dunia.
                        </p>
                    </Col>

                    <Col md={3} className="mb-4 mb-md-0 text-dark">
                        <h4 className="h5 fw-semibold mb-3">Layanan</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2">Penjualan jersey</li>
                            <li className="mb-2">merchandise</li>
                            <li className="mb-2">Jastip Baju bola</li>
    
                        </ul>
                    </Col>

                    <Col md={3} className="mb-4 mb-md-0 text-dark">
                        <h4 className="h5 fw-semibold mb-3">Perusahaan</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2">Tentang Kami</li>
                            <li className="mb-2">Tim</li>
                            <li className="mb-2">Karir</li>
                            <li>Blog</li>
                        </ul>
                    </Col>

                    <Col md={3} className="text-dark">
                        <h4 className="h5 fw-semibold mb-3">Kontak</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2">📧 irvanhayq12@gmail.com</li>
                            <li className="mb-2">📞 +62 857-4190-9786</li>
                            <li>📍 Batang, Indonesia</li>
                        </ul>
                    </Col>
                </Row>

                <div className="border-top border-dark mt-4 pt-4 text-center text-dark">
                    <p>&copy; 2025 AL Store.</p>
                </div>
            </Container>
        </footer>
    </div>
  )
}

export default FooterComponent