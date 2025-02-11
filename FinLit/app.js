import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home.js'; // Correct path!
import ChatScreen from './components/chat.js'; // Correct path!
import KnowledgeScreen from './components/knowledge.js'; // Correct path!
import PlanningScreen from './components/planning.js'; // Correct path!

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Knowledge" component={KnowledgeScreen} />
        <Stack.Screen name="Planning" component={PlanningScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;