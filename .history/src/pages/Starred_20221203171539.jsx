import React from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { useShows } from '../misc/custom-hooks';

const Starred = () => {
  const [starred] = useShows();

  return <MainPageLayout>This is starred page</MainPageLayout>;
};

export default Starred;
