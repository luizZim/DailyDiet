import { MealCard, MealTime, MealName, Divider, MealCardTypestyleProps, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: MealCardTypestyleProps;
}

export function MealsCard({ icon, type, ...rest}: Props){
  return(
    <MealCard {...rest}>
        <MealTime>
          20:00
        </MealTime>
        <Divider/>
        <MealName>
          X-tudo
        </MealName>
        <Icon 
          name={icon}
          type={type}
        />
    </MealCard>
  )
}