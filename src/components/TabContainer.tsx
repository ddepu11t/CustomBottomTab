import React, { FC, PropsWithChildren, useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { useTabMenu } from "../context/TabContext";
import { COLORS } from "../theme";

const TabContainer: FC<PropsWithChildren> = ({ children }) => {
  const { opened } = useTabMenu();

  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: opened ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [opened]);

  return (
    <View style={styles.container}>
      {children}

      {opened ? (
        <Animated.View
          style={[
            styles.overlay,
            {
              backgroundColor: animation.interpolate({
                inputRange: [0, 1],
                outputRange: ["transparent", COLORS.dark],
              }),
            },
          ]}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    opacity: 0.2,
  },
});
export default TabContainer;
