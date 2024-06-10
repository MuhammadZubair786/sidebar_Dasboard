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
import "./TransactionTable.css"; // For custom styles
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineDollar } from "react-icons/ai";
const transactions = [
  {
    date: "29.01.2023",
    id: "#5089",
    toFrom: "Martha Kaluba",
    amount: "+K3077",
    status: "Verified",
    ccy: "ZMK",
  },
  {
    date: "26.01.2023",
    id: "#5041",
    toFrom: "Philip Phiri",
    amount: "-K2230",
    status: "Pending",
    ccy: "ZMK",
  },
  {
    date: "25.01.2023",
    id: "#5027",
    toFrom: "Kevin Zuma",
    amount: "-K2787",
    status: "Rejected",
    ccy: "ZMK",
  },
  {
    date: "15.01.2023",
    id: "#5024",
    toFrom: "Ariella Nchimunya",
    amount: "-K5285",
    status: "Pending",
    ccy: "ZMK",
  },
  {
    date: "28.12.2022",
    id: "#5020",
    toFrom: "Jack Galu",
    amount: "+K4836",
    status: "Pending",
    ccy: "ZMK",
  },
  {
    date: "21.12.2022",
    id: "#5024",
    toFrom: "Alexander Mundia",
    amount: "+K4567",
    status: "Verified",
    ccy: "ZMK",
  },
  {
    date: "17.12.2022",
    id: "#5027",
    toFrom: "Raynell Clendenenn",
    amount: "-K3789",
    status: "Verified",
    ccy: "ZMK",
  },
  {
    date: "14.12.2022",
    id: "#5041",
    toFrom: "Lorine Hleke",
    amount: "-K5219",
    status: "Verified",
    ccy: "ZMK",
  },
  {
    date: "29.01.2023",
    id: "#5089",
    toFrom: "Martha Kaluba",
    amount: "+K3077",
    status: "Verified",
    ccy: "ZMK",
  },
  {
    date: "26.01.2023",
    id: "#5041",
    toFrom: "Philip Phiri",
    amount: "-K2230",
    status: "Pending",
    ccy: "ZMK",
  },
  {
    date: "25.01.2023",
    id: "#5027",
    toFrom: "Kevin Zuma",
    amount: "-K2787",
    status: "Rejected",
    ccy: "ZMK",
  },
  {
    date: "15.01.2023",
    id: "#5024",
    toFrom: "Ariella Nchimunya",
    amount: "-K5285",
    status: "Pending",
    ccy: "ZMK",
  },
  {
    date: "28.12.2022",
    id: "#5020",
    toFrom: "Jack Galu",
    amount: "+K4836",
    status: "Pending",
    ccy: "ZMK",
  },
  {
    date: "21.12.2022",
    id: "#5024",
    toFrom: "Alexander Mundia",
    amount: "+K4567",
    status: "Verified",
    ccy: "ZMK",
  },
  {
    date: "17.12.2022",
    id: "#5027",
    toFrom: "Raynell Clendenenn",
    amount: "-K3789",
    status: "Verified",
    ccy: "ZMK",
  },
  {
    date: "14.12.2022",
    id: "#5041",
    toFrom: "Lorine Hleke",
    amount: "-K5219",
    status: "Verified",
    ccy: "ZMK",
  },
  {
    date: "29.01.2023",
    id: "#5089",
    toFrom: "Martha Kaluba",
    amount: "+K3077",
    status: "Verified",
    ccy: "ZMK",
  },
  {
    date: "26.01.2023",
    id: "#5041",
    toFrom: "Philip Phiri",
    amount: "-K2230",
    status: "Pending",
    ccy: "ZMK",
  },
  {
    date: "25.01.2023",
    id: "#5027",
    toFrom: "Kevin Zuma",
    amount: "-K2787",
    status: "Rejected",
    ccy: "ZMK",
  },
  {
    date: "15.01.2023",
    id: "#5024",
    toFrom: "Ariella Nchimunya",
    amount: "-K5285",
    status: "Pending",
    ccy: "ZMK",
  },
  {
    date: "28.12.2022",
    id: "#5020",
    toFrom: "Jack Galu",
    amount: "+K4836",
    status: "Pending",
    ccy: "ZMK",
  },
  {
    date: "21.12.2022",
    id: "#5024",
    toFrom: "Alexander Mundia",
    amount: "+K4567",
    status: "Verified",
    ccy: "ZMK",
  },
  {
    date: "17.12.2022",
    id: "#5027",
    toFrom: "Raynell Clendenenn",
    amount: "-K3789",
    status: "Verified",
    ccy: "ZMK",
  },
  {
    date: "14.12.2022",
    id: "#5041",
    toFrom: "Lorine Hleke",
    amount: "-K5219",
    status: "Verified",
    ccy: "ZMK",
  },
  {
    date: "29.01.2023",
    id: "#5089",
    toFrom: "Martha Kaluba",
    amount: "+K3077",
    status: "Verified",
    ccy: "ZMK",
  },
  {
    date: "26.01.2023",
    id: "#5041",
    toFrom: "Philip Phiri",
    amount: "-K2230",
    status: "Pending",
    ccy: "ZMK",
  },
  {
    date: "25.01.2023",
    id: "#5027",
    toFrom: "Kevin Zuma",
    amount: "-K2787",
    status: "Rejected",
    ccy: "ZMK",
  },
  {
    date: "15.01.2023",
    id: "#5024",
    toFrom: "Ariella Nchimunya",
    amount: "-K5285",
    status: "Pending",
    ccy: "ZMK",
  },
  {
    date: "28.12.2022",
    id: "#5020",
    toFrom: "Jack Galu",
    amount: "+K4836",
    status: "Pending",
    ccy: "ZMK",
  },
  {
    date: "21.12.2022",
    id: "#5024",
    toFrom: "Alexander Mundia",
    amount: "+K4567",
    status: "Verified",
    ccy: "ZMK",
  },
  {
    date: "17.12.2022",
    id: "#5027",
    toFrom: "Raynell Clendenenn",
    amount: "-K3789",
    status: "Verified",
    ccy: "ZMK",
  },
  {
    date: "14.12.2022",
    id: "#5041",
    toFrom: "Lorine Hleke",
    amount: "-K5219",
    status: "Verified",
    ccy: "ZMK",
  },
];

const TransactionTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;

  // Calculate the start and end index for the transactions to display
  const startIndex = (currentPage - 1) * transactionsPerPage;
  const endIndex = startIndex + transactionsPerPage;
  const currentTransactions = transactions.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container fluid>
      <Row
        className="mb-3"
        style={{ backgroundColor: "white", height: "60px" }}
      >
        <Col lg={7} style={{ margin: "10px" }}>
          <InputGroup>
            <InputGroup.Text
              style={{ backgroundColor: "white", borderRight: "0px solid red" }}
            >
              <FaSearch />
            </InputGroup.Text>
            <FormControl
              placeholder="Search for transactions, accounts, ..."
              style={{ boxShadow: "none", borderLeft: "0px" }}
            />
          </InputGroup>
        </Col>
        <Col
          lg="2"
          style={{
            margin: "15px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <IoMdNotificationsOutline size={30} />
          <AiOutlineDollar size={25} style={{ marginTop: "2px" }} />
        </Col>
        <Col xs="auto" className="d-flex align-items-center">
          <span className="ms-3">Hello Maria</span>
          <img
            style={{ width: "40px", height: "40px", marginLeft: "30px" }}
            src="https://cdn-icons-png.freepik.com/256/15675/15675890.png?ga=GA1.1.1506573534.1703183738&semt=ais_hybrid"
            alt="Profile"
            className="rounded-circle ms-2"
          />
        </Col>
      </Row>
      <Row>
        <Col>
        <h4>Transaction history</h4>
        </Col>
      </Row>


      <div className="transaction-table-container p-4" style={{backgroundColor:"white"}}>
        <Row>
          <Col lg={2}>
          <FormControl
            placeholder="Start Date"
            aria-label="Start Date"
            type="date"
          />

          </Col>
          <Col lg={2}>
          <FormControl
            placeholder="Start Date"
            aria-label="Start Date"
            type="date"
          />


          </Col>
          <Col lg={2}>
          </Col>
          <Col  lg={4}>
          <FormControl
            placeholder="Search transactions"
            aria-label="Search transactions"
          />
          </Col>
          <Col lg={2}>
          <Button
            style={{
              backgroundColor: "white",
              borderColor: "white",
              borderRadius: "5px",
              color: "grey",
            }}
            variant="outline-primary"
          >
            Filter
          </Button>
          
          </Col>
        </Row>
        <InputGroup className="mb-3">
          
          {/* <FormControl
            placeholder="End Date"
            aria-label="End Date"
            type="date"
          /> */}
         
         
        </InputGroup>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Date</th>
              <th>ID</th>
              <th>To/From</th>
              <th>Amount</th>
              <th>Status</th>
              <th>CCY</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.id}</td>
                <td>{transaction.toFrom}</td>
                <td>{transaction.amount}</td>
                <td>
                  <span
                    className={`status-${transaction.status.toLowerCase()}`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td>{transaction.ccy}</td>
                <td>...</td>
              </tr>
            ))}
            <td colSpan={8}>
              <Col lg={12} className="pagination-container">
                <div>
                  <Button
                    variant="link"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    style={{
                        marginTop:"10px",

                      backgroundColor: "#01227E",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Previous
                  </Button>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <Button
                      key={index + 1}
                      variant="link"
                      onClick={() => setCurrentPage(index + 1)}
                      active={index + 1 === currentPage}
                      style={{
                        textDecoration: "none",
                        color: index + 1 === currentPage ? "white" : "#01227E",
                        backgroundColor:
                          index + 1 === currentPage ? "#01227E" : "white",
                        marginTop: "10px",
                      }}
                    >
                      {index + 1}
                    </Button>
                  ))}
                  <Button
                    variant="link"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    style={{
                        marginTop:"10px",
                      backgroundColor: "#01227E",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Next
                  </Button>
                </div>
              </Col>
            </td>
          </tbody>
        </Table>

        <Button variant="primary" className="export-button"   style={{
                        marginTop:"10px",
                      backgroundColor: "#01227E",
                      textDecoration: "none",
                      color: "white",
                      textAlign:"right",
                      float:"right"
                    }}>
                        
                        &emsp;&emsp;  Export &emsp;&emsp;
        </Button>
      </div>
    </Container>
  );
};

export default TransactionTable;
