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
import { useState } from "react";

export default function HomeScreen({
  profileName,
  creditCard,
  petName,
  setProfileName,
  setCreditCard,
  setPetName,
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
      <Image
        source={require("../assets/Moneybag.png")}
        style={styles.mainImage}
        accessibilityLabel="Money image"
      />
      {/* Card: Profile Name Input */}
      <View
        style={styles.card}
        accessible
        accessibilityRole="text"
        accessibilityLabel="Profile name input"
      >
        <Text style={styles.cardLabel}>Profile Name</Text>
        <TextInput
          style={styles.input}
          value={profileName}
          onChangeText={setProfileName}
          placeholder="Enter your profile name"
          accessibilityLabel="Profile name input field"
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
          accessibilityLabel="Credit card input field"
        />
      </View>

      {/* Card: Pet Name Input */}
      <View
        style={styles.card}
        accessible
        accessibilityRole="text"
        accessibilityLabel="Pet name input"
      >
        <Text style={styles.cardLabel}>First Pet Name</Text>
        <TextInput
          style={styles.input}
          value={petName}
          onChangeText={setPetName}
          placeholder="Enter your first pet's name"
          accessibilityLabel="Pet name input field"
        />
      </View>

      <TouchableOpacity
        style={styles.historyButton}
        onPress={() => navigation.navigate("Money")}
        accessibilityRole="button"
        accessibilityLabel="Open money screen"
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

  // Card styling for each data point
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
  // style for when there is no catname given
  fallbackValue: {
    color: "#101010",
    fontSize: 13,
    opacity: 0.8,
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
