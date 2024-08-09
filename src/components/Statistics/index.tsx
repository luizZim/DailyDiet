import React from "react";
import { ButtonTypeStyleProps, Container, Percentage, Subtitle,StaticArrowIcon } from "./styles";


import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps;
}

export function Statistics({ type = 'PRIMARY', ...rest}: Props){

  return(
    <Container type={type} {...rest} >
      <Percentage>
        90,86%
      </Percentage>
      <Subtitle>
        das refeições dentro da dieta.
      </Subtitle>
      <StaticArrowIcon type={type}/>
    </Container>
  )
}