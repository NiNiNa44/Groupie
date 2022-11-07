import * as React from 'react';
import { Text, View, Button } from "react-native";
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();
export default function Home (){
const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '536279923900-23oa8bb9llrtm751fs9pkulbv1a8v4gp.apps.googleusercontent.com',
    iosClientId: '536279923900-23oa8bb9llrtm751fs9pkulbv1a8v4gp.apps.googleusercontent.com',
    androidClientId: '536279923900-23oa8bb9llrtm751fs9pkulbv1a8v4gp.apps.googleusercontent.com',
    webClientId: '536279923900-23oa8bb9llrtm751fs9pkulbv1a8v4gp.apps.googleusercontent.com',
    scopes:['profile', 'email']
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
    }
  }, [response]);


return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" , textAlign:'center'}}>
	<Text style={{  fontSize: 20, }}>Connect your Google account to start socializing for once</Text>
	<Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
      }}
    />








	</View>
);
};


