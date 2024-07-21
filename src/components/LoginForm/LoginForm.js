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
  Text,
  Title,
} from './LoginForm.styled.js';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  logIn,
  signInWithFacebook,
  signInWithGoogle,
} from '../../redux/authSlice/authOperations';
import google_icon from '../../images/google.svg';
import facebook_icon from '../../images/facebook.svg';
// import apple_icon from '../../images/apple.svg';
import { selectErrorAuth } from '../../redux/selectors.js';
import { useNavigate } from 'react-router-dom';
import errorIcon from '../../images/error_icon.svg';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, {
      message: `Invalid email. Please enter a valid email in the format: example@example.com.`,
    })
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

export const LoginForm = ({ isClose, isOpenRegister, isOpenResetPassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSafari, setIsSafari] = useState(false);
  const errorMessage = useSelector(selectErrorAuth);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsSafari(
      userAgent.indexOf('safari') > -1 && userAgent.indexOf('chrome') === -1
    );
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: formSchema,
    onSubmit: async values => {
      try {
        await dispatch(logIn(values)).unwrap();
        console.log('Login successful, navigating to /recipes');
        isClose();
        navigate('/recipes'); // Redirect to the Recipes page after successful login
      } catch (error) {
        console.error('Login failed:', error);
        if (error.code === 'auth/invalid-credential') {
          toast.error(
            'Invalid credentials provided. Please double-check your email and password.'
          );
        } else {
          toast.error(errorMessage);
        }
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleModal = () => {
    isClose();
    isOpenRegister();
  };

  const toggleModalResetPassword = () => {
    isClose();
    isOpenResetPassword();
  };

  const handleSignInWithGoogle = async () => {
    try {
      await dispatch(signInWithGoogle()).unwrap();
      console.log('Google sign-in successful, navigating to /recipes');
      navigate('/recipes');
      isClose();
    } catch (error) {
      console.error('Google sign-in failed:', error);
      toast.error(errorMessage);
    }
  };

  const handleSignInWithFacebook = async () => {
    try {
      await dispatch(signInWithFacebook()).unwrap();
      console.log('Facebook sign-in successful, navigating to /recipes');
      navigate('/recipes');
      isClose();
    } catch (error) {
      console.error('Facebook sign-in failed:', error);
      toast.error(errorMessage);
    }
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
          autoComplete="email"
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
          />
          {!isSafari &&
            (showPassword ? (
              <FiEye
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
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
                  top: '24px',
                  right: '24px',
                }}
                size="20px"
                color="#A2A8BC"
                onClick={togglePasswordVisibility}
              />
            ))}
        </PasswordContainer>
        {formik.touched.password && formik.errors.password ? (
          <ErrorMessage>
            <Img src={errorIcon} alt="error" />
            {formik.errors.password}
          </ErrorMessage>
        ) : null}
        <Button type="submit">Log in</Button>
        <Text onClick={toggleModalResetPassword}>Forgot your password?</Text>
        <Line>or</Line>
        <NetworkBtnSubmit type="button" onClick={handleSignInWithGoogle}>
          {' '}
          <img src={google_icon} alt="Google icon" />
          Sign up with Google
        </NetworkBtnSubmit>
        <NetworkBtnSubmit type="button" onClick={handleSignInWithFacebook}>
          {' '}
          <img src={facebook_icon} alt="Facebook icon" />
          Sign up with Facebook
        </NetworkBtnSubmit>
        <LinkText>
          New user? <Link onClick={toggleModal}>Create an account</Link>
        </LinkText>
      </Form>
    </>
  );
};
