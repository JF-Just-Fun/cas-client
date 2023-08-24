import styled from 'styled-components';
import { Dropdown as MuiDropdown } from '@mui/base/Dropdown';
import { Menu as MuiMenu } from '@mui/base/Menu';
import { MenuItem as MuiMenuItem } from '@mui/base/MenuItem';
import { MenuButton as MuiMenuButton } from '@mui/base/MenuButton';
import MuiTextField from '@mui/material/TextField';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';

export const Container = styled.div`
  position: relative;
  margin: 100px auto;
  color: #000000;
  width: 800px;
  min-height: 600px;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(190, 190, 190, 0.5);
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const PopContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform 0.8s ease-in-out;
`;

export const Dropdown = styled(MuiDropdown)``;

export const Menu = styled(MuiMenu)`
  & > ul {
    box-sizing: border-box;
    list-style: none;
    padding: 5px;
    margin: 10px 0;
    width: 100px;
    background-color: rgba(200, 200, 200, 0.8);
    border-radius: 0.75em;
    color: #24292f;
    overflow: auto;
  }
`;

export const MenuItem = styled(MuiMenuItem)`
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: pointer;
  user-select: none;
  text-align: center;
  &:last-of-type {
    border-bottom: none;
  }
  &.focus-visible {
    background-color: #eaeef2;
    color: #24292f;
    outline: 0;
  }
  &.disabled {
    color: #8c959f;
  }
  &:hover:not(.disabled) {
    background-color: #eaeef2;
    color: #24292f;
  }
`;

export const MenuButton = styled(MuiMenuButton)`
  cursor: pointer;
  background-color: transparent;
  color: #ffb1b1;
  outline: none;
  border: none;
`;

export const TextField = styled(MuiTextField)`
  margin: 15px;
  width: 350px;
`;

export const DatePicker = styled(MuiDatePicker)`
  margin: 15px;
  width: 350px;
`;

export const FormControlLabel = styled(MuiFormControlLabel)``;

export const EditButton = styled(Button)`
  display: block;
  margin: 50px auto 0;
`;
