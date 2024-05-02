import { useFormik } from 'formik';
import * as Yup from 'yup';
// import toast from 'react-hot-toast';
import {
  Button,
  ErrorMessage,
  Form,
  Input,
  Line,
  Link,
  LinkText,
  NetworkBtnSubmit,
  PasswordContainer,
  Text,
  Title,
} from './LoginForm.styled.js';
import { FiEyeOff } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { register } from '../../redux/authSlice/authOperations';
import google_icon from '../../images/google.svg';
import facebook_icon from '../../images/facebook.svg';
import apple_icon from '../../images/apple.svg';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, {
      message: `Invalid email.Please enter a valid email in the format: example@example.com.`,
    })
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

export const LoginForm = ({ isClose, isOpenRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  //   const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: formSchema,
    onSubmit: values => {
      //   if (formik.isValid) {
      //     dispatch(register(values))
      //       .unwrap()
      //       .catch(error => {
      //         if (error.code === 'auth/email-already-in-use') {
      //           toast.error(
      //             'Email is already in use. Please use a different email.'
      //           );
      //         } else {
      //           toast.error('Something went wrong. Try again later');
      //         }
      //       });
      isClose();
      //   }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleModal = () => {
    isClose();
    isOpenRegister();
  };

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Log in</Title>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email"
          autoComplete="off"
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        )}
        <PasswordContainer>
          <Input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
            autoComplete="off"
          />
          {showPassword ? (
            <FiEye
              style={{
                cursor: 'pointer',
                position: 'absolute',
                top: '8px',
                right: '16px',
              }}
              size="20px"
              color="#A2A8BC"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <FiEyeOff
              style={{
                cursor: 'pointer',
                position: 'absolute',
                top: '8px',
                right: '16px',
              }}
              size="20px"
              color="#A2A8BC"
              onClick={togglePasswordVisibility}
            />
          )}
        </PasswordContainer>
        {formik.touched.password && formik.errors.password ? (
          <ErrorMessage>{formik.errors.password}</ErrorMessage>
        ) : null}
        <Button type="submit">Log in</Button>
        <Text>Forgot your password?</Text>
        <Line>or</Line>
        <NetworkBtnSubmit type="button">
          {' '}
          <img src={google_icon} alt="Google icon" />
          Sing up with Google
        </NetworkBtnSubmit>
        <NetworkBtnSubmit type="button">
          {' '}
          <img src={facebook_icon} alt="Facebook icon" />
          Sing up with Facebook
        </NetworkBtnSubmit>
        <NetworkBtnSubmit type="button">
          {' '}
          <img src={apple_icon} alt="Apple icon" />
          Sing up with Apple
        </NetworkBtnSubmit>
        <LinkText>
          New user? ? <Link onClick={toggleModal}>Create an account </Link>
        </LinkText>
      </Form>
    </>
  );
};
