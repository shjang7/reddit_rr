export const GET_LINKS_REQUEST = 'GET_LINKS_REQUEST';

export const getLinks = () => {
  console.log('getLinks() Action!!')
  return {
    type: GET_LINKS_REQUEST
  };
}
