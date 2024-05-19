import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  ErrorMessage,
  Form,
  Input,
  Text,
  Title,
} from './ForgotPasswordForm.styled';
import { forgotPassword } from '../../redux/authSlice/authOperationsFirebase';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, {
      message: `Invalid email.Please enter a valid email in the format: example@example.com.`,
    })
    .required('Email is required'),
});

export const ForgotPasswordForm = ({ isClose }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: formSchema,
    onSubmit: values => {
      if (formik.isValid) {
        forgotPassword(values.email);
      }
      isClose();
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Title>Forgot your password?</Title>
      <Text>We'll email you a link to reset your password</Text>
      <Input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        placeholder="Enter your email address"
        autoComplete="email"
      />
      {formik.touched.email && formik.errors.email && (
        <ErrorMessage>{formik.errors.email}</ErrorMessage>
      )}
      <Button>Send me a password reset link</Button>
    </Form>
  );
};
