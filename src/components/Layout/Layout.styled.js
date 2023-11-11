import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  background: linear-gradient(90deg, rgb(16, 159, 21) , rgb(74, 182, 77),  rgb(149, 226, 152) );
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 20px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const Link = styled(NavLink)`
margin: auto;
  padding: 6px 12px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 400;
  font-size: 18px;
  border: 1px solid black;

  &.hover {
    color: black;
    background-color: #5b5b5b;
  }
  &.active {
    color: white;
    background-color: #5b5b5b;
  }
`;