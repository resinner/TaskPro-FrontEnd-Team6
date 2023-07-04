import React, { useState } from 'react';
import {
  SectionTitle,
  FormWrapper,
  Section,
  DefaultRadioBtn,
  FormTitle,
  RadioBtnWrapper,
  Label,
  LabelItem,
  BgItem,
  CustomRadioBtn,
  BgWrapper,
  ShowAllLabel,
  LabetlText,
  Wrapper,
  ModalForm,
} from './FiltersModal.styled';

import data from '../background.json';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { selectPriority } from 'redux/dashboards/dashboardsSlice';
import { editDashbord } from 'redux/dashboards/dashboardsOperations';
import { useSelector } from 'react-redux';
import { selectCurrentDashboard } from 'redux/dashboards/dashboardsSelectors';

const options = ['without', 'low', 'medium', 'high'];

const FiltersModal = () => {
  const dispatch = useDispatch();

  const currentDashboard = useSelector(selectCurrentDashboard);

  const [selectedBg, setSelectedBg] = useState('');
  const [selectedLabel, setSelectedLabel] = useState('');

  const initialValues = {
    bg: selectedBg,
    label: selectedLabel,
  };

  const handleLabelSelection = el => {
    setSelectedLabel(el);
  };

  const changeBgUrl = el => {
    const updatedData = { backgroundURL: el };
    dispatch(
      editDashbord({
        dashboardId: currentDashboard._id,
        updatedData,
      })
    );
  };

  const handleBgSelection = el => {
    setSelectedBg(el);
  };

  return (
    <Section>
      <SectionTitle>Filters</SectionTitle>

      <Formik initialValues={initialValues}>
        <ModalForm>
          <FormWrapper>
            <FormTitle>Backgraunds </FormTitle>

            <BgWrapper>
              {data.map((el, idx) => (
                <div key={idx}>
                  <BgItem
                    onClick={() => handleBgSelection(el.url)}
                    onMouseDown={() => changeBgUrl(el.url)}
                    className={selectedBg === el.url ? 'active' : ''}
                  >
                    {el.url !== '' && (
                      <CustomRadioBtn
                        url={el.url}
                        onClick={() => handleBgSelection(el.url)}
                        className={selectedBg === el.url ? 'active' : ''}
                      />
                    )}
                  </BgItem>

                  <DefaultRadioBtn type="radio" value={el.url} name="bg" />
                </div>
              ))}
            </BgWrapper>
          </FormWrapper>

          <FormWrapper>
            <FormTitle>Label color</FormTitle>

            <ShowAllLabel onClick={() => dispatch(selectPriority('show all'))}>
              Show all
            </ShowAllLabel>

            <RadioBtnWrapper>
              {options.map((el, idx) => (
                <Wrapper
                  key={idx}
                  onClick={() => {
                    handleLabelSelection(el);
                    dispatch(selectPriority(el));
                  }}
                >
                  <Label
                    value={el}
                    className={selectedLabel === el ? 'active' : ''}
                  >
                    <LabelItem
                      value={el}
                      className={selectedLabel === el ? 'active' : ''}
                    />
                    <DefaultRadioBtn type="radio" value={el} name="label" />
                  </Label>

                  <LabetlText className={selectedLabel === el ? 'active' : ''}>
                    {el === 'without'
                      ? `${el[0].toUpperCase() + el.slice(1)} priority`
                      : el[0].toUpperCase() + el.slice(1)}
                  </LabetlText>
                </Wrapper>
              ))}
            </RadioBtnWrapper>
          </FormWrapper>
        </ModalForm>
      </Formik>
    </Section>
  );
};

export default FiltersModal;
