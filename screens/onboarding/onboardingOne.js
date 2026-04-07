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
        onPress={() => navigation.replace("MainTabs")}
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
  },
  skipButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});
