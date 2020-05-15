import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';
import {BaseView} from '@components/Base';
import HeaderView from '@components/HeaderView';
import ImageView from '@components/ImageView';
import CustomTabView from '@components/TabView';
import ProgressBar from '@components/ProgressBar';
import {ModalView} from '@components/Modal';
import DropDownItem from '@components/DropDownItem';
import {SearchBar} from '@components/SearchBar';
import {styles} from './styles';
import ICONS from '@config/icons';
import {
  DEVICE_SIZE,
  responsivePortion,
  responsiveVerticalPortion,
} from '@config/constants';
import Colors from '@config/colors';

const courseImg = require('@assets/images/dummy1.png');

const courseData = [
  {
    title: 'Blogging',
    parts: [
      {
        title: 'What is blogging',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 100,
      },
      {
        title: 'What you should know',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 25,
      },
      {
        title: 'A short history of the Blogosphere',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 0,
      },
      {
        title: 'Summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 0,
      },
    ],
  },
  {
    title: 'Structure of the Body',
    parts: [
      {
        title: 'What is blogging',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 100,
      },
      {
        title: 'What you should know',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 100,
      },
      {
        title: 'A short history of the Blogosphere',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 50,
      },
      {
        title: 'Summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 0,
      },
    ],
  },
  {
    title: 'Mechanism of Action',
    parts: [
      {
        title: 'What is blogging',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 100,
      },
      {
        title: 'What you should know',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 100,
      },
      {
        title: 'A short history of the Blogosphere',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 25,
      },
      {
        title: 'Summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 0,
      },
      {
        title: 'A short history of the Blogosphere',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 0,
      },
      {
        title: 'Summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 0,
      },
    ],
  },
  {
    title: 'Advancing practice',
    parts: [
      {
        title: 'What is blogging',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 25,
      },
      {
        title: 'What you should know',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 0,
      },
    ],
  },
  {
    title: 'Clinical Observation',
    parts: [
      {
        title: 'What is blogging',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 100,
      },
      {
        title: 'What you should know',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 50,
      },
      {
        title: 'What you should know',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 0,
      },
    ],
  },
  {
    title: 'Reflexology and Pregnancy',
    parts: [
      {
        title: 'What is blogging',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 100,
      },
      {
        title: 'What you should know',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 100,
      },
      {
        title: 'A short history of the Blogosphere',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 50,
      },
      {
        title: 'Summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        progress: 0,
      },
    ],
  },
];

class CourseProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routeIndex: 0,
      searchCriteria: '',
      modalVisible: false,
      modalStep: 0,
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

  onPressSubmitCourse = () => {
    this.setState({
      modalStep: 1,
    });
  };

  onPressGoMyCourses = () => {
    this.setState(
      {
        modalVisible: false,
        modalStep: 0,
      },
      () => {
        const {navigation} = this.props;
        navigation.navigate('MyCourses');
      },
    );
  };

  onPressPartItem = (part) => {
    const {navigation} = this.props;
    if (part.progress === 100) {
      navigation.navigate('EditAnswer');
    } else {
      navigation.navigate('Assessment');
    }
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
          source={courseImg}>
          <View style={styles.courseMark}>
            <Text
              style={[
                styles.smallText,
                {letterSpacing: responsivePortion(1.2)},
              ]}>
              COURSES
            </Text>
          </View>
          <Text
            style={[
              styles.largeText,
              {
                fontSize: responsivePortion(20),
                marginTop: responsiveVerticalPortion(15),
                textAlign: 'center',
                letterSpacing: responsivePortion(0.15),
              },
            ]}
            numberOfLines={2}>
            Advanced Reflexology Diploma Course
          </Text>
        </ImageView>
      </View>
    );
  };

  renderTabBar = () => {
    const {routeIndex, searchCriteria} = this.state;
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
                Make A Suggestion
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
                Make A Question
              </Text>
            </TouchableHighlight>
          </View>
        </View>
        <View
          style={[styles.searchView, {marginVertical: responsivePortion(24)}]}>
          <SearchBar
            search={searchCriteria}
            placeholder="Search all courses"
            onChange={this.onChangeSearch}
          />
        </View>
      </View>
    );
  };

  overviewRoute = () => {
    const {routeIndex} = this.state;
    if (routeIndex !== 0) {
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
        {courseData.map((item, index) => {
          const completions = item.parts.filter(
            (item) => item.progress === 100,
          );
          const progress = item.parts.filter(
            (item) => item.progress !== 100 && item.progress !== 0,
          );
          const notstarted = item.parts.filter((item) => item.progress === 0);
          return (
            <View key={index}>
              <DropDownItem
                contentVisible={false}
                headerStyle={[
                  styles.dropdownHeader,
                  {
                    backgroundColor:
                      index % 2 === 0 ? Colors.mainbackground : Colors.white,
                  },
                ]}
                iconStyle={styles.dropdownIcon}
                invisibleImage={ICONS.DOWN}
                visibleImage={ICONS.UP}
                header={
                  <View>
                    <View
                      style={[
                        styles.rowView,
                        {
                          flex: 1,
                          marginLeft: responsivePortion(25),
                          width:
                            DEVICE_SIZE.CONTENT_WIDTH - responsivePortion(25),
                          justifyContent: 'space-between',
                        },
                      ]}>
                      <Text
                        style={[
                          styles.font12Normal,
                          {color: Colors.black, fontWeight: 'bold'},
                        ]}>
                        {item.title}
                      </Text>
                      <Text
                        style={[
                          styles.font12Normal,
                          {color: '#949494'},
                        ]}>{`${item.parts.length} parts`}</Text>
                    </View>
                    <View
                      style={[
                        styles.rowView,
                        {
                          flex: 1,
                          width: DEVICE_SIZE.CONTENT_WIDTH,
                          justifyContent: 'space-between',
                        },
                      ]}>
                      <View style={styles.rowView}>
                        <View style={styles.complete}>
                          <Text
                            style={[styles.smallText, {fontWeight: 'bold'}]}>
                            {completions.length}
                          </Text>
                        </View>
                        <Text
                          style={[
                            styles.smallText,
                            {
                              color: '#444444',
                              letterSpacing: responsivePortion(1.2),
                              marginLeft: responsivePortion(8),
                            },
                          ]}
                          numberOfLines={1}>
                          COMPLETE
                        </Text>
                      </View>
                      <View style={styles.rowView}>
                        <View style={styles.inprogress}>
                          <Text
                            style={[styles.smallText, {fontWeight: 'bold'}]}>
                            {progress.length}
                          </Text>
                        </View>
                        <Text
                          style={[
                            styles.smallText,
                            {
                              color: '#444444',
                              letterSpacing: responsivePortion(1.2),
                              marginLeft: responsivePortion(8),
                            },
                          ]}
                          numberOfLines={1}>
                          IN PROGRESS
                        </Text>
                      </View>
                      <View style={styles.rowView}>
                        <View style={styles.notstarted}>
                          <Text
                            style={[
                              styles.smallText,
                              {
                                color: '#444444',
                                fontWeight: 'bold',
                              },
                            ]}>
                            {notstarted.length}
                          </Text>
                        </View>
                        <Text
                          style={[
                            styles.smallText,
                            {
                              color: '#444444',
                              letterSpacing: responsivePortion(1.2),
                              marginLeft: responsivePortion(8),
                            },
                          ]}
                          numberOfLines={1}>
                          NOT STARTED
                        </Text>
                      </View>
                    </View>
                  </View>
                }>
                <View
                  key={index}
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? Colors.white : Colors.mainbackground,
                  }}>
                  <View
                    style={{paddingHorizontal: DEVICE_SIZE.CONTENT_PADDING}}>
                    {item.parts.map((part, index) => {
                      return (
                        <View
                          key={index}
                          style={[
                            styles.dropdownItem,
                            {
                              borderBottomWidth:
                                index === item.parts.length - 1 ? 0 : 1,
                            },
                          ]}>
                          <View style={styles.rowView}>
                            <View
                              style={
                                part.progress === 100
                                  ? styles.complete
                                  : part.progress === 0
                                  ? styles.notstarted
                                  : styles.inprogress
                              }>
                              {part.progress === 100 && (
                                <Image
                                  source={ICONS.CHECK}
                                  resizeMode="contain"
                                  style={{
                                    width: responsivePortion(8),
                                    height: responsivePortion(6),
                                    tintColor: Colors.white,
                                  }}
                                />
                              )}
                            </View>
                            <Text
                              style={[
                                styles.font12Normal,
                                {
                                  fontWeight: 'bold',
                                  color: Colors.blue,
                                  marginLeft: responsivePortion(8),
                                },
                              ]}>{`Part ${index + 1} - ${part.title}`}</Text>
                          </View>
                          <View
                            style={{
                              paddingLeft: responsivePortion(24),
                              marginTop: responsivePortion(8),
                            }}>
                            <Text
                              style={[
                                styles.font12Normal,
                                {color: Colors.black},
                              ]}>
                              {part.content}
                            </Text>
                          </View>
                          <TouchableOpacity
                            style={[
                              styles.button,
                              {
                                height: responsivePortion(40),
                                backgroundColor:
                                  part.progress === 100 ||
                                  (index !== 0 &&
                                    part.progress === 0 &&
                                    item.parts[index - 1].progress !== 0)
                                    ? Colors.blue
                                    : Colors.white,
                                borderWidth:
                                  part.progress === 100 ||
                                  (index !== 0 &&
                                    part.progress === 0 &&
                                    item.parts[index - 1].progress !== 0)
                                    ? 0
                                    : 1,
                                borderColor:
                                  part.progress === 0
                                    ? Colors.black100
                                    : Colors.blue,
                              },
                            ]}
                            disabled={
                              (index === 0 && part.progress === 0) ||
                              (index !== 0 &&
                                part.progress === 0 &&
                                item.parts[index - 1].progress === 0)
                            }
                            onPress={() => this.onPressPartItem(part)}>
                            <View style={styles.rowView}>
                              {!(
                                (index === 0 && part.progress === 0) ||
                                (index !== 0 &&
                                  part.progress === 0 &&
                                  item.parts[index - 1].progress !== 0)
                              ) && (
                                <Image
                                  source={
                                    part.progress === 100
                                      ? ICONS.EDIT
                                      : part.progress === 0 &&
                                        index !== 0 &&
                                        item.parts[index - 1].progress === 0
                                      ? ICONS.LOCKKEY
                                      : ICONS.PLAY
                                  }
                                  resizeMode="contain"
                                  style={[
                                    styles.icon16,
                                    {
                                      tintColor:
                                        part.progress === 100
                                          ? Colors.white
                                          : part.progress === 0
                                          ? Colors.black100
                                          : Colors.blue,
                                      marginRight: responsivePortion(7),
                                    },
                                  ]}
                                />
                              )}
                              {((index === 0 && part.progress === 0) ||
                                (index !== 0 &&
                                  part.progress === 0 &&
                                  item.parts[index - 1].progress !== 0)) && (
                                <Text style={styles.font12Normal}>Start</Text>
                              )}
                              {((index === 0 && part.progress === 0) ||
                                (index !== 0 &&
                                  part.progress === 0 &&
                                  item.parts[index - 1].progress === 0)) && (
                                <Text
                                  style={[
                                    styles.font12Normal,
                                    {
                                      color: Colors.black100,
                                    },
                                  ]}>{`Please Complete Part ${index}`}</Text>
                              )}
                              {part.progress === 100 && (
                                <Text style={styles.font12Normal}>
                                  Edit Answers
                                </Text>
                              )}
                              {part.progress !== 100 && part.progress !== 0 && (
                                <Text
                                  style={[
                                    styles.font12Normal,
                                    {color: Colors.blue},
                                  ]}>
                                  Continue Course
                                </Text>
                              )}
                            </View>
                          </TouchableOpacity>
                          {part.progress !== 100 && part.progress !== 0 && (
                            <View style={{marginTop: responsivePortion(19)}}>
                              <View
                                style={[
                                  styles.rowView,
                                  {
                                    justifyContent: 'space-between',
                                  },
                                ]}>
                                <Text
                                  style={[
                                    styles.smallText,
                                    {
                                      letterSpacing: responsivePortion(1.2),
                                      color: Colors.black,
                                    },
                                  ]}>
                                  COMPLETION
                                </Text>
                                <Text
                                  style={[
                                    styles.smallText,
                                    {
                                      letterSpacing: responsivePortion(1.2),
                                      color: Colors.black,
                                    },
                                  ]}>
                                  {`${part.progress}%`}
                                </Text>
                              </View>
                              <View
                                style={{
                                  marginTop: responsivePortion(14),
                                }}>
                                <ProgressBar
                                  borderRadius={responsivePortion(16)}
                                  progress={part.progress / 100}
                                  width={null}
                                  height={responsiveVerticalPortion(16)}
                                  color={Colors.green}
                                  unfilledColor={Colors.disabled}
                                  borderWidth={0}
                                />
                              </View>
                            </View>
                          )}
                        </View>
                      );
                    })}
                  </View>
                  <View style={styles.assessmentView}>
                    <View
                      style={{
                        height: '100%',
                        padding: responsivePortion(16),
                        backgroundColor: Colors.white,
                      }}>
                      <Text
                        style={[
                          styles.largeText,
                          {
                            fontSize: responsivePortion(14),
                            letterSpacing: responsivePortion(0.1),
                            color: Colors.blue,
                          },
                        ]}>
                        Module 1
                      </Text>
                      <Text
                        style={[
                          styles.largeText,
                          {
                            fontSize: responsivePortion(24),
                            letterSpacing: responsivePortion(0.1),
                            color: Colors.blue,
                            marginTop: responsivePortion(3),
                          },
                        ]}>
                        Assessment
                      </Text>
                      <TouchableHighlight
                        style={[
                          styles.button,
                          {
                            height: responsivePortion(40),
                            marginTop: responsivePortion(25),
                          },
                        ]}
                        underlayColor={Colors.background}>
                        <Text style={styles.font12Normal}>
                          Start Assessment
                        </Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                  <View style={{height: responsivePortion(50)}} />
                </View>
              </DropDownItem>
            </View>
          );
        })}
      </>
    );
  };

  suggestionRoute = () => {
    const {routeIndex} = this.state;
    if (routeIndex !== 1) {
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
    return <></>;
  };

  questionRoute = () => {
    const {routeIndex} = this.state;
    if (routeIndex !== 1) {
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
    return <></>;
  };

  renderCheckModal = () => {
    return (
      <View style={styles.modalContent}>
        <Image
          source={ICONS.IMPORTANT}
          resizeMode="contain"
          style={[
            styles.dialogIcon,
            {marginTop: responsiveVerticalPortion(3.9)},
          ]}
        />
        <Text
          style={[
            styles.largeText,
            {
              color: '#FF4D4D',
              letterSpacing: responsivePortion(0.15),
              height: responsiveVerticalPortion(37),
              marginTop: responsiveVerticalPortion(2.1),
            },
          ]}>
          Important
        </Text>
        <Text
          style={[
            styles.normalText,
            {
              color: Colors.black,
              letterSpacing: responsivePortion(0.33),
              textAlign: 'center',
              marginTop: responsiveVerticalPortion(9),
              height: responsiveVerticalPortion(144),
            },
          ]}>
          {
            'Once you have pressed "Submit answers" (in the last question) and your assessment has been graded, you will no longer be able to access the assessment. If you wish to keep a record of your answers for your own reference, we suggest that you copy and paste them into a word document (or similar) which you can then save on your own computer/device and refer to at your leisure.'
          }
        </Text>
        <View
          style={{
            flex: 1,
            marginTop: responsiveVerticalPortion(8),
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                height: responsiveVerticalPortion(56),
                backgroundColor: Colors.green,
                flexDirection: 'column',
              },
            ]}
            onPress={this.onPressSubmitCourse}>
            <Text style={styles.normalText}>I understand</Text>
            <Text style={[styles.font12Normal, {fontWeight: 'bold'}]}>
              Submit Course For Grading
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {
                height: responsiveVerticalPortion(40),
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: Colors.blue,
              },
            ]}
            onPress={() => {
              this.setState({modalVisible: false, modalStep: 0});
            }}>
            <Text style={[styles.font12Normal, {color: Colors.blue}]}>
              I Want to Review My Answers
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderSuccessModal = () => {
    return (
      <View
        style={[styles.modalContent, {height: responsiveVerticalPortion(276)}]}>
        <Image
          source={ICONS.SUCCESS}
          resizeMode="contain"
          style={[styles.dialogIcon, {marginTop: responsiveVerticalPortion(4)}]}
        />
        <Text
          style={[
            styles.largeText,
            {
              color: Colors.green,
              letterSpacing: responsivePortion(0.15),
              height: responsiveVerticalPortion(37),
              marginTop: responsiveVerticalPortion(3),
            },
          ]}>
          Success!
        </Text>
        <View style={{flex: 1, width: '100%', justifyContent: 'space-between'}}>
          <View
            style={{
              width: '100%',
              height: responsiveVerticalPortion(106),
              marginTop: responsiveVerticalPortion(9),
              justifyContent: 'space-between',
            }}>
            <Text
              style={[
                styles.normalText,
                {
                  color: '#444444',
                  letterSpacing: responsivePortion(0.33),
                  textAlign: 'center',
                },
              ]}>
              {
                'Your assessment has been submitted for grading. You will no longer be able to access the assessment, until it has been granted.'
              }
            </Text>
            <Text
              style={[
                styles.normalText,
                {
                  color: '#444444',
                  letterSpacing: responsivePortion(0.33),
                  textAlign: 'center',
                  marginTop: responsiveVerticalPortion(9),
                },
              ]}>
              {'We`ll send you a notification when your grades are ready.'}
            </Text>
            <Text
              style={[
                styles.normalText,
                {
                  color: '#444444',
                  letterSpacing: responsivePortion(0.33),
                  textAlign: 'center',
                  marginTop: responsiveVerticalPortion(9),
                },
              ]}>
              {'Good luck.'}
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.button, {height: responsiveVerticalPortion(40)}]}
            onPress={this.onPressGoMyCourses}>
            <Text style={styles.font12Normal}>Go to MyCourses</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderModal = () => {
    const {modalVisible, modalStep} = this.state;
    return (
      <ModalView
        visible={modalVisible}
        animationIn="zoomIn"
        animationOut="zoomOut"
        onBackdropPress={() => {
          this.setState({modalVisible: false, modalStep: 0});
        }}
        onBackButtonPress={() => {
          this.setState({modalVisible: false, modalStep: 0});
        }}>
        {modalStep === 0 ? this.renderCheckModal() : this.renderSuccessModal()}
      </ModalView>
    );
  };

  render() {
    const {routeIndex} = this.state;
    return (
      <BaseView>
        <View
          style={[styles.container, {backgroundColor: Colors.mainbackground}]}>
          <HeaderView onPressMenu={this.onPressMenu} />
          <ScrollView
            style={[
              styles.scrollView,
              {marginBottom: responsiveVerticalPortion(129)},
            ]}
            showsVerticalScrollIndicator={false}>
            {this.renderImageView()}
            <View
              style={[styles.searchView, {marginTop: responsivePortion(20)}]}>
              <Text
                style={[
                  styles.largeText,
                  {fontSize: responsivePortion(24), color: Colors.black},
                ]}>
                Welcome to the start of your learning journey.
              </Text>
              <Text
                style={[
                  styles.font12Normal,
                  {
                    color: '#444444',
                    marginTop: responsivePortion(20),
                  },
                ]}>
                {
                  'In this online portal you will find your complete course materials, including your course modules and assessment questions. Please work through each module, answering all of the assessment questions for the course.'
                }
              </Text>
              <TouchableHighlight
                style={[
                  styles.button,
                  {
                    marginTop: responsivePortion(20),
                  },
                ]}>
                <Text style={styles.font12Normal}>Learn More</Text>
              </TouchableHighlight>
            </View>
            <View style={{marginTop: responsivePortion(24)}}>
              <CustomTabView
                index={routeIndex}
                routes={[
                  {key: 'overview', title: 'Module Overview'},
                  {key: 'suggestion', title: 'Make A Suggestion'},
                  {key: 'question', title: 'Make A Question'},
                ]}
                renderScene={{
                  overview: this.overviewRoute,
                  suggestion: this.suggestionRoute,
                  question: this.questionRoute,
                }}
                setIndex={this.changeRouteIndex}
                tabBarComponent={this.renderTabBar}
              />
            </View>
          </ScrollView>
          <View style={styles.bottomSticky}>
            <View style={styles.shadowView} />
            <View style={styles.progressView}>
              <View
                style={[
                  styles.rowView,
                  {
                    justifyContent: 'space-between',
                  },
                ]}>
                <Text
                  style={[
                    styles.normalText,
                    {
                      letterSpacing: responsivePortion(1.2),
                      color: Colors.black,
                    },
                  ]}>
                  COMPLETION
                </Text>
                <Text
                  style={[
                    styles.normalText,
                    {
                      letterSpacing: responsivePortion(1.2),
                      color: Colors.black,
                    },
                  ]}>
                  {`75%`}
                </Text>
              </View>
              <View
                style={{
                  marginTop: responsivePortion(9),
                }}>
                <ProgressBar
                  borderRadius={responsivePortion(12)}
                  progress={75 / 100}
                  width={null}
                  height={responsiveVerticalPortion(12)}
                  color={Colors.green}
                  unfilledColor={Colors.disabled}
                  borderWidth={0}
                />
              </View>
            </View>
            <View
              style={{flex: 1, paddingHorizontal: DEVICE_SIZE.CONTENT_PADDING}}>
              <TouchableHighlight
                style={[styles.button, {height: responsiveVerticalPortion(40)}]}
                underlayColor={Colors.background}
                onPress={() => {
                  this.setState({modalVisible: true});
                }}>
                <Text style={styles.font12Normal}>
                  Submit Course For Grading
                </Text>
              </TouchableHighlight>
            </View>
          </View>
          {this.renderModal()}
        </View>
      </BaseView>
    );
  }
}

export default CourseProgress;
