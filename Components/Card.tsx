import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

type CardProps = {
	title?: string;
	children?: React.ReactElement;
};

const Card: React.FC<CardProps> = ({ title, children }) => {
	const theme = useTheme();
	return (
		<View
			className="w-full rounded-md p-3"
			style={{ backgroundColor: theme.colors.card }}
		>
			{/* Title */}
			{title ? (
				<View
					className="border-b pb-2 mb-2"
					style={{ borderBottomColor: theme.colors.border }}
				>
					<Text className="text-md" style={{ color: theme.colors.text }}>
						{title}
					</Text>
				</View>
			) : null}
			{/* Content */}
			<View>{children}</View>
		</View>
	);
};

export default Card;
