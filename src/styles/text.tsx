import { ReactNode } from "react";
import { Text as NativeText } from "react-native";

type textProps = {
	children: ReactNode;
	class?: string;
};

export const Text = ({ children, class: cn }: textProps) => {
	return (
		<NativeText
			className={`text-gray-900 opacity-75 dark:text-vodka ${cn}`}
		>
			{children}
		</NativeText>
	);
};
