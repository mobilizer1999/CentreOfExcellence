import React from 'react';
import {View, ScrollView, Image, TouchableOpacity, Text} from 'react-native';
import {BaseView} from '@components/Base';
import HeaderView from '@components/HeaderView';
import ImageView from '@components/ImageView';
import PickerField from '@components/PickerField';
import {styles} from './styles';
import {
  DEVICE_SIZE,
  responsivePortion,
  responsiveVerticalPortion,
} from '@config/constants';
import Colors from '@config/colors';
import ICONS from '@config/icons';

const courseImg = require('@assets/images/mycourse.png');

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

const messages = [
  {
    type: 'COURSE PROGRESS UPDATE',
    title: 'British Sign Language Diploma',
    poster: 'Administrator',
    date: '28/02/2020',
  },
  {
    type: 'LESSON ASSESSMENT',
    title: 'How To Be A Super Learner Module 1 Assessment',
    poster: 'Administrator',
    date: '28/02/2020',
  },
  {
    type: 'COURSE PROGRESS UPDATE',
    title: 'British Sign Language Diploma',
    poster: 'Administrator',
    date: '28/02/2020',
  },
  {
    type: 'COURSE PROGRESS UPDATE',
    title: 'British Sign Language Diploma',
    poster: 'Administrator',
    date: '28/02/2020',
  },
];

class Messages extends React.Component {
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
              MESSAGES
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

  renderListView = () => {
    return (
      <>
        <View style={styles.carouselView}>
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
              Messages
            </Text>
          </View>
          {messages.map((item, index) => {
            return (
              <View
                key={index}
                style={[
                  styles.messageItem,
                  {
                    marginBottom:
                      index === messages.length - 1
                        ? responsiveVerticalPortion(20)
                        : 0,
                  },
                ]}>
                <View style={{flex: 1, justifyContent: 'space-between'}}>
                  <Text
                    style={[
                      styles.normalText,
                      {color: '#444444', letterSpacing: responsivePortion(1.5)},
                    ]}>
                    {item.type}
                  </Text>
                  <Text
                    style={[
                      styles.largeText,
                      {
                        color: '#444444',
                        fontSize: responsivePortion(16),
                        letterSpacing: responsivePortion(0.15),
                        marginRight: responsivePortion(10),
                      },
                    ]}>
                    {item.title}
                  </Text>
                  <View style={styles.rowView}>
                    <View style={{flex: 1}}>
                      <Text
                        style={[
                          styles.normalText,
                          {
                            color: '#444444',
                            letterSpacing: responsivePortion(1.5),
                          },
                        ]}>
                        POSTED BY:
                      </Text>
                      <Text style={[styles.mediumText, {color: '#444444'}]}>
                        {item.poster}
                      </Text>
                    </View>
                    <View style={{flex: 1}}>
                      <Text
                        style={[
                          styles.normalText,
                          {
                            color: '#444444',
                            letterSpacing: responsivePortion(1.5),
                          },
                        ]}>
                        DATE POSTED:
                      </Text>
                      <Text style={[styles.mediumText, {color: '#444444'}]}>
                        {item.date}
                      </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={[
                    styles.fullButton,
                    {
                      width: '100%',
                      height: responsiveVerticalPortion(40),
                      marginTop: responsiveVerticalPortion(15),
                    },
                  ]}>
                  <Text
                    style={[
                      styles.normalText,
                      {fontSize: responsivePortion(12)},
                    ]}>
                    View Message
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </>
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
            {this.renderListView()}
          </ScrollView>
        </View>
      </BaseView>
    );
  }
}

export default Messages;
