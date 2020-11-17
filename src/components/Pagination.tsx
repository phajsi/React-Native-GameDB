import React from "react";
import { Button, Icon, Text } from "native-base";
import { StyleSheet, View } from "react-native";

const Pagination = (props: {
  nextButton: any;
  prevButton: any;
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  pageNum: number;
}) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        info
        iconLeft
        block
        style={styles.button}
        disabled={props.prevBtnDisabled}
        onPress={props.prevButton}
      >
        <Icon name="ios-arrow-back" />
        <Text> Previous </Text>
      </Button>

      <Button
        info
        iconRight
        block
        style={styles.button}
        disabled={props.nextBtnDisabled}
        onPress={props.nextButton}
      >
        <Text>Next </Text>
        <Icon name="ios-arrow-forward" />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
});

export default Pagination;
