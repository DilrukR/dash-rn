import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { store } from "./Redux/store";
import Stacks from "./Routes/Routes";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style='light' backgroundColor='#025373' />
        <Stacks />
      </NavigationContainer>
    </Provider>
  );
}
