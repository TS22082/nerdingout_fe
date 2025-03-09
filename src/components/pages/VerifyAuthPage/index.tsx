import React from 'react';
import useVerifyAuthAPageData from './useVerifyAuthAPageData.ts';

type VerifyAuthPageProps = {
  type: 'github' | 'google' | 'linkedin';
};

const VerifyAuthPage: React.FC<VerifyAuthPageProps> = ({ type }) => {
  useVerifyAuthAPageData({ type });

  return <h1>Loading ...</h1>;
};

export default VerifyAuthPage;
