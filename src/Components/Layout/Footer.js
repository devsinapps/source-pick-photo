import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
export const Footer = () => {
	return(
		<footer className="footer">
           <Container fluid>
             <Row>
               <Col lg='6' md='6' sm='6' xs='6'>
                 <Card>
                   <CardBody>
                       <i> Copyright © </i>
                       <Link to="/"> sandy kurniawan </Link>
                   </CardBody>
                 </Card>
               </Col>
               <Col lg='6' md='6' sm='6'  xs='6'>
                <Card>
                  <CardBody>
                    <i> Powered: </i>
                      <a href="https://unsplash.com/" target="__blank"> unsplash.com </a>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </footer>
	)
} 