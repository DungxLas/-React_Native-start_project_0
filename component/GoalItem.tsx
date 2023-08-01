import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

function GoalItem(props: {onDeleteItem: any; text: String; id: String}) {
  function deleteGoalHandler() {
    props.onDeleteItem(props.id);
  }

  return (
    <Pressable onPress={deleteGoalHandler}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});

export default GoalItem;
