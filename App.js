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
import SecretScreen from "./screens/SercretScreen";

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
  password,
  setPassword,
  moneyLoaned,
  setMoneyLoaned,
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
            password={password}
            setPassword={setPassword}
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
            creditCard={creditCard}
            password={password}
            resetData={resetData}
            setMoneyLoaned={setMoneyLoaned}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  const [profileName, setProfileName] = useState("");
  const [password, setPassword] = useState("");
  const [moneyLoaned, setMoneyLoaned] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [amountToGamble, setAmountToGamble] = useState("");

  const resetData = () => {
    setProfileName("");
    setPassword("");
    setMoneyLoaned("");
    setCreditCard("");
    setAmountToGamble("");
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Secret">
          {() => (
            <SecretScreen
              moneyLoaned={moneyLoaned}
              setMoneyLoaned={setMoneyLoaned}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="HomeTabs">
          {() => (
            <MainTabs
              resetData={resetData}
              profileName={profileName}
              setProfileName={setProfileName}
              creditCard={creditCard}
              setCreditCard={setCreditCard}
              password={password}
              setPassword={setPassword}
              moneyLoaned={moneyLoaned}
              setMoneyLoaned={setMoneyLoaned}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
