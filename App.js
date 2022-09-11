import {StatusBar} from 'expo-status-bar';
import {Pressable, StyleSheet, Text, TextInput, View, FlatList} from 'react-native';
import {useState} from "react";

export default function App() {
    const [result, setResult] = useState('Result:');
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [history, setHistory] = useState([]);

    const addition = () => {
        let a1 = parseFloat(a);
        let b1 = parseFloat(b);
        let res = a1 + b1;
        setResult('Result: ' + res);
        setHistory([...history, a1 + "+" + b1 + "=" + res]);
    }

    const substraction = () => {
        let a1 = parseFloat(a);
        let b1 = parseFloat(b);
        let res = a1 - b1;
        setResult('Result: ' + res);
        setHistory([...history, a1 + "-" + b1 + "=" + res]);
    }

    return (
        <View style={styles.container}>
            <Text
                style={styles.result}>
                {result}
            </Text>
            <TextInput
                keyboardType="numeric"
                style={styles.textInput}
                onChangeText={a => setA(a)} value={a}/>
            <TextInput
                keyboardType="numeric"
                style={styles.textInput}
                onChangeText={b => setB(b)} value={b}/>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Pressable
                    style={styles.button}
                    onPress={addition}>
                    <Text style={styles.text}>+</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={substraction}>
                    <Text style={styles.text}>-</Text>
                </Pressable>
            </View>
            <Text>History</Text>
            <View style={styles.history}>

                <FlatList
                    data={history}
                    renderItem={({item}) => <Text style={styles.result}>{item}</Text>}
                />
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 44,
        paddingBottom: 11,
    },
    textInput: {
        borderColor: "#000",
        height: 44,
        marginTop: 11,
        marginBottom: 5,
        width: 200,
        borderWidth: 1
    },
    result: {
        paddingVertical: 5,
        fontSize: 16
    },
    button: {
        paddingVertical: 11,
        paddingHorizontal: 11,
        marginTop: 11,
        backgroundColor: 'lightblue',
        marginHorizontal: 11
    },
    history: {
        borderColor: "black",
        borderWidth: 1,
        width: 200,
        flex: 15,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
    }
});
