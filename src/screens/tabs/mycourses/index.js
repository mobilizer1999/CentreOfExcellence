import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Text,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {BaseView} from '@components/Base';
import HeaderView from '@components/HeaderView';
import ImageView from '@components/ImageView';
import {CourseItem} from '@components/CourseItem';
import {AudioItem} from '@components/AudioItem';
import CustomTabView from '@components/TabView';
import {ModalView} from '@components/Modal';
import {ContentTabBar} from '../home/ContentTabBar';
import PickerField from '@components/PickerField';
import {SearchBar} from '@components/SearchBar';
import {styles} from './styles';
import ICONS from '@config/icons';
import {
  DEVICE_SIZE,
  responsivePortion,
  responsiveVerticalPortion,
} from '@config/constants';
import Colors from '@config/colors';

const courseImg = require('@assets/images/mycourse.png');
const courseCard = require('@assets/images/course-card.png');

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

const progressData = [
  {
    img: courseCard,
    type: 'ENERGY HEALING',
    title: 'Advanced Reflexology Diploma Course',
    modules: 10,
    videos: 2,
    addedWishlist: true,
    completion: 5,
  },
  {
    img: courseCard,
    type: 'ENERGY HEALING',
    title: 'Advanced Reflexology Diploma Course',
    modules: 10,
    videos: 2,
    addedWishlist: false,
    completion: 5,
  },
  {
    img: courseCard,
    type: 'ENERGY HEALING',
    title: 'Advanced Reflexology Diploma Course',
    modules: 10,
    videos: 2,
    addedWishlist: true,
    completion: 5,
  },
  {
    img: courseCard,
    type: 'ENERGY HEALING',
    title: 'Advanced Reflexology Diploma Course',
    modules: 10,
    videos: 2,
    addedWishlist: true,
    completion: 5,
  },
];

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

const audioProgressData = [
  {
    img: courseCard,
    type: 'AROMATHERAPY',
    title: 'Advanced Reflexology Audio Book',
    modules: 10,
    duration: 18,
    addedWishlist: true,
    progress: 9,
    downloaded: false,
    memory: 2,
  },
  {
    img: courseCard,
    type: 'AROMATHERAPY',
    title: 'Advanced Reflexology Audio Book',
    modules: 10,
    duration: 18,
    addedWishlist: true,
    progress: 9,
    downloaded: true,
    memory: 2,
  },
  {
    img: courseCard,
    type: 'AROMATHERAPY',
    title: 'Advanced Reflexology Audio Book',
    modules: 10,
    duration: 18,
    addedWishlist: true,
    progress: 9,
    downloaded: false,
    memory: 2,
  },
  {
    img: courseCard,
    type: 'AROMATHERAPY',
    title: 'Advanced Reflexology Audio Book',
    modules: 10,
    duration: 18,
    addedWishlist: true,
    progress: 9,
    downloaded: false,
    memory: 2,
  },
];

const audioRecentData = [
  {
    img: courseCard,
    type: 'AROMATHERAPY',
    title: 'Advanced Reflexology Audio Book',
    modules: 10,
    duration: 18,
    addedWishlist: true,
    progress: 9,
    downloaded: false,
    memory: 2,
    courseFailed: true,
  },
  {
    img: courseCard,
    type: 'AROMATHERAPY',
    title: 'Advanced Reflexology Audio Book',
    modules: 10,
    duration: 18,
    addedWishlist: true,
    progress: 9,
    downloaded: true,
    memory: 2,
    courseFailed: false,
  },
  {
    img: courseCard,
    type: 'AROMATHERAPY',
    title: 'Advanced Reflexology Audio Book',
    modules: 10,
    duration: 18,
    addedWishlist: true,
    progress: 9,
    downloaded: false,
    memory: 2,
    courseFailed: false,
  },
  {
    img: courseCard,
    type: 'AROMATHERAPY',
    title: 'Advanced Reflexology Audio Book',
    modules: 10,
    duration: 18,
    addedWishlist: true,
    progress: 9,
    downloaded: false,
    memory: 2,
    courseFailed: true,
  },
];

