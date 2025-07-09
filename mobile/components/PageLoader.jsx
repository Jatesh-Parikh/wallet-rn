import { View, ActivityIndicator } from "react-native";
import { styles } from "../assets/styles/home.styles";
import { coffeeTheme } from "../constants/colors";

const PageLoader = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={coffeeTheme.primary} />
    </View>
  );
};

export default PageLoader;
