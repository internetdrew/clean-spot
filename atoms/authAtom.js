import { atom } from 'recoil';

export const authorizationState = atom({
  key: 'authState',
  default: '',
});
