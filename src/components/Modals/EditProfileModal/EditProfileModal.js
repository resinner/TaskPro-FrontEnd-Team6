import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectUserTheme } from 'redux/auth/authSelectors';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { updateUser } from 'redux/auth/authOperations';
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
  PlusIcon,
} from './EditProfileModal.styled';

import dark from '../../../images/user-dark.svg';
import light from '../../..//images/user-light.svg';
import violet from '../../../images/user-violet.svg';
import sprite from '../../../images/sprite.svg';

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
  const { name, email, avatarURL } = useSelector(selectUser);
  const activeUserTheme = useSelector(selectUserTheme);
  const [showPassword, setShowPassword] = useState(false);
  const [fileImage, setFileImage] = useState(null);
  const [currentImageUrl, setCurrentImageUrl] = useState(avatarURL);

  const initialValues = {
    image: currentImageUrl,
    name,
    email,
    password: '',
    showPassword: false,
  };

  const handleImageUpload = event => {
    const file = event.target.files[0];

    setFileImage(file);

    const reader = new FileReader();

    reader.onload = upload => {
      setCurrentImageUrl(upload.target.result);
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

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const onSubmit = values => {
    const { name, email, password } = values;

    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    if (fileImage) {
      formData.append('avatarURL', fileImage);
    }

    dispatch(updateUser(formData));
    closeModal();
  };

  const changeImage = () => {
    if (currentImageUrl === '') {
      return avatarURL;
    }

    return currentImageUrl;
  };

  return (
    <EditWrapper>
      <Title>Edit profile</Title>

      <ImageWrapper url={!currentImageUrl && setDefaultAvatar}>
        {currentImageUrl && <UserImage src={changeImage()} alt="user" />}
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
            name="imageURL"
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
              placeholder="Enter your password"
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
