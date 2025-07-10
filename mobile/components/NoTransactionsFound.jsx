import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../assets/styles/home.styles";
import { coffeeTheme } from "../constants/colors";
import { useRouter } from "expo-router";

const NoTransactionsFound = () => {
  const router = useRouter();

  return (
    <View style={styles.emptyState}>
      <Ionicons
        name="receipt-outline"
        size={60}
        color={coffeeTheme.textLight}
        style={styles.emptyStateIcon}
      />
      <Text style={styles.emptyStateTitle}>No Transactions yet.</Text>
      <Text
        style={{
          color: coffeeTheme.primary,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 20,
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 20,
        }}
      >
        Start tracking your finances by adding your first transaction.
      </Text>
      <TouchableOpacity
        style={styles.emptyStateButton}
        onPress={() => router.push("/create")}
      >
        <Ionicons name="add-circle" size={18} color={coffeeTheme.white} />
        <Text style={styles.emptyStateText}>Add Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoTransactionsFound;
