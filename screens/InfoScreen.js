import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef } from "react";

export default function InfoScreen({
  profileName,
  moneyLoaned,
  creditCard,
  resetData,
}) {
  const navigation = useNavigation();
  const blinkAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const blink = Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnim, {
          toValue: 0.3,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(blinkAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    );
    blink.start();
    return () => blink.stop();
  }, [blinkAnim]);

  const handleGetMoreMoney = () => {
    resetData();
    navigation.navigate("Start");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.banner}>CONGRATULATIONS!</Text>
      <Text style={styles.subtitle}>
        {profileName || "User"}, you have been selected for an exclusive bonus
        reward.
      </Text>

      <View style={styles.rewardCard}>
        <Text style={styles.rewardLabel}>YOU HAVE SECURED</Text>
        <Text style={styles.rewardAmount}>{moneyLoaned || "0"}$</Text>
        <Text style={styles.rewardNote}>
          This amount is on the way to {creditCard || "your card"} and will be
          available within 24 hours.
        </Text>
      </View>

      <View style={styles.urgentBox}>
        <Text style={styles.urgentText}>
          WARNING: Only one claim per device.
        </Text>
      </View>

      <Animated.View style={{ opacity: blinkAnim, marginTop: 30 }}>
        <TouchableOpacity
          style={styles.moreMoneyButton}
          onPress={handleGetMoreMoney}
          accessibilityRole="button"
          accessibilityLabel="Get more money"
        >
          <Text style={styles.moreMoneyButtonText}>
            START GETTING MORE MONEY AGAIN
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F7F1F",
  },
  content: {
    padding: 20,
    flexGrow: 1,
  },
  banner: {
    fontSize: 34,
    fontWeight: "900",
    color: "#F1DC25",
    textAlign: "center",
    marginBottom: 10,
    textShadowColor: "rgba(0,0,0,0.25)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 24,
  },
  rewardCard: {
    backgroundColor: "#F1DC25",
    borderRadius: 24,
    padding: 24,
    marginBottom: 22,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 8,
  },
  rewardLabel: {
    fontSize: 16,
    fontWeight: "800",
    color: "#101010",
    marginBottom: 10,
  },
  rewardAmount: {
    fontSize: 54,
    fontWeight: "900",
    color: "#101010",
    marginBottom: 8,
  },
  rewardNote: {
    fontSize: 16,
    fontWeight: "700",
    color: "#101010",
    textAlign: "center",
  },
  detailCard: {
    backgroundColor: "rgba(241, 220, 37, 0.15)",
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#F1DC25",
    padding: 18,
    marginBottom: 22,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#F1DC25",
    marginBottom: 12,
  },
  detailText: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 8,
  },
  urgentBox: {
    backgroundColor: "#C0392B",
    borderRadius: 18,
    padding: 16,
    alignItems: "center",
  },
  urgentText: {
    fontSize: 16,
    fontWeight: "900",
    color: "#FFFFFF",
    textTransform: "uppercase",
  },
  moreMoneyButton: {
    backgroundColor: "#F1DC25",
    borderRadius: 30,
    paddingVertical: 18,
    paddingHorizontal: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 12,
    elevation: 10,
  },
  moreMoneyButtonText: {
    fontSize: 18,
    fontWeight: "900",
    color: "#101010",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
