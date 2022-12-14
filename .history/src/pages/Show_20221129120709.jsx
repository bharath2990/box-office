import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { StyledShowCard } from '../components/show/ShowCard.styled';
import { apiGet } from '../misc/config';

const initialState = {
  show: true,
  isLoading: null,
  error: null,
};

const Show = () => {
  const { id } = useParams();

  useReducer(reducer, initialState);

  // const [show, setShow] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if (isMounted) {
          setShow(results);
          setIsLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
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
