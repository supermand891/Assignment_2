import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HistoryScreen({
  friendName,
  moneyLoaned,
  friendNotes,
}) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Loaning History</Text>
      <View style={styles.listWrapper}>
        <View style={styles.card}>
          <Text style={styles.mainText}>Loaned by: {friendName}</Text>
          <Text style={styles.subText}>Amount: {moneyLoaned} $</Text>
          <Text style={styles.subText}>
            Notes: {friendNotes || "No remarks"}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F3EB",
  },
  content: {
    padding: 18,
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#2C2C2C",
    marginBottom: 16,
    textAlign: "center",
  },
  listWrapper: {
    flex: 1,
    minHeight: 450,
    padding: 12,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderColor: "#A46028",
    borderWidth: 2,
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  mainText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#2C2C2C",
    marginBottom: 6,
  },
  subText: {
    fontSize: 15,
    color: "#4A4A4A",
    marginBottom: 4,
  },
  emptyBox: {
    marginTop: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#D5C8B6",
    padding: 16,
  },
  emptyText: {
    textAlign: "center",
    color: "#5A5A5A",
    fontSize: 15,
  },
});
