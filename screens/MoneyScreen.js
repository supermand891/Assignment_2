import { View, Text, TextInput, StyleSheet } from "react-native";

export default function MoneyScreen({
  profileName,
  setProfileName,
  moneyLoaned,
  setMoneyLoaned,
  friendName,
  setFriendName,
  friendNotes,
  setFriendNotes,
}) {
  return (
    <View
      style={styles.container}
      accessible
      accessibilityRole="form"
      accessibilityLabel="Money loaning form"
      accessibilityHint="Loan money from your friend by filling out this form"
    >
      <Text
        style={styles.title}
        accessibilityRole="header"
        accessibilityLabel="Money Loaning Form"
      >
        Money Loaning Form
      </Text>

      <Text style={styles.label} accessibilityLabel="Your friend name label">
        Your friend's Name:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your friend's name"
        value={friendName}
        onChangeText={setFriendName}
        accessibilityRole="text"
        accessibilityLabel="Friend name input"
        accessibilityHint="Double tap to edit. Type your friend’s name."
        returnKeyType="done"
      />
      <Text style={styles.label} accessibilityLabel="Loan amount label">
        Loan Amount:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter the loan amount"
        value={moneyLoaned}
        onChangeText={setMoneyLoaned}
        accessibilityRole="text"
        accessibilityLabel="Loan amount input"
        accessibilityHint="Double tap to edit. Type the amount you want to loan."
        returnKeyType="done"
      />
      <Text style={styles.label} accessibilityLabel="Your friend notes">
        Your friend's Notes:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your friend's notes"
        value={friendNotes}
        onChangeText={setFriendNotes}
        accessibilityRole="text"
        accessibilityLabel="Friend notes input"
        accessibilityHint="Double tap to edit. Type your friend’s notes."
        returnKeyType="done"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F3EB",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 32,
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "800",
    color: "#2C2C2C",
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
    color: "#5A5A5A",
  },
  input: {
    borderWidth: 2,
    borderColor: "#8C4A1E",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 14,
    fontSize: 18,
    color: "#2C2C2C",
    elevation: 2,
  },
});
