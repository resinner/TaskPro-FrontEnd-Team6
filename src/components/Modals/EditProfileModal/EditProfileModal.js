import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserTheme } from 'redux/auth/authSelectors';
import { Formik } from 'formik';
import * as Yup from 'yup';

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
  PlusIcon,
} from './EditProfileModal.styled';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import dark from '../../../images/user-dark.svg';
import light from '../../..//images/user-light.svg';
import violet from '../../../images/user-violet.svg';
import sprite from '../../../images/sprite.svg';
import { selectUser } from 'redux/user/userSelectors';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/user/userOperations';

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

const EditProfileModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { name, email } = useSelector(selectUser);
  const [showPassword, setShowPassword] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const activeUserTheme = useSelector(selectUserTheme);

  const initialValues = {
    image: imageUrl,
    name,
    email,
    password: '',
    showPassword: false,
  };

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

  const setDefaultAvatar = () => {
    if (activeUserTheme === 'dark') {
      return dark;
    } else if (activeUserTheme === 'light') {
      return light;
    } else if (activeUserTheme === 'violet') {
      return violet;
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = values => {
    const { name, email, password } = values;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    // formData.append('avatarURL', imageUrl);
    formData.append('password', password);

    dispatch(updateUser(formData));
    closeModal();
  };

  return (
    <EditWrapper>
      <Title>Edit profile</Title>

      <ImageWrapper url={!imageUrl && setDefaultAvatar}>
        {imageUrl && <UserImage src={imageUrl} alt="user" />}
        <CustomButton
          onClick={() => document.querySelector('.input-field').click()}
        >
          <PlusIcon>
            <use href={sprite + '#icon-plus'} />
          </PlusIcon>

          <HiddenInput
            className="input-field"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </CustomButton>
      </ImageWrapper>

      <Formik
        id="formform"
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
              placeholder="Change a password"
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
