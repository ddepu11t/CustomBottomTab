import React, { FC, PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

const TabContainer: FC<PropsWithChildren> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({ container: {} });
export default TabContainer;
