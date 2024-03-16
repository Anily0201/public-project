import React, { useEffect } from "react";
import { Typography, Card, Form, Input, Button, message } from "antd";
import { SendOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us - XYZ Shop";
  }, []);

  const onFinish = (values) => {
    console.log("Form values:", values);
    message.success("Message sent successfully!");
  };

  return (
    <div className="container mx-auto p-6">
      <Card className="shadow-lg p-6 rounded-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white">
        <Title level={2} className="text-4xl mb-6 font-semibold">
          Get in Touch
        </Title>
        <Paragraph className="text-lg">
          Have any questions or concerns? We'd love to hear from you! Reach out
          to us through the form below or contact us directly using the
          information provided.
        </Paragraph>

        <Form
          name="contact-form"
          onFinish={onFinish}
          layout="vertical"
          className="mt-4"
        >
          <Form.Item
            label="Your Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: "Please enter your email address" },
              { type: "email", message: "Please enter a valid email address" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              icon={<SendOutlined />}
              htmlType="submit"
            >
              Send Message
            </Button>
          </Form.Item>
        </Form>

        <div className="mt-6">
          <Title level={3} className="text-2xl mb-2">
            Contact Information
          </Title>
          <Paragraph>
            <MailOutlined className="mr-2" />
            Email: <a href="mailto:info@example.com">info@example.com</a>
          </Paragraph>
          <Paragraph>
            <PhoneOutlined className="mr-2" />
            Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
          </Paragraph>
          <Paragraph>
            <EnvironmentOutlined className="mr-2" />
            Address: 123 Main Street, Cityville, Country
          </Paragraph>
        </div>
      </Card>
    </div>
  );
};

export default ContactUs;
