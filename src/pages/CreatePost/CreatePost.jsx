import { Form, Input, Button, Row, Col } from "antd";
import { useCreatePostMutation } from "../../services/post";
import "./post.scss";

const { TextArea } = Input;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

const validateMessages = {
  required: "This is required!",
};

export const CreatePost = () => {
  const [createPost, responceInfo] = useCreatePostMutation();

  const onFinish = async (values) => {
    let resp = await createPost({ ...values, userId: 1 });
    console.log("Responce");
    console.log("resp");
    window.location.href = "/home";
  };

  return (
    <>
      <Row>
        <Col className="title">
          <h1>Add Post</h1>
        </Col>
      </Row>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Enter the title" />
        </Form.Item>
        <Form.Item
          name="body"
          label="Description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TextArea rows={4} placeholder="Enter the description" />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
