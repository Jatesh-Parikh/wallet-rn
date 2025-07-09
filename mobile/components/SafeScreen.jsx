import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { coffeeTheme } from "../constants/colors";

const SafeScreen = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        flex: 1,
        backgroundColor: coffeeTheme.background,
      }}
    >
      {children}
    </View>
  );
};

export default SafeScreen;
