import React from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview';
import {BaseView} from '@components/Base';
import HeaderView from '@components/HeaderView';
import ImageView from '@components/ImageView';
import ICONS from '@config/icons';
import {styles} from './styles';
import {responsivePortion} from '@config/constants';
import Colors from '@config/colors';

const dummyImg = require('@assets/images/dummy1.png');
const financeText = require('@assets/images/finance.png');

class CourseDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSticky: false,
    };
  }

  onPressMenu = () => {
    const {navigation} = this.props;
    navigation.toggleDrawer();
  };

  onPressBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  onScrollEvent = (event) => {};

  renderImageView = () => {
    return (
      <View style={styles.imageView}>
        <TouchableOpacity
          style={styles.backIconView}
          onPress={this.onPressBack}>
          <Image
            source={ICONS.BACK}
            resizeMode="contain"
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <ImageView
          imageStyle={styles.subjectImage}
          activityIndicatorProps={{size: 'small'}}
          source={dummyImg}
        />
      </View>
    );
  };

  renderCourse = () => {
    return (
      <View>
        <Text
          style={[
            styles.largeText,
            {
              fontSize: responsivePortion(24),
              color: Colors.black,
              letterSpacing: responsivePortion(1.33),
              marginTop: responsivePortion(16),
            },
          ]}
          numberOfLines={3}>
          Advanced Reflexology Diploma Course
        </Text>

        <Text
          style={[
            styles.courseNormalText,
            {
              marginTop: responsivePortion(11),
            },
          ]}>
          Progress your reflexology skills and develop your practice, with the
          Advanced Reflexology Diploma Course.
        </Text>
        <View style={[styles.rowView, {marginTop: responsivePortion(20)}]}>
          <View>
            <View style={styles.rowView}>
              <Text
                style={[
                  styles.courseNormalText,
                  {color: '#000000', fontWeight: 'bold'},
                ]}>
                Was £421
              </Text>
              <View style={styles.tagView}>
                <Text
                  style={[
                    styles.courseNormalText,
                    {
                      fontWeight: 'bold',
                      color: Colors.green,
                    },
                  ]}>
                  {`50% OFF`}
                </Text>
              </View>
            </View>
            <Text
              style={[
                styles.largeText,
                {fontSize: responsivePortion(34), color: Colors.black},
              ]}>
              £147.00
            </Text>
          </View>
          <View style={styles.timerView}>
            <Image
              source={ICONS.TIMER}
              resizeMode="contain"
              style={styles.timerIcon}
            />
            <View>
              <Text
                style={[
                  styles.courseNormalText,
                  {color: Colors.orange, fontWeight: 'bold'},
                ]}>
                12 HRS
              </Text>
              <Text style={[styles.courseNormalText, {color: Colors.orange}]}>
                left at this price
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.rowView, {marginTop: responsivePortion(32)}]}>
          <TouchableOpacity style={styles.courseBuyButton}>
            <Text
              style={[styles.normalText, {fontSize: responsivePortion(12)}]}>
              Buy this course
            </Text>
          </TouchableOpacity>
          <View style={{marginHorizontal: responsivePortion(16)}}>
            <Image
              source={financeText}
              resizeMode="contain"
              style={styles.financeText}
            />
            <Text
              style={[
                styles.normalText,
                {
                  fontSize: responsivePortion(8.8),
                  fontWeight: '600',
                  letterSpacing: responsivePortion(0.29),
                  color: '#0B59A4',
                },
              ]}>
              AVAILABLE
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.rowView,
            {marginTop: responsivePortion(16), justifyContent: 'space-between'},
          ]}>
          <TouchableOpacity
            style={[
              styles.giftButton,
              {width: '55%', marginRight: responsivePortion(8)},
            ]}>
            <Image
              source={ICONS.GIFT}
              resizeMode="contain"
              style={styles.icon16}
            />
            <Text
              style={[
                styles.courseNormalText,
                {
                  color: Colors.black,
                  marginLeft: responsivePortion(14),
                },
              ]}>
              Gift this course
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.giftButton,
              {flex: 1, marginLeft: responsivePortion(8)},
            ]}>
            <Image
              source={ICONS.SHARE}
              resizeMode="contain"
              style={styles.icon16}
            />
            <Text
              style={[
                styles.courseNormalText,
                {
                  color: Colors.black,
                  marginLeft: responsivePortion(14),
                },
              ]}>
              Share
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.rowView,
            {justifyContent: 'space-between', marginTop: responsivePortion(12)},
          ]}>
          <Text
            style={[
              styles.courseNormalText,
              {
                color: Colors.black,
              },
            ]}>
            Have a coupon?
          </Text>
          <TouchableOpacity
            style={[styles.rowView, {justifyContent: 'space-between'}]}>
            <Text
              style={[
                styles.courseNormalText,
                {
                  color: Colors.black,
                  marginRight: responsivePortion(8),
                },
              ]}>
              Add to wishlist
            </Text>
            <Image
              source={ICONS.LOVE}
              resizeMode="contain"
              style={[styles.icon16, {tintColor: Colors.red}]}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderStickyView = () => {
    return (
      <CardView
        cardElevation={10}
        cardMaxElevation={10}
        cornerRadius={0}
        style={styles.stickyHeader}>
        <Text>Sticky Header</Text>
      </CardView>
    );
  };

  render() {
    return (
      <BaseView>
        <View style={[styles.container, {backgroundColor: Colors.white}]}>
          <HeaderView onPressMenu={this.onPressMenu} />
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            onScroll={this.onScrollEvent}>
            {this.renderImageView()}
            <View style={styles.courseContentView}>
              <View style={styles.rowView}>
                <View style={styles.courseType}>
                  <Text
                    style={[
                      styles.smallText,
                      {
                        fontWeight: 'bold',
                        letterSpacing: responsivePortion(1.2),
                      },
                    ]}>
                    REFLEXOLOGY
                  </Text>
                </View>
              </View>
              {this.renderCourse()}
            </View>
          </ScrollView>
          {this.renderStickyView()}
        </View>
      </BaseView>
    );
  }
}

export default CourseDetails;
