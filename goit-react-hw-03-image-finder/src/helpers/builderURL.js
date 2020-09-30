const CLIENT_KEY = process.env.REACT_APP_CLIENT_KEY;

export default (url) => {
  return `?${url}&key=${CLIENT_KEY}`;
};
