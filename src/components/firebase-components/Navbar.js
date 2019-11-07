import React from 'react';
import styled from '@emotion/styled';
import NoStyleLink from '../Links/NoStyleLink';

const NavDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Navbar = () => {
  return (
    <NavDiv>
      <NoStyleLink to="/firebase-example/home">Firebase Home</NoStyleLink>
      <NoStyleLink to="/firebase-example/login">Firebase Login</NoStyleLink>
      <NoStyleLink to="/firebase-example/register">
        Firebase Register
      </NoStyleLink>
    </NavDiv>
  );
};

export default Navbar;
