import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { editColumn } from 'redux/dashboards/dashboardsOperations';
import sprite from '../../../../images/sprite.svg';

import {
  FormWrapper,
  Section,
  AuthFormSubmitButton,
  PlusIcon,
  TitleInput,
  SectionTitle,
  ModalForm,
  ErrorSection,
  ButtonPlus,
} from '../ColumnModal.styled';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});

const EditColumnModal = ({ title, columnId, closeModal }) => {
  const dispatch = useDispatch();

  const initialValues = {
    title,
  };

  const handleSubmit = (values, { resetForm }) => {
    const { title } = values;
    dispatch(editColumn({ columnId, title }));
    resetForm();
    closeModal();
  };

  return (
    <Section>
      <SectionTitle>Edit column</SectionTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <ModalForm>
          <FormWrapper>
            <ErrorSection name="title" component="div" />
            <TitleInput
              type="text "
              id="text"
              name="title"
              placeholder="Title "
            />
          </FormWrapper>

          <AuthFormSubmitButton type="submit">
            <ButtonPlus>
              <PlusIcon>
                <use href={sprite + '#icon-plus'} />
              </PlusIcon>
            </ButtonPlus>
            Edit
          </AuthFormSubmitButton>
        </ModalForm>
      </Formik>
    </Section>
  );
};

export default EditColumnModal;
