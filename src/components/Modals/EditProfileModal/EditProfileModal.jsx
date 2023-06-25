import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';

import user from '../user.png';
// import { useDispatch } from 'react-redux';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {
  AuthFormWrapper,
  ErrorSection,
  AuthForm,
  AuthFormField,
  AuthFormPasswordIcon,
  AuthFormSubmitButton,
  Title,
  EditWrapper,
  ImageWrapper,
  CustomButton,
  UserImage,
  HiddenInput,
} from './EditProfileModal.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name must be at most 32 characters')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .trim()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must be at most 64 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, and one lowercase letter'
    ),
});

const initialValues = {
  image: '',
  name: '',
  email: '',
  password: '',
  showPassword: false,
};

const EditProfileModal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = event => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = upload => {
      setImageUrl(upload.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (values, { resetForm }) => {
    // const { name, email, password } = values;
    console.log(values);
    // dispatch(
    //     register({ name, email, password})
    // );
    resetForm();
    setImageUrl('');
    console.log({ ...values, image: imageUrl });
  };

  return (
    <EditWrapper>
      <Title>Edit profile</Title>

      <ImageWrapper url={!imageUrl && user}>
        {imageUrl && <UserImage src={imageUrl} alt="user" />}
        <CustomButton
          onClick={() => document.querySelector('.input-field').click()}
        >
          <BsPlus />
          <HiddenInput
            className="input-field"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </CustomButton>
      </ImageWrapper>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <AuthForm>
          <AuthFormWrapper>
            <ErrorSection name="name" component="div" />
            <AuthFormField
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </AuthFormWrapper>

          <AuthFormWrapper>
            <ErrorSection name="email" component="div" />
            <AuthFormField
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </AuthFormWrapper>

          <AuthFormWrapper>
            <ErrorSection name="password" component="div" />
            <AuthFormField
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Create a password"
            />
            <AuthFormPasswordIcon onClick={handleTogglePassword}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </AuthFormPasswordIcon>
          </AuthFormWrapper>

          <AuthFormSubmitButton type="submit">Send</AuthFormSubmitButton>
        </AuthForm>
      </Formik>
    </EditWrapper>
  );
};

export default EditProfileModal;
