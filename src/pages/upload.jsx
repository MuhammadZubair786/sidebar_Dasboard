import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Button,
  FormControl,
  Table,
} from "react-bootstrap";
import "./FileTable.css"; // Custom styles

import Header from "./Header";

function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [show, setshow] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const files = [
    {
      id: "B-237-753-TZ",
      fileName: "Salary.csv",
      uploadTime: "28.01.2023",
      status: "Contains Errors!",
      action: "View errors",
    },
    {
      id: "B-237-753-TZ",
      fileName: "Salary.csv",
      uploadTime: "28.01.2023",
      status: "Successful",
      action: "Process File",
    },
  ];

  return (
    <>
      <Container fluid>
        <Header />
      </Container>
      <Row style={{ marginLeft: "1%" }}>
        <Col className="tap" lg={2} onClick={()=>setshow(false)}>
          <b style={{color:show ? "#5A504E":"black"}}>Blunk Upload</b>
        </Col>
        <Col className="tap" lg={2} onClick={()=>setshow(true)}>
          <b style={{color:show ? "black":"#5A504E"}}>Upload History</b>
        </Col>
      </Row>
      {show ? (
        <Container fluid className="file-table-container mt-3">
          <Row className="mb-3 filter-row">
            <Col md={4}>
              <InputGroup>
                <FormControl
                  placeholder="01.01.2023"
                  aria-label="Start Date"
                  type="date"
                  className="custom-date-input"
                />
              </InputGroup>
            </Col>
            <Col md={4}>
              <InputGroup>
                <FormControl
                  placeholder="01.02.2023"
                  aria-label="End Date"
                  type="date"
                  className="custom-date-input"
                />
              </InputGroup>
            </Col>
            <Col md={4} className="d-flex justify-content-end">
              <Button variant="outline-secondary" className="filter-button">
                Filter
              </Button>
            </Col>
          </Row>

          <Table bordered hover responsive className="file-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>File Name</th>
                <th>Upload Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr key={index}>
                  <td>{file.id}</td>
                  <td>{file.fileName}</td>
                  <td>{file.uploadTime}</td>
                  <td>
                    <span
                      className={`status ${
                        file.status === "Successful"
                          ? "status-success"
                          : "status-error"
                      }`}
                    >
                      {file.status}
                    </span>
                  </td>
                  <td>
                    <Button variant="outline-primary" className="action-button">
                      {file.action}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="pagination-container d-flex justify-content-between align-items-center">
            <span>Showing 1 to 2 of 2 entries</span>
            <Button variant="secondary" className="page-button">
              1
            </Button>
          </div>
        </Container>
      ) : (
        <Container fluid className="mt-3 d-flex justify-content-center">
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            style={{
              width: "800px",
              height: "400px",
              border: "2px dashed #007bff",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#fff",
            }}
          >
            <input
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
              id="fileUpload"
            />
            <label
              htmlFor="fileUpload"
              style={{ cursor: "pointer", textAlign: "center" }}
            >
              <Button variant="light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-upload"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.5a.5.5 0 0 1 .5-.5h4V5.707L4.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 1 1-.708.708L8 5.707V9h4a.5.5 0 0 1 0 1H.5z" />
                  <path d="M.5 13a.5.5 0 0 1 .5.5v1A1.5 1.5 0 0 0 2.5 16h11a1.5 1.5 0 0 0 1.5-1.5v-1a.5.5 0 0 1 1 0v1A2.5 2.5 0 0 1 13.5 16h-11A2.5 2.5 0 0 1 0 13.5v-1a.5.5 0 0 1 .5-.5z" />
                </svg>
              </Button>
              <div>Browse Files to upload</div>
            </label>
            {selectedFile && (
              <div className="mt-3">Selected file: {selectedFile.name}</div>
            )}
          </div>
        </Container>
      )}
    </>
  );
}
export default UploadPage;
