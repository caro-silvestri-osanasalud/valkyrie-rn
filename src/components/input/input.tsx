import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

type QuestionsBoardProps = {
  questions: string;
}
export default function InputTest({ questions }: QuestionsBoardProps) {
  const [data, setData] = useState("");

  return (
    <View>
     
            <Text>{questions}</Text>
            <TextInput
              accessibilityLabel="answer input"
              accessibilityHint="input"
              placeholder="Enter text"
                
              onChangeText={(text) => {
                setData(text);
              }}
            />
      <TouchableOpacity onPress={() => console.log('hola')}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}