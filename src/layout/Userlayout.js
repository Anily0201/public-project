import { Layout } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import MainHeaders from './header'
import '../component/footer/Footer.css'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons'


const Userlayout = () => {
  return (
    <div>
      <Layout>
        <Header
          style={{
            color: 'white',
            fontSize: 'medium'
          }}
        >
          <MainHeaders />
          <div className="demo-logo" />
        </Header>
        <Content
          style={{
            padding: '0 48px',
          }}
        >
          <Layout
            style={{
              padding: '24px 0',
              // background: colorBgContainer,
              // borderRadius: borderRadiusLG,
            }}
          >

            <Content
              style={{
                padding: '0 24px',
                minHeight: 280,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Content>

        <Footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About Us</h3>
              <p>Your e-commerce description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Get the knowledge to help you succeed. Whether you're starting from scratch or just want to stay on top of what’s happening in eCommerce, we’ve got you covered.

              </p>
            </div>
            <div className="footer-section">
              <h3>Contact Us </h3>
              <p>Email: contact@example.com</p>
              <p>Phone: +977 9825360201</p>
            </div>
            <div className="footer-section">
              <h3>Customer Care</h3>
              <p>Help Center</p>
              <p>Returns & Refunds</p>
              <p>How to Buy</p>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <p>Stay connected on social media:</p>
              <Link to="https://www.facebook.com/Anil2536"><FacebookOutlined /> Facebook</Link>
              <div><Link to="https://www.youtube.com/"><YoutubeOutlined /> youtube</Link></div>
              <div><Link to="https://twitter.com/"><TwitterOutlined /> twitter</Link></div>
              <div><Link to="https://www.instagram.com/"><InstagramOutlined /> instagram</Link></div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; Thank you! for visit Anil eCommerce .</p>
          </div>
        </Footer>
      </Layout>

    </div>
  )
}

export default Userlayout
