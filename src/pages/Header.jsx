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
  import {
    FaSearch,
  } from "react-icons/fa";
  import { IoMdNotificationsOutline } from "react-icons/io";
  import { AiOutlineDollar } from "react-icons/ai";
function  Header(){
    return(
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
    )
}
export default Header