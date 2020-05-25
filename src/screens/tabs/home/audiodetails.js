import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import CardView from 'react-native-cardview';
import Carousel from 'react-native-snap-carousel';
import {BaseView} from '@components/Base';
import HeaderView from '@components/HeaderView';
import {ModalView} from '@components/Modal';
import ImageView from '@components/ImageView';
import AudioPlayer from '@components/AudioPlayer';
import StarView from '@components/Star';
import DropDownItem from '@components/DropDownItem';
import {CourseItem} from '@components/CourseItem';
import CustomTabView from '@components/TabView';
import {ContentTabBar} from './ContentTabBar';
import ICONS from '@config/icons';
import {styles} from './styles';
import {
  responsivePortion,
  responsiveVerticalPortion,
  DEVICE_SIZE,
} from '@config/constants';
import Colors from '@config/colors';

const dummyImg = require('@assets/images/dummy1.png');
const dummyImgHome = require('@assets/images/dummy.png');
const courseCard = require('@assets/images/course-card.png');
const jane = require('@assets/profile/jane.png');
const cliff = require('@assets/profile/cliff.png');
const ray = require('@assets/profile/ray.png');
const steven = require('@assets/profile/steven.png');

const reviews = [
  {
    name: 'Jane Plough',
    avatar: jane,
    rating: 4,
    comment:
      'Very deep course for a beginner, enjoyed everything from the very start and every detail is vastly investigated and discussed.',
  },
  {
    name: 'Steven Toast',
    avatar: steven,
    rating: 4,
    comment:
      'Very deep course for a beginner, enjoyed everything from the very start and every detail is vastly investigated and discussed.',
  },
  {
    name: 'Ray Purchase',
    avatar: ray,
    rating: 3,
    comment:
      'Very deep course for a beginner, enjoyed everything from the very start and every detail is vastly investigated and discussed.',
  },
  {
    name: 'Cliff Bonanza',
    avatar: cliff,
    rating: 4,
    comment:
      'Very deep course for a beginner, enjoyed everything from the very start and every detail is vastly investigated and discussed.',
  },
];

const starArray = [1, 2, 3, 4, 5];

const courseLearnings = [
  'Have a deeper comprehension of the inter-connection between the body and reflexology',
  'Gain a working knowledge of the physiology of the body',
  'Understand reflexology’s relation to anatomy and physiology',
  'Know how reflexology can help some aspects of fertility and conception',
  'Be able to use reflexology to provide comfort during the first trimester of pregnancy',
  'Have a deeper comprehension of the inter-connection between the body and reflexology',
  'Understand what makes a good clinical practice',
  'Have advanced your knowledge of foot biomechanics and foot conditions to look out for during treatment',
  'Be comfortable using hand and ear reflexology techniques, alongside foot reflexology, to maximise healing',
];

