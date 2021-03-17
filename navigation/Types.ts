import { StackNavigationProp } from "@react-navigation/stack";

// Define route names and associated params
// undefined = no params passed to route
export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Settings: undefined;
};

export interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}

export interface DetailsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Details">;
}

export interface SettingsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Settings">;
}
