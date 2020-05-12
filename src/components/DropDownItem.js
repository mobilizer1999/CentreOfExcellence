import React from 'react';

import {
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  InteractionManager,
  Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import {responsivePortion} from '@config/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  icons: {
    width: responsivePortion(11),
    height: responsivePortion(7),
  },
  underline: {
    width: '100%',
    height: 1,
    position: 'absolute',
    top: 0,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  contentChild: {
    padding: 0,
  },
  contentView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  contentTxt: {
    color: 'black',
    marginLeft: 8,
    fontSize: 12,
  },
  contentFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 48,
    paddingHorizontal: 12,
  },
});

class DrowDownItem extends React.Component {
  static animated;
  static defaultProps = {
    contentVisible: false,
    backgroundColor: 'transparent',
    titleBackground: 'transparent',
    contentBackground: 'transparent',
    underlineColor: '#d3d3d3',
    visibleImage: false,
    invisibleImage: false,
    headerStyle: null,
  };

  static propTypes = {
    contentVisible: PropTypes.bool,
    backgroundColor: PropTypes.string,
    titleBackground: PropTypes.string,
    contentBackground: PropTypes.string,
    underlineColor: PropTypes.string,
    visibleImage: PropTypes.any,
    invisibleImage: PropTypes.any,
    headerStyle: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      contentVisible: props.contentVisible,
      headerheight: 0,
      contentHeight: 0,
    };
  }

  render() {
    return (
      <Animated.View
        style={[
          styles.container,
          {
            height: this.animated,
            backgroundColor: this.props.backgroundColor,
          },
          this.props.style,
        ]}>
        <TouchableOpacity activeOpacity={0.5} onPress={this.onPress}>
          <View style={this.props.headerStyle} onLayout={this.onAnimLayout}>
            {this.props.header}
            <Image
              source={
                this.state.contentVisible
                  ? this.props.visibleImage
                  : this.props.invisibleImage
              }
              style={styles.icons}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.content} onLayout={this.onLayout}>
          <View style={[styles.contentChild]}>{this.props.children}</View>
        </View>
      </Animated.View>
    );
  }

  runAnimation = () => {
    const initialValue = this.state.contentVisible
      ? this.state.headerHeight + this.state.contentHeight
      : this.state.headerHeight;
    const finalValue = this.state.contentVisible
      ? this.state.headerHeight
      : this.state.contentHeight + this.state.headerHeight;

    this.setState({
      contentVisible: !this.state.contentVisible,
    });

    this.animated.setValue(initialValue);
    Animated.spring(this.animated, {
      toValue: finalValue,
    }).start();
  };

  onAnimLayout = (evt) => {
    const headerHeight = evt.nativeEvent.layout.height;
    if (!this.state.isMounted && !this.props.contentVisible) {
      this.animated = new Animated.Value(headerHeight);
      this.setState({
        isMounted: true,
        headerHeight,
      });
      return;
    } else if (!this.state.isMounted) {
      InteractionManager.runAfterInteractions(() => {
        this.animated = new Animated.Value(
          headerHeight + this.state.contentHeight,
        );
      });
    }
    this.setState({headerHeight, isMounted: true});
  };

  onLayout = (evt) => {
    const contentHeight = evt.nativeEvent.layout.height;
    this.setState({contentHeight});
  };

  onPress = () => {
    this.runAnimation();
  };
}

export default DrowDownItem;
