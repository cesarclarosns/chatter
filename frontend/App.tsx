import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Chatter</Text>
      <Button
        title="Create new account"
        onPress={() => Alert.alert("Creating new account...")}
      />
      <Button
        title="Log in"
        onPress={() => Alert.alert("Creating new account...")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
