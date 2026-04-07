import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function OnboardingOne() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.description}>
        Explain what your app does and why users should care.
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("OnboardingTwo")}
      >
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  skipButton: {
    position: "absolute",
    top: 50,
    right: 20,
    padding: 10,
  },
  skipText: {
    fontSize: 16,
    color: "#007AFF",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
