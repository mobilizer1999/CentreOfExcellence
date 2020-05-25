import React from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  ActivityIndicator,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {BaseView} from '@components/Base';
import HeaderView from '@components/HeaderView';
import ImageView from '@components/ImageView';
import {WishlistItem} from '@components/WishlistItem';
import CustomTabView from '@components/TabView';
import {styles} from './styles';
import {
  DEVICE_SIZE,
  responsivePortion,
  responsiveVerticalPortion,
} from '@config/constants';
import Colors from '@config/colors';
import ICONS from '@config/icons';

const courseImg = require('@assets/images/mycourse.png');
const courseCard = require('@assets/images/course-card.png');

const startingData = [
  {
    img: courseCard,
    type: 'ENERGY HEALING',
    title: 'Advanced Reflexology Diploma Course',
    modules: 10,
    videos: 2,
    addedWishlist: true,
  },
  {
    img: courseCard,
    type: 'ENERGY HEALING',
    title: 'Advanced Reflexology Diploma Course',
    modules: 10,
    videos: 2,
    addedWishlist: true,
  },
  {
    img: courseCard,
    type: 'ENERGY HEALING',
    title: 'Advanced Reflexology Diploma Course',
    modules: 10,
    videos: 2,
    addedWishlist: true,
  },
  {
    img: courseCard,
    type: 'ENERGY HEALING',
    title: 'Advanced Reflexology Diploma Course',
    modules: 10,
    videos: 2,
    addedWishlist: true,
  },
];

class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routeIndex: 2,
    };
  }

  onPressMenu = () => {
    const {navigation} = this.props;
    navigation.toggleDrawer();
  };

  onPressCourse = (item) => {
    const {navigation} = this.props;
    navigation.navigate('CourseDetails', {course: item});
  };

  changeRouteIndex = (index) => {
    this.setState({routeIndex: index});
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
              WISHLIST
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
        </ImageView>
      </View>
    );
  };

  renderTabBar = () => {
    const {routeIndex} = this.state;
    return (
      <View style={{backgroundColor: Colors.white}}>
        <View style={styles.tabBarView}>
          <View
            style={[
              styles.tabBarOuter,
              {
                borderColor: routeIndex === 0 ? Colors.blue : Colors.white,
              },
            ]}>
            <TouchableHighlight
              underlayColor={Colors.mainbackground}
              style={styles.tabBarItem}
              onPress={() => this.changeRouteIndex(0)}>
              <Text
                style={[
                  styles.font12Normal,
                  {
                    color: '#444444',
                    fontWeight: routeIndex === 0 ? 'bold' : 'normal',
                    textAlign: 'center',
                  },
                ]}>
                Module Overview
              </Text>
            </TouchableHighlight>
          </View>
          <View
            style={[
              styles.tabBarOuter,
              {
                borderColor: routeIndex === 1 ? Colors.blue : Colors.white,
              },
            ]}>
            <TouchableHighlight
              underlayColor={Colors.mainbackground}
              style={styles.tabBarItem}
              onPress={() => this.changeRouteIndex(1)}>
              <Text
                style={[
                  styles.font12Normal,
                  {
                    color: '#444444',
                    fontWeight: routeIndex === 1 ? 'bold' : 'normal',
                    textAlign: 'center',
                  },
                ]}>
                My Audiobook
              </Text>
            </TouchableHighlight>
          </View>
          <View
            style={[
              styles.tabBarOuter,
              {
                borderColor: routeIndex === 2 ? Colors.blue : Colors.white,
              },
            ]}>
            <TouchableHighlight
              underlayColor={Colors.mainbackground}
              style={styles.tabBarItem}
              onPress={() => this.changeRouteIndex(2)}>
              <Text
                style={[
                  styles.font12Normal,
                  {
                    color: '#444444',
                    fontWeight: routeIndex === 2 ? 'bold' : 'normal',
                    textAlign: 'center',
                  },
                ]}>
                My Wishlist
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  };

  _renderStaringItem = ({item, index}) => {
    return (
      <WishlistItem
        item={item}
        purchased
        index={index}
        onPress={() => this.onPressCourse(item)}
      />
    );
  };

  overviewRoute = () => {
    const {routeIndex} = this.state;
    if (routeIndex !== 0) {
      return (
        <View
          style={{
            minHeight: DEVICE_SIZE.HEIGHT / 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return <></>;
  };

  audiobookRoute = () => {
    const {routeIndex} = this.state;
    if (routeIndex !== 1) {
      return (
        <View
          style={{
            minHeight: DEVICE_SIZE.HEIGHT / 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return <></>;
  };

  wishlistRoute = () => {
    const {routeIndex} = this.state;
    if (routeIndex !== 2) {
      return (
        <View
          style={{
            minHeight: DEVICE_SIZE.HEIGHT / 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <>
        <View
          style={{
            alignItems: 'center',
            marginTop: responsiveVerticalPortion(17),
          }}>
          <TouchableOpacity style={styles.fullButton}>
            <Text
              style={[styles.normalText, {fontSize: responsivePortion(12)}]}>
              Course Stats
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.carouselView,
            {marginTop: responsiveVerticalPortion(16)},
          ]}>
          <View
            style={[
              styles.rowView,
              {paddingLeft: DEVICE_SIZE.CONTENT_PADDING},
            ]}>
            <Text
              style={[
                styles.largeText,
                {fontSize: responsivePortion(24), color: Colors.black},
              ]}>
              James's Wishlist
            </Text>
          </View>
          <Carousel
            data={startingData}
            renderItem={this._renderStaringItem}
            sliderWidth={DEVICE_SIZE.WIDTH}
            useNativeOnScroll
            removeClippedSubviews
            inactiveSlideScale={1.0}
            inactiveSlideOpacity={0.7}
            activeSlideAlignment="start"
            itemWidth={responsivePortion(216)}
            horizontal
            useScrollView
            loopClonesPerSide={startingData.length}
          />
        </View>
      </>
    );
  };

  render() {
    const {routeIndex} = this.state;
    return (
      <BaseView>
        <View style={styles.container}>
          <HeaderView onPressMenu={this.onPressMenu} />
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            {this.renderImageView()}
            <CustomTabView
              index={routeIndex}
              routes={[
                {key: 'overview', title: 'Module Overview'},
                {key: 'audiobook', title: 'My Audiobook'},
                {key: 'wishlist', title: 'My Wishlist'},
              ]}
              renderScene={{
                overview: this.overviewRoute,
                audiobook: this.audiobookRoute,
                wishlist: this.wishlistRoute,
              }}
              setIndex={this.changeRouteIndex}
              tabBarComponent={this.renderTabBar}
            />
          </ScrollView>
        </View>
      </BaseView>
    );
  }
}

export default Wishlist;
