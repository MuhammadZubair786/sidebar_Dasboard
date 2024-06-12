import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import Header from "./Header";
import "./Payment.css"
import { FiUpload } from "react-icons/fi";


function PaymentScreen() {
  const [next,setnext] =useState(false)
  return (
    <>
      <Container fluid>
        <Header />
        </Container>
        <br />
        {
          next==false  ?

          <>
            <Row style={{ marginLeft: "1%" }}>
          <Col lg={4}>
            <b>Send Money</b>
            <b style={{ marginLeft: "20px" }}>Request Money</b>
          </Col>

        </Row>

        <Row style={{ backgroundColor: "white", marginLeft: "1%" }} >
          <Col lg={12}>
            <h4 className="mb-4 mt-5">New Payment</h4>
          </Col>
          <Col lg={12}>
            <Row>
              <Col lg={12}>
                <h4 className="">To</h4>
              </Col>
              <Form>
                <Row >
                  <Col lg={6}>
                    <Form.Group as={Col} controlId="formPayeeName">
                      <Form.Label>Payee Name</Form.Label>
                      <Form.Control type="text" placeholder="John.G" style={{ width: "100%" }} />
                    </Form.Group>
                  </Col>
                  <Col lg={6} >
                    <Form.Group as={Col} controlId="formAccountNo">
                      <Form.Label>Account NO</Form.Label>
                      <Form.Control type="text" placeholder="457-456-6794" />
                    </Form.Group>
                  </Col>
                  <Col lg={4} className="mt-2">
                    <Form.Group as={Col} controlId="formPayeeName">
                      <Form.Label>Paying Amount</Form.Label>
                      <Form.Control type="text" placeholder="John.G" />
                    </Form.Group>
                  </Col>
                  <Col lg={2}>
                    <Form.Group as={Col} controlId="formPayingAmount">
                      <Form.Label ></Form.Label>
                      <InputGroup className="mt-3">

                        <Form.Select aria-label="Select Currency">
                          <option>Select Currency</option>
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                          <option value="GBP">GBP</option>
                        </Form.Select>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col lg={6} className="mt-2">
                    <Form.Group as={Col} controlId="formAccountNo">
                      <Form.Label>Billing Email</Form.Label>
                      <Form.Control type="email" placeholder="john.g@gmail.com" />
                    </Form.Group>
                  </Col>
                  <Col lg={12} className="mt-4">
                    <Form.Group className="mb-3 custom-switch" controlId="formScheduleTransfer">
                      <Form.Check type="switch" label="Schedule Transfer" />
                    </Form.Group>
                  </Col>



                </Row>
                <Row>
                  <Col lg={6} style={{ textAlign: "right" }}>
                    <Button variant="outline-secondary" style={{ width: "200px", borderColor: "#01227E" }}>Cancel</Button>
                  </Col>
                  <Col lg={6}>
                    <Button variant="primary" style={{ width: "200px", backgroundColor: "#01227E" }}
                    onClick={()=>setnext(true)}
                    >Continue</Button>
                  </Col>
                </Row>

                <Row style={{ marginLeft: "10%" }}>
                  <Col lg={12}>
                    <div className="divider" >or continue with</div>
                  </Col>
                  <Col lg={10} style={{ textAlign: "center", marginLeft: -20 + "px" }}>

                    Upload &emsp;
                    <FiUpload
                      size={40}
                      style={{

                      }}
                    />
                  </Col>
                 
                </Row>
                <Row>

                </Row>


              </Form>
             


            </Row>

          </Col>
          <Col>
          <h1></h1></Col>
          <Col>
          <h1></h1></Col>
        </Row>
          </>
          :
          <>
          <Container fluid  style={{backgroundColor:"white",marginTop:"3%",paddingTop:"3%",width:"80%"}} >
        <Row >
          <Col lg={12}>
          <h1 style={{textAlign:"center",color:"#0a1022" }}>How do you Want to pay</h1>
       
          </Col>
          <Col lg={2}>
          </Col>
          <Col lg={8}>
          <Form.Control type="text" placeholder="Mobile Money" style={{ height: "80px", textAlign: "left" }} />

          </Col>
          <Col lg={2}>
          </Col>
          </Row>
          <Row style={{marginTop:"1%"}} >
      
          <Col lg={2}>
          </Col>
          <Col lg={8}>
            <Form.Control type="text" placeholder="NFS" style={{ height: "60px", textAlign: "left" }} />
          </Col>
          <Col lg={2}>
          </Col>
          </Row>
          <br/>

          <Row>
                  <Col lg={6} style={{ textAlign: "right" }}>
                    <Button variant="outline-secondary" style={{ width: "200px", borderColor: "#01227E" }}>Cancel</Button>
                  </Col>
                  <Col lg={6}>
                    <Button variant="primary" style={{ width: "200px", backgroundColor: "#01227E" }}
                    onClick={()=>setnext(true)}
                    >Continue</Button>
                  </Col>
                </Row>
          <br/>
          <br/>


       

      </Container>
          </>

        }
        <>
        </>
      





    
      
    


    </>

  );
}
export default PaymentScreen;
