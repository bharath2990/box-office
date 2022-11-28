import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledShowCard } from '../components/show/ShowCard.styled';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
       setTimeout(() ={
        setShow(results);
        setIsLoading(false);
       }, 2000)
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }
  if (error) {
    return <div>Error occured: {error}</div>;
  }

  return <div>this is show page</div>;
};

export default Show;
