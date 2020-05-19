import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {BaseView} from '@components/Base';
import HeaderView from '@components/HeaderView';
import ImageView from '@components/ImageView';
import StarView from '@components/Star';
import {CourseItem} from '@components/CourseItem';
import {FullCourse} from '@components/FullCourse';
import {FullAudio} from '@components/FullAudio';
import {SearchBar} from '@components/SearchBar';
import CustomTabView from '@components/TabView';
import PickerField from '@components/PickerField';
import {ContentTabBar} from './ContentTabBar';
import {styles} from './styles';
import {
  DEVICE_SIZE,
  responsivePortion,
  responsiveVerticalPortion,
} from '@config/constants';
import Colors from '@config/colors';
import ICONS from '@config/icons';

const dummyImg = require('@assets/images/dummy1.png');
const courseCard = require('@assets/images/course-card.png');

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

const sortTypes = [
  {
    label: 'Sort by',
    value: 0,
  },
  {
    label: 'Date',
    value: 1,
  },
  {
    label: 'Price',
    value: 2,
  },
];

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: '',
      routeIndex: 0,
      selectedSortType: 0,
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

  onChangeSearch = (search) => {
    this.setState({
      searchCriteria: search,
    });
  };

  changeRouteIndex = (index) => {
    this.setState({routeIndex: index});
  };

  onPressCourse = (item) => {
    const {navigation} = this.props;
    navigation.navigate('CourseDetails', {course: item});
  };

  onPressAudio = (item) => {
    const {navigation} = this.props;
    navigation.navigate('AudioDetails', {course: item});
  };

  renderImageView = () => {
    return (
      <View style={styles.courseImageView}>
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
          imageStyle={[
            styles.subjectImage,
            {
              paddingHorizontal: DEVICE_SIZE.CONTENT_PADDING,
              alignItems: 'center',
            },
          ]}
          activityIndicatorProps={{size: 'small'}}
          source={dummyImg}>
          <View style={styles.courseMark}>
            <Text
              style={[
                styles.smallText,
                {letterSpacing: responsivePortion(1.2)},
              ]}>
              COURSES
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              paddingBottom: responsiveVerticalPortion(16),
            }}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.slantedText}>Aromatherapy</Text>
              <Text
                style={[
                  styles.largeText,
                  {
                    fontSize: responsivePortion(20),
                    marginTop: responsiveVerticalPortion(-10),
                  },
                ]}>
                Courses
              </Text>
            </View>
            <View style={[styles.rowView, {justifyContent: 'center'}]}>
              <StarView rating={4} users="15,712 ratings" />
            </View>
            <View
              style={[
                styles.rowView,
                {
                  justifyContent: 'space-between',
                  width: DEVICE_SIZE.CONTENT_WIDTH,
                },
              ]}>
              <View style={styles.rowView}>
                <Image
                  source={ICONS.CERTIFIED}
                  resizeMode="contain"
                  style={styles.certifiedIcon}
                />
                <Text
                  style={[
                    styles.normalText,
                    {marginLeft: responsivePortion(10)},
                  ]}>
                  Certified Course
                </Text>
              </View>
              <View style={styles.rowView}>
                <Image
                  source={ICONS.ACCREDITED}
                  resizeMode="contain"
                  style={styles.certifiedIcon}
                />
                <Text
                  style={[
                    styles.normalText,
                    {marginLeft: responsivePortion(10)},
                  ]}>
                  Accredited Course
                </Text>
              </View>
            </View>
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
      <View
        style={[
          styles.carouselView,
          {marginTop: responsiveVerticalPortion(20)},
        ]}>
        <View
          style={[styles.rowView, {paddingLeft: DEVICE_SIZE.CONTENT_PADDING}]}>
          <Text style={styles.category}>Best Sellers</Text>
          <Image
            source={ICONS.NEXT}
            resizeMode="contain"
            style={[styles.icon, {marginLeft: responsivePortion(5)}]}
          />
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

  courseRoute = () => {
    return (
      <View>
        {categoryData.map((item, index) => (
          <View
            key={index}
            style={{
              marginTop: responsivePortion(24),
              marginBottom:
                categoryData.length === index + 1 ? responsivePortion(24) : 0,
            }}>
            <FullCourse
              item={item}
              index={index}
              onPress={this.onPressCourse}
            />
          </View>
        ))}
      </View>
    );
  };

  audioBooksRoute = () => {
    return (
      <View>
        {categoryData.map((item, index) => (
          <View
            key={index}
            style={{
              marginTop: responsivePortion(24),
              marginBottom:
                categoryData.length === index + 1 ? responsivePortion(24) : 0,
            }}>
            <FullAudio item={item} index={index} onPress={this.onPressAudio} />
          </View>
        ))}
      </View>
    );
  };

  renderTabBar = () => {
    const {routeIndex, selectedSortType} = this.state;
    return (
      <>
        <ContentTabBar
          labels={['Courses', 'Audio Books']}
          index={routeIndex}
          hasIcon
          onPress={this.changeRouteIndex}
        />
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
      </>
    );
  };

  render() {
    const {searchCriteria, routeIndex} = this.state;
    return (
      <BaseView>
        <View style={styles.container}>
          <HeaderView onPressMenu={this.onPressMenu} />
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            {this.renderImageView()}
            <View style={styles.searchView}>
              <SearchBar
                search={searchCriteria}
                placeholder="Search Aromatherapy Courses"
                onChange={this.onChangeSearch}
              />
            </View>
            <View
              style={[
                styles.searchView,
                {marginTop: responsiveVerticalPortion(23)},
              ]}>
              <Text style={[styles.normalText, {color: Colors.black}]}>
                Aromatherapy, often also described as Essential Oil therapy,
                refers to the art and science of using naturally extracted
                aromatic essences from plants to harmonize, balance, and promote
                the health of body, mind and spirit.
              </Text>
            </View>
            {this.renderCarousel()}
            <View
              style={[
                styles.searchView,
                {marginTop: responsiveVerticalPortion(9)},
              ]}>
              <Text
                style={[
                  styles.largeText,
                  {fontSize: responsivePortion(24), color: Colors.black},
                ]}>
                All Courses
              </Text>
              <Text style={[styles.normalText, {color: Colors.black}]}>
                50 courses found
              </Text>
            </View>
            <View style={[styles.rowView, styles.searchView]}>
              <CustomTabView
                index={routeIndex}
                routes={[
                  {key: 'course', title: 'Courses'},
                  {key: 'audiobooks', title: 'Audio Books'},
                ]}
                renderScene={{
                  course: this.courseRoute,
                  audiobooks: this.audioBooksRoute,
                }}
                setIndex={this.changeRouteIndex}
                tabBarComponent={this.renderTabBar}
              />
            </View>
          </ScrollView>
        </View>
      </BaseView>
    );
  }
}

export default Course;
