import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 8
  },
  imgContainer: {
    width: "100%",
    height: 250,
  },
  img: {
    width: "100%",
    height: 250,
    borderRadius: 8,
    borderEndStartRadius: 0,
    borderEndEndRadius: 0,
    resizeMode: "cover",
  },
  infoContainer: {
    alignItems: "center",
    marginBottom: 16,
    marginTop: 10,
  },
  title: {
    color: "#000",
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 4,
    textAlign: "center",
  },
});
