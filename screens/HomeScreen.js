import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({
  profileName,
  creditCard,
  password,
  setProfileName,
  setCreditCard,
  setPassword,
}) {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#0F7F1F" }}
      contentContainerStyle={{ padding: 24, paddingBottom: 40 }}
      accessible
      accessibilityLabel="Money App home"
      accessibilityHint="Homepage for the money app"
    >
      <Text
        style={styles.title}
        accessibilityRole="header"
        accessibilityLabel="Money App"
      >
        Money App
      </Text>
      <TouchableOpacity
        disabled={!profileName || !creditCard || !password}
        onPress={() => {
          if (profileName && creditCard && password) {
            navigation.navigate("Secret");
          }
        }}
        accessibilityRole="button"
        accessibilityLabel="Open secret screen"
        accessibilityHint={
          profileName && creditCard && password
            ? "Navigates to the hidden treasure screen"
            : "Fill in profile name, credit card, and password to unlock"
        }
        style={{
          opacity: profileName && creditCard && password ? 1 : 0.8,
        }}
      >
        <Image
          source={require("../assets/Moneybag.png")}
          style={styles.mainImage}
          accessibilityLabel="Money bag illustration"
        />
      </TouchableOpacity>
      {/* Card: Profile Name Input */}
      <View
        style={styles.card}
        accessible
        accessibilityRole="text"
        accessibilityLabel="Profile name input card"
      >
        <Text style={styles.cardLabel}>Profile Name</Text>
        <TextInput
          style={styles.input}
          value={profileName}
          onChangeText={setProfileName}
          placeholder="Enter your profile name"
          accessibilityRole="text"
          accessibilityLabel="Profile name input field"
          accessibilityHint="Type your profile name here"
        />
      </View>

      {/* Card: Credit Card Input */}
      <View
        style={styles.card}
        accessible
        accessibilityRole="text"
        accessibilityLabel="Credit card input"
      >
        <Text style={styles.cardLabel}>Credit Card Info</Text>
        <TextInput
          style={styles.input}
          value={creditCard}
          onChangeText={setCreditCard}
          placeholder="Enter credit card number"
          keyboardType="numeric"
          secureTextEntry
          accessibilityRole="text"
          accessibilityLabel="Credit card input field"
          accessibilityHint="Type your credit card number here"
        />
      </View>

      {/* Card: Password Input */}
      <View
        style={styles.card}
        accessible
        accessibilityRole="text"
        accessibilityLabel="Password input"
      >
        <Text style={styles.cardLabel}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
          accessibilityRole="text"
          accessibilityLabel="Password input field"
          accessibilityHint="Type your password here"
        />
      </View>

      <TouchableOpacity
        style={styles.historyButton}
        disabled={!profileName || !creditCard || !password}
        onPress={() => {
          if (profileName && creditCard && password) {
            navigation.navigate("Money");
          }
        }}
        accessibilityRole="button"
        accessibilityLabel="Open money screen"
        accessibilityHint="Navigates to the screen where you can add money amounts"
      >
        <Text style={styles.historyButtonText}>Go get some money</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F7F1F",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "800",
    color: "#F1DC25",
  },
  mainImage: {
    alignSelf: "center",
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: "#F1DC25",
  },

  card: {
    backgroundColor: "#F1DC25",
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#101010",
    boxShadowColor: "#000",
    boxShadowOpacity: 0.1,
    boxShadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardLabel: {
    fontSize: 16,
    color: "#101010",
    marginBottom: 6,
    fontWeight: "600",
  },
  cardValue: {
    fontSize: 22,
    fontWeight: "700",
    color: "#101010",
  },
  input: {
    fontSize: 18,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#101010",
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
    color: "#101010",
  },
  historyButton: {
    backgroundColor: "#101010",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 6,
  },
  historyButtonText: {
    color: "#F1DC25",
    fontSize: 16,
    fontWeight: "700",
  },
});
