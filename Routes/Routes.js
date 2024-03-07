import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../Src/Screens";
const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
          title: "User Informations",
        }}
      />
    </Stack.Navigator>
  );
}

export default Stacks;
