import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons'

import { TouchableOpacity } from "react-native";

export type  MealCardTypestyleProps = 'SUCCESS' | 'FAILURE'

type Props = {
  type?: MealCardTypestyleProps;
}

export const MealCard = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  
  align-items: center;
  flex-direction: row;

  padding: 12px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;

`

export const MealTime = styled.Text`
  ${({ theme }) => css `
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family:  ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1}
  `};
`

export const MealName = styled.Text`
  ${({ theme }) => css `
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family:  ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2}
  `};
  flex: 1;
  margin-left: 12px;
`
export const Divider = styled.Text`
  width: 2px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
  margin-left: 12px;
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  color: type === 'SUCCESS' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
  size: 14
}))`
  position: absolute;
  left: 95%;
`;