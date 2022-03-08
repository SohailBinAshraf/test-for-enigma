import { Row, Col, Button } from "antd";
import { Post } from "../../components/Post/Post";
import { useGetAllPostQuery } from "../../services/post";
import "./home.scss";
import { Link } from "react-router-dom";

export const Home = () => {
  const allPosts = useGetAllPostQuery();
  return (
    <>
      <Row>
        <Col className="title">
          <h1>Home</h1>
        </Col>
      </Row>
      {allPosts.isSuccess ? (
        allPosts.data.map((post, i) => (
          <Post key={i} title={post.title} description={post.body} />
        ))
      ) : (
        <p>Loading</p>
      )}

      <Row className="add-post-btn">
        <Col>
          <Link to={{ pathname: "/createpost" }}>
            <Button type="primary">Add New Post</Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};
