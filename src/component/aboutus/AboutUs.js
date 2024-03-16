
import React from "react";
import { Typography, Card } from "antd";

const { Title, Paragraph } = Typography;


const AboutUs = () => {
  return (
    <div className="container mx-auto p-6">
    <Card className="shadow-lg p-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <Title level={2} className="text-4xl mb-6 font-semibold">
        Welcome to XYZ Shop
      </Title>
      <Paragraph className="text-lg">
        At XYZ Shop, we're more than just an online store – we're your
        go-to destination for quality products and a delightful shopping
        experience.
      </Paragraph>
      <Paragraph className="text-lg">
        Our mission is to bring joy and satisfaction to your shopping journey.
        From stylish fashion to essential home goods, we carefully curate our
        collection to meet your unique tastes and needs.
      </Paragraph>
      <Paragraph className="text-lg">
        Join us in exploring a world of possibilities. We're here to serve
        you with passion, dedication, and a commitment to excellence.
      </Paragraph>
      <Paragraph className="text-lg">
        Thank you for choosing XYZ Shop. Happy shopping!
      </Paragraph>
    </Card>
  </div>
  );
};

export default AboutUs;
