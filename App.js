// Imports
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

// Screens
import HomeScreen from "./screens/HomeScreen";
import MoneyScreen from "./screens/MoneyScreen";
import InfoScreen from "./screens/InfoScreen";
import StartScreen from "./screens/StartScreen";

// Onboarding screens
import OnboardingOne from "./screens/onboarding/onboardingOne";
import OnboardingTwo from "./screens/onboarding/onboardingTwo";

// Tab navigator
const Tab = createBottomTabNavigator();
//const HomeStack = createNativeStackNavigator();
const OnboardingStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

function MainTabs({
  profileName,
  setProfileName,
  creditCard,
  setCreditCard,
  petName,
  setPetName,
  moneyLoaned,
  setMoneyLoaned,
  friendNote,
  setFriendNote,
  friendName,
  setFriendName,
  amountToGamble,
  setAmountToGamble,
  resetData,
}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* HOME TAB */}
      <Tab.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarAccessibilityLabel: "Home tab",
          tabBarIcon: () => <Text style={{ fontSize: 22 }}>🏠</Text>,
        }}
      >
        {() => (
          <HomeScreen
            profileName={profileName}
            setProfileName={setProfileName}
            creditCard={creditCard}
            setCreditCard={setCreditCard}
            petName={petName}
            setPetName={setPetName}
          />
        )}
      </Tab.Screen>

      {/* Money TAB */}
      <Tab.Screen
        name="Money"
        options={{
          title: "Money",
          tabBarAccessibilityLabel: "Money tab",
          tabBarIcon: () => <Text style={{ fontSize: 22 }}>💰</Text>,
        }}
      >
        {() => (
          <MoneyScreen
            profileName={profileName}
            setProfileName={setProfileName}
            moneyLoaned={moneyLoaned}
            setMoneyLoaned={setMoneyLoaned}
            friendNote={friendNote}
            setFriendNote={setFriendNote}
            friendName={friendName}
            setFriendName={setFriendName}
          />
        )}
      </Tab.Screen>

      {/* Info TAB */}
      <Tab.Screen
        name="Info"
        options={{
          title: "Info",
          tabBarAccessibilityLabel: "Info tab",
          tabBarIcon: () => <Text style={{ fontSize: 22 }}>ℹ️</Text>,
        }}
      >
        {() => (
          <InfoScreen
            profileName={profileName}
            moneyLoaned={moneyLoaned}
            resetData={resetData}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  const [profileName, setProfileName] = useState("");
  const [friendName, setFriendName] = useState("");
  const [moneyLoaned, setMoneyLoaned] = useState("");
  const [friendNote, setFriendNote] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [petName, setPetName] = useState("");
  const [amountToGamble, setAmountToGamble] = useState("");

  const resetData = () => {
    setProfileName("");
    setFriendName("");
    setMoneyLoaned("");
    setFriendNote("");
    setCreditCard("");
    setPetName("");
    setAmountToGamble("");
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="HomeTabs">
          {() => (
            <MainTabs
              resetData={resetData}
              profileName={profileName}
              setProfileName={setProfileName}
              creditCard={creditCard}
              setCreditCard={setCreditCard}
              petName={petName}
              setPetName={setPetName}
              moneyLoaned={moneyLoaned}
              setMoneyLoaned={setMoneyLoaned}
              amountToGamble={amountToGamble}
              setAmountToGamble={setAmountToGamble}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
