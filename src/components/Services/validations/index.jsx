import * as Yup from 'yup';
import { useTranslation} from "react-i18next"


// const translation =()=>{
//     const {t}=useTranslation();
     
// }
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


// export const loginSchema = Yup.object().shape({
//     password: Yup.string()
//         .required('Please enter your password')
//         .min(8, 'Password is too short - should be 8 chars minimum.')
//         .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
//     phoneNumber: Yup.string().matches(phoneRegExp, 'Please enter a valid phone number')
//         .min(10, 'Please enter a valid phone number').max(10, "Please enter a valid phone number")
//         .required('Please enter phone number')
// });
 
export const loginSchema = Yup.object().shape({
    password: Yup.string().required(),
    phoneNumber: Yup.string().required()
});

export const signupSchema = Yup.object().shape({
  password: Yup.string()
  .required()
  .matches( /^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  "Must Contain 8 Characters, One Uppercase, One Special Case Character"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password and Confirm Password must match"
  ).required('required'),
  phone: Yup.string().required('Required'),
  fullName:Yup.string().required('Required'),
  email: Yup.string().email('Invalid email')
})

export const resetSchema = Yup.object().shape({
    password: Yup.string()
    .required()
    .matches( /^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Special Case Character"),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Password and Confirm Password must match"
      ).required('required')
})
export const inviteSchema = Yup.object().shape({
    studio :Yup.string().required(),
    email: Yup.string().email('Invalid email').required('Required'),
    production:Yup.string().required()
    // production:Yup.string().required().typeError(`${t('Admin.UpdateEmployeer.Additional.Validations.Name')}`)
  });
  
  export const forgetPasswordSchema = Yup.object().shape({
    phone: Yup.string().required()
});
















