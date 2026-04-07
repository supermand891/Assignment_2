import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ profileName, moneyLoaned }) {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#F7F3EB" }}
      contentContainerStyle={{ padding: 24, paddingBottom: 40 }}
      accessible
      accessibilityLabel="Gambling App home"
      accessibilityHint="Homepage for the gambling app"
    >
      <Text
        style={styles.title}
        accessibilityRole="header"
        accessibilityLabel="Gambling App"
      >
        🎰 Gambling App
      </Text>

      <Image
        style={styles.mainImage}
        source={{
          uri: "https://images.pexels.com/photos/14660913/pexels-photo-14660913.jpeg",
        }}
        accessibilityRole="image"
        accessibilityLabel="A cat profile image"
        accessibilityHint="Decorative image for the cat profile"
      />

      {/* Card: Cat Name */}
      <View
        style={styles.card}
        accessible
        accessibilityRole="summary"
        accessibilityLabel="Profile name"
        accessibilityHint={
          profileName
            ? `Your profile name is ${profileName}`
            : "No profile name has been added yet"
        }
      >
        <Text style={styles.cardLabel}>Profile Name</Text>
        <Text style={styles.cardValue}>
          {profileName ? (
            profileName
          ) : (
            <Text
              style={styles.fallbackValue}
              accessibilityLabel="No profile name added yet"
            >
              No profile name added yet...
            </Text>
            // The block above evaluates the following
            // Is there a profileName? if yes (here shown with ?), then show that profileName
            // If not (here shown with : ) then show this <Text> component with special styling
          )}
        </Text>
      </View>

      {/* Card: Weight */}
      <View
        style={styles.card}
        accessible
        accessibilityRole="summary"
        accessibilityLabel="Money loaned"
        accessibilityHint="Displays the amount of money loaned"
      >
        <Text style={styles.cardLabel}>💰 Money Loaned</Text>
        <Text
          style={styles.cardValue}
          accessibilityLabel="Amount of money loaned"
        >
          ${moneyLoaned}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.historyButton}
        onPress={() => navigation.navigate("InfoScreen")}
        accessibilityRole="button"
        accessibilityLabel="Open info screen"
      >
        <Text style={styles.historyButtonText}>View Info</Text>
      </TouchableOpacity>
    </ScrollView>
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
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "800",
    color: "#2C2C2C",
  },
  mainImage: {
    alignSelf: "center",
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 20,
  },

  // Card styling for each data point
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#A46028",
    boxShadowColor: "#000",
    boxShadowOpacity: 0.1,
    boxShadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardLabel: {
    fontSize: 16,
    color: "#5A5A5A",
    marginBottom: 6,
    fontWeight: "600",
  },
  cardValue: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2C2C2C",
  },
  // style for when there is no catname given
  fallbackValue: {
    color: "#000000",
    fontSize: 13,
    opacity: 0.5,
  },
  historyButton: {
    backgroundColor: "#B3541E",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 6,
  },
  historyButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
