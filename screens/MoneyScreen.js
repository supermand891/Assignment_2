import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function MoneyScreen({ setMoneyLoaned }) {
  const navigation = useNavigation();
  const [total, setTotal] = useState(0);

  const addAmount = (amount) => {
    setTotal((prev) => prev + amount);
  };

  const claimMoney = () => {
    if (setMoneyLoaned) {
      setMoneyLoaned(total.toString());
    }
    navigation.navigate("HomeTabs", { screen: "Info" });
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.pageTitle}
        accessibilityRole="header"
        accessibilityLabel="Money screen"
      >
        Get Rich Fast
      </Text>
      <View
        style={styles.instructionCard}
        accessible
        accessibilityLabel="Instructions to add money"
      >
        <Text style={styles.instructionText}>
          Click to get rich, click more to get more rich
        </Text>
      </View>

      <View style={styles.buttonsColumn}>
        <TouchableOpacity
          style={[styles.amountButton, styles.redButton]}
          onPress={() => addAmount(1)}
          accessibilityRole="button"
          accessibilityLabel="Add one dollar"
          accessibilityHint="Increases your total by one dollar"
        >
          <Text style={styles.amountText}>1$</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.amountButton, styles.yellowButton]}
          onPress={() => addAmount(5)}
          accessibilityRole="button"
          accessibilityLabel="Add five dollars"
          accessibilityHint="Increases your total by five dollars"
        >
          <Text style={styles.amountText}>5$</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.amountButton, styles.greenButton]}
          onPress={() => addAmount(100)}
          accessibilityRole="button"
          accessibilityLabel="Add one hundred dollars"
          accessibilityHint="Increases your total by one hundred dollars"
        >
          <Text style={styles.amountText}>100$</Text>
        </TouchableOpacity>
      </View>

      <View
        style={styles.totalContainer}
        accessible
        accessibilityLabel={`Total amount is ${total} dollars`}
      >
        <Text style={styles.totalLabel}>Total amount:</Text>
        <Text
          style={styles.totalValue}
          accessibilityRole="text"
          accessibilityLabel={`Total amount is ${total} dollars`}
        >
          {total}$
        </Text>
      </View>

      <TouchableOpacity
        style={styles.claimButton}
        onPress={claimMoney}
        accessibilityRole="button"
        accessibilityLabel="Claim money"
        accessibilityHint="Sends your total to the info screen"
      >
        <Text style={styles.claimButtonText}>Claim Money</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F7F1F",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  instructionCard: {
    width: "100%",
    backgroundColor: "#F1DC25",
    padding: 18,
    borderRadius: 18,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 8,
  },
  instructionText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#101010",
    textAlign: "center",
    lineHeight: 28,
  },
  buttonsColumn: {
    width: "100%",
    alignItems: "center",
    marginBottom: 40,
  },
  amountButton: {
    width: 220,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 6,
    elevation: 5,
  },
  amountText: {
    fontSize: 26,
    color: "#101010",
    fontWeight: "800",
  },
  redButton: {
    backgroundColor: "#C0392B",
  },
  yellowButton: {
    backgroundColor: "#F1DC25",
  },
  greenButton: {
    backgroundColor: "#30B75D",
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#F1DC25",
    marginBottom: 20,
    textAlign: "center",
  },
  totalContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 24,
  },
  totalLabel: {
    fontSize: 22,
    color: "#F1DC25",
    fontWeight: "800",
    marginBottom: 10,
    textShadowColor: "rgba(0,0,0,0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  totalValue: {
    width: "90%",
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "700",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 12,
    paddingVertical: 16,
    textAlign: "center",
  },
  claimButton: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
    elevation: 6,
  },
  claimButtonText: {
    fontSize: 30,
    fontWeight: "800",
    color: "#101010",
  },
});
