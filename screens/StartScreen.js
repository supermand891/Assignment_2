import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function StartScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.starWrapper}>
        <TouchableOpacity
          style={styles.imageButton}
          onPress={() => navigation.replace("HomeTabs")}
          accessibilityRole="button"
          accessibilityLabel="Press the star to get money"
          accessibilityHint="Navigates to the main money app tabs"
        >
          <ImageBackground
            source={require("../assets/Star.png")}
            style={styles.starImage}
            imageStyle={styles.starImageStyle}
            accessibilityLabel="Star graphic to start the app"
          >
            <View
              style={styles.textOverlay}
              accessible
              accessibilityLabel="Press this star to get started"
            >
              <Text
                style={styles.heading}
                accessibilityRole="header"
                accessibilityLabel="Do you like money?"
              >
                DO YOU LIKE MONEY?
              </Text>
              <Text
                style={styles.subheading}
                accessibilityRole="text"
                accessibilityLabel="Press the star to get money"
              >
                Press the star to get money!
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(15, 127, 31)",
    justifyContent: "center",
    alignItems: "center",
  },
  starWrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 400,
    height: 630,
    marginLeft: -200,
    marginTop: -300,
    justifyContent: "center",
    alignItems: "center",
  },
  imageButton: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  starImage: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
  },
  cardContent: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
  },
  textOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  heading: {
    fontSize: 22,
    fontWeight: "900",
    color: "#101010",
    textAlign: "center",
    marginBottom: 10,
    letterSpacing: 1,
    textShadowColor: "rgba(255,255,255,0.8)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  subheading: {
    fontSize: 16,
    fontWeight: "700",
    color: "#101010",
    textAlign: "center",
    letterSpacing: 0.5,
    textShadowColor: "rgba(255,255,255,0.8)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  startButton: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    paddingVertical: 16,
    paddingHorizontal: 26,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: "#101010",
  },
  startButtonText: {
    fontSize: 18,
    color: "#101010",
    fontWeight: "700",
    textAlign: "center",
  },
});
