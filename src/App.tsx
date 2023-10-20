import { Col, Row } from 'antd';
import React from 'react';
import Sidebar from './Components/Sidebar';
import Tasks from './Components/Tasks';

const App = () => {
  return (
    <Row className='w-screen bg-slate-200'>
      <Col className='w-fit'>
        <Sidebar />
      </Col>
      <Col flex="auto">
        <Tasks />
      </Col>
    </Row>
  );
}

export default App;
