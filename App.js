import * as React from 'react';
import { Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/Home';
import Schedule from './src/Schedule';
import Me from './src/Me';

// import Authenticate from './screens/Authenticate';


const Tab = createBottomTabNavigator();

function MyTabs() {
  const [username,setUsername] = React.useState("Guest");
  const [email,setEmail] = React.useState("");
  const [profile,setProfile] = React.useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');




  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
        headerRight:()=>(
          <View style={{marginRight:10}}>
            <Text style={{color:"#00adb5",fontSize:20,fontWeight:800}} >Technotsav 2024</Text>
          </View>
        ),
          tabBarStyle:{backgroundColor:"#222831"},
          headerStyle:{backgroundColor:"#222831"},
          headerTintColor:"#ffebcd",

      }}
      
      />
      <Tab.Screen name="Events" component={Schedule}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="event" color={color} size={size} />
        ),
        headerRight:()=>(
          <View style={{marginRight:10}}>
            <Text style={{color:"#00adb5",fontSize:20,fontWeight:800}} >Technotsav 2024</Text>
          </View>
        ),
        tabBarStyle:{backgroundColor:"#222831"},
        headerStyle:{backgroundColor:"#222831"},
        headerTintColor:"#ffebcd",
      }}
    />
    <Tab.Screen name="Account" 

      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
        // headerTitle:'Pavab',
        
      
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
            {/* You can use an Image component here to display the user's profile picture */}
            <Image source={{ uri: profile }} style={{ width: 30, height: 30, borderRadius: 15 }} />
          </View>
        ),
        tabBarStyle:{backgroundColor:"#222831"},
        headerStyle:{backgroundColor:"#222831"},
        headerTintColor:"#ffebcd",
      }}
    >
      {()=><Me profile={profile} setProfile={setProfile} users={username} setUser={setUsername} />}
    </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
