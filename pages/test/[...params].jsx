import React from 'react';
import { useRouter } from 'next/router';

const ParamsTest = () => {
  const router = useRouter();

  const { params } = router.query;
  console.log(params);
  return <h1>Note</h1>;
};

export default ParamsTest;
