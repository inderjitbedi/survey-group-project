import { Validators } from '@angular/forms';

export namespace Validator {

  export const phoneNumberValidator = ['', [
    Validators.minLength(8),
    Validators.maxLength(12),
    Validators.required,
    Validators.pattern('^[0-9]{8,12}$')
  ]];

  export const postalCodeValidator = ['', [
    Validators.minLength(5),
    Validators.maxLength(5),
    Validators.required,
    // Validators.pattern('^[0-9]{8}$')
  ]];
  export const requiredValidator = ['', [
    Validators.required]
  ];

  export const nameValidator = ['', [
    Validators.pattern('^[^-\s][a-zA-Z0-9_\s-]+$'),
    Validators.required]
  ];

  export const lngValidator = ['', [
    Validators.required,
    Validators.pattern('^-{0,1}((180|180.[0]{1,20}|[0-9]|([0-9][0-9])|([1][0-7][0-9]))|(179|[0-9]|([0-9][0-9])|([1][0-7][0-9]))[.]{1}[0-9]{1,20}){1}$')
  ]];

  export const latValidator = ['', [
    Validators.required,
    Validators.pattern('^-{0,1}((90|90.[0]{1,20}|[0-9]|[1-8][0-9])|(89|[0-9]|[1-8][0-9])[.]{1}[0-9]{1,20}){1}$')
  ]];


  export const profileNameValidator = {
    minLength: 5,
    lengthError: { title: 'Name Too Short!', subTitle: 'Sorry, but name must be more than 4 characters.' },
    pattern: '^[a-zA-Z0-9\s]*$',
    patternError: { title: 'Invalid Name!', subTitle: 'Sorry, but the name you entered contains special characters.' }
  };
  export const emailValidator = {
    pattern: '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,4})$',
    regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/i,
    patternError: { title: 'Invalid Email Address!', subTitle: 'Sorry, but the email you have entered is invalid.' }
  };
  export const numberValidator = {
    pattern: /^-?(0|[1-9]\d*)?$/,
    patternError: { title: 'Invalid Number!', subTitle: '' }
  };
  export const urlValidator = {
    pattern: /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/,
    patternError: { title: 'Invalid web url!', subTitle: '' }
  };
  export const amountValidator = {
    pattern: /^\d+(\.\d{1,})?$/,
    patternError: { title: 'Invalid amount!', subTitle: '' }
  };

  export const passwordValidator = {
    minLength: 8,
    required: true,
    lengthError: { title: 'Password Too Short!', subTitle: 'Sorry, but password must be more than 8 characters.' },
    pattern: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,128}$',
    patternError: { title: 'Invalid Password!', subTitle: 'Sorry, but the password you have entered contains special characters.' }
  };
}
