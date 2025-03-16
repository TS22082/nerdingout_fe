import useVerifyAuthAPageData from './useVerifyAuthAPageData.ts';
import LoadingContainer from '../../containers/LoadingContainer';
import { FC } from 'react';

type VerifyAuthPageProps = {
  type: 'github' | 'google' | 'linkedin';
};

const VerifyAuthPage: FC<VerifyAuthPageProps> = ({ type }) => {
  useVerifyAuthAPageData({ type });

  return <LoadingContainer />;
};

export default VerifyAuthPage;
