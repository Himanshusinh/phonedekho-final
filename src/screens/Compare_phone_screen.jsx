import React from 'react';
import styled from 'styled-components';
import Searchbtns from '../Comparephonecomponents/Searchbtns';
import Overall from '../Comparephonecomponents/Overall';
import Phone_details from '../Comparephonecomponents/Phone_details';


const Compare_phone_screen = () => {
  return (
    <Main>
        <Searchbtns />
        {/* <Overall />
        <Phone_details /> */}
    </Main>
  );
};

export default Compare_phone_screen;

const Main = styled.main`
  display: flex;
  flex-direction: column;




`;