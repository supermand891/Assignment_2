import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function FeedScreen({
  personName,
  setPersonName,
  amountInGrams,
  setAmountInGrams,
  feedNotes,
  setfeedNotes,
  catName,
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gambling Time</Text>

      <Text style={styles.label}>Amount to gamble </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount to gamble"
        value={personName}
        onChangeText={setPersonName}
        returnKeyType="done"
      />

      <Text style={styles.label}>2. Amount of food (grams)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount in grams"
        value={amountInGrams}
        onChangeText={setAmountInGrams}
        keyboardType="decimal-pad"
        returnKeyType="done"
      />

      <Text style={styles.label}>3. Notes / Remarks</Text>
      <TextInput
        style={[styles.input, styles.notesInput]}
        placeholder="Any notes about the feeding"
        value={feedNotes}
        onChangeText={setfeedNotes}
        multiline
        returnKeyType="done"
      />

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => navigation.navigate("Home", { screen: "History" })}
      >
        <Text style={styles.saveButtonText}>See the history!!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F3EB",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: "center",
    fontWeight: "800",
    color: "#2C2C2C",
  },
  label: {
    fontSize: 16,
    color: "#5A5A5A",
    marginBottom: 8,
    fontWeight: "600",
  },
  input: {
    borderWidth: 2,
    borderColor: "#8C4A1E",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    color: "#2C2C2C",
    marginBottom: 16,
  },
  notesInput: {
    minHeight: 110,
    textAlignVertical: "top",
  },
  saveButton: {
    marginTop: 8,
    backgroundColor: "#B3541E",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
