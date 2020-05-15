import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import ICONS from '@config/icons';
import {responsivePortion, FONTS} from '@config/constants';
import Colors from '@config/colors';

class StarView extends React.Component {
  constructor(props) {
    super(props);
  }

  renderStars = () => {
    const {rating, starColor, unstarColor, starStyle} = this.props;
    const stars = [];
    const nostars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(i);
      } else {
        nostars.push(i);
      }
    }

    const all = [...stars, ...nostars];

    return all.map((item, index) => (
      <Image
        key={index}
        source={ICONS.STAR}
        resizeMode="contain"
        style={[
          styles.icon,
          starStyle,
          {
            tintColor:
              index < rating
                ? starColor
                  ? starColor
                  : Colors.yellow
                : unstarColor
                ? unstarColor
                : Colors.white,
          },
        ]}
      />
    ));
  };

  render() {
    const {rating, users, style} = this.props;
    return (
      <View style={[styles.container, style]}>
        {this.renderStars()}
        {!!users && <Text style={styles.text}>{`${rating}.0 (${users})`}</Text>}
      </View>
    );
  }
}

export default StarView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: responsivePortion(14),
    height: responsivePortion(14),
    tintColor: 'white',
  },
  text: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(12),
    fontWeight: 'normal',
    color: Colors.white,
    marginLeft: responsivePortion(12),
  },
});
