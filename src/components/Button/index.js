import styled, { css } from 'styled-components';
import {devices} from '../../styles/devices'

const Button = styled.button`
  text-align: center;
  background: #3852DE;
  ${props => props.primary && css`
    background: #3852DE;
    &:hover {
      background: #4d64e2;
    }

  `}
  ${props => props.secondary && css`
    background: #454545;
    &:hover {
      background: #6f6d6d;
    }
  `}
  border-radius: 60px;
  padding: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  min-width: 160px;
  @media ${devices.laptop} {
    min-width: 240px;
  }

`

export default Button