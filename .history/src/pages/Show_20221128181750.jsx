import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Show = () => {
  const { id } = useParams();
  return <div>this is show page</div>;
};

export default Show;
