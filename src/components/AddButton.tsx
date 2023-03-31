import React, { FC, useEffect, useRef, useState } from "react";
import { Animated, Image, Pressable, StyleSheet, View } from "react-native";
import { COLORS } from "../theme";

type Props = {
  opened: boolean;
  toogleMenu: () => void;
};

const AddButton: FC<Props> = ({ opened, toogleMenu }) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: opened ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [opened]);

  const opacity = {
    opacity: animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1],
    }),
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Pressable>
          <Animated.View
            style={[
              styles.item,
              opacity,
              {
                transform: [
                  {
                    translateX: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -60],
                    }),
                  },
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -50],
                    }),
                  },
                ],
              },
            ]}
          >
            <Image
              source={require("../../assets/images/Arrow_Down.png")}
              resizeMode="contain"
              style={styles.itemIcon}
            />
          </Animated.View>
        </Pressable>

        <Pressable>
          <Animated.View
            style={[
              styles.item,
              opacity,
              {
                transform: [
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -100],
                    }),
                  },
                ],
              },
            ]}
          >
            <Image
              source={require("../../assets/images/Transactions.png")}
              resizeMode="contain"
              style={styles.itemIcon}
            />
          </Animated.View>
        </Pressable>

        <Pressable>
          <Animated.View
            style={[
              styles.item,
              opacity,
              {
                transform: [
                  {
                    translateX: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 60],
                    }),
                  },

                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -50],
                    }),
                  },
                ],
              },
            ]}
          >
            <Image
              source={require("../../assets/images/Arrow_Top.png")}
              resizeMode="contain"
              style={styles.itemIcon}
            />
          </Animated.View>
        </Pressable>

        {/* Tab Button */}
        <Pressable style={styles.addButton} onPress={toogleMenu}>
          <Animated.View
            style={[
              styles.addButtonInner,
              {
                transform: [
                  {
                    rotate: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["0deg", "45deg"],
                    }),
                  },
                  {
                    scale: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 1.1],
                    }),
                  },
                ],
              },
            ]}
          >
            <Image
              source={require("../../assets/images/Add.png")}
              resizeMode="contain"
              style={styles.addButtonIcon}
            />
          </Animated.View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    height: 0,
  },
  box: {
    width: 60,
    height: 60,
    marginTop: -30,
    position: "relative",
  },
  addButton: {
    shadowColor: COLORS.dark,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  addButtonInner: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  addButtonIcon: {
    width: 40,
    height: 40,
    tintColor: COLORS.white,
  },

  item: {
    position: "absolute",
    top: 5,
    left: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  itemIcon: {
    width: 32,
    height: 32,
    tintColor: COLORS.white,
  },
});
export default AddButton;
