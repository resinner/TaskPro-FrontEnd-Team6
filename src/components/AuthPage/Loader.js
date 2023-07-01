import { ColorRing } from 'react-loader-spinner';
import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loader = () => {
  return (
    <Spinner>
      <ColorRing
        visible={true}
        height="32"
        width="32"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#8FA1D0', '#E09CB5', '#f8b26a', '#abbd81', '#849b87']}
      />
    </Spinner>
  );
};

export default Loader;
