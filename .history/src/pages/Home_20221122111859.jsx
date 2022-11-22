import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
  const [setInput] = useState('');
  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  return (
    <MainPageLayout>
      {' '}
      <input type="text" onChange={onInputChange} />{' '}
    </MainPageLayout>
  );
};

export default Home;
