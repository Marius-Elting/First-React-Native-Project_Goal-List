import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ itemData, deleteGoalHandler }) {
    return (
        <View style={styles.goalItem}>
            {/* the android_ripple creates an like onclick animation  */}
            <Pressable
                android_ripple={{ color: "#dddddd" }}
                onPress={deleteGoalHandler.bind(this, itemData.item.id)}
                // you can also use style={(pressData) => pressData.pressed}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText} >
                    {itemData.item.text}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "blueviolet",
        color: "white"
    },
    goalText: {
        color: "white",
        padding: 8,
    },
    pressedItem: {
        opacity: 0.5
    }

});
export default GoalItem;