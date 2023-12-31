import styled from 'styled-components';

export const Input = styled.input`
  color: black;
  padding: 0.6em 1.3em;
  background-color: transparent;
  border-top-left-radius: 0.3em;
  border-bottom-left-radius: 0.3em;
  transition: 0.5s;
  font-weight: 400;
  font-size: 17px;
  border: 1px solid;
  font-family: inherit;
  color: black;
  width: 245px;

  &:hover {
    color: rgb(10, 25, 30);
    outline: #339f04;
    border: 1px solid #007356;
  }

  &:active {
    filter: brightness(0.8);
  }

  &:focus {
    outline: black;
    border: 1px solid black;
    background-color: #43a817;
    color: black;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  color: black;
  padding: 15px 0;
`;

export const Button = styled.button`
  color: #43a817;
  padding: 0.6em 1.3em;
  background-color: transparent;
  border-top-right-radius: 0.3em;
  border-bottom-right-radius: 0.3em;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.5s;
  font-weight: 400;
  font-size: 17px;
  border: 1px solid;
  border-left: none;
  font-family: inherit;
  text-transform: uppercase;
  color:black;
  z-index: 1;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    transform: translate(-90%, -90%);
    position: absolute;
    border-radius: 50%;
    z-index: -1;
    background-color:#43a817;
    transition: 1s ease;
  }

  &::before {
    top: -1em;
    left: -1em;
  }

  &::after {
    left: calc(100% + 1em);
    top: calc(100% + 1em);
  }

  &:hover::before,
  &:hover::after {
    height: 410px;
    width: 410px;
  }

  &:hover {
    color: rgb(10, 25, 30);
  }

  &:active {
    filter: brightness(0.8);
  }

  &:focus {
    outline: black;
    border: 1px solid black;
    background-color: #43a817;
    color: black;
  }
`;