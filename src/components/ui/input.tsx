import { StyleSheet, TextInput, TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  return <TextInput style={styles.input} {...rest} />;
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 48,
    fontSize: 16,
    paddingLeft: 14,
    marginBottom: 5,
    color: "#FFFF",
    backgroundColor: "#2A2A2A",
    borderWidth: 1,
    borderColor: "#3E3E3E",
    borderRadius: 10,
  },
});
