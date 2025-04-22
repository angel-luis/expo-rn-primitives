import { View } from "react-native";
import { ContextMenuComponent } from "@/components/ContextMenu";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ContextMenuComponent />
    </View>
  );
}
