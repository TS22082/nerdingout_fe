import React from 'react';
import useVerifyAuthAPageData from './useVerifyAuthAPageData.ts';
import LoadingContainer from '../../containers/LoadingContainer';

type VerifyAuthPageProps = {
  type: 'github' | 'google' | 'linkedin';
};

const VerifyAuthPage: React.FC<VerifyAuthPageProps> = ({ type }) => {
  useVerifyAuthAPageData({ type });

  return <LoadingContainer />;
};

export default VerifyAuthPage;
