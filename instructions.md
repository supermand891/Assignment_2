# Assignment #2 - React Native Project Instructions

These instructions guide development of the Assignment #2 mobile app following PMA2026 course standards and best practices.

---

## 1. Code Structure & Organization

### File Organization

- **Screens**: Each screen component in `screens/` folder as separate `.js` file
- **Onboarding**: Onboarding screens in `screens/onboarding/` subdirectory
- **Naming**: Use PascalCase for component files (`HomeScreen.js`, `onboardingOne.js`)
- **One component per file**: Each file exports a single functional component

### Component Structure

```javascript
// Order of imports
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

// Component definition
export default function ScreenName({ prop1, prop2 }) {
  // Hooks (useState, navigation)
  // Event handlers
  // JSX/Return
}

// StyleSheet at bottom
const styles = StyleSheet.create({});
```

---

## 2. Component Guidelines

### Functional Components & Hooks

- Use **functional components only** with React hooks
- Use `useState` for local component state
- Use `useNavigation` hook from `@react-navigation/native` for navigation

### Custom Components

- Create custom components **only when needed** (reusable across multiple screens)
- Store custom components in `screens/` or create a `components/` folder if project grows
- Example: Extract repeated button patterns, card layouts, or input fields into components

### Props & State Management

- Use **prop drilling**: Pass state and handlers down via props
- Props should have clear, descriptive names
- Keep props shallow (max 2-3 levels deep)

---

## 3. Navigation Patterns

### Required Structure

- Use **Bottom Tab Navigator** as main navigation container
- Use **Native Stack Navigator** for screen stacks within tabs
- Follow the pattern established in `App.js`:
  ```javascript
  - NavigationContainer
    - Stack Navigator (for onboarding/auth)
    - Bottom Tab Navigator (MainTabs)
      - Home Stack (HomeScreen, etc.)
      - MoneyScreen
      - InfoScreen
      - Other Screens
  ```

### Screen Navigation

- Use `useNavigation()` hook to access navigation
- Navigate with: `navigation.navigate("ScreenName")` or `navigation.navigate("TabName", { screen: "ScreenName" })`
- Pass data via route params when needed

---

## 4. Accessibility (WCAG Level A Compliance)

### Mandatory for All Components

- Add `accessible={true}` to interactive containers
- Use `accessibilityLabel` on all interactive elements:
  ```javascript
  <TouchableOpacity accessible accessibilityLabel="Add money button">
  <Text accessibilityRole="header">Screen Title</Text>
  ```

### Required Accessibility Props

- `accessibilityRole`: Describe element type (`button`, `header`, `text`, etc.)
- `accessibilityLabel`: Clear, concise description of element purpose
- `accessibilityHint`: Additional context for complex components

### Text Contrast & Sizing

- Minimum text size: 12sp (readable on mobile)
- Ensure sufficient contrast between text and background
- Use semantic HTML-like structure in React Native

### Example - Compliant Component

```javascript
<View accessible accessibilityLabel="Instructions section">
  <Text
    style={styles.title}
    accessibilityRole="header"
    accessibilityLabel="How to use this screen"
  >
    Instructions
  </Text>
</View>
```

---

## 5. Styling Conventions

### StyleSheet Usage

- Define all styles in `StyleSheet.create()` at bottom of file
- Use consistent naming for style objects (e.g., `container`, `button`, `title`)
- Use flexbox for layouts (follow Flexbox Cheatsheet from course resources)

### Colors & Spacing

- Define color constants at top of `StyleSheet.create()` if reused
- Use consistent spacing units (multiples of 8px recommended)
- Avoid inline styles; always use `StyleSheet.create()`

### Responsive Design

- Design for mobile-first approach
- Use flexbox properties: `flex`, `justifyContent`, `alignItems`
- Example:
  ```javascript
  const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    button: { padding: 12, borderRadius: 8 },
  });
  ```

---

## 6. Data Flow & State

### Local State (useState)

- Use for component-specific state (form inputs, toggles, counters)
- Example: `const [total, setTotal] = useState(0);`

### Passing State Down

- Pass state and setState functions via props to child components
- Handler functions should be defined in parent and passed down
- Naming convention: `onAction` for handlers, `setData` for state setters

