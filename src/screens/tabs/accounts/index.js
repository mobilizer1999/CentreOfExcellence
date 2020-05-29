import React from 'react';
import {View, ScrollView, Image, TouchableOpacity, Text} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import {BaseView} from '@components/Base';
import HeaderView from '@components/HeaderView';
import ImageView from '@components/ImageView';
import {CourseItem} from '@components/CourseItem';
import PickerField from '@components/PickerField';
import {styles} from './styles';
import {
  DEVICE_SIZE,
  responsivePortion,
  responsiveVerticalPortion,
} from '@config/constants';
import Colors from '@config/colors';
import ICONS from '@config/icons';
import {registerToken} from '@store/actions/auth';

const courseImg = require('@assets/images/mycourse.png');
const courseCard = require('@assets/images/course-card.png');

const sortTypes = [
  {
    label: 'Sort by',
    value: 0,
  },
  {
    label: 'Dashboard',
    value: 1,
  },
  {
    label: 'Price',
    value: 2,
  },
];

const categoryData = [
  {
    enrolled: '1K USERS ENROLLED',
    img: courseCard,
    type: 'ENERGY HEALING',
    title: 'Advanced Reflexology Diploma Course',
    modules: 10,
    videos: 2,
    financable: 'FINANCE AVAILABLE',
  },
  {
    enrolled: '1K USERS ENROLLED',
    img: courseCard,
    type: 'ENERGY HEALING',
    title: 'Advanced Reflexology Diploma Course',
    modules: 10,
    videos: 2,
    financable: 'FINANCE AVAILABLE',
  },
  {
    enrolled: '1K USERS ENROLLED',
    img: courseCard,
    type: 'ENERGY HEALING',
    title: 'Advanced Reflexology Diploma Course',
    modules: 10,
    videos: 2,
    financable: 'FINANCE AVAILABLE',
  },
  {
    enrolled: '1K USERS ENROLLED',
    img: courseCard,
    type: 'ENERGY HEALING',
    title: 'Advanced Reflexology Diploma Course',
    modules: 10,
    videos: 2,
    financable: 'FINANCE AVAILABLE',
  },
];

class Accounts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSortType: 1,
    };
  }

  onPressMenu = () => {
    const {navigation} = this.props;
    navigation.toggleDrawer();
  };

  onPressCourse = (item) => {
    const {navigation} = this.props;
    navigation.navigate('Course', {course: item});
  };

  onPressSignOut = () => {
    const {navigation, registerToken} = this.props;
    registerToken(null);
    const routeName = 'Login';
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName})],
    });
    navigation.dispatch(resetAction);
  };

  renderImageView = () => {
    return (
      <View style={styles.courseImageView}>
        <TouchableOpacity
          style={styles.gearIconView}
          onPress={this.onPressGear}>
          <Image
            source={ICONS.GEAR}
            resizeMode="contain"
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <ImageView
          imageStyle={[
            styles.subjectImage,
            {
              paddingHorizontal: DEVICE_SIZE.CONTENT_PADDING,
              alignItems: 'center',
              zIndex: 5,
            },
          ]}
          activityIndicatorProps={{size: 'small'}}
          source={courseImg}>
          <View style={styles.courseMark}>
            <Text
              style={[
                styles.smallText,
                {letterSpacing: responsivePortion(1.2)},
              ]}>
              ACCOUNT
            </Text>
          </View>
          <View style={styles.rowView}>
            <Text
              style={[
                styles.largeText,
                {
                  fontSize: responsivePortion(20),
                  marginRight: 5,
                },
              ]}>
              Good morning,
            </Text>
            <Text style={styles.slantedText}>James</Text>
          </View>
          <View style={[styles.rowView, {zIndex: 10}]}>
            <Text
              style={[
                styles.normalText,
                {
                  fontSize: responsivePortion(12),
                  marginRight: 5,
                },
              ]}>
              Not James?
            </Text>
            <TouchableOpacity onPress={this.onPressSignOut}>
              <Text style={styles.signout}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </ImageView>
      </View>
    );
  };

  _renderItem = ({item, index}) => {
    return (
      <CourseItem item={item} index={index} onPress={this.onPressCourse} />
    );
  };

  renderCarousel = () => {
    return (
      <View style={styles.carouselView}>
        <View
          style={[styles.rowView, {paddingLeft: DEVICE_SIZE.CONTENT_PADDING}]}>
          <Text
            style={[
              styles.largeText,
              {fontSize: responsivePortion(24), color: Colors.black},
            ]}>
            You might also like
          </Text>
        </View>
        <Carousel
          data={categoryData}
          renderItem={this._renderItem}
          sliderWidth={DEVICE_SIZE.WIDTH}
          useNativeOnScroll
          removeClippedSubviews
          inactiveSlideScale={1.0}
          inactiveSlideOpacity={0.7}
          activeSlideAlignment="start"
          itemWidth={responsivePortion(216)}
          horizontal
          useScrollView
          loopClonesPerSide={categoryData.length}
        />
      </View>
    );
  };

  render() {
    const {selectedSortType} = this.state;
    return (
      <BaseView>
        <View style={styles.container}>
          <HeaderView onPressMenu={this.onPressMenu} />
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            {this.renderImageView()}
            <View
              style={{
                alignItems: 'center',
                marginTop: responsiveVerticalPortion(17),
              }}>
              <TouchableOpacity style={styles.fullButton}>
                <Text
                  style={[
                    styles.normalText,
                    {fontSize: responsivePortion(12)},
                  ]}>
                  Go to learning centre
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginTop: responsiveVerticalPortion(15),
              }}>
              <PickerField
                style={styles.sortDropDown}
                width={DEVICE_SIZE.CONTENT_WIDTH}
                data={sortTypes}
                iconpos={responsivePortion(16)}
                value={selectedSortType}
                color={Colors.black}
                onValueChange={(value) => {
                  if (value !== 0) {
                    this.setState({selectedSortType: value});
                  }
                }}
              />
            </View>
            {this.renderCarousel()}
          </ScrollView>
        </View>
      </BaseView>
    );
  }
}

Accounts.propTypes = {
  auth: PropTypes.instanceOf(Object).isRequired,
  registerToken: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {registerToken})(Accounts);
