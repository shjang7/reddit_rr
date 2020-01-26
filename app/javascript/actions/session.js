import {
  CREATE_SESSION,
  DESTROY_SESSION
} from '../common/variables';

export const createSession = (user) => {
  return { type: CREATE_SESSION, payload: user };
}

export const destroySession = (user) => {
  return { type: DESTROY_SESSION, payload: user };
}
