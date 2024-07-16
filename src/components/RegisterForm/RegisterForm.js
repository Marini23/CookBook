import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import {
  Button,
  ErrorMessage,
  Form,
  Img,
  Input,
  Line,
  Link,
  LinkText,
  NetworkBtnSubmit,
  PasswordContainer,
  Title,
} from './RegisterForm.styled';
import { FiEyeOff } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  register,
  signInWithFacebook,
  signInWithGoogle,
} from '../../redux/authSlice/authOperations';
import google_icon from '../../images/google.svg';
import facebook_icon from '../../images/facebook.svg';
// import apple_icon from '../../images/apple.svg';
import { useNavigate } from 'react-router-dom';
import errorIcon from '../../images/error_icon.svg';

const nameRegex = /[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formSchema = Yup.object().shape({
  name: Yup.string()
    .matches(nameRegex, {
      message: `Name may contain only letters, apostrophe, dash and spaces.`,
    })
    .required('Name is required'),
  email: Yup.string()
    .matches(emailRegex, {
      message: `Invalid email.Please enter a valid email in the format: example@example.com.`,
    })
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

export const RegisterForm = ({ isClose, isOpenLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: formSchema,
    onSubmit: values => {
      if (formik.isValid) {
        dispatch(
          register({
            name: values.name,
            email: values.email,
            password: values.password,
          })
        )
          .unwrap()
          .then(() => {
            navigate('/recipes'); // Redirect to the Recipes page after successful registration
            isClose();
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              toast.error(
                'Email is already in use. Please use a different email.'
              );
            } else {
              toast.error('Something went wrong. Try again later');
            }
          });
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prevState => !prevState);
  };
  const toggleModal = () => {
    isClose();
    isOpenLogin();
  };

  const handleRegisterWithGoogle = () => {
    try {
      dispatch(signInWithGoogle())
        .unwrap()
        .then(() => {
          navigate('/recipes');
          isClose();
        });
    } catch (error) {
      // Handle error if signing with Google fails
      console.error('Failed to sign in with Google:', error);
    }
  };

  const handleRegisterWithFacebook = () => {
    try {
      dispatch(signInWithFacebook())
        .unwrap()
        .then(() => {
          navigate('/recipes');
          isClose();
        });
    } catch (error) {
      console.error('Failed to sign in with Google:', error);
    }
  };

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Register</Title>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="Name"
          autoComplete="name"
          $iserror={formik.touched.name && formik.errors.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorMessage>
            <Img src={errorIcon} alt="error" />
            {formik.errors.name}
          </ErrorMessage>
        ) : null}
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email"
          autoComplete="email"
          $iserror={formik.touched.name && formik.errors.name}
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorMessage>
            <Img src={errorIcon} alt="error" />
            {formik.errors.email}
          </ErrorMessage>
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
            $iserror={formik.touched.name && formik.errors.name}
          />
          {showPassword ? (
            <FiEye
              style={{
                cursor: 'pointer',
                position: 'absolute',
                top: '24px',
                right: '24px',
              }}
              size="20px"
              color="#B1B0B2"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <FiEyeOff
              style={{
                cursor: 'pointer',
                position: 'absolute',
                top: '24px',
                right: '24px',
              }}
              size="20px"
              color="#B1B0B2"
              onClick={togglePasswordVisibility}
            />
          )}
        </PasswordContainer>
        {formik.touched.password && formik.errors.password ? (
          <ErrorMessage>
            <Img src={errorIcon} alt="error" />
            {formik.errors.password}
          </ErrorMessage>
        ) : null}
        <PasswordContainer>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            placeholder="Confirm password"
            autoComplete="off"
            $iserror={formik.touched.confirmPassword && formik.errors.name}
          />
          {showConfirmPassword ? (
            <FiEye
              style={{
                cursor: 'pointer',
                position: 'absolute',
                top: '26px',
                right: '24px',
              }}
              size="20px"
              color="#B1B0B2"
              onClick={toggleConfirmPasswordVisibility}
            />
          ) : (
            <FiEyeOff
              style={{
                cursor: 'pointer',
                position: 'absolute',
                top: '26px',
                right: '24px',
              }}
              size="20px"
              color="#B1B0B2"
              onClick={toggleConfirmPasswordVisibility}
            />
          )}
        </PasswordContainer>
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <ErrorMessage>
            <Img src={errorIcon} alt="error" />
            {formik.errors.confirmPassword}
          </ErrorMessage>
        ) : null}
        <Button type="submit">Register</Button>
        <Line>or</Line>
        <NetworkBtnSubmit type="button" onClick={handleRegisterWithGoogle}>
          {' '}
          <img src={google_icon} alt="Google icon" />
          Sing up with Google
        </NetworkBtnSubmit>
        <NetworkBtnSubmit type="button" onClick={handleRegisterWithFacebook}>
          {' '}
          <img src={facebook_icon} alt="Facebook icon" />
          Sing up with Facebook
        </NetworkBtnSubmit>
        {/* <NetworkBtnSubmit type="button">
          {' '}
          <img src={apple_icon} alt="Apple icon" />
          Sing up with Apple
        </NetworkBtnSubmit> */}
        <LinkText>
          Already have an account ? <Link onClick={toggleModal}>Log in </Link>
        </LinkText>
      </Form>
    </>
  );
};
