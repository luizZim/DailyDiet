import { ButtonTypeStyleProps } from "@components/Statistics/styles";
import { AddMealButton, Container, Title, ButtonText, PlusIcon, EditIcon, TrashIcon } from "./styles";
import { TouchableOpacityProps } from "react-native";
import React from "react";
import { useTheme } from "styled-components";


type Props = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps
  icon: 'PLUS' | 'TRASH' | 'EDIT'
}

export function MealsButton({ type = 'PRIMARY', icon , ...rest}: Props){
  const { COLORS } =useTheme();

  return(
    <Container>
      <Title>Refeições</Title>

        <AddMealButton type={type} {...rest}>

          {icon === 'PLUS' && <PlusIcon color={type === 'PRIMARY' ? COLORS.WHITE : COLORS.GRAY_1}/>}
          {icon === 'TRASH' && <TrashIcon color={type === 'PRIMARY' ? COLORS.WHITE : COLORS.GRAY_1}/>}
          {icon === 'EDIT' && <EditIcon color={type === 'PRIMARY' ? COLORS.WHITE : COLORS.GRAY_1}/>}

          <ButtonText>
            Nova Refeição
          </ButtonText>
        </AddMealButton>

    </Container>
    
  )
}