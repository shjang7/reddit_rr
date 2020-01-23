import { GET_LINKS_SUCCESS } from '../common/variables';

export default (state = [], { type, data }) => {
  switch(type) {
    case GET_LINKS_SUCCESS:
      return data.links;
    default:
      return state;
  }
}
