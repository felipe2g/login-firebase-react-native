import { StyleSheet, Text, View, Button, ActivityIndicator } from "react-native";
import { useState } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

//funções de autenticação
export const onLogin = async () => {
  const user = await GoogleSignin.signIn();
  return user;
};

export const onLogout = () => {
  GoogleSignin.signOut();
};

GoogleSignin.configure({
  webClientId: "CHAVE_FIREBASE_CLIENTE",
});

// Telas
const LoginScreen = ({ login }) => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);

  const handleLoginUser = () => {
    try {
      setIsSigninInProgress(true);
      onLogin().then((user) => {
        console.log(user);
        login(true);
      });
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.layout}>
      {isSigninInProgress && <ActivityIndicator />}
      <Text style={styles.title}>Login</Text>
      <Button
        title="entrar"
        onPress={() => handleLoginUser()}
      />
    </View>
  );
};

const HomeScreen = ({ login }) => (
  <View style={styles.layout}>
    <Text style={styles.title}>Home</Text>
    <Button title="Sair" onPress={() => onLogout().then(() => login(false))} />
  </View>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <View style={styles.container}>{isAuthenticated ? <HomeScreen login={setIsAuthenticated} /> : <LoginScreen login={setIsAuthenticated} />}</View>
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