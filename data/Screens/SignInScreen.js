import { View, Text, SafeAreaView } from "react-native";
import { useState } from "react";
import { COLORS, SIZES } from "../theme";
import FormInput from "../components/shared/FormInput";
import FormButton from "../components/shared/FormButton";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");


	const handleOnSubmit = () => {
		if (email != "" && password != "") {
			//Sign in
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					//Navigate to Quiz
					navigation.navigate("Quiz");
					// ...
				}
				)
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
				}
				);
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
			<View
				style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
			>
				<Text style={{ fontSize: 16, color: COLORS.black }}>
					Don't have an account?
				</Text>
				<Text
					style={{ fontSize: 16, color: "#2e5984", marginLeft: 5 }}
					onPress={() => navigation.navigate("SignUpScreen")}
				>
					Sign Up
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default SignInScreen;
