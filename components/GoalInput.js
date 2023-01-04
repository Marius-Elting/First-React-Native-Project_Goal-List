import { View, StyleSheet, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput({ addGoalHandler, modalIsVisibale, endAddGoalHandler }) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    return (
        // Modal creates an Overlay over the Screen
        <Modal visible={modalIsVisibale} animationType="slide">
            <View style={styles.inputContainer}>
                {/* how to add an Image */}
                <Image style={styles.image} source={require("../assets/images/goal.png")} />
                <TextInput value={enteredGoalText} onChangeText={(input) => setEnteredGoalText(input)} style={styles.textInput} placeholder="Your course goal!" />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button color="#f31282" onPress={() => { endAddGoalHandler(); }} title="Cancel" />
                    </View>
                    <View style={styles.button}>
                        <Button color="#b180c0" onPress={() => { addGoalHandler(enteredGoalText); setEnteredGoalText(""); endAddGoalHandler(); }} title="Add Goal" />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b"
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: "#120438",
        borderRadius: 6,
        width: "100%",
        padding: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
});


export default GoalInput;