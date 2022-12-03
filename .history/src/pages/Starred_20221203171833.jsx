import React, { useEffect, useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { useShows } from '../misc/custom-hooks';

const Starred = () => {
  const [starred] = useShows();
  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
    } else {
      setIsLoading(false);
    }
  }, [starred]);

  return <MainPageLayout>This is starred page</MainPageLayout>;
};

export default Starred;
