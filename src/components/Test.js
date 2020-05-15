import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated,
} from 'react-native'; //Step 1
import ICONS from '@config/icons';

class Panel extends Component {
  constructor(props) {
    super(props);

    this.icons = {
      //Step 2
      up: ICONS.UP,
      down: ICONS.DOWN,
    };

    this.state = {
      //Step 3
      title: props.title,
      expanded: true,
      animation: new Animated.Value(0),
    };
  }

  toggle = () => {
    let initialValue = this.state.expanded
        ? this.state.maxHeight + this.state.minHeight
        : this.state.minHeight,
      finalValue = this.state.expanded
        ? this.state.minHeight
        : this.state.maxHeight + this.state.minHeight;

    this.setState({
      expanded: !this.state.expanded, //Step 2
    });

    this.state.animation.setValue(initialValue); //Step 3
    Animated.spring(
      //Step 4
      this.state.animation,
      {
        toValue: finalValue,
      },
    ).start(); //Step 5
  };

  _setMaxHeight = (event) => {
    this.setState({
      maxHeight: event.nativeEvent.layout.height,
    });
  };

  _setMinHeight = (event) => {
    this.setState({
      minHeight: event.nativeEvent.layout.height,
      animation: new Animated.Value(event.nativeEvent.layout.height),
    });
  };

  render() {
    let icon = this.icons['down'];

    if (this.state.expanded) {
      icon = this.icons['up']; //Step 4
    }

    //Step 5
    return (
      <Animated.View style={[styles.container, {height: this.state.animation}]}>
        <View style={styles.titleContainer} onLayout={this._setMinHeight}>
          <Text style={styles.title}>{this.state.title}</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={this.toggle}
            underlayColor="#f1f1f1">
            <Image style={styles.buttonImage} source={icon} />
          </TouchableHighlight>
        </View>

        <View style={styles.body} onLayout={this._setMaxHeight}>
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}
export default Panel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    padding: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  button: {},
  buttonImage: {
    width: 30,
    height: 25,
  },
  body: {
    padding: 10,
    paddingTop: 0,
  },
});
