// Imports
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

// Screens
import HomeScreen from "./screens/HomeScreen";
import PlayingScreen from "./screens/PlayingScreen";
import MoneyScreen from "./screens/MoneyScreen";
import InfoScreen from "./screens/InfoScreen";

// Onboarding screens
import OnboardingOne from "./screens/onboarding/onboardingOne";
import OnboardingTwo from "./screens/onboarding/onboardingTwo";

// Tab navigator
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const OnboardingStack = createNativeStackNavigator();

function HomeStackScreen({ profileName, friendName, moneyLoaned, friendNote }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeMain"
        options={{ title: "Home", headerShown: false }}
      >
        {() => <HomeScreen profileName={profileName} />}
      </HomeStack.Screen>

      <HomeStack.Screen
        name="History"
        options={{
          title: "Money History",
          headerShown: true,
          presentation: "modal",
          animation: "slide_from_bottom",
        }} //changing the animation might need to change the "presentation" parameter above, check the documentation
      >
        {() => (
          <HistoryScreen
            friendName={friendName}
            moneyLoaned={moneyLoaned}
            friendNote={friendNote}
          />
        )}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

export default function App() {
  const [profileName, setProfileName] = useState("");
  const [friendName, setFriendName] = useState("");
  const [moneyLoaned, setMoneyLoaned] = useState("20");
  const [friendNote, setFriendNote] = useState("");
  const [amountToGamble, setAmountToGamble] = useState("20");

  return (
    <NavigationContainer>
      <OnboardingStack.Navigator
        initialRouteName="OnboardingOne"
        screenOptions={{
          headerShown: false,
        }}
      >
        <OnboardingStack.Screen
          name="OnboardingOne"
          component={OnboardingOne}
        />
        <OnboardingStack.Screen
          name="OnboardingTwo"
          component={OnboardingTwo}
        />
        {/* HOME TAB */}
        <OnboardingStack.Screen
          name="Home"
          options={{
            title: "Home",
            tabBarAccessibilityLabel: "Home tab",
            tabBarIcon: () => <Text style={{ fontSize: 22 }}>🏠</Text>,
          }}
        >
          {() => (
            <HomeStackScreen
              profileName={profileName}
              friendName={friendName}
              moneyLoaned={moneyLoaned}
              friendNote={friendNote}
            />
          )}
        </OnboardingStack.Screen>

        {/* Money TAB */}
        <OnboardingStack.Screen
          name="Money"
          options={{
            title: "Money tab",
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
        </OnboardingStack.Screen>

        {/* Playing TAB */}
        <OnboardingStack.Screen
          name="Playing"
          options={{
            title: "Playing tab",
            tabBarAccessibilityLabel: "Playing tab",
            tabBarIcon: () => <Text style={{ fontSize: 22 }}>🎮</Text>,
          }}
        >
          {() => (
            <PlayingScreen
              amountToGamble={amountToGamble}
              setAmountToGamble={setAmountToGamble}
            />
          )}
        </OnboardingStack.Screen>

        {/* Info TAB */}
        <OnboardingStack.Screen
          name="Info"
          options={{
            title: "Info tab",
            tabBarAccessibilityLabel: "Info tab",
            tabBarIcon: () => <Text style={{ fontSize: 22 }}>ℹ️</Text>,
          }}
        >
          {() => (
            <InfoScreen
              friendName={friendName}
              moneyLoaned={moneyLoaned}
              friendNotes={friendNote}
            />
          )}
        </OnboardingStack.Screen>
      </OnboardingStack.Navigator>
    </NavigationContainer>
  );
}
