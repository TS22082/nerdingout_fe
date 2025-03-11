import React from 'react';
import useAuthProtectedData from './useAuthProtectedData.ts';

type AuthProtectedPropTypes = {
  children: React.ReactNode;
};

const AuthProtected: React.FC<AuthProtectedPropTypes> = ({ children }) => {
  useAuthProtectedData();
  return children;
};

export default AuthProtected;
