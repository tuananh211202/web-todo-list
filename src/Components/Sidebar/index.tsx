import { Row } from 'antd';
import React from 'react';

const Sidebar = () => {
  return (
    <Row className='w-fit h-screen p-4'>
      <Row className='p-10 rounded-xl bg-white' style={{ width: "350px" }}>
        This is Sidebar 
      </Row>
    </Row>
  );
};

export default Sidebar;
