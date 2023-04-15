import React from "react";

import { useTheme } from "@react-navigation/native";

import { SafeAreaView, Text, View } from "react-native";
import Card from "../Components/Card";

const Home = () => {
	const theme = useTheme();

	return (
		<SafeAreaView>
			<View className="h-full px-4 pt-3">
				<Text className="text-2xl pb-3" style={{ color: theme.colors.text }}>
					Next Workout
				</Text>
				<Card title={""}></Card>
			</View>
		</SafeAreaView>
	);
};

export default Home;
