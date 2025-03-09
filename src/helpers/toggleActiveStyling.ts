const toggleActiveStyling = (route: string, currentRoute: string) => {
  if (route === currentRoute) {
    return {
      textDecoration: 'underline',
      color: 'black',
    };
  }

  return {
    textDecoration: 'none',
    color: 'grey',
  };
};

export default toggleActiveStyling;
