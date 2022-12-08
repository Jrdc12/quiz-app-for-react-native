import { View, Text, SafeAreaView } from "react-native";
import { useState } from "react";
import { COLORS } from "../theme";
import FormInput from "../components/shared/FormInput";
import FormButton from "../components/shared/FormButton";
import { auth } from "../../firebase";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { ToastAndroid } from "react-native";



const SignUpScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleOnSubmit = () => {
		if (email != "" && password != "" && confirmPassword != "") {
			if (password == confirmPassword) {
				//signup
				createUserWithEmailAndPassword(auth, email, password)
					.then((userCredential) => {
						// Signed in
						const user = userCredential.user;
						ToastAndroid.show('User created successfully', ToastAndroid.SHORT)

						// ...
					})
					.catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;
						// ..
					});
				
			} else {
				Alert.alert("Password does not match");
			}
		}
	};

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: COLORS.white,
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
				Sign Up
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

			{/* Confirm Password */}
			<FormInput
				labelText='Confirm Password'
				placeHolderText='confirm your password'
				onChangeText={(value) => setConfirmPassword(value)}
				value={confirmPassword}
				secureTextEntry={true}
			/>
			{/* Submit */}
			<FormButton
				labelText='Sign up'
				handleOnPress={handleOnSubmit}
				style={{ width: "100%" }}
			/>

			{/* Footer */}
			<View
				style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
			>
				<Text style={{ fontSize: 16, color: COLORS.black }}>
					Already have an account?
				</Text>
				<Text
					style={{ fontSize: 16, color: "#2e5984", marginLeft: 5 }}
					onPress={() => navigation.navigate("SignInScreen")}
				>
					Sign In
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default SignUpScreen;
