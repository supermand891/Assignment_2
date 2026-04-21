import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SecretScreen({ setMoneyLoaned }) {
  const navigation = useNavigation();

  const million = () => {
    setMoneyLoaned("1000000");
    navigation.navigate("HomeTabs", { screen: "Info" });
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.cloudRow}
        accessible
        accessibilityLabel="Celebratory announcement bubbles"
      >
        <View style={styles.cloudBubble}>
          <Text style={styles.cloudText}>WOW!</Text>
        </View>
        <View style={[styles.cloudBubble, styles.cloudBubbleRight]}>
          <Text style={styles.cloudText}>Congrats!</Text>
        </View>
      </View>

      <View
        style={styles.messageBox}
        accessible
        accessibilityLabel="Hidden treasure message"
      >
        <Text style={styles.messageText}>You found the hidden treasure!</Text>
      </View>

      <TouchableOpacity
        style={styles.claimButton}
        onPress={() => million()}
        accessibilityRole="button"
        accessibilityLabel="Click to claim the hidden treasure"
        accessibilityHint="Sets your balance to one million and returns to the info screen"
      >
        <Text style={styles.claimButtonText}>Click to claim</Text>
      </TouchableOpacity>

      <View
        style={styles.starArea}
        accessible
        accessibilityLabel="Treasure total one million dollars"
      >
        <Text style={styles.star}>★</Text>
        <Text
          style={styles.starAmount}
          accessibilityRole="text"
          accessibilityLabel="One million dollars"
        >
          1.000.000$
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F7F1F",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  cloudRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  cloudBubble: {
    backgroundColor: "#F1DC25",
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 12,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
  },
  cloudBubbleRight: {
    marginLeft: 10,
  },
  cloudText: {
    color: "#101010",
    fontWeight: "800",
    fontSize: 18,
    textAlign: "center",
  },
  messageBox: {
    backgroundColor: "#F1DC25",
    borderRadius: 18,
    padding: 20,
    width: "100%",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    elevation: 8,
  },
  messageText: {
    color: "#101010",
    fontWeight: "900",
    fontSize: 22,
    textAlign: "center",
    lineHeight: 30,
  },
  claimButton: {
    backgroundColor: "#F1DC25",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginBottom: 80,
    borderWidth: 2,
    borderColor: "#101010",
    zIndex: 10,
  },
  claimButtonText: {
    color: "#101010",
    fontWeight: "900",
    fontSize: 16,
    letterSpacing: 1,
  },
  starArea: {
    width: 320,
    height: 220,
    alignItems: "center",
    justifyContent: "center",
  },
  star: {
    position: "absolute",
    fontSize: 420,
    color: "#F1DC25",
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 8,
  },
  starAmount: {
    position: "absolute",
    fontSize: 26,
    fontWeight: "900",
    color: "#101010",
    textAlign: "center",
    transform: [{ translateX: 10 }, { translateY: 40 }, { rotate: "-18deg" }],
  },
});
