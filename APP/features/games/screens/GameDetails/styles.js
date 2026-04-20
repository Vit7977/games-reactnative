import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  img: {
    width: 240,
    height: 300,
    marginBottom: 5,
    borderRadius: 8,
    resizeMode: "cover"
  },
  storesContainer: {
    width: "100vw",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 10,
    backgroundColor: "#e9e9e9",
    padding: 10
  },
});