const accreditations = [
  ICONS.ILM,
  ICONS.CMA,
  ICONS.CPD,
  ICONS.ACTIVEIQ,
  ICONS.QLS,
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

const questions = [
  {
    question: 'How do I find the classes I`ve bought?',
    answer: 'Yes it is.',
  },
  {
    question: 'How do I mark a course as complete?',
    answer: 'You can mark.',
  },
  {
    question: 'Is there a time limit on courses?',
    answer:
      'There is no time limit on any of our courses, you are free to complete them in your own time. All your progress gets saved too so you can take a break and revisit the course when you`re ready',
  },
  {
    question: 'How do I find a course to take?',
    answer: 'You can find them in here.',
  },
];

const courseSyllabus = [
  {
    title: 'Advanced Healing',
    parts: [
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  {
    title: 'Mechanism of Action',
    parts: [
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  {
    title: 'Structure of the Body',
    parts: [
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  {
    title: 'Advancing practice',
    parts: [
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  {
    title: 'Reflexology and Fertility',
    parts: [
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  {
    title: 'Reflexology and Pregnancy',
    parts: [
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  {
    title: 'Clinical Observation',
    parts: [
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  {
    title: 'Foot Biomechanics',
    parts: [
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  {
    title: 'Hand and Ear Reflexology',
    parts: [
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  {
    title: 'The Business of Reflexology',
    parts: [
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Title',
        summary:
          'Loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
];

class AudioDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSticky: false,
      routeIndex: 0,
      limitHeight: 0,
      addedWishlist: false,
      modalVisible: false,
      isPurchased: false,
      overviewHeight: 0,
      syllabusHeight: 0,
      scrollPosY: 0,
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

  changeRouteIndex = (index) => {
    this.setState({routeIndex: index});
  };

  onScrollEvent = (event) => {
    const {limitHeight} = this.state;
    const currentPosY = event.nativeEvent.contentOffset.y;
    this.setState({
      scrollPosY: currentPosY,
      showSticky:
        currentPosY > limitHeight - responsivePortion(60) ? true : false,
    });
  };

  onLayout = (event) => {
    const {y} = event.nativeEvent.layout;
    this.setState({limitHeight: y});
  };

  onPressAddWishlist = () => {
    const {addedWishlist} = this.state;
    this.setState({addedWishlist: !addedWishlist});
  };

  onShowModal = () => {
    const {modalVisible} = this.state;
    this.setState({modalVisible: !modalVisible});
  };

  onPressStartListening = () => {
    const {navigation} = this.props;
    navigation.navigate('CourseOverview');
  };

  onPressStartCourse = () => {
    const {navigation} = this.props;
    navigation.navigate('CourseOverview');
  };

  onPurchaseCourse = () => {
    this.setState({isPurchased: true, modalVisible: false});
  };

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
        <View style={styles.audioMaskView} />
        <Image
          source={ICONS.EARPHONE}
          resizeMode="contain"
          style={styles.earphoneIcon}
        />
        <View style={styles.audioHeaderView}>
          <Text
            style={[
              styles.normalText,
              {letterSpacing: responsivePortion(1.5)},
            ]}>
            AUDIO
          </Text>
          <Text
            style={[
              styles.normalText,
              {letterSpacing: responsivePortion(1.5)},
            ]}>
            COURSE
          </Text>
        </View>
      </View>
    );
  };

  renderCourse = () => {
    const {addedWishlist, isPurchased} = this.state;
    return (
      <View style={{marginBottom: responsivePortion(16)}}>
        <Text
          style={[
            styles.largeText,
            {
              fontSize: responsivePortion(24),
              color: Colors.black,
              marginTop: responsivePortion(16),
            },
          ]}
          numberOfLines={3}>
          Advanced Reflexology Audio Course
        </Text>

        <Text
          style={[
            styles.courseNormalText,
            {
              marginTop: responsivePortion(11),
            },
          ]}>
          Progress your reflexology skills and develop your practice, with the
          Advanced Reflexology Audio Course.
        </Text>
        {!isPurchased && (
          <View style={[styles.rowView, {marginTop: responsivePortion(20)}]}>
            <Text
              style={[
                styles.largeText,
                {fontSize: responsivePortion(34), color: Colors.black},
              ]}>
              £10.00
            </Text>
          </View>
        )}
        <View style={[styles.rowView, {marginTop: responsivePortion(28)}]}>
          <TouchableOpacity
            style={[
              styles.courseBuyButton,
              {backgroundColor: isPurchased ? Colors.blue : Colors.green},
            ]}
            onPress={
              isPurchased ? this.onPressStartListening : this.onShowModal
            }>
            <Text
              style={[styles.normalText, {fontSize: responsivePortion(12)}]}>
              {isPurchased ? 'Start Listening' : 'Buy this course'}
            </Text>
          </TouchableOpacity>
          {!isPurchased && (
            <View style={{marginHorizontal: responsivePortion(16)}}>
              <Image
                source={ICONS.FINANCECOE}
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
          )}
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
            style={[styles.rowView, {justifyContent: 'space-between'}]}
            onPress={this.onPressAddWishlist}>
            <Text
              style={[
                styles.courseNormalText,
                {
                  color: Colors.black,
                  marginRight: responsivePortion(8),
                },
              ]}>
              {addedWishlist ? 'Added!' : 'Add to wishlist'}
            </Text>
            <Image
              source={addedWishlist ? ICONS.LOVEFILL : ICONS.LOVE}
              resizeMode="contain"
              style={[styles.icon16, {tintColor: Colors.red}]}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderStickyView = () => {
    const {routeIndex, isPurchased} = this.state;
    return (
      <CardView
        cardElevation={10}
        cardMaxElevation={10}
        cornerRadius={0}
        style={[
          styles.stickyHeader,
          {
            height: isPurchased
              ? responsivePortion(52)
              : responsivePortion(104),
          },
        ]}>
        {!isPurchased && (
          <View
            style={[
              styles.topSticky,
              {paddingHorizontal: responsivePortion(8), alignItems: 'center'},
            ]}>
            <View
              style={[
                styles.rowView,
                {
                  justifyContent: 'space-between',
                  height: responsivePortion(36),
                  marginLeft: responsivePortion(7),
                },
              ]}>
              <View>
                <Text
                  style={[
                    styles.largeText,
                    {fontSize: responsivePortion(20), color: Colors.black},
                  ]}>
                  £10.00
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                height: responsivePortion(36),
                width: responsivePortion(120),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.green,
                borderRadius: responsivePortion(1.8),
              }}
              onPress={this.onShowModal}>
              <Text
                style={[styles.normalText, {fontSize: responsivePortion(12)}]}>
                Buy this course
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <View
          style={[
            styles.container,
            {justifyContent: 'center', paddingHorizontal: responsivePortion(8)},
          ]}>
          <ContentTabBar
            labels={['Overview', 'Course Syllabus']}
            index={routeIndex}
            onPress={this.changeRouteIndex}
          />
        </View>
      </CardView>
    );
  };

  renderTabBar = () => {
    const {routeIndex, showSticky} = this.state;
    return (
      <View style={{paddingHorizontal: DEVICE_SIZE.CONTENT_PADDING}}>
        {showSticky ? (
          <View />
        ) : (
          <ContentTabBar
            labels={['Overview', 'Course Syllabus']}
            index={routeIndex}
            onPress={this.changeRouteIndex}
          />
        )}
      </View>
    );
  };

  renderReview = () => {
    return (
      <View
        style={[
          styles.searchView,
          {
            backgroundColor: Colors.white,
            marginTop: -1,
            paddingTop: responsiveVerticalPortion(22),
            paddingBottom: responsiveVerticalPortion(16),
          },
        ]}>
        <View
          style={[
            styles.rowView,
            {paddingBottom: responsiveVerticalPortion(16)},
          ]}>
          <Text
            style={[
              styles.largeText,
              {fontSize: responsivePortion(48), color: Colors.black},
            ]}>
            4.1
          </Text>
          <View
            style={{
              flex: 1,
              paddingHorizontal: responsivePortion(20),
              marginTop: responsivePortion(5),
            }}>
            <View style={styles.rowView}>
              {starArray.map((index) => {
                const rating = 4;
                return (
                  <View key={index} style={{marginRight: responsivePortion(5)}}>
                    <Image
                      source={ICONS.STAR}
                      style={[
                        styles.icon16,
                        {
                          tintColor:
                            index < rating ? Colors.yellow : Colors.gray,
                        },
                      ]}
                    />
                  </View>
                );
              })}
            </View>
            <Text
              style={[
                styles.courseNormalText,
                {color: Colors.black, marginTop: responsivePortion(4)},
              ]}>
              4.1 (15,712 ratings)
            </Text>
          </View>
          <Image source={ICONS.NEXT} resizeMode="contain" style={styles.icon} />
        </View>
        {reviews.map((item, index) => {
          return (
            <View
              key={index}
              style={[
                styles.rowView,
                {
                  paddingVertical: responsiveVerticalPortion(14),
                  borderTopWidth: 2,
                  borderColor: Colors.disabled,
                  alignItems: 'flex-start',
                },
              ]}>
              <Image
                source={item.avatar}
                resizeMode="contain"
                style={styles.reviewAvatar}
              />
              <View style={{marginHorizontal: responsivePortion(32)}}>
                <View
                  style={{
                    height: responsivePortion(32),
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={[
                      styles.courseNormalText,
                      {
                        color: Colors.black,
                        letterSpacing: responsivePortion(1.33),
                      },
                    ]}>
                    {item.name}
                  </Text>
                </View>
                <StarView
                  style={{justifyContent: 'flex-start'}}
                  rating={item.rating}
                  unstarColor={Colors.gray}
                />
                <View style={{marginTop: responsiveVerticalPortion(13)}}>
                  <Text style={[styles.normalText, {color: Colors.black}]}>
                    {`${item.comment} `}
                    <Text style={{color: Colors.blue}}>See More</Text>
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
        <View
          style={{
            borderBottomWidth: 2,
            borderTopWidth: 2,
            borderColor: Colors.gray,
          }}>
          <TouchableOpacity
            style={[
              styles.rowView,
              {
                height: responsiveVerticalPortion(36),
                justifyContent: 'space-between',
                paddingHorizontal: responsivePortion(16),
              },
            ]}>
            <Text style={[styles.courseNormalText, {color: Colors.blue}]}>
              See all reviews (15,712)
            </Text>
            <Image
              source={ICONS.NEXT}
              resizeMode="contain"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={dummyImgHome}
          resizeMode="cover"
          style={{
            marginTop: responsiveVerticalPortion(21),
            height: responsivePortion(144),
            paddingRight: responsivePortion(16),
            justifyContent: 'center',
          }}>
          {this.renderSubjectText()}
        </ImageBackground>
        <View
          style={{
            alignItems: 'center',
            marginVertical: responsiveVerticalPortion(8),
          }}>
          <Text
            style={[
              styles.smallText,
              {color: '#949494', letterSpacing: responsivePortion(1.2)},
            ]}>
            Promotional Ad
          </Text>
        </View>
      </View>
    );
  };

  renderSubjectText = () => {
    return (
      <View style={{alignItems: 'flex-end'}}>
        <Text style={styles.normalText}>DISCOVER OUR</Text>
        <Text style={styles.largeText}>Mindfulness</Text>
        <Text style={styles.largeText}>Courses</Text>
      </View>
    );
  };

  overview = () => {
    const {routeIndex} = this.state;
    if (routeIndex === 1) {
      return (
        <View
          style={{
            minHeight: (DEVICE_SIZE.HEIGHT * 3) / 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View onLayout={this.overviewLayout}>
        <View style={{paddingHorizontal: DEVICE_SIZE.CONTENT_PADDING}}>
          <Text
            style={[
              styles.courseNormalText,
              {
                fontWeight: 'bold',
                letterSpacing: responsivePortion(0.09),
                marginTop: responsivePortion(16),
              },
            ]}>
            Course Information
          </Text>
          <View style={[styles.rowView, {marginTop: responsivePortion(12)}]}>
            <View style={[styles.rowView, {flex: 1}]}>
              <Image
                source={ICONS.MODULE}
                resizeMode="contain"
                style={{
                  width: responsivePortion(16),
                  height: responsivePortion(16),
                  tintColor: Colors.blue,
                }}
              />
              <Text
                style={[
                  styles.courseNormalText,
                  {color: Colors.disabled, marginLeft: responsivePortion(11)},
                ]}>
                10 Modules
              </Text>
            </View>
            <View style={[styles.rowView, {flex: 1}]}>
              <Image
                source={ICONS.VIDEO}
                resizeMode="contain"
                style={{
                  width: responsivePortion(16),
                  height: responsivePortion(16),
                  tintColor: Colors.blue,
                }}
              />
              <Text
                style={[
                  styles.courseNormalText,
                  {color: Colors.disabled, marginLeft: responsivePortion(11)},
                ]}>
                1 Video
              </Text>
            </View>
          </View>
          <View style={[styles.rowView, {marginTop: responsivePortion(16)}]}>
            <View style={[styles.rowView, {flex: 1}]}>
              <Image
                source={ICONS.SUPPORT}
                resizeMode="contain"
                style={{
                  width: responsivePortion(16),
                  height: responsivePortion(16),
                  tintColor: Colors.blue,
                }}
              />
              <Text
                style={[
                  styles.courseNormalText,
                  {color: Colors.disabled, marginLeft: responsivePortion(11)},
                ]}>
                Full support
              </Text>
            </View>
            <View style={[styles.rowView, {flex: 1}]}>
              <Image
                source={ICONS.LIFETIME}
                resizeMode="contain"
                style={{
                  width: responsivePortion(16),
                  height: responsivePortion(16),
                  tintColor: Colors.blue,
                }}
              />
              <Text
                style={[
                  styles.courseNormalText,
                  {color: Colors.disabled, marginLeft: responsivePortion(11)},
                ]}>
                Lifetime duration
              </Text>
            </View>
          </View>
          <View style={[styles.rowView, {marginTop: responsivePortion(12)}]}>
            <View style={styles.rowView}>
              <Image
                source={ICONS.TIMER}
                resizeMode="contain"
                style={{
                  width: responsivePortion(16),
                  height: responsivePortion(16),
                  tintColor: Colors.blue,
                }}
              />
              <Text
                style={[
                  styles.courseNormalText,
                  {color: Colors.disabled, marginLeft: responsivePortion(11)},
                ]}>
                150 hrs of study
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.rowView,
              {
                borderColor: Colors.disabled,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                marginTop: responsivePortion(16),
                paddingHorizontal: responsivePortion(16),
                height: responsivePortion(39),
                justifyContent: 'space-between',
                marginBottom: responsivePortion(32),
              },
            ]}>
            <View style={styles.rowView}>
              <Image
                source={ICONS.SANDTIMER}
                resizeMode="contain"
                style={{
                  width: responsivePortion(16),
                  height: responsivePortion(16),
                  tintColor: Colors.blue,
                }}
              />
              <Text
                style={[
                  styles.courseNormalText,
                  {
                    fontWeight: 'bold',
                    color: Colors.black100,
                    marginLeft: responsivePortion(11),
                  },
                ]}>
                Sample this course.
              </Text>
            </View>
            <Text style={[styles.courseNormalText, {color: Colors.blue}]}>
              Find out more
            </Text>
          </View>
          <Text
            style={[
              styles.courseNormalText,
              {
                fontWeight: 'bold',
                letterSpacing: responsivePortion(0.09),
                color: Colors.black100,
              },
            ]}>
            How will you benefit?
          </Text>
          <Text
            style={[
              styles.largeText,
              {
                letterSpacing: responsivePortion(0.15),
                color: Colors.black,
                marginTop: responsivePortion(3),
              },
            ]}>
            What Will You Learn?
          </Text>
          <Text
            style={[
              styles.courseNormalText,
              {
                color: Colors.black,
                marginTop: responsivePortion(13),
              },
            ]}>
            This course builds upon your foundational skills with an extended
            knowledge of anatomy, physiology and how to better promote an
            environment in which the body’s own system can boost the healing
            process.
          </Text>
          {courseLearnings.map((item, index) => (
            <View
              key={index}
              style={{flexDirection: 'row', marginTop: responsivePortion(19)}}>
              <Image
                source={ICONS.PLUS}
                resizeMode="contain"
                style={[
                  styles.icon,
                  {
                    tintColor: Colors.blue,
                    marginTop: responsivePortion(4),
                    marginRight: responsivePortion(11),
                  },
                ]}
              />
              <View style={{flex: 1}}>
                <Text
                  style={[
                    styles.courseNormalText,
                    {
                      color: Colors.black,
                    },
                  ]}>
                  {item}
                </Text>
              </View>
            </View>
          ))}
          <View
            style={[
              styles.rowView,
              {
                borderColor: Colors.disabled,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                marginTop: responsivePortion(27),
                paddingHorizontal: responsivePortion(16),
                height: responsivePortion(39),
                justifyContent: 'space-between',
                marginBottom: responsivePortion(32),
              },
            ]}>
            <Text style={[styles.courseNormalText, {color: Colors.blue}]}>
              Expand
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.searchView,
            {
              marginTop: 0,
            },
          ]}>
          <Text
            style={[
              styles.courseNormalText,
              {
                fontWeight: 'bold',
                fontSize: responsivePortion(14),
                letterSpacing: responsivePortion(0.1),
              },
            ]}>
            Listen to a sample
          </Text>
          <View style={[styles.imageView, {marginTop: responsivePortion(16)}]}>
            <ImageView
              imageStyle={styles.subjectImage}
              activityIndicatorProps={{size: 'small'}}
              source={dummyImg}
            />
            <View
              style={[styles.audioMaskView, {width: responsivePortion(136)}]}
            />
            <Image
              source={ICONS.EARPHONE}
              resizeMode="contain"
              style={[
                styles.earphoneIcon,
                {
                  top: responsiveVerticalPortion(48),
                  right: responsivePortion(90),
                },
              ]}
            />
            <Text
              style={[
                styles.normalText,
                {
                  letterSpacing: responsivePortion(1.5),
                  position: 'absolute',
                  top: responsiveVerticalPortion(74),
                  right: responsivePortion(16),
                  width: responsivePortion(96),
                },
              ]}>
              AUDIO SAMPLE
            </Text>
          </View>
          <AudioPlayer />
        </View>
        <View
          style={[
            styles.searchView,
            {
              backgroundColor: Colors.white,
              marginTop: responsivePortion(24),
              paddingTop: responsiveVerticalPortion(24),
            },
          ]}>
          <View style={styles.seeAlsoView}>
            <Text
              style={[
                styles.courseNormalText,
                {
                  fontWeight: 'bold',
                  color: Colors.white,
                  lineHeight: responsiveVerticalPortion(20),
                },
              ]}>
              See also:
            </Text>
            <Text
              style={[
                styles.courseNormalText,
                {
                  color: Colors.white,
                  lineHeight: responsiveVerticalPortion(20),
                },
              ]}>
              Advanced Reflexology Audio Course
            </Text>
          </View>
          <View style={styles.accreditationView}>
            <Text
              style={[
                styles.courseNormalText,
                {
                  fontWeight: 'bold',
                  fontSize: responsivePortion(14),
                  letterSpacing: responsivePortion(0.1),
                  marginTop: responsiveVerticalPortion(19),
                },
              ]}>
              Accreditations
            </Text>
            <View
              style={[
                styles.rowView,
                {justifyContent: 'space-between', flex: 1},
              ]}>
              {accreditations.map((item, index) => (
                <TouchableHighlight key={index}>
                  <Image
                    source={item}
                    resizeMode="contain"
                    style={styles.accreditationImg}
                  />
                </TouchableHighlight>
              ))}
            </View>
          </View>
          <Text
            style={[
              styles.courseNormalText,
              {
                fontWeight: 'bold',
                fontSize: responsivePortion(14),
                letterSpacing: responsivePortion(0.1),
                marginTop: responsiveVerticalPortion(31),
              },
            ]}>
            This Week's Top Sellers
          </Text>
        </View>
        <View style={{backgroundColor: Colors.white}}>
          <Carousel
            data={categoryData}
            renderItem={({item, index}) => {
              return (
                <CourseItem
                  item={item}
                  index={index}
                  onPress={this.onPressStartCourse}
                />
              );
            }}
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
        <View
          style={[
            styles.searchView,
            {
              marginTop: -1,
              backgroundColor: Colors.white,
              paddingTop: responsiveVerticalPortion(24),
              paddingBottom: responsiveVerticalPortion(16),
            },
          ]}>
          <Text
            style={[
              styles.courseNormalText,
              {
                fontWeight: 'bold',
                letterSpacing: responsivePortion(0.09),
              },
            ]}>
            Frequently Asked Questions
          </Text>
          <Text
            style={[
              styles.courseNormalText,
              {
                color: Colors.black,
                marginTop: responsiveVerticalPortion(12),
              },
            ]}>
            Below you'll find the answers to the questions that we get asked the
            most regarding Center of Exllence
          </Text>
        </View>

        {questions.map((item, index) => {
          return (
            <View key={index}>
              <DropDownItem
                key={index}
                contentVisible={false}
                headerStyle={[
                  styles.rowView,
                  {
                    height: responsiveVerticalPortion(48),
                    paddingHorizontal: DEVICE_SIZE.CONTENT_PADDING,
                    flexDirection: 'row-reverse',
                    justifyContent: 'flex-end',
                    backgroundColor:
                      index % 2 === 0 ? Colors.white : Colors.mainbackground,
                  },
                ]}
                iconStyle={{
                  tintColor: Colors.blue,
                  marginRight: responsivePortion(20),
                  marginLeft: responsivePortion(5),
                }}
                invisibleImage={ICONS.DOWN}
                visibleImage={ICONS.UP}
                header={
                  <View>
                    <Text
                      style={[
                        styles.courseNormalText,
                        {color: Colors.black, fontWeight: 'bold'},
                      ]}>
                      {item.question}
                    </Text>
                  </View>
                }>
                <View
                  style={{
                    width: '100%',
                    paddingRight: DEVICE_SIZE.CONTENT_PADDING,
                    paddingLeft:
                      DEVICE_SIZE.CONTENT_PADDING + responsivePortion(36),
                    paddingBottom: responsiveVerticalPortion(16),
                    backgroundColor:
                      index % 2 === 0 ? Colors.white : Colors.mainbackground,
                  }}>
                  <Text
                    style={[styles.courseNormalText, {color: Colors.black}]}>
                    {item.answer}
                  </Text>
                </View>
              </DropDownItem>
            </View>
          );
        })}
        <View
          style={[
            styles.searchView,
            {
              marginTop: -1,
              backgroundColor: Colors.white,
              paddingTop: responsiveVerticalPortion(35),
            },
          ]}>
          <Text
            style={[
              styles.courseNormalText,
              {
                fontWeight: 'bold',
                letterSpacing: responsivePortion(0.09),
              },
            ]}>
            What Our Students Say
          </Text>
        </View>
        {this.renderReview()}
      </View>
    );
  };

  syllabusLayout = (event) => {
    const {height} = event.nativeEvent.layout;
    this.setState({syllabusHeight: height});
  };

  overviewLayout = (event) => {
    const {height} = event.nativeEvent.layout;
    this.setState({overviewHeight: height});
  };

  syllabus = () => {
    const {routeIndex} = this.state;
    if (routeIndex === 0) {
      return (
        <View
          style={{
            minHeight: (DEVICE_SIZE.HEIGHT * 3) / 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View onLayout={this.syllabusLayout}>
        <View
          style={{
            paddingHorizontal: DEVICE_SIZE.CONTENT_PADDING,
            marginVertical: responsivePortion(16),
          }}>
          <Text
            style={[
              styles.courseNormalText,
              {
                fontWeight: 'bold',
                letterSpacing: responsivePortion(0.09),
              },
            ]}>
            Course Syllabus
          </Text>
        </View>
        <View style={[styles.whiteParent, {paddingHorizontal: 0}]}>
          {courseSyllabus.map((item, index) => {
            return (
              <View key={index}>
                <DropDownItem
                  key={index}
                  headerStyle={[
                    styles.rowView,
                    {
                      width: '100%',
                      height: responsiveVerticalPortion(48),
                      paddingHorizontal: DEVICE_SIZE.CONTENT_PADDING,
                      flexDirection: 'row-reverse',
                      backgroundColor:
                        index % 2 === 0 ? Colors.white : Colors.mainbackground,
                    },
                  ]}
                  iconStyle={{
                    tintColor: Colors.blue,
                    marginRight: responsivePortion(13),
                  }}
                  invisibleImage={ICONS.DOWN}
                  visibleImage={ICONS.UP}
                  header={
                    <View
                      style={[
                        styles.rowView,
                        {
                          width:
                            DEVICE_SIZE.CONTENT_WIDTH - responsivePortion(25),
                          justifyContent: 'space-between',
                        },
                      ]}>
                      <Text
                        style={[
                          styles.courseNormalText,
                          {color: Colors.black, fontWeight: 'bold'},
                        ]}>
                        {item.title}
                      </Text>
                      <Text
                        style={[
                          styles.courseNormalText,
                          {color: '#949494'},
                        ]}>{`${item.parts.length} parts`}</Text>
                    </View>
                  }>
                  <View
                    style={{
                      backgroundColor:
                        index % 2 === 0 ? Colors.white : Colors.mainbackground,
                      paddingHorizontal: DEVICE_SIZE.CONTENT_PADDING,
                    }}>
                    {item.parts.map((part, index) => {
                      return (
                        <View
                          key={index}
                          style={{
                            width: '100%',
                            paddingLeft: responsivePortion(25),
                            paddingVertical: responsiveVerticalPortion(16),
                            borderTopWidth: index !== 0 ? 1 : 0,
                            borderColor: Colors.disabled,
                          }}>
                          <Text
                            style={[
                              styles.courseNormalText,
                              {
                                color: Colors.blue,
                                marginBottom: responsiveVerticalPortion(8),
                              },
                            ]}>
                            {`Part ${index + 1} - [${part.title}]`}
                          </Text>
                          <Text
                            style={[
                              styles.courseNormalText,
                              {color: Colors.black},
                            ]}>
                            {part.summary}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                </DropDownItem>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  renderModal = () => {
    const {modalVisible} = this.state;
    return (
      <ModalView
        visible={modalVisible}
        onBackdropPress={() => {
          this.setState({modalVisible: false});
        }}
        onBackButtonPress={() => {
          this.setState({modalVisible: false});
        }}>
        <View style={styles.modalContent}>
          <View style={styles.googlePayView}>
            <Image
              source={ICONS.GPAY}
              resizeMode="contain"
              style={styles.gpayIcon}
            />
          </View>
          <View
            style={[
              styles.rowView,
              {
                height: responsiveVerticalPortion(57),
                justifyContent: 'space-between',
                paddingHorizontal: responsivePortion(16),
                borderBottomWidth: 1,
                borderColor: '#D7D7D7',
              },
            ]}>
            <View style={styles.rowView}>
              <Image
                source={jane}
                resizeMode="contain"
                style={styles.reviewAvatar}
              />
              <Text
                style={[
                  styles.courseNormalText,
                  {color: '#000000', marginLeft: responsivePortion(22)},
                ]}>
                jamespertersprsnl@gmail.com
              </Text>
            </View>
            <Image
              source={ICONS.DOWN}
              resizeMode="contain"
              style={styles.icon}
            />
          </View>
          <View
            style={[
              styles.rowView,
              {
                height: responsiveVerticalPortion(57),
                justifyContent: 'space-between',
                paddingHorizontal: responsivePortion(16),
                borderBottomWidth: 1,
                borderColor: '#D7D7D7',
              },
            ]}>
            <View style={styles.rowView}>
              <Image
                source={ICONS.VISA}
                resizeMode="contain"
                style={{
                  width: responsivePortion(35),
                  height: responsivePortion(23),
                }}
              />
              <Text
                style={[
                  styles.courseNormalText,
                  {color: '#000000', marginLeft: responsivePortion(18)},
                ]}>
                Visa **** 9999
              </Text>
            </View>
            <Image
              source={ICONS.DOWN}
              resizeMode="contain"
              style={styles.icon}
            />
          </View>
          <View
            style={[
              styles.rowView,
              {
                height: responsiveVerticalPortion(57),
                justifyContent: 'space-between',
                paddingHorizontal: responsivePortion(16),
                borderBottomWidth: 1,
                borderColor: '#D7D7D7',
              },
            ]}>
            <View style={styles.rowView}>
              <Image
                source={ICONS.TRUCK}
                resizeMode="contain"
                style={{
                  width: responsivePortion(26),
                  height: responsivePortion(19),
                }}
              />
              <Text
                style={[
                  styles.courseNormalText,
                  {color: '#000000', marginLeft: responsivePortion(28)},
                ]}>
                James Perters 281 Hither Green L...
              </Text>
            </View>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                width: responsivePortion(100),
                height: responsiveVerticalPortion(35),
                borderRadius: responsivePortion(2),
                backgroundColor: Colors.blue,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={this.onPurchaseCourse}>
              <Text style={[styles.courseNormalText, {color: Colors.white}]}>
                CONTINUE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ModalView>
    );
  };

  render() {
    const {routeIndex, showSticky} = this.state;
    return (
      <BaseView>
        <View style={[styles.container, {backgroundColor: Colors.white}]}>
          <HeaderView onPressMenu={this.onPressMenu} />
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={true}
            scrollEventThrottle={16}
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
            <View
              style={[
                styles.rowView,
                {
                  marginTop: responsiveVerticalPortion(24),
                  backgroundColor: Colors.mainbackground,
                  paddingTop: responsivePortion(16),
                },
              ]}
              onLayout={this.onLayout}>
              <CustomTabView
                index={routeIndex}
                routes={[
                  {key: 'overview', title: 'Overview'},
                  {key: 'syllabus', title: 'Course Syllabus'},
                ]}
                renderScene={{
                  overview: this.overview,
                  syllabus: this.syllabus,
                }}
                setIndex={this.changeRouteIndex}
                tabBarComponent={this.renderTabBar}
              />
            </View>
          </ScrollView>
          {showSticky && this.renderStickyView()}
        </View>
        {this.renderModal()}
      </BaseView>
    );
  }
}

export default AudioDetails;
