import React from 'react';
import {View, Text, ScrollView, Image, TouchableHighlight} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CardView from 'react-native-cardview';
import {BaseView} from '@components/Base';
import HeaderView from '@components/HeaderView';
import ImageView from '@components/ImageView';
import {AudioItem} from '@components/AudioItem';
import {CourseItem} from '@components/CourseItem';
import {styles} from './styles';
import {
  DEVICE_SIZE,
  responsivePortion,
  responsiveVerticalPortion,
} from '@config/constants';
import Colors from '@config/colors';
import ICONS from '@config/icons';

const dummyImg = require('@assets/images/dummy.png');
const courseCard = require('@assets/images/course-card.png');

const dummyData = {
  discover: 'Discover Our',
  mind: 'Mindfulness',
  course: 'Courses',
  imgs: [
    dummyImg,
    dummyImg,
    dummyImg,
    dummyImg,
    dummyImg,
    dummyImg,
    dummyImg,
    dummyImg,
  ],
};

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

const categories = [
  {
    category: 'Best Seller',
    data: categoryData,
  },
  {
    category: 'Energy Healing',
    data: categoryData,
  },
  {
    category: 'Hypnotherapy',
    data: categoryData,
  },
  {
    category: 'Mindfulness',
    data: categoryData,
  },
  {
    category: 'Autism & Special Needs',
    data: categoryData,
  },
  {
    category: 'Cognitive Behavioural Therapy',
    data: categoryData,
  },
  {
    category: 'Neuro Linguistics',
    data: categoryData,
  },
  {
    category: 'Animal Care',
    data: categoryData,
  },
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  onPressMenu = () => {
    const {navigation} = this.props;
    navigation.toggleDrawer();
  };

  onPressAudio = (item) => {
    const {navigation} = this.props;
    navigation.navigate('AudioCourse', {course: item});
  };

  onPressCourse = (item) => {
    const {navigation} = this.props;
    navigation.navigate('Course', {course: item});
  };

  renderSubjectText = () => {
    return (
      <View style={styles.subjectTextView}>
        <Text style={styles.normalText}>DISCOVER OUR</Text>
        <Text style={styles.largeText}>Mindfulness</Text>
        <Text style={styles.largeText}>Courses</Text>
      </View>
    );
  };

  renderSubjects = ({item, index}) => {
    return (
      <ImageView
        imageStyle={styles.subjectImage}
        activityIndicatorProps={{size: 'small'}}
        source={item}>
        {this.renderSubjectText()}
      </ImageView>
    );
  };

  _renderItem = ({item, index}) => {
    // return <AudioItem item={item} index={index} onPress={this.onPressAudio} />;
    return <CourseItem item={item} index={index} onPress={this.onPressCourse} />;
  };

  render() {
    const {slideIndex} = this.state;
    return (
      <BaseView>
        <View style={styles.container}>
          <HeaderView onPressMenu={this.onPressMenu} />
          <View style={styles.container}>
            <ScrollView
              style={styles.scrollView}
              showsVerticalScrollIndicator={false}>
              <View style={styles.subjectView}>
                <Carousel
                  ref={(c) => (this._carousel = c)}
                  data={dummyData.imgs}
                  onSnapToItem={(index) => this.setState({slideIndex: index})}
                  renderItem={this.renderSubjects}
                  sliderWidth={DEVICE_SIZE.WIDTH}
                  itemWidth={DEVICE_SIZE.WIDTH}
                  inactiveSlideScale={1.0}
                  activeSlideAlignment="start"
                  autoplay={false}
                  loop={false}
                />
                <Pagination
                  containerStyle={styles.pagination}
                  dotsLength={dummyData.imgs.length}
                  activeDotIndex={slideIndex}
                  dotElement={<View style={styles.activeDot} />}
                  inactiveDotElement={<View style={styles.inactiveDot} />}
                />
              </View>
              {categories.map((item, index) => (
                <View
                  key={index}
                  style={[
                    styles.carouselView,
                    {
                      marginBottom:
                        index === categories.length - 1
                          ? responsiveVerticalPortion(26)
                          : 0,
                    },
                  ]}>
                  <View
                    style={[
                      styles.rowView,
                      {paddingLeft: DEVICE_SIZE.CONTENT_PADDING},
                    ]}>
                    <Text style={styles.category}>{item.category}</Text>
                    <Image
                      source={ICONS.NEXT}
                      resizeMode="contain"
                      style={[styles.icon, {marginLeft: responsivePortion(5)}]}
                    />
                  </View>
                  <Carousel
                    data={item.data}
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
                    loopClonesPerSide={item.data.length}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </BaseView>
    );
  }
}

export default Home;
