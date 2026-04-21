import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function OnboardingTwo() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.replace("MainTabs")}
        accessibilityRole="button"
        accessibilityLabel="Skip onboarding"
        accessibilityHint="Skips onboarding and opens the main tabs"
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg",
        }}
        style={styles.image}
        accessibilityLabel="Onboarding illustration"
      />
      <Text style={styles.title} accessibilityRole="header" accessibilityLabel="Welcome">
        Welcome
      </Text>
      <Text style={styles.description} accessibilityRole="text" accessibilityLabel="Start using the app">
        Start using the app
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
        accessibilityRole="button"
        accessibilityLabel="Next onboarding screen"
        accessibilityHint="Continues to the home screen"
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
