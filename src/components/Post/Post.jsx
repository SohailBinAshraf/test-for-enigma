import { Card, Row, Col } from "antd";
import "./post.scss";
export const Post = ({ title, description }) => {
  return (
    <Row className="post">
      <Col>
        <Card className="mycard" bodyStyle={{ backgroundColor: "lightgrey" }}>
          <h2>{title}</h2>
          <p>{description}</p>
        </Card>
      </Col>
    </Row>
  );
};
