import { useState } from "react";
import { Row, Form, Col, Button } from "react-bootstrap";
import { v4 } from "uuid";
import Test from "./Test";

const Main = ({ tests }) => {
  const [totalTests, setTotalTests] = useState([1]);
  const handleAddTestClick = () => {
    const totalTestsCopy = [...totalTests];
    totalTestsCopy.push("test");
    setTotalTests(totalTestsCopy);
  };
  return (
    <div className="mb-4">
      <h2>Tests</h2>
      <Form>
        <Row>
          {totalTests.map(() => (
            <Test tests={tests} key={v4()} />
          ))}
          <Col className="mt-4">
            <Button onClick={handleAddTestClick}>Add Test +</Button> 
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Main;
