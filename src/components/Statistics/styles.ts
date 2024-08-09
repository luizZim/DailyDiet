import styled, { css } from "styled-components/native";

import { TouchableOpacity } from "react-native";
import { ArrowUpRight } from 'phosphor-react-native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonTypeStyleProps;
}


export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 102px;
  max-height: 102px;

  background-color: ${({ theme, type }) => type == 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  border-radius: 8px;

  align-items: center;
  justify-content: center;

  margin-top: 36px;
`

export const Percentage = styled.Text`
  ${({ theme }) => css `
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`
export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`

export const StaticArrowIcon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) =>({
  size: 24,
  color: type ==='PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))<Props>`
  position: absolute;
  right: 8px;
  top: 8px;
`