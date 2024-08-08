import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'ONDIET' | 'OUTOFDIET'

type Props = {
  type: ButtonTypeStyleProps;
}


export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 102px;
  max-height: 102px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

  border-radius: 8px;

  align-items: center;
  justify-content: center;

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