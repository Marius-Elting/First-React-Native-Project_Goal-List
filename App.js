import { StyleSheet, Text, View, FlatList, Button, Image } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [couresGoals, setCouresGoals] = useState(["abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc",]);
  const [modalIsVisibale, setModalIsVisible] = useState(false);

  const addGoalHandler = (enteredText) => {
    setCouresGoals(currentCourseGoals => [...currentCourseGoals, { text: enteredText, id: Math.random().toString() }]);
  };

  const deleteGoalHandler = (id, aal) => {
    setCouresGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);

    });
  };

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      {/* Changes the Color of the Status bar */}
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button onPress={startAddGoalHandler} title="Add New Goal" color="#a065ec" />
        <GoalInput modalIsVisibale={modalIsVisibale} endAddGoalHandler={endAddGoalHandler} addGoalHandler={addGoalHandler} />
        <View style={styles.goalsContainer}>
          {/* use ScrollView to create an scrollable Container, the downside of ScrollView is, that it will render all elemnts in it, also the elements that are out of the screen */}
          {/* instead use Flatlist this will only render elements that are seen on the screen, it has like an inbuild map function, has better Performance */}
          <FlatList data={couresGoals} renderItem={itemData => {
            return <GoalItem itemData={itemData} deleteGoalHandler={deleteGoalHandler} />;
          }}
            // tell Flatlist how it will get an unique key
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 16,

  },
  goalsContainer: {
    flex: 5
  },
});
