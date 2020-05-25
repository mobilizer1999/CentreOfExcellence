import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import CardView from 'react-native-cardview';
import ImageView from '@components/ImageView';
import {
  responsivePortion,
  responsiveVerticalPortion,
  FONTS,
  DEVICE_SIZE,
} from '@config/constants';
import ICONS from '@config/icons';
import Colors from '@config/colors';

export const WishlistItem = ({item, index, purchased, onPress}) => (
  <CardView
    cardElevation={4}
    cardMaxElevation={4}
    cornerRadius={responsivePortion(2)}
    style={[
      styles.categoryItem,
      {
        marginLeft:
          index === 0 ? DEVICE_SIZE.CONTENT_PADDING : responsivePortion(16),
      },
    ]}>
    <View style={styles.touchableItem} underlayColor={Colors.mainbackground}>
      <View style={styles.touchableItem}>
        <ImageView
          source={item.img}
          imageStyle={[
            styles.itemImage,
            {
              height: responsivePortion(74),
              boderTopLeftRadius: purchased ? responsivePortion(2) : 0,
              boderTopRightRadius: purchased ? responsivePortion(2) : 0,
            },
          ]}
          activityIndicatorProps={{size: 'small'}}
        />
        <View
          style={[
            styles.itemTextView,
            {
              height: responsivePortion(160),
            },
          ]}>
          <View style={styles.itemType}>
            <Text
              style={[
                styles.smallText,
                {fontWeight: 'bold', letterSpacing: responsivePortion(1.2)},
              ]}>
              {item.type}
            </Text>
          </View>
          <Text
            style={[
              styles.mediumText,
              {
                marginTop: responsivePortion(20),
                marginHorizontal: responsivePortion(8),
              },
            ]}
            numberOfLines={2}>
            {item.title}
          </Text>
          <View style={{flex: 1}}>
            <View style={[styles.rowView, {marginTop: responsivePortion(7)}]}>
              <Image
                source={ICONS.MODULE}
                resizeMode="contain"
                style={[styles.smallIcon, {tintColor: Colors.blue}]}
              />
              <Text
                style={[
                  styles.normalText,
                  {
                    color: Colors.black,
                    marginLeft: responsivePortion(8),
                    marginRight: responsivePortion(14),
                  },
                ]}>{`${item.modules} Modules`}</Text>
              <Image
                source={ICONS.VIDEO}
                resizeMode="contain"
                style={[styles.smallIcon, {tintColor: Colors.blue}]}
              />
              <Text
                style={[
                  styles.normalText,
                  {
                    color: Colors.black,
                    marginLeft: responsivePortion(8),
                    marginRight: responsivePortion(14),
                  },
                ]}>{`${item.videos} Videos`}</Text>
            </View>
            <View style={[styles.rowView, {marginTop: responsivePortion(12)}]}>
              <Image
                source={item.addedWishlist ? ICONS.LOVEFILL : ICONS.LOVE}
                resizeMode="contain"
                style={[styles.icon, {tintColor: Colors.red}]}
              />
              <Text
                style={[
                  styles.normalText,
                  {
                    color: Colors.black,
                    marginLeft: responsivePortion(3),
                  },
                ]}>
                {'Remove from Wishlist'}
              </Text>
            </View>
            <View style={styles.progressView}>
              <TouchableHighlight
                style={[styles.button, {top: responsivePortion(8)}]}
                underlayColor={Colors.background}
                onPress={() => onPress(item)}>
                <Text style={styles.normalText}>{'View Course'}</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    </View>
  </CardView>
);

const styles = StyleSheet.create({
  categoryItem: {
    height: responsivePortion(234),
    marginTop: responsivePortion(13),
    marginLeft: responsivePortion(16),
    borderRadius: responsivePortion(2),
    marginBottom: responsiveVerticalPortion(26),
    backgroundColor: Colors.white,
  },
  touchableItem: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    height: responsivePortion(24),
    backgroundColor: Colors.blue,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsivePortion(8),
  },
  smallIcon: {
    width: responsivePortion(8),
    height: responsivePortion(8),
    tintColor: Colors.white,
  },
  normalText: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(10),
    fontWeight: 'normal',
    color: Colors.white,
  },
  smallText: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(8),
    fontWeight: 'normal',
    color: Colors.white,
  },
  tagView: {
    paddingHorizontal: responsivePortion(8),
    paddingVertical: responsivePortion(4),
    backgroundColor: Colors.green100,
    borderRadius: responsivePortion(4),
    marginLeft: responsivePortion(4),
  },
  itemImage: {
    width: '100%',
    height: responsivePortion(72),
  },
  itemTextView: {
    height: responsivePortion(208),
    paddingBottom: responsivePortion(11),
  },
  itemType: {
    position: 'absolute',
    paddingHorizontal: responsivePortion(10),
    height: responsivePortion(24),
    backgroundColor: Colors.blue,
    left: responsivePortion(8),
    top: responsivePortion(-12),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsivePortion(12),
  },
  mediumText: {
    fontFamily: FONTS.main,
    fontSize: responsivePortion(14),
    fontWeight: 'bold',
    color: Colors.black,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsivePortion(8),
  },
  icon: {
    width: responsivePortion(13),
    height: responsivePortion(12),
    tintColor: Colors.black,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    left: responsivePortion(8),
    right: responsivePortion(8),
    height: responsivePortion(32),
    backgroundColor: Colors.blue,
    borderRadius: responsivePortion(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressView: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: Colors.disabled,
    marginTop: responsivePortion(9),
  },
  financeText: {
    width: responsivePortion(49),
    height: responsivePortion(16),
  },
});
