import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import CardView from 'react-native-cardview';
import ImageView from '@components/ImageView';
import ProgressBar from '@components/ProgressBar';
import {
  responsivePortion,
  responsiveVerticalPortion,
  FONTS,
  DEVICE_SIZE,
} from '@config/constants';
import ICONS from '@config/icons';
import Colors from '@config/colors';

export const CourseItem = ({item, index, purchased, onPress}) => (
  <CardView
    cardElevation={4}
    cardMaxElevation={4}
    cornerRadius={responsivePortion(2)}
    style={[
      styles.categoryItem,
      {
        height: purchased
          ? item.completion
            ? responsivePortion(256)
            : responsivePortion(234)
          : responsivePortion(304),
        marginLeft:
          index === 0 ? DEVICE_SIZE.CONTENT_PADDING : responsivePortion(16),
      },
    ]}>
    <View style={styles.touchableItem} underlayColor={Colors.mainbackground}>
      <View style={styles.touchableItem}>
        {!purchased && (
          <View style={styles.header}>
            <Image
              source={ICONS.USER}
              resizeMode="contain"
              style={styles.smallIcon}
            />
            <Text
              style={[
                styles.normalText,
                {fontWeight: 'bold', marginLeft: responsivePortion(8)},
              ]}>
              {item.enrolled}
            </Text>
          </View>
        )}
        <ImageView
          source={item.img}
          imageStyle={[
            styles.itemImage,
            {
              height: purchased ? responsivePortion(74) : responsivePortion(72),
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
              height: purchased
                ? item.completion
                  ? responsivePortion(182)
                  : responsivePortion(160)
                : responsivePortion(208),
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
            {purchased && (
              <View
                style={[styles.rowView, {marginTop: responsivePortion(12)}]}>
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
                  {item.addedWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
                </Text>
              </View>
            )}
            {purchased && item.completion && (
              <View style={styles.progressView}>
                <View
                  style={[
                    styles.rowView,
                    {
                      justifyContent: 'space-between',
                      marginTop: responsivePortion(10),
                    },
                  ]}>
                  <Text
                    style={[
                      styles.smallText,
                      {
                        letterSpacing: responsivePortion(1.2),
                        color: Colors.black,
                      },
                    ]}>
                    COMPLETION
                  </Text>
                  <Text
                    style={[
                      styles.smallText,
                      {
                        letterSpacing: responsivePortion(1.2),
                        color: Colors.black,
                      },
                    ]}>
                    {`${item.completion}%`}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: responsivePortion(8),
                    marginTop: responsivePortion(5),
                  }}>
                  <ProgressBar
                    progress={item.completion / 100}
                    width={null}
                    height={responsiveVerticalPortion(8)}
                    color={Colors.green}
                    unfilledColor={Colors.disabled}
                    borderWidth={0}
                  />
                </View>
                <View
                  style={{
                    paddingHorizontal: responsivePortion(8),
                    marginTop: responsivePortion(10),
                  }}>
                  <TouchableOpacity
                    style={{flexDirection: 'row', alignItems: 'center'}}
                    onPress={onPress}>
                    <Image
                      source={ICONS.PLAY}
                      resizeMode="contain"
                      style={[styles.icon, {tintColor: Colors.blue}]}
                    />
                    <Text
                      style={[
                        styles.normalText,
                        {color: Colors.blue, marginLeft: responsivePortion(9)},
                      ]}>
                      Continue Course
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            {!purchased && (
              <View
                style={[
                  styles.rowView,
                  {
                    justifyContent: 'space-between',
                    marginTop: responsivePortion(10),
                  },
                ]}>
                <Text
                  style={[
                    styles.smallText,
                    {
                      fontSize: responsivePortion(20),
                      fontWeight: 'bold',
                      color: Colors.black,
                      letterSpacing: responsivePortion(0.15),
                    },
                  ]}>
                  {`£ 147.00`}
                </Text>
                <Image
                  source={ICONS.LOVE}
                  resizeMode="contain"
                  style={[
                    styles.icon,
                    {
                      tintColor: Colors.red,
                      marginRight: responsivePortion(4),
                    },
                  ]}
                />
              </View>
            )}
            {!purchased && (
              <View
                style={[
                  styles.rowView,
                  {
                    marginTop: responsivePortion(4),
                  },
                ]}>
                <Text
                  style={[
                    styles.normalText,
                    {
                      fontSize: responsivePortion(12),
                      fontWeight: 'bold',
                      color: '#000000',
                      textDecorationLine: 'line-through',
                    },
                  ]}>
                  {`£ 421`}
                </Text>
                <View style={styles.tagView}>
                  <Text
                    style={[
                      styles.normalText,
                      {
                        fontWeight: 'bold',
                        color: Colors.green,
                      },
                    ]}>
                    {`SAVE £ 171`}
                  </Text>
                </View>
              </View>
            )}
            {!purchased && (
              <View
                style={[
                  styles.rowView,
                  {
                    marginTop: responsivePortion(5),
                  },
                ]}>
                <Image
                  source={ICONS.FINANCECOE}
                  resizeMode="contain"
                  style={styles.financeText}
                />
                <Image
                  source={ICONS.AVAILABLE}
                  resizeMode="contain"
                  style={[styles.financeText, {marginTop: -3}]}
                />
              </View>
            )}
            {purchased && !item.completion && (
              <View style={styles.progressView}>
                <TouchableHighlight
                  style={[styles.button, {top: responsivePortion(8)}]}
                  underlayColor={Colors.background}
                  onPress={() => onPress(item)}>
                  <Text style={styles.normalText}>{'Start Course'}</Text>
                </TouchableHighlight>
              </View>
            )}
            {!purchased && (
              <TouchableHighlight
                style={styles.button}
                underlayColor={Colors.background}
                onPress={() => onPress(item)}>
                <Text style={styles.normalText}>{'View Course'}</Text>
              </TouchableHighlight>
            )}
          </View>
        </View>
      </View>
    </View>
  </CardView>
);

const styles = StyleSheet.create({
  categoryItem: {
    height: responsivePortion(304),
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
