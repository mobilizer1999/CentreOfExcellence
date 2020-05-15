import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
  TouchableHighlight,
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

export const AudioItem = ({item, index, purchased, onPress}) => (
  <CardView
    cardElevation={4}
    cardMaxElevation={4}
    cornerRadius={responsivePortion(2)}
    style={[
      styles.categoryItem,
      {
        height: purchased
          ? item.progress
            ? responsivePortion(296)
            : responsivePortion(274)
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
                ? item.progress
                  ? responsivePortion(222)
                  : responsivePortion(200)
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
          {purchased && item.isNew && (
            <View style={styles.newItem}>
              <Text
                style={[
                  styles.smallText,
                  {fontWeight: 'bold', letterSpacing: responsivePortion(1.2)},
                ]}>
                NEW
              </Text>
            </View>
          )}
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
                source={ICONS.TIMER}
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
                ]}>{`${item.duration} mins`}</Text>
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
            {purchased && item.progress && item.courseFailed && (
              <View style={styles.progressView}>
                <View
                  style={[
                    styles.rowView,
                    {
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
                    COURSE RESULT:
                  </Text>
                  <Text
                    style={[
                      styles.smallText,
                      {
                        letterSpacing: responsivePortion(1.2),
                        color: Colors.black,
                        fontWeight: 'bold',
                        marginLeft: responsivePortion(3),
                      },
                    ]}>
                    {'FAILED'}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: responsivePortion(8),
                    marginTop: responsivePortion(5),
                  }}>
                  <ProgressBar
                    progress={1}
                    width={null}
                    height={responsiveVerticalPortion(8)}
                    color={Colors.red}
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
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      source={ICONS.NOTIMSG}
                      resizeMode="contain"
                      style={[styles.icon, {tintColor: Colors.blue}]}
                    />
                    <Text
                      style={[
                        styles.normalText,
                        {color: Colors.blue, marginLeft: responsivePortion(9)},
                      ]}>
                      Review My Answers
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            {purchased && item.progress && !item.courseFailed && (
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
                    DURATION
                  </Text>
                  <Text
                    style={[
                      styles.smallText,
                      {
                        letterSpacing: responsivePortion(1.2),
                        color: Colors.black,
                      },
                    ]}>
                    {`${item.duration - item.progress} MINUTES LEFT`}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: responsivePortion(8),
                    marginTop: responsivePortion(5),
                  }}>
                  <ProgressBar
                    progress={item.progress / item.duration}
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
                    style={{flexDirection: 'row', alignItems: 'center'}}>
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
                      Continue Listening
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
                  {`£ 15.00`}
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
                  {`£ 10`}
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
                    {`SAVE £ 10`}
                  </Text>
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
                      fontSize: responsivePortion(8.6),
                      fontWeight: '600',
                      color: Colors.blue,
                    },
                  ]}>
                  FINANCE AVAILABLE
                </Text>
              </View>
            )}
            {purchased && !item.progress && (
              <View
                style={[
                  styles.progressView,
                  {
                    paddingHorizontal: responsivePortion(8),
                    justifyContent: 'center',
                  },
                ]}>
                <TouchableHighlight
                  style={styles.startButton}
                  underlayColor={Colors.background}
                  onPress={() => onPress(item)}>
                  <Text style={styles.normalText}>Start Listening</Text>
                </TouchableHighlight>
              </View>
            )}
            {purchased ? (
              <View style={styles.switchView}>
                <Switch
                  value={item.downloaded}
                  disabled
                  ios_backgroundColor={
                    item.downloaded ? Colors.blue : Colors.disabled
                  }
                  trackColor={{true: Colors.blue, false: Colors.disabled}}
                  thumbColor={Colors.white}
                />
                <TouchableHighlight style={{marginLeft: responsivePortion(8)}}>
                  <Text
                    style={[
                      styles.normalText,
                      {
                        fontWeight: 'bold',
                        color: Colors.blue,
                        letterSpacing: responsivePortion(0.33),
                      },
                    ]}>
                    {item.downloaded
                      ? 'Downloaded'
                      : `Download (${item.memory}mb)`}
                  </Text>
                </TouchableHighlight>
              </View>
            ) : (
              <TouchableHighlight
                style={styles.button}
                underlayColor={Colors.background}
                onPress={() => onPress(item)}>
                <Text style={styles.normalText}>View Course</Text>
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
  newItem: {
    position: 'absolute',
    paddingHorizontal: responsivePortion(10),
    height: responsivePortion(24),
    backgroundColor: Colors.green,
    right: responsivePortion(8),
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
  switchView: {
    height: responsivePortion(39),
    paddingHorizontal: responsivePortion(8),
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: Colors.disabled,
  },
  startButton: {
    width: '100%',
    height: responsivePortion(32),
    backgroundColor: Colors.blue,
    borderRadius: responsivePortion(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