### Data Between Screens

- Use route params for passing data to navigated screens
- Use props for sibling/parent-child communication
- Example:
  ```javascript
  navigation.navigate("Info", { moneyLoaned: total });
  // Access with: route.params.moneyLoaned
  ```

---

## 7. Interactive Components

### Pressable vs TouchableOpacity

- Use `<Pressable>` for modern, flexible interactions (recommended)
- Use `<TouchableOpacity>` for simple button-like interactions
- Always add `onPress` handler and accessibility labels

### Event Handlers

- Define handlers as functions in component body
- Use descriptive names: `handlePress()`, `addItem()`, `updateValue()`
- Example:
  ```javascript
  const handleAddMoney = (amount) => {
    setTotal((prev) => prev + amount);
  };
  ```

---

## 8. Imports & Dependencies

### Import Order

1. React & React Native core
2. Navigation libraries
3. Custom components/screens
4. Assets (images, icons)

### Example:

```javascript
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import CustomButton from "./CustomButton";
```

---

## 9. File Naming Conventions

| Type              | Convention | Example                                 |
| ----------------- | ---------- | --------------------------------------- |
| Screen components | PascalCase | `HomeScreen.js`, `MoneyScreen.js`       |
| Custom components | PascalCase | `CustomButton.js`, `MoneyCard.js`       |
| Utilities/helpers | camelCase  | `formatCurrency.js`, `validateInput.js` |
| Folders           | camelCase  | `onboarding/`, `components/`, `utils/`  |

---

## 10. Development Workflow with GenAI Tools

### Using GitHub Copilot (VS Code)

- **Ask Copilot** to:
  - Generate screen components following the template above
  - Add accessibility props to existing components
  - Create StyleSheet styles for designs
  - Refactor component structure

- **Review generated code** for:
  - Accessibility compliance (Level A)
  - Consistent naming and structure
  - Proper prop drilling vs state placement
  - StyleSheet usage

- **Example prompt to Copilot**:
  > "Create a screen component for [screen name] with a header, buttons, and proper accessibility labels. Follow the template in instructions.md"

### Code Review Checklist

- [ ] Component follows template structure
- [ ] Accessibility props present (`accessible`, `accessibilityLabel`, `accessibilityRole`)
- [ ] Styles in `StyleSheet.create()` at bottom
- [ ] Navigation uses correct pattern
- [ ] Props passed clearly (no deeply nested props)
- [ ] Handler functions named descriptively

---

## 11. Common Patterns

### Screen Template

```javascript
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function ScreenName() {
  const navigation = useNavigation();
  const [state, setState] = useState(initialValue);

  const handleAction = () => {
    // Action logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} accessibilityRole="header">
        Screen Title
      </Text>
      <TouchableOpacity
        accessible
        accessibilityLabel="Action button"
        onPress={handleAction}
        style={styles.button}
      >
        <Text>Action</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  button: { padding: 12, backgroundColor: "#007AFF", borderRadius: 8 },
});
```

---

## 12. What NOT to Do

- ❌ Don't use class components (use functional components)
- ❌ Don't mix inline styles with `StyleSheet` (always use `StyleSheet.create()`)
- ❌ Don't skip accessibility props on interactive elements
- ❌ Don't pass deeply nested props (refactor instead)
- ❌ Don't create custom components prematurely (wait until reuse is needed)
- ❌ Don't use Context API or Redux (stick to prop drilling)
- ❌ Don't import screens directly if navigating (use `navigation.navigate()`)

---

## 13. Useful Resources (From Course)

- [React Native Documentation](https://reactnative.dev/)
- [React Navigation Documentation](https://reactnavigation.org/)
- [Styling Cheatsheet](https://reactnative.dev/docs/style)
- [Flexbox Cheatsheet](https://flexboxfroggy.com/)
- [Accessibility Guidelines - WCAG Level A](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&level=a)
- Course Session Slides (PMA2026 LearnIT)

---

## 14. Questions?

Refer to:

1. Course materials in LearnIT
2. React Native official documentation
3. Session 5 (Accessibility) and Session 11 (GenAI Integration)
4. TAs during exercise sessions
