import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StyledShowCard } from '../components/show/ShowCard.styled';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
      StyledShowCard(results);
    });
  }, [id]);

  return <div>this is show page</div>;
};

export default Show;
