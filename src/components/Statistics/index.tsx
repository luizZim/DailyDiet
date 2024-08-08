import React from "react";
import { ButtonTypeStyleProps, Container, Percentage, Subtitle } from "./styles";

import { TouchableOpacityProps } from "react-native";

type Props = {
  type?: ButtonTypeStyleProps;
}

export function Statistics({ type = 'ONDIET', ...rest}: Props){
  return(
    <Container type={type} {...rest} >
      <Percentage>
        90,86%
      </Percentage>
      <Subtitle>
        das refeições dentro da dieta
      </Subtitle>
    </Container>
  )
}