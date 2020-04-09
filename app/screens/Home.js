import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";

export default function Home(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test Triage</Text>
      <Button
        color="red"
        icon="ballot-outline"
        mode="contained"
        onPress={() => navigation.navigate("Test Triage")}
      >
        Iniciar Cuestionario
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 1,
    backgroundColor: "#F17C63",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 20,
  },
});
