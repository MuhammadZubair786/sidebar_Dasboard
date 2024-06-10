import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  FormControl,
  ProgressBar
} from "react-bootstrap";
import {
  FaUpload,
  FaDollarSign,
  FaSearch,
} from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineDollar } from "react-icons/ai";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { BsFillSendArrowDownFill } from "react-icons/bs";
import Banner from "../assets/images/siderbar.png";
import { CiMenuKebab } from "react-icons/ci";
import "./Dashboard.css"
import {
    AreaChart,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area
  } from 'recharts';
  import Money from '../assets/images/money.PNG'


const Dashboard = () => {
  
const data = [
    { name: '', value: 500 },
    { name: '', value: 500 },
    { name: '', value: 1800 },
    { name: '', value: 1580 },
    { name: '', value: 1580 },
    { name: '', value: 1390 },
    { name: '', value: 2090 },
    { name: '', value: 1580 },
    { name: '', value: 1580 },
    { name: '', value: 2390 },
    { name: '', value: 3490 },
  ];
  return (
    <Container fluid style={{ backgroundColor: "#898989" }}>
      <Row
        className="mb-3"
        style={{ backgroundColor: "white", height: "60px" }}
      >
        <Col lg="7" style={{ margin: "10px" }}>
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
          {/* <div style={{border:"1px solid grey",borderRadius:"50%"}}>
              

                </div> */}
        </Col>
        <Col xs="auto" className="d-flex align-items-center">
          <i className="bi bi-bell"></i>
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
        <h4>Account Overview</h4>
        </Col>
      </Row>

      <Row>
        <Col md={7} lg={7}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>
              <div className="balance-container">
            <div className="balance-text">
                Balance
            </div>
            <CiMenuKebab className="balance-icon" />
        </div>
                </Card.Title>

              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <FaDollarSign size={25} className="me-2" color="orange" style={{backgroundColor:"#FBE0D0",borderRadius:"50%",padding:"1%"}} />
                  <span>K49,3742</span>
                </div>
                <span className="text-success">+10.2%</span>
              
              </div>
              <div className="mt-3">
              <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#007bff" fill="rgba(0, 123, 255, 0.3)" />
      </AreaChart>
    </ResponsiveContainer>
              </div>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header>
              <Row>
                <Col>Latest Transaction</Col>
                <Col xs="auto">
                  <InputGroup className="select-with-icon">
                    <FormControl as="select">
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                    </FormControl>
                  </InputGroup>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>From</th>
                    <th>CCY</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>09.11.2022</td>
                    <td>Quantom Inc</td>
                    <td>ZMK</td>
                    <td>+3077</td>
                    <td>
                      <span className="badge bg-success">Verified</span>
                    </td>
                  </tr>
                  <tr>
                    <td>19.11.2022</td>
                    <td>GPT Inc</td>
                    <td>ZMK</td>
                    <td>-2230</td>
                    <td>
                      <span className="badge bg-danger">Rejected</span>
                    </td>
                  </tr>
                  <tr>
                    <td>09.11.2022</td>
                    <td>Quantom Inc</td>
                    <td>ZMK</td>
                    <td>+3077</td>
                    <td>
                      <span className="badge bg-success">Verified</span>
                    </td>
                  </tr>
                  <tr>
                    <td>19.11.2022</td>
                    <td>GPT Inc</td>
                    <td>ZMK</td>
                    <td>-2230</td>
                    <td>
                      <span className="badge bg-danger">Rejected</span>
                    </td>
                  </tr>
                  <tr>
                    <td>09.11.2022</td>
                    <td>Quantom Inc</td>
                    <td>ZMK</td>
                    <td>+3077</td>
                    <td>
                      <span className="badge bg-success">Verified</span>
                    </td>
                  </tr>
                  <tr>
                    <td>19.11.2022</td>
                    <td>GPT Inc</td>
                    <td>ZMK</td>
                    <td>-2230</td>
                    <td>
                      <span className="badge bg-danger">Rejected</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} lg={5}>
          <Row className="mb-4 mt-0">
            <Col>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  borderColor: "white",
                  height:"100px"
                }}
                className="w-100 py-2"
              >
                <FaUpload
                  size={40}
                  style={{
                    backgroundColor: "#D7E0EA",
                  
                    borderRadius: "50%",
                    borderColor: "white",
                  }}
                />
                <div>
                  Bulk Upload
                </div>
              </Button>
            </Col>

            <Col>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  borderColor: "white",
                    height:"100px"
                }}
                className="w-100 py-2"
              >
                <BsFillSendArrowDownFill
                  size={40}
                  style={{
                    backgroundColor: "#D7E0EA",
                    // padding: "10px",
                    borderRadius: "50%",
                    borderColor: "white",
                    
                  }}
                />
                <div>Request Payment</div>
              </Button>
            </Col>

            <Col>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  borderColor: "white",
                    height:"100px"
                }}
                className="w-100 py-2"
              >
                <BsFillSendArrowUpFill
                  size={40}
                  style={{
                    backgroundColor: "#D7E0EA",
                    // padding: "10px",
                    borderRadius: "50%",
                    borderColor: "white",
                  }}
                />
                <div>
                  Send Money
                </div>
              </Button>
            </Col>
          </Row>
          <Row className="rounded"
            style={{
              backgroundColor: "white",
              border: "2px solid white",
              borderRadius: "0%",
              width:"99%",
             marginLeft:"2px",
             marginBottom:"30px",
             

            }}
          >
            <Col lg={7}>
              <Card className="mb-4 mt-2" style={{ border: "0px solid black" }}>
                <Card.Body>
                  <Card.Title>New to Bulk Pay for Business?</Card.Title>
                  <Card.Text>Don't worry we are excited to help you.</Card.Text>
                  <Button variant="primary">Discover more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={5} style={{ textAlign: "center",display:"flex",justifyContent:"center",alignItems:"center" }}>
              <img
                src={Banner}
                alt=""
                style={{ height: "80%", width: "100%" }}
              />
            </Col>
          </Row>

          <Card>
            <Card.Header>
              <Row>
                <Col>Overview</Col>
                <Col xs="auto">
                  <InputGroup className="select-with-icon">
                    <FormControl as="select">
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                    </FormControl>
                  </InputGroup>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
            <img
                src={Money}
                alt=""
                style={{ height: "150px", width: "100%" }}
              />
              <div className="money-tracker">
      <div className="money-item">
        <div className="label">Money-In</div>
        <div className="value">K545.69</div>
        <ProgressBar now={60} style={{height:"10%"}} label={`${60}%`} visuallyHidden />
      </div>
      <div className="money-item">
        <div className="label">Money-out</div>
        <div className="value">K256.34</div>
       
        <ProgressBar now={60} style={{height:"10%"}} variant="warning" label={`${60}%`} visuallyHidden />
        
      </div>
    </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
