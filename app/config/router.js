import { StackNavigator, TabNavigator } from 'react-navigation';
import React from 'react';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import { capitalizeFirstLetter } from '../helpers/string';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';
import Icon from 'react-native-vector-icons/Ionicons';

export const ContactsStack = StackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      title: 'Contacts',
    },
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      headerTitle: `${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`,
    }),
  },
});

export const NewContactStack = StackNavigator({
  NewContact: {
    screen: NewContact,
    navigationOptions: {
      title: 'New Contact'
    }
  }
});

export const MeStack = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      title: 'Me'
    }
  }
});

export const Tabs = TabNavigator({
  Contacts: {
    screen: ContactsStack,
    navigationOptions: {
      tabBarlabel: 'Contacts',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor} />
    },
  },
  NewContact: {
    screen: NewContactStack,
    navigationOptions: {
      tabBarLabel: 'New contact',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-add" size={35} color={tintColor} />
    },
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      tabBarlabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-contact" size={35} color={tintColor} />
    },
  },
});
