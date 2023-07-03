import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllDashboards } from 'redux/dashboards/dashboardsSelectors';
import { addDashboard } from 'redux/dashboards/dashboardsOperations';

import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  DefaultRadioBtn,
  CustomRadioBtn,
  BgcItem,
  FormWrapper,
  RadioBtnWrapper,
  FormTitle,
  Section,
  AuthFormSubmitButton,
  PlusIcon,
  TitleInput,
  SectionTitle,
  Icon,
  IconWrapper,
  ButtonPlus,
  ErrorSection,
  ModalForm,
} from '../BoardModal.styled';

import data from '../../background.json';
import sprite from '../../../../images/sprite.svg';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required!'),
});

const options = [
  '#icon-Project',
  '#icon-star',
  '#icon-loading',
  '#icon-puzzle-piece',
  '#icon-container',
  '#icon-lightning',
  '#icon-colors',
  '#icon-hexagon',
];

const AddBoardModal = ({ closeModal }) => {
  const dispatch = useDispatch();

  const dashboards = useSelector(selectAllDashboards);
  const [selectedBg, setSelectedBg] = useState('');
  const [setIcon, setSetIcon] = useState(options[0]);

  const initialValues = {
    title: '',
    icon: setIcon,
    bg: selectedBg,
  };

  const handleSubmit = (values, { resetForm }) => {
    const { bg, icon, title } = values;

    const dashboard = {
      name: title,
      backgroundURL: bg,
      icon,
    };

    const alreadyExists = dashboards.findIndex(item => {
      const name = item.name.toLowerCase();
      const newName = dashboard.name.toLowerCase();
      return name === newName;
    });

    if (alreadyExists >= 0) {
      return `${dashboard.name} is already added to contact list`;
    } else {
      dispatch(addDashboard(dashboard));
    }

    resetForm();
    closeModal();
  };

  const handleBgSelection = url => {
    setSelectedBg(url);
  };

  const handleIconSelection = el => {
    setSetIcon(el);
  };

  return (
    <Section>
      <SectionTitle>New board</SectionTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <ModalForm>
          <FormWrapper>
            <ErrorSection name="title" component="div" />
            <TitleInput
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              autoComplete="off"
            />
          </FormWrapper>

          <FormWrapper>
            <FormTitle>Icons </FormTitle>
            <RadioBtnWrapper>
              {options.map((el, idx) => (
                <IconWrapper key={idx}>
                  <Icon
                    className={setIcon === el ? 'active' : ''}
                    onClick={() => handleIconSelection(el)}
                    width={18}
                    height={18}
                  >
                    <use href={sprite + el} width={18} height={18} />
                  </Icon>

                  <DefaultRadioBtn type="radio" value={el} name="icon" />
                </IconWrapper>
              ))}
            </RadioBtnWrapper>
          </FormWrapper>

          <FormWrapper>
            <FormTitle>Backgraunds </FormTitle>
            <RadioBtnWrapper>
              {data.map((el, idx) => (
                <label key={idx}>
                  <BgcItem
                    onClick={() => handleBgSelection(el.url)}
                    className={selectedBg === el.url ? 'active' : ''}
                  >
                    {el.url !== '' && (
                      <CustomRadioBtn
                        url={el.url}
                        onClick={() => handleBgSelection(el.url)}
                        className={selectedBg === el.url ? 'active' : ''}
                      />
                    )}
                  </BgcItem>

                  <DefaultRadioBtn type="radio" value={el.url} name="bg" />
                </label>
              ))}
            </RadioBtnWrapper>
          </FormWrapper>

          <AuthFormSubmitButton type="submit">
            <ButtonPlus>
              <PlusIcon>
                <use href={sprite + '#icon-plus'} />
              </PlusIcon>
            </ButtonPlus>
            Create
          </AuthFormSubmitButton>
        </ModalForm>
      </Formik>
    </Section>
  );
};

export default AddBoardModal;
