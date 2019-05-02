import React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';

const theme = getTheme();

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
  },
  title: {
    top: 20,
    left: 80,
    fontSize: 24
  },
  image: {
    height: 100
  },
  action: {
    backgroundColor: 'black',
    color: 'white'
  },
  icon: {
    position: 'absolute',
    top: 15,
    left: 0,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0)'
  }
});

const PeopleItem = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress = {() => props.selectPerson(props.people)}
    >
      <View style={[theme.cardStyle, styles.card]}>
        <Image 
          style = {styles.image}
          source = {{uri:'/Users/charlesw/Projects/personal/ReactNative/CRMSample/src/images/background.jpg'}}
        />
        <Icon
          style = {styles.icon}
          name = {'user'}
          size = {100}
        />
        <Text style={[theme.cardTitleStyle, styles.title]}>{props.people.first_name} {props.people.last_name}</Text>
        <Text style={[theme.cardActionStyle, styles.action]}>{props.people.company}</Text>
         <Text>{props.test[0]}</Text> 
      </View>
    </TouchableWithoutFeedback>
  )
}

export default connect(null, actions)(PeopleItem);

