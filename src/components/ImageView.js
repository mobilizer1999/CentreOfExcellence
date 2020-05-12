import React from 'react';
import {View, ActivityIndicator, StyleSheet, Animated} from 'react-native';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';
import Colors from '@config/colors';
import {
  responsivePortion,
  responsiveVerticalPortion,
  DEVICE_SIZE,
  FONTS,
} from '@config/constants';

export default class ImageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      fadeAnim: new Animated.Value(1),
    };
  }

  onLoadEnd = () => {
    this.setState({loading: false});
  };

  renderPlaceholder = () => {
    return (
      <Animated.View style={this.getPlaceholderStyles()}>
        {this.renderActivityIndicator()}
      </Animated.View>
    );
  };

  getPlaceholderStyles = () => {
    const {loading, fadeAnim} = this.state;
    const {placeholderContainerStyle, duration} = this.props;
    let container = [styles.placeholderContainer];

    if (!loading) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration,
        useNativeDriver: true,
      }).start();
      container.push({opacity: fadeAnim});
    }
    container.push(placeholderContainerStyle);
    return container;
  };

  renderActivityIndicator = () => {
    const {loading} = this.props;
    const {
      showActivityIndicator,
      ActivityIndicator,
      activityIndicatorProps,
    } = this.props;
    if (showActivityIndicator) {
      if (ActivityIndicator) {
        return ActivityIndicator;
      } else {
        return (
          <ActivityIndicator {...activityIndicatorProps} animating={loading} />
        );
      }
    } else {
      return null;
    }
  };

  render() {
    const {style, resizeMode, imageStyle, src, source, children} = this.props;
    return (
      <View style={[styles.container, {style}]}>
        {this.renderPlaceholder()}
        <FastImage
          resizeMode={resizeMode}
          onLoadEnd={this.onLoadEnd}
          style={imageStyle}
          source={src ? {uri: src, priority: FastImage.priority.high} : source}>
          {children}
        </FastImage>
      </View>
    );
  }
}

ImageView.defaultProps = {
  style: null,
  resizeMode: 'stretch',
};

ImageView.propTypes = {
  style: PropTypes.instanceOf(Object),
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  placeholderContainer: {
    flex: 1,
    alignSelf: 'stretch',
    zIndex: 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
