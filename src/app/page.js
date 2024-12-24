import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { MdTranslate } from "react-icons/md";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

export default function Home() {
  return (
    <div className="mt-5">
      <Container>
        <Navbar expand="lg" style={{ borderRadius: '20px', borderColor: 'white', backgroundColor: '#212121' }} className='p-3'>
          <Container>
            <NavbarBrand href="#" style={{ color: 'white', alignItems: 'center', textAlign: 'center' }}>Simple Language Translator</NavbarBrand>
            <Row>
              <Col>
                <NavLink style={{ color: 'white' }} href="https://tlynx538.github.io/"> <span>By</span> Vinayak Jaiwant Mooliyil</NavLink>
              </Col>
            </Row>
          </Container>
        </Navbar>
        <Container className="mt-3 mb-3">
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={5}>
              <Container style={{ color: "white", borderRadius: "20px", backgroundColor: '#212121' }}className='mt-4'>
                <Col>
                  <Row>
                    <Dropdown>
                      <DropdownToggle id="dropdown-basic" className="mt-4 bg-dark" style={{borderRadius:'45px', borderColor: 'grey'}}>
                        Choose Input Language
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href="#/action-1">Action</DropdownItem>
                        <DropdownItem href="#/action-2">Another action</DropdownItem>
                        <DropdownItem href="#/action-3">Something else</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </Row>
                  <Row className="p-3"><textarea placeholder="Type your text here" className="p-2" style={{height: '200px', borderRadius:'20px', borderColor: 'grey'}}/></Row>
                </Col>
              </Container>
            </Col>
            <Col md={1}>
            <Container>
                <Col className='mt-5'>
                <Row style={{minHeight:'50px', minWidth: '50px'}} className='mt-3'><Button className='bg-dark' style={{borderRadius:'45px', borderColor: 'grey'}}><MdTranslate style={{maxHeight:'30px', maxWidth:'50px', minHeight: '30px', minWidth: '30px'}} /></Button></Row>
                <Row style={{minHeight:'50px', minWidth: '50px'}} className='mt-3'><Button className='bg-dark' style={{borderRadius:'45px',borderColor: 'grey'}}><HiOutlineSwitchHorizontal style={{maxHeight:'30px', maxWidth:'50px', minHeight: '30px', minWidth: '30px'}}/></Button></Row>
                </Col>
            </Container>
            </Col>
            <Col md={5}>
              <Container style={{ color: "white", borderRadius: "20px", backgroundColor: '#212121'}} className='mt-4'>
                <Col>
                  <Row>
                    <Dropdown>
                      <DropdownToggle id="dropdown-basic" className="mt-4 bg-dark" style={{borderRadius:'45px', borderColor: 'grey'}}>
                        Choose Output Language
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href="#/action-1">Action</DropdownItem>
                        <DropdownItem href="#/action-2">Another action</DropdownItem>
                        <DropdownItem href="#/action-3">Something else</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </Row>
                  <Row className="p-3"><textarea placeholder="Type your text here" className="p-2" style={{height: '200px', borderRadius:'20px', borderColor: 'grey'}}/></Row>
                </Col>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
