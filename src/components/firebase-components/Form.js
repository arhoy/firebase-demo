import styled from '@emotion/styled';
const FormDiv = styled.form`
  background: ${props => props.theme.colors.primaryTransparent};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & input {
    margin: 1rem;
    padding: 1rem;
    border: none;
    outline: none;
  }
  & button {
    padding: 0.5rem 0.9rem;
    background: ${props => props.theme.colors.lightgrey};
    outline: none;
    border: none;
    cursor: pointer;
    margin-bottom: 1rem;
    &:hover {
      background: ${props => props.theme.colors.primaryTransparent};
    }
  }
`;

export default FormDiv;
