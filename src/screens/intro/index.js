import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {BaseView} from '@components/Base';
import {styles} from './styles';
import {
  DEVICE_SIZE,
  responsivePortion,
  responsiveVerticalPortion,
} from '@config/constants';
import Colors from '@config/colors';

const logoImg = require('@assets/logo/logo.png');
const awardImg = require('@assets/logo/award.png');
const certImg = require('@assets/logo/certified.png');
const soldImg = require('@assets/logo/sold.png');
const smileImg = require('@assets/logo/smiley.png');
const paymentImg = require('@assets/logo/credit.png');
const prevIcon = require('@assets/icons/prev.png');
const nextIcon = require('@assets/icons/next.png');

const introSlider = [
  {
    img: logoImg,
    title: 'Welcome to the family',
    name: 'James',
    description: 'We hope you enjoy your journey with us.',
  },
  {
    img: awardImg,
    title: 'Winning',
    name: 'Award ',
    description: 'Winner of 5 international business awards',
  },
  {
    img: certImg,
    title: 'Courses',
    name: 'Certified ',
    description: 'All our courses are fully certified and accredited.',
  },
  {
    img: soldImg,
    title: 'Courses Sold',
    name: '500k ',
    description: 'Meet study buddies in your local area.',
  },
  {
    img: smileImg,
    title: 'Highly',
    name: 'Rated ',
    description: 'Thousands of happy customers across 100 different countries.',
  },
  {
    img: paymentImg,
    title: 'Payment',
    name: 'Flexiable ',
    description: 'Easy, monthly re-payment options.',
  },
];

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  onPressPrev = () => {
    const {slideIndex} = this.state;
    this.setState({
      slideIndex: slideIndex - 1,
    });
    this._carousel.snapToPrev();
  };

  onPressNext = () => {
    const {slideIndex} = this.state;
    this.setState({
      slideIndex: slideIndex + 1,
    });
    this._carousel.snapToNext();
  };

  onPressSeeCourses = () => {
    const {navigation} = this.props;
    navigation.navigate('Home');
  };

  renderSlider = ({item, index}) => {
    return (
      <View key={index} style={styles.sliderView}>
        <Image source={item.img} resizeMode="contain" style={styles.logo} />
        <Text style={styles.title}>
          {index !== 0 && <Text style={styles.italic}>{`${item.name}`}</Text>}
          {item.title}
          {index === 0 && <Text style={styles.italic}>{`, ${item.name}`}</Text>}
        </Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };

  render() {
    const {slideIndex} = this.state;
    return (
      <BaseView style={styles.container}>
        <View style={styles.introView}>
          <TouchableOpacity
            style={styles.prevButton}
            disabled={slideIndex === 0}
            onPress={this.onPressPrev}>
            {slideIndex !== 0 && (
              <Image
                source={prevIcon}
                resizeMode="contain"
                style={styles.icon}
              />
            )}
          </TouchableOpacity>
          <Carousel
            ref={(c) => (this._carousel = c)}
            data={introSlider}
            renderItem={this.renderSlider}
            onSnapToItem={(index) => this.setState({slideIndex: index})}
            sliderWidth={DEVICE_SIZE.CONTENT_WIDTH - responsivePortion(40)}
            itemWidth={DEVICE_SIZE.CONTENT_WIDTH - responsivePortion(40)}
            inactiveSlideScale={1.0}
            activeSlideAlignment="start"
            autoplay={false}
            loop={false}
          />
          <TouchableOpacity
            style={styles.nextButton}
            disabled={slideIndex === 5}
            onPress={this.onPressNext}>
            {slideIndex !== 5 && (
              <Image
                source={nextIcon}
                resizeMode="contain"
                style={styles.icon}
              />
            )}
          </TouchableOpacity>
        </View>
        <Pagination
          dotsLength={introSlider.length}
          activeDotIndex={slideIndex}
          dotElement={<View style={styles.activeDot} />}
          inactiveDotElement={<View style={styles.inactiveDot} />}
        />
        <TouchableOpacity
          style={[
            styles.longButton,
            {
              bottom: responsiveVerticalPortion(41) + DEVICE_SIZE.WIDTH / 9,
              backgroundColor: Colors.white,
            },
          ]}
          onPress={this.onPressSeeCourses}>
          <Text style={[styles.buttonText, {color: Colors.background}]}>
            See all courses
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.longButton, {borderWidth: 1}]}
          onPress={this.onPressGoToAccount}>
          <Text style={[styles.buttonText, {color: Colors.white}]}>
            Go to your account
          </Text>
        </TouchableOpacity>
      </BaseView>
    );
  }
}

export default Intro;
