import { View, Text, TextInput } from "react-native";
import React from "react";
import { COLORS } from "../../theme";

const FormInput = ({
	labelText = "",
	placeHolderText = "",
	onChangeText = null,
	value = "",
	...more
}) => {
	return (
		<View style={{ width: "100%", marginBottom: 20 }}>
			<Text>{labelText}</Text>
			<TextInput
				style={{
					padding: 10,
					borderColor: COLORS.black + "20",
					borderWidth: 1,
					width: "100%",
                    borderRadius: 5,
                    marginTop: 10,
				}}
                placeholder={placeHolderText}
                onChangeText={onChangeText}
                value={value}
                {...more}
			/>
		</View>
	);
};

export default FormInput;
