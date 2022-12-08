import { View, Text, SafeAreaView } from "react-native";
import { useState } from "react";
import { COLORS, SIZES } from "../theme";
import FormInput from "../components/shared/FormInput";
import FormButton from "../components/shared/FormButton";
import { signIn } from "../utils/auth";

const SignInScreen = ({navigation}) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleOnSubmit = () => {
		if(email != '' && password != '') {
			signIn(email, password)
		}
	};

	return (
		<SafeAreaView
			style={{
				backGroundColor: COLORS.background,
				flex: 1,
				alignItems: "center",
				justifyContent: "flex-start",
				padding: 20,
			}}
		>
			{/* Header */}
			<Text
				style={{
					fontSize: 24,
					color: COLORS.black,
					fontWeight: "bold",
					marginVertical: 32,
				}}
			>
				Sign In
			</Text>

			{/* Email */}
			<FormInput
				labelText='Email'
				placeHolderText='enter your email'
				onChangeText={(value) => setEmail(value)}
				value={email}
				keyboardType={"email-address"}
			/>

			{/* Password */}
			<FormInput
				labelText='Password'
				placeHolderText='enter your password'
				onChangeText={(value) => setPassword(value)}
				value={password}
				secureTextEntry={true}
			/>

			{/* Submit */}
			<FormButton
				labelText='Submit'
				handleOnPress={handleOnSubmit}
				style={{ width: "100%" }}
			/>

			{/* Footer */}
			<View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
				<Text style={{fontSize: 16, color: COLORS.black}}>Don't have an account?</Text>
				<Text style={{fontSize: 16, color: "#2e5984", marginLeft: 5}}
					onPress={() => navigation.navigate('SignUpScreen')}
				>Sign Up</Text>
			</View>
		</SafeAreaView>
	);
};

export default SignInScreen;
