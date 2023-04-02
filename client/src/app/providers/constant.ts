import { environment } from './../../environments/environment';

export namespace Constants {
  export const version = `Version: ${environment.version}`;
  export const productName = 'Admin';
  export const copyright = `Copyright © ${new Date().getFullYear()}`;
  export const rightReserved = 'All rights reserved.';
  export const Pages = {
    LOGIN: 'login/',
    DASHBOARD:'/dashboard',
  };
  export const ErrorMessages = {
    serverError: 'Server Error.',
    sessionExpired: 'Session Expired.',
  };


}
