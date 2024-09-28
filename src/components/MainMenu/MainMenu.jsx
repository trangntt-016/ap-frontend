import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col, NavDropdown } from 'react-bootstrap';
import './MainMenu.css'; // Import the new CSS file for custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import the user icon

// Wrapper function to pass the navigate function to the class component
function MainMenuWrapper() {
  const navigate = useNavigate(); // Get the navigate function from React Router v6
  return <MainMenu navigate={navigate} />;
}

class MainMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* Bootstrap Navbar */}
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#">Trang Chủ</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Đón Tiếp</Nav.Link>
                <Nav.Link href="#">Khám Bệnh</Nav.Link>
                <Nav.Link href="#">Thu Ngân</Nav.Link>
                <Nav.Link href="#">Hệ Thống</Nav.Link>
                <Nav.Link href="#">Danh Mục</Nav.Link>
                <Nav.Link href="#">Người Dùng</Nav.Link>
                <Nav.Link href="#">Trợ Giúp</Nav.Link>
                <Nav.Link href="#">Kết Thúc</Nav.Link>
              </Nav>

              {/* User Icon with Dropdown */}
              <Nav className="ml-auto">
                <NavDropdown
                  title={<FontAwesomeIcon icon={faUser} />}
                  id="user-dropdown"
                  align="end"
                >
                  <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Hero Section */}
        <section className="hero text-center my-4">
          <Container>
            <h1 className="display-5">PHẦN MỀM QUẢN LÝ BỆNH VIỆN THÔNG MINH EHC</h1>
            <p className="lead">
              Quản lý tổng thể bệnh viện, tự động hóa thiết bị y tế, tối ưu quy trình, tăng công suất, chất lượng KCB
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/60236c604df73fc065dbcded228e57853526bc1a9431f88f781657eb215f7796?placeholderIfAbsent=true&apiKey=e18a87abae224efd8cddb8351647661f"
              className="img-fluid rounded"
              alt="EHC"
            />
          </Container>
        </section>

        {/* Footer */}
        <footer className="footer bg-light text-center py-3">
          <Container>
            <Row>
              <Col>
                <p>666 lượt khám</p>
              </Col>
              <Col>
                <p>[Admin] - duongpq</p>
              </Col>
              <Col>
                <p>Phòng khám Đa khoa Bình Minh TEST</p>
              </Col>
              <Col>
                <p>Thứ 4, 28/02/2018 21:52</p>
              </Col>
              <Col>
                <p>Không có thông báo</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    );
  }
}

export default MainMenuWrapper;
