import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import CardView from 'react-native-cardview';
import ImageView from '@components/ImageView';
import {responsivePortion, FONTS} from '@config/constants';
import ICONS from '@config/icons';
import Colors from '@config/colors';

export const FullAudio = ({item, index, onPress}) => (
  <CardView
    cardElevation={4}
    cardMaxElevation={4}
    cornerRadius={responsivePortion(2)}
    style={styles.categoryItem}>
    <View style={styles.touchableItem} underlayColor={Colors.mainbackground}>
      <View style={styles.touchableItem}>
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
        <ImageView
          source={item.img}
          imageStyle={styles.itemImage}
          activityIndicatorProps={{size: 'small'}}
        />
        <View style={styles.itemTextView}>
          <View style={styles.itemType}>
            <Text style={[styles.smallText, {fontWeight: 'bold'}]}>
              {item.type}
            </Text>
          </View>
          <Text
            style={[
              styles.mediumText,
              {
                marginTop: responsivePortion(20),
                marginRight: responsivePortion(30),
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
                ]}>{`${item.videos} mins`}</Text>
            </View>
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
              <Text
                style={[
                  styles.smallText,
                  {
                    fontSize: responsivePortion(10.3),
                    fontWeight: '600',
                    color: Colors.blue,
                  },
                ]}>
                FINANCE AVAILABLE
              </Text>
            </View>
            <View
              style={[
                styles.rowView,
                {
                  marginTop: responsivePortion(11),
                  justifyContent: 'space-between',
                },
              ]}>
              <View style={styles.rowView}>
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
              <TouchableOpacity style={styles.rowView}>
                <Text
                  style={[
                    styles.normalText,
                    {
                      fontSize: responsivePortion(10),
                      color: Colors.black,
                    },
                  ]}>
                  Add to wishlist
                </Text>
                <Image
                  source={ICONS.LOVE}
                  resizeMode="contain"
                  style={[
                    styles.icon,
                    {tintColor: Colors.red, marginLeft: responsivePortion(8)},
                  ]}
                />
              </TouchableOpacity>
            </View>
            <TouchableHighlight
              style={styles.button}
              underlayColor={Colors.background}
              onPress={() => onPress(item)}>
              <Text style={styles.normalText}>View Course</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  </CardView>
);

const styles = StyleSheet.create({
  categoryItem: {
    height: responsivePortion(320),
    borderRadius: responsivePortion(2),
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
    height: responsivePortion(92),
  },
  itemTextView: {
    height: responsivePortion(208),
    paddingHorizontal: responsivePortion(8),
    marginTop: responsivePortion(-40),
    paddingBottom: responsivePortion(11),
  },
  itemType: {
    position: 'absolute',
    paddingHorizontal: responsivePortion(30),
    height: responsivePortion(24),
    backgroundColor: Colors.blue,
    left: responsivePortion(8),
    top: responsivePortion(-9),
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
  },
  icon: {
    width: responsivePortion(13),
    height: responsivePortion(12),
    tintColor: Colors.black,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: responsivePortion(32),
    backgroundColor: Colors.blue,
    borderRadius: responsivePortion(3),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsivePortion(16),
  },
});
