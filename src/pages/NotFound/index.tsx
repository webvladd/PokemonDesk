import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Button';

const NotFoundPage = () => {
  return (
    <div>
      NotFoundPage
      <Button onClick={() => navigate('/')}>Return</Button>
    </div>
  );
};

export default NotFoundPage;
