import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";

import { ButtonTypeStyleProps } from '@components/Statistics/styles';

type Props = {
  type?: ButtonTypeStyleProps;
}

export const Container = styled.View`
  width: 100%;

  margin-top: 40px;
`

export const AddMealButton = styled(TouchableOpacity)<Props>`
  width: 100%;

  min-height: 50px;
  max-height: 50px;

  background-color: ${({ theme, type }) => type == 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE };
  border: ${({ theme, type }) => type == 'SECONDARY' ? theme.COLORS.GRAY_1 : null};

  border-radius: 6px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 12px;

  margin-top: 8px;
`

export const Title = styled.Text`
   ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
` 

export const ButtonText = styled.Text`
   ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
` 

export const PlusIcon = styled(Plus).attrs(({ theme }) =>({
  size: 18,
}))``;

export const EditIcon = styled(PencilSimpleLine).attrs(({ theme }) =>({
  size: 18,
}))``;

export const TrashIcon = styled(Trash).attrs(({ theme }) =>({
  size: 18,
}))``;
