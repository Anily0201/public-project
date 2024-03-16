import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu } from 'antd';

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log(e, 'event');
    const key = Number(e.key);

    if (key === 1) {
      
      navigate('/');
    } else if (key === 2) {
   
      localStorage.removeItem('token');
      navigate('/login');
    }
  };

  const menu = (
    <Menu onClick={handleClick}>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className='flex justify-between items-center p-4 bg-gray-800 text-white'>
      <div className='text-xl font-bold'>Logo</div>
      <div>
        <Dropdown overlay={menu} placement="bottomRight">
          <Avatar shape="square" size="small" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </div>
  );
};

export default AdminHeader;

const items = [
  {
    key: '1',
    label: 'profile',
  },
  {
    key: '2',
    label: 'logout',
  },
];
