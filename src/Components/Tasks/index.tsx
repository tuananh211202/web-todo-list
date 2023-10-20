import { Row, Typography } from 'antd';
import React from 'react';

const Tasks = () => {
  const title = "Wednesday, Oct 18";

  return (
    <Row className='w-full px-20 py-10'>
      <Typography.Title level={3} className='w-full pb-8'>{title}</Typography.Title>
    </Row> 
  );
};

export default Tasks;
