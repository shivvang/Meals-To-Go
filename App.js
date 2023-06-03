import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, Platform } from 'react-native';

const isAndroid=Platform.OS="android";
export default function App() {
  return (
    <>
      <SafeAreaView style={{flex:1,marginTop:isAndroid.currentHeight}}>
        <View style={{padding:16 ,backgroundColor:"green"}}>
         <Text> search</Text>
        </View>
        
        <View style={{padding:16,flex:1 ,backgroundColor:"blue"}}>
          <Text> something</Text>
        </View>
      </SafeAreaView>
      <StatusBar style='auto'/>
    </>
  );
}

const styles = StyleSheet.create({
  
});
