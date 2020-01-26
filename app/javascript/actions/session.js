import axios from 'axios';
import {
  CREATE_SESSION,
  DESTROY_SESSION
} from '../common/variables';

export const createSession = (payload) => {
  return { type: CREATE_SESSION, payload };
}

export const destroySession = (payload) => {
  return { type: DESTROY_SESSION, payload };
}
