import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

// Telas
const LoginScreen = ({ login }) => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Login</Text>
      <Button title="Entrar" onPress={() => login(true)} />
    </View>
  );
};

const HomeScreen = ({ login }) => (
  <View style={styles.layout}>
    <Text style={styles.title}>Home</Text>
    <Button title="Sair" onPress={() => login(false)} />
  </View>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <View style={styles.container}>
      {isAuthenticated
        ? <HomeScreen login={setIsAuthenticated} />
        : <LoginScreen login={setIsAuthenticated} />}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});