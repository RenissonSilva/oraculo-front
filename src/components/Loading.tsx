import { ActivityIndicator, View } from "react-native";

export function Loading() {
    return (
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#09090A' }}>
            <ActivityIndicator color="#8963D6" />
        </View>
    )
}