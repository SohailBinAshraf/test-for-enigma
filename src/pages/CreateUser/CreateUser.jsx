import { React, useEffect } from "react";
import {
  Form,
  Input,
  DatePicker,
  Upload,
  message,
  Button,
  Row,
  Col,
  Radio,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./user.scss";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

export const CreateUser = () => {
  useEffect(() => {
    const userData = localStorage.getItem("userdata");
    if (userData) {
      window.location.href = "/home";
    }
  }, []);

  const formData = require("./form-data.json");

  const onFinish = async (values) => {
    if (values) {
      await localStorage.setItem("userdata", values.email);
    }
    window.location.href = "/home";
  };

  const props = {
    name: "file",
    headers: {
      authorization: "authorization-text",
    },

    onChange(info) {
      if (info.file.status !== "uploading") {
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <Row>
        <Col className="title">
          <h1>Personal Info</h1>
        </Col>
      </Row>
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        {formData &&
          formData.map((data, i) =>
            data.type === "image" ? (
              <Form.Item
                key={i}
                name={data.key}
                label={data.label}
                rules={[
                  {
                    required: `${data.required}`,
                  },
                ]}
              >
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>
            ) : data.type === "text" ? (
              <Form.Item
                key={i}
                name={data.key}
                label={data.label}
                rules={[
                  {
                    required: `${data.required}`,
                  },
                ]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
            ) : data.type === "date" ? (
              <Form.Item
                key={i}
                name={data.key}
                label={data.label}
                rules={[
                  {
                    required: `${data.required}`,
                  },
                ]}
              >
                <DatePicker />
              </Form.Item>
            ) : data.type === "radio" ? (
              <Form.Item
                key={i}
                name={data.key}
                label={data.label}
                rules={[
                  {
                    required: `${data.required}`,
                  },
                ]}
              >
                <Radio.Group>
                  {data.options &&
                    data.options.map((optionData, j) => (
                      <Radio key={j} value={optionData.key}>
                        {optionData.label}
                      </Radio>
                    ))}
                </Radio.Group>
              </Form.Item>
            ) : (
              ""
            )
          )}

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
