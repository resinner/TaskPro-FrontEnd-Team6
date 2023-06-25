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
  BgcItem,
  CustomRadioBtn,
  BgcWrapper,
  ShowAllLabel,
  LabetlText,
} from './FiltersModal.styled';

import defaultImg from '../defImg.png';
import data from '../background.json';

const options = ['Without', 'Low', 'Medium', 'High'];

const FiltersModal = () => {
  const [selectedBgc, setSelectedBgc] = useState('');
  const [selectedLabel, setSelectedLabel] = useState('');

  const handleLabelSelection = el => {
    setSelectedLabel(el);
  };

  const handleBgcSelection = el => {
    setSelectedBgc(el);
  };

  return (
    <Section>
      <SectionTitle>Edit board</SectionTitle>

      <FormWrapper>
        <FormTitle>Background </FormTitle>

        <BgcWrapper>
          {data.map((el, idx) => (
            <label key={idx}>
              <BgcItem
                url={defaultImg}
                onClick={() => handleBgcSelection(el.url)}
                className={selectedBgc === el.url ? 'active' : ''}
              >
                {el.url !== '' && (
                  <CustomRadioBtn
                    url={el.url}
                    onClick={() => handleBgcSelection(el.url)}
                  />
                )}
              </BgcItem>
              <DefaultRadioBtn type="radio" value={el.url} name="bgc" />
            </label>
          ))}
        </BgcWrapper>
      </FormWrapper>

      <FormWrapper>
        <FormTitle>Label color</FormTitle>

        <ShowAllLabel>Show all</ShowAllLabel>

        <RadioBtnWrapper>
          {options.map((el, idx) => (
            <Label
              key={idx}
              value={el}
              className={selectedLabel === el ? 'active' : ''}
            >
              <LabelItem
                onClick={() => handleLabelSelection(el)}
                value={el}
                className={selectedLabel === el ? 'active' : ''}
              />
              <LabetlText className={selectedLabel === el ? 'active' : ''}>
                {el === 'Without' ? `${el} priority` : el}
              </LabetlText>

              <DefaultRadioBtn type="radio" value={el} name="bgc" />
            </Label>
          ))}
        </RadioBtnWrapper>
      </FormWrapper>
    </Section>
  );
};

export default FiltersModal;
