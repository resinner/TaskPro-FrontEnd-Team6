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

import defaultImg from '../defImg.png';
import data from '../background.json';
import { Formik } from 'formik';

const options = ['Without', 'Low', 'Medium', 'High'];

const FiltersModal = () => {
  const [selectedBg, setSelectedBg] = useState('');
  const [selectedLabel, setSelectedLabel] = useState('');

  const initialValues = {
    bg: selectedBg,
    label: selectedLabel,
  };

  const handleLabelSelection = el => {
    setSelectedLabel(el);
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
                    url={defaultImg}
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
                  </BgItem>

                  <DefaultRadioBtn type="radio" value={el.url} name="bg" />
                </div>
              ))}
            </BgWrapper>
          </FormWrapper>

          <FormWrapper>
            <FormTitle>Label color</FormTitle>

            <ShowAllLabel>Show all</ShowAllLabel>

            <RadioBtnWrapper>
              {options.map((el, idx) => (
                <Wrapper key={idx}>
                  <Label
                    value={el}
                    className={selectedLabel === el ? 'active' : ''}
                  >
                    <LabelItem
                      onClick={() => handleLabelSelection(el)}
                      value={el}
                      className={selectedLabel === el ? 'active' : ''}
                    />
                    <DefaultRadioBtn type="radio" value={el} name="label" />
                  </Label>
                  <LabetlText className={selectedLabel === el ? 'active' : ''}>
                    {el === 'Without' ? `${el} priority` : el}
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
