import React, { useState } from "react";
import {
  Table,
  Button,
  Form,
  FormControl,
  InputGroup,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import Header from "./Header";

function PaymentScreen() {
  return (
    <Container fluid>
        <Header/>
        <Container className="mt-5" style={{ maxWidth: '600px', background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <h4 className="mb-4">New Payment</h4>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formPayeeName">
            <Form.Label>Payee Name</Form.Label>
            <Form.Control type="text" placeholder="John.G" />
          </Form.Group>

          <Form.Group as={Col} controlId="formAccountNo">
            <Form.Label>Account NO</Form.Label>
            <Form.Control type="text" placeholder="457-456-6794" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formPayingAmount">
            <Form.Label>Paying Amount</Form.Label>
            <InputGroup>
              <Form.Control type="number" placeholder="4.500" />
              <Form.Select aria-label="Select Currency">
                <option>Select Currency</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </Form.Select>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} controlId="formBillingEmail">
            <Form.Label>Billing Email</Form.Label>
            <Form.Control type="email" placeholder="john.g@gmail.com" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formScheduleTransfer">
          <Form.Check type="switch" label="Schedule Transfer" />
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Button variant="secondary" type="button">
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Continue
          </Button>
        </div>
      </Form>

      <div className="text-center mt-4">
        <hr />
        <span>or continue with</span>
        <div className="mt-2">
          <Button variant="outline-secondary" className="d-flex align-items-center">
            <input type="file" style={{ display: 'none' }} />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
              <path d="M.5 9.5a.5.5 0 0 1 .5-.5h4V5.707L4.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 1 1-.708.708L8 5.707V9h4a.5.5 0 0 1 0 1H.5z"/>
              <path d="M.5 13a.5.5 0 0 1 .5.5v1A1.5 1.5 0 0 0 2.5 16h11a1.5 1.5 0 0 0 1.5-1.5v-1a.5.5 0 0 1 1 0v1A2.5 2.5 0 0 1 13.5 16h-11A2.5 2.5 0 0 1 0 13.5v-1a.5.5 0 0 1 .5-.5z"/>
            </svg>
            <span className="ml-2">Upload a file</span>
          </Button>
        </div>
      </div>
    </Container>
      
    </Container>
  );
}
export default PaymentScreen;
