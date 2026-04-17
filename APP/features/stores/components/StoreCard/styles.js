import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 30,
    elevation: 2,
    marginBottom: 12,
  },

  logo: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginBottom: 6,
    resizeMode: "contain",
  },

  nome: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
});
