import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../theme";

const StaticsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Statics Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.bg,
  },

  text: {
    fontWeight: "bold",
    fontSize: 32,
    color: COLORS.body,
  },
});

export default StaticsScreen;
