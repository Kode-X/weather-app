import { Menu, rem } from '@mantine/core';
import React from 'react';
import { FaCog, FaHome, FaInfoCircle, FaUserAlt } from 'react-icons/fa';

const VerticalMenu: React.FC = () => {
  return (
    <Menu
    //position="absolute" // Optional: Adjust position based on your layout needs
    width={200}
    shadow="md"
    styles={{
      // menu: {
      //   display: 'flex',
      //   flexDirection: 'column', // Display items vertically
      // },
      item: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: '8px',
        padding: '10px', // Optional: Adjust padding as needed
      },
    }}
  >
    <Menu.Item leftSection={<FaHome style={{ width: '14px', height: '14px' }} />} onClick={() => console.log('Item 1 clicked')}>
      Home
    </Menu.Item>
    <Menu.Item leftSection={<FaHome style={{ width: '14px', height: '14px' }} />} onClick={() => console.log('Item 2 clicked')}>
      Dashboard
    </Menu.Item>
    <Menu.Item leftSection={<FaHome style={{ width: '14px', height: '14px' }} />} onClick={() => console.log('Item 3 clicked')}>
      Profile
    </Menu.Item>
    <Menu.Item leftSection={<FaHome style={{ width: '14px', height: '14px' }} />} onClick={() => console.log('Item 4 clicked')}>
      Settings
    </Menu.Item>
  </Menu>
  );
};

export default VerticalMenu;
