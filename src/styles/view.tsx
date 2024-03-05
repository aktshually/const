import { ReactNode } from "react";
import { View as NativeView } from "react-native";

type viewProps = {
	children: ReactNode;
	class?: string;
};

export const View = ({ children, class: cn }: viewProps) => {
	return (
		<NativeView className={`${cn} bg-pearl dark:bg-gray-700`}>
			{children}
		</NativeView>
	);
};
