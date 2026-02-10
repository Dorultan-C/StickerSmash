import { Text, View } from "react-native";

import "../global.css"

export default function home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-xl font-bold text-red-900">home screens </Text>
    </View>
  );
}