const audioStartingData = [
  {
    img: courseCard,
    type: 'AROMATHERAPY',
    title: 'Advanced Reflexology Audio Book',
    modules: 10,
    duration: 18,
    addedWishlist: true,
    downloaded: true,
    memory: 2,
    isNew: true,
  },
  {
    img: courseCard,
    type: 'AROMATHERAPY',
    title: 'Advanced Reflexology Audio Book',
    modules: 10,
    duration: 18,
    addedWishlist: true,
    downloaded: false,
    memory: 2,
    isNew: false,
  },
  {
    img: courseCard,
    type: 'AROMATHERAPY',
    title: 'Advanced Reflexology Audio Book',
    modules: 10,
    duration: 18,
    addedWishlist: true,
    downloaded: true,
    memory: 2,
    isNew: false,
  },
  {
    img: courseCard,
    type: 'AROMATHERAPY',
    title: 'Advanced Reflexology Audio Book',
    modules: 10,
    duration: 18,
    addedWishlist: true,
    downloaded: false,
    memory: 2,
    isNew: true,
  },
];

const completedCourses = [
  {
    title: 'Make-Up Artist Diploma Course',
    grade: 88,
    completedDate: '6/3/2018',
  },
  {
    title: 'Make-Up Artist Diploma Course',
    grade: 88,
    completedDate: '6/3/2018',
  },
  {
    title: 'Make-Up Artist Diploma Course',
    grade: 88,
    completedDate: '6/3/2018',
  },
  {
    title: 'Make-Up Artist Diploma Course',
    grade: 88,
    completedDate: '6/3/2018',
  },
];

class MyCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routeIndex: 0,
      searchCriteria: '',
      searchCompleted: '',
      selectedSortType: 0,
      modalVisible: false,
      loading: false,
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

  onChangeCompletedSearch = (search) => {
    this.setState({
      searchCompleted: search,
    });
  };

  changeRouteIndex = (index) => {
    this.setState({routeIndex: index});
  };

  onShowModal = (index) => {
    this.setState({
      modalVisible: true,
    });
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
              LEARNING CENTER
            </Text>
          </View>
          <Text
            style={[
              styles.largeText,
              {
                fontSize: responsivePortion(20),
                marginTop: responsiveVerticalPortion(15),
              },
            ]}>
            Good morning,
          </Text>
          <Text style={styles.slantedText}>James</Text>
        </ImageView>
      </View>
    );
  };

  onPressCourse = (item) => {
    const {navigation} = this.props;
    navigation.navigate('CourseOverview', {item});
  };

  _renderItem = ({item, index}) => {
    return (
      <CourseItem
        item={item}
        purchased
        index={index}
        onPress={() => this.onPressCourse(item)}
      />
    );
  };

  _renderStaringItem = ({item, index}) => {
    return (
      <CourseItem
        item={item}
        purchased
        index={index}
        onPress={() => this.onPressCourse(item)}
      />
    );
  };

  _renderAudioItem = ({item, index}) => {
    return (
      <AudioItem
        item={item}
        purchased
        index={index}
        onPress={() => this.onPressCourse(item)}
      />
    );
  };

  _renderRecentAudioItem = ({item, index}) => {
    return (
      <AudioItem
        item={item}
        purchased
        index={index}
        onPress={() => this.onPressCourse(item)}
      />
    );
  };

  _renderStaringAudioItem = ({item, index}) => {
    return (
      <AudioItem
        item={item}
        purchased
        index={index}
        onPress={() => this.onPressCourse(item)}
      />
    );
  };

  renderCarousel = () => {
    return (
      <>
        <View style={[styles.carouselView, {marginTop: responsivePortion(29)}]}>
          <View
            style={[
              styles.rowView,
              {paddingLeft: DEVICE_SIZE.CONTENT_PADDING},
            ]}>
            <Text style={styles.category}>Continue where you left off</Text>
          </View>
          <Carousel
            data={progressData}
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
            loopClonesPerSide={progressData.length}
          />
        </View>
        <View style={[styles.carouselView, {marginTop: responsivePortion(3)}]}>
          <View
            style={[
              styles.rowView,
              {paddingLeft: DEVICE_SIZE.CONTENT_PADDING},
            ]}>
            <Text style={styles.category}>Start a new course</Text>
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

  renderAudioBooksCarousel = () => {
    return (
      <>
        <View style={[styles.carouselView, {marginTop: responsivePortion(29)}]}>
          <View
            style={[
              styles.rowView,
              {paddingLeft: DEVICE_SIZE.CONTENT_PADDING},
            ]}>
            <Text style={styles.category}>Audio books in progress</Text>
          </View>
          <Carousel
            data={audioProgressData}
            renderItem={this._renderAudioItem}
            sliderWidth={DEVICE_SIZE.WIDTH}
            useNativeOnScroll
            removeClippedSubviews
            inactiveSlideScale={1.0}
            inactiveSlideOpacity={0.7}
            activeSlideAlignment="start"
            itemWidth={responsivePortion(216)}
            horizontal
            useScrollView
            loopClonesPerSide={audioProgressData.length}
          />
        </View>
        <View style={[styles.carouselView, {marginTop: responsivePortion(3)}]}>
          <View
            style={[
              styles.rowView,
              {paddingLeft: DEVICE_SIZE.CONTENT_PADDING},
            ]}>
            <Text style={styles.category}>My recent audio books</Text>
          </View>
          <Carousel
            data={audioRecentData}
            renderItem={this._renderRecentAudioItem}
            sliderWidth={DEVICE_SIZE.WIDTH}
            useNativeOnScroll
            removeClippedSubviews
            inactiveSlideScale={1.0}
            inactiveSlideOpacity={0.7}
            activeSlideAlignment="start"
            itemWidth={responsivePortion(216)}
            horizontal
            useScrollView
            loopClonesPerSide={audioRecentData.length}
          />
        </View>
        <View style={[styles.carouselView, {marginTop: responsivePortion(3)}]}>
          <View
            style={[
              styles.rowView,
              {paddingLeft: DEVICE_SIZE.CONTENT_PADDING},
            ]}>
            <Text style={styles.category}>My audio books</Text>
          </View>
          <Carousel
            data={audioStartingData}
            renderItem={this._renderStaringAudioItem}
            sliderWidth={DEVICE_SIZE.WIDTH}
            useNativeOnScroll
            removeClippedSubviews
            inactiveSlideScale={1.0}
            inactiveSlideOpacity={0.7}
            activeSlideAlignment="start"
            itemWidth={responsivePortion(216)}
            horizontal
            useScrollView
            loopClonesPerSide={audioStartingData.length}
          />
        </View>
      </>
    );
  };

  renderTabBar = () => {
    const {routeIndex, selectedSortType, searchCriteria} = this.state;
    return (
      <>
        <View style={[styles.searchView, {marginTop: 0}]}>
          <ContentTabBar
            labels={['Courses', 'Audio Books']}
            index={routeIndex}
            hasIcon
            unselectedColor={Colors.white}
            onPress={this.changeRouteIndex}
          />
        </View>
        <View style={[styles.searchView, {marginTop: responsivePortion(24)}]}>
          <SearchBar
            search={searchCriteria}
            placeholder="Search all courses"
            onChange={this.onChangeSearch}
          />
        </View>
        <View style={styles.searchView}>
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
      </>
    );
  };

  courseRoute = () => {
    const {searchCompleted, routeIndex} = this.state;
    if (routeIndex === 1) {
      return (
        <View
          style={{
            minHeight: (DEVICE_SIZE.HEIGHT * 3) / 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <>
        {this.renderCarousel()}
        <View
          style={[
            styles.rowView,
            {
              paddingLeft: DEVICE_SIZE.CONTENT_PADDING,
              marginTop: responsivePortion(6),
            },
          ]}>
          <Text style={styles.category}>My completed courses</Text>
        </View>
        <View style={[styles.searchView, {marginTop: responsivePortion(24)}]}>
          <SearchBar
            search={searchCompleted}
            placeholder="Search all completed courses"
            onChange={this.onChangeCompletedSearch}
          />
        </View>
        <View style={styles.searchView}>
          {completedCourses.map((item, index) => {
            return (
              <View key={index} style={styles.completedCourseItem}>
                <View
                  style={[styles.rowView, {justifyContent: 'space-between'}]}>
                  <Text
                    style={[
                      styles.normalText,
                      {
                        color: '#444444',
                        letterSpacing: responsivePortion(1.5),
                      },
                    ]}>
                    COURSE TITLE
                  </Text>
                  <TouchableOpacity
                    style={{
                      paddingVertical: responsivePortion(5),
                      marginRight: responsivePortion(-5),
                    }}
                    onPress={() => this.onShowModal(index)}>
                    <Image
                      source={ICONS.DROPMENU}
                      resizeMode="contain"
                      style={styles.icon16}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    paddingRight: responsivePortion(20),
                    marginTop: responsivePortion(0),
                  }}>
                  <Text
                    style={[
                      styles.largeText,
                      {
                        fontSize: responsivePortion(16),
                        color: '#444444',
                        letterSpacing: responsivePortion(0.15),
                      },
                    ]}
                    numberOfLines={2}>
                    {item.title}
                  </Text>
                </View>
                <View
                  style={[
                    styles.rowView,
                    {flex: 1, paddingTop: responsivePortion(10)},
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text
                      style={[
                        styles.normalText,
                        {
                          color: '#444444',
                          letterSpacing: responsivePortion(1.5),
                        },
                      ]}>
                      GRADE (%)
                    </Text>
                    <Text
                      style={[
                        styles.largeText,
                        {
                          fontSize: responsivePortion(14),
                          color: '#444444',
                          letterSpacing: responsivePortion(0.1),
                        },
                      ]}>
                      {item.grade}
                    </Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text
                      style={[
                        styles.normalText,
                        {
                          color: '#444444',
                          letterSpacing: responsivePortion(1.5),
                        },
                      ]}>
                      COMPLETED
                    </Text>
                    <Text
                      style={[
                        styles.largeText,
                        {
                          fontSize: responsivePortion(14),
                          color: '#444444',
                          letterSpacing: responsivePortion(0.1),
                        },
                      ]}>
                      {item.completedDate}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </>
    );
  };

  audioBooksRoute = () => {
    const {searchCompleted, routeIndex} = this.state;
    if (routeIndex === 0) {
      return (
        <View
          style={{
            minHeight: (DEVICE_SIZE.HEIGHT * 3) / 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <>
        {this.renderAudioBooksCarousel()}
        <View
          style={[
            styles.rowView,
            {
              paddingLeft: DEVICE_SIZE.CONTENT_PADDING,
              marginTop: responsivePortion(6),
            },
          ]}>
          <Text style={styles.category}>My completed courses</Text>
        </View>
        <View style={[styles.searchView, {marginTop: responsivePortion(24)}]}>
          <SearchBar
            search={searchCompleted}
            placeholder="Search all completed courses"
            onChange={this.onChangeCompletedSearch}
          />
        </View>
        <View style={styles.searchView}>
          {completedCourses.map((item, index) => {
            return (
              <View key={index} style={styles.completedCourseItem}>
                <View
                  style={[styles.rowView, {justifyContent: 'space-between'}]}>
                  <Text
                    style={[
                      styles.normalText,
                      {
                        color: '#444444',
                        letterSpacing: responsivePortion(1.5),
                      },
                    ]}>
                    COURSE TITLE
                  </Text>
                  <TouchableOpacity
                    style={{
                      paddingVertical: responsivePortion(5),
                      marginRight: responsivePortion(-5),
                    }}
                    onPress={() => this.onShowModal(index)}>
                    <Image
                      source={ICONS.DROPMENU}
                      resizeMode="contain"
                      style={styles.icon16}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    paddingRight: responsivePortion(20),
                    marginTop: responsivePortion(0),
                  }}>
                  <Text
                    style={[
                      styles.largeText,
                      {
                        fontSize: responsivePortion(16),
                        color: '#444444',
                        letterSpacing: responsivePortion(0.15),
                      },
                    ]}
                    numberOfLines={2}>
                    {item.title}
                  </Text>
                </View>
                <View
                  style={[
                    styles.rowView,
                    {flex: 1, paddingTop: responsivePortion(10)},
                  ]}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text
                      style={[
                        styles.normalText,
                        {
                          color: '#444444',
                          letterSpacing: responsivePortion(1.5),
                        },
                      ]}>
                      GRADE (%)
                    </Text>
                    <Text
                      style={[
                        styles.largeText,
                        {
                          fontSize: responsivePortion(14),
                          color: '#444444',
                          letterSpacing: responsivePortion(0.1),
                        },
                      ]}>
                      {item.grade}
                    </Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text
                      style={[
                        styles.normalText,
                        {
                          color: '#444444',
                          letterSpacing: responsivePortion(1.5),
                        },
                      ]}>
                      COMPLETED
                    </Text>
                    <Text
                      style={[
                        styles.largeText,
                        {
                          fontSize: responsivePortion(14),
                          color: '#444444',
                          letterSpacing: responsivePortion(0.1),
                        },
                      ]}>
                      {item.completedDate}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </>
    );
  };

  renderModal = () => {
    const {modalVisible} = this.state;
    return (
      <ModalView
        visible={modalVisible}
        modalHeight={responsiveVerticalPortion(224)}
        onBackdropPress={() => {
          this.setState({modalVisible: false});
        }}
        onBackButtonPress={() => {
          this.setState({modalVisible: false});
        }}>
        <View style={{flex: 1, backgroundColor: Colors.white}}>
          <View
            style={[
              styles.rowView,
              {
                flex: 1,
                borderBottomWidth: 1,
                borderColor: '#D7D7D7',
                paddingHorizontal: responsivePortion(18),
              },
            ]}>
            <Image
              source={ICONS.VIEWCERT}
              resizeMode="contain"
              style={[styles.icon22, {marginTop: responsivePortion(-5)}]}
            />
            <Text
              style={[
                styles.normalText,
                {
                  fontSize: responsivePortion(12),
                  color: '#000000',
                  marginLeft: responsivePortion(20),
                },
              ]}>
              View example ABC Certificate
            </Text>
          </View>
          <View
            style={[
              styles.rowView,
              {
                flex: 1,
                borderBottomWidth: 1,
                borderColor: '#D7D7D7',
                paddingHorizontal: responsivePortion(18),
              },
            ]}>
            <Image
              source={ICONS.ORDERCERT}
              resizeMode="contain"
              style={[styles.icon22, {marginTop: responsivePortion(-5)}]}
            />
            <Text
              style={[
                styles.normalText,
                {
                  fontSize: responsivePortion(12),
                  color: '#000000',
                  marginLeft: responsivePortion(20),
                },
              ]}>
              Order Printed ABC Certificate
            </Text>
          </View>
          <View
            style={[
              styles.rowView,
              {
                flex: 1,
                borderBottomWidth: 1,
                borderColor: '#D7D7D7',
                paddingHorizontal: responsivePortion(18),
              },
            ]}>
            <Image
              source={ICONS.DOWNLOADCERT}
              resizeMode="contain"
              style={[styles.icon22, {marginTop: responsivePortion(-5)}]}
            />
            <Text
              style={[
                styles.normalText,
                {
                  fontSize: responsivePortion(12),
                  color: '#000000',
                  marginLeft: responsivePortion(20),
                },
              ]}>
              Download My Certificate
            </Text>
          </View>
          <View
            style={[
              styles.rowView,
              {
                flex: 1,
                paddingHorizontal: responsivePortion(18),
              },
            ]}>
            <Image
              source={ICONS.POSTCERT}
              resizeMode="contain"
              style={[styles.icon22, {marginTop: responsivePortion(-5)}]}
            />
            <Text
              style={[
                styles.normalText,
                {
                  fontSize: responsivePortion(12),
                  color: '#000000',
                  marginLeft: responsivePortion(20),
                },
              ]}>
              Post My Certificate
            </Text>
          </View>
        </View>
      </ModalView>
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
            <View
              style={[styles.searchView, {marginTop: responsivePortion(20)}]}>
              <Text
                style={[
                  styles.largeText,
                  {fontSize: responsivePortion(24), color: Colors.black},
                ]}>
                My Courses
              </Text>
            </View>
            <View style={{marginTop: responsivePortion(20)}}>
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
        {this.renderModal()}
      </BaseView>
    );
  }
}

export default MyCourses;
