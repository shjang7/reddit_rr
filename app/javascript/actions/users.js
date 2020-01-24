import {
  CREATE_SESSION
} from '../common/variables';

export const updateUser = username => ({ type: CREATE_SESSION, data: username });
