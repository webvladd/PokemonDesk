import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Button';
import { LinkEnum } from '../../routes';

const NotFoundPage = () => {
  return (
    <div>
      NotFoundPage
      <Button onClick={() => navigate(LinkEnum.HOME)}>Return</Button>
    </div>
  );
};

export default NotFoundPage;
