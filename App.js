import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import WeightScreen from "./screens/WeightScreen/weightScreen";
import AddWeightScreen from "./screens/AddWeightScreen/AddWeightScreen";
import ProfileScreen from "./screens/ProfileScreen/profileScreen";

export default class App extends React.Component {
  render() {
    return (
        <ProfileScreen/>
    );
  }
}


