import { StyleSheet } from "react-native";
import { coffeeTheme } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: coffeeTheme.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: coffeeTheme.border,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: coffeeTheme.text,
  },
  backButton: {
    padding: 5,
  },
  saveButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  saveButtonDisabled: {
    opacity: 0.5,
  },
  saveButton: {
    fontSize: 16,
    color: coffeeTheme.primary,
    fontWeight: 600,
  },
  card: {
    backgroundColor: coffeeTheme.card,
    margin: 16,
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  typeSelector: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 10,
  },
  typeButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: coffeeTheme.border,
  },
  typeButtonActive: {
    backgroundColor: coffeeTheme.primary,
    borderColor: coffeeTheme.primary,
  },
  typeIcon: {
    marginRight: 8,
  },
  typeButtonText: {
    color: coffeeTheme.text,
    fontSize: 16,
    fontWeight: 500,
  },
  typeButtonTextActive: {
    color: coffeeTheme.white,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: coffeeTheme.border,
    paddingBottom: 16,
    marginBottom: 20,
  },
  currencySymbol: {
    fontSize: 32,
    fontWeight: "bold",
    color: coffeeTheme.text,
    marginRight: 8,
  },
  amountInput: {
    flex: 1,
    fontSize: 36,
    fontWeight: "bold",
    color: coffeeTheme.text,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: coffeeTheme.border,
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
    backgroundColor: coffeeTheme.white,
  },
  inputIcon: {
    marginHorizontal: 12,
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: coffeeTheme.text,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 800,
    color: coffeeTheme.text,
    marginBottom: 15,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: coffeeTheme.border,
    backgroundColor: coffeeTheme.white,
  },
  categoryButtonActive: {
    backgroundColor: coffeeTheme.primary,
    borderColor: coffeeTheme.primary,
  },
  categoryIcon: {
    marginRight: 6,
  },
  categoryButtonText: {
    color: coffeeTheme.text,
    fontSize: 14,
  },
  categoryButtonTextActive: {
    color: coffeeTheme.white,
  },
  loadingContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
