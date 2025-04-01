const toggleActiveStyling = (
  route: string,
  currentRoute: string,
  dark: boolean = true
) => {
  if (route === currentRoute) {
    return {
      textDecoration: 'underline',
      color: dark ? 'white' : 'black',
    };
  }

  return {
    textDecoration: 'none',
    color: 'grey',
  };
};

export default toggleActiveStyling;
