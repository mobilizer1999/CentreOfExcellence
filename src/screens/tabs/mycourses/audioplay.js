import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {Slider} from 'react-native-elements';
import {BaseView} from '@components/Base';
import HeaderView from '@components/HeaderView';
import ImageView from '@components/ImageView';
import ICONS from '@config/icons';
import {
  responsivePortion,
  responsiveVerticalPortion,
  DEVICE_SIZE,
} from '@config/constants';
import {styles} from './styles';
import Colors from '@config/colors';

const backgroundImage = require('@assets/images/voice-sample.png');

class AudioPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
  }

  onPressBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  onPressMenu = () => {
    const {navigation} = this.props;
    navigation.toggleDrawer();
  };

  renderImageView = () => {
    return (
      <View
        style={{
          marginTop: responsiveVerticalPortion(16),
          alignItems: 'center',
        }}>
        <View style={styles.imageView}>
          <ImageView
            imageStyle={styles.subjectImage}
            activityIndicatorProps={{size: 'small'}}
            source={backgroundImage}
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
      </View>
    );
  };

  render() {
    return (
      <BaseView>
        <View style={styles.container}>
          <HeaderView onPressMenu={this.onPressMenu} />
          <View style={[styles.container, {backgroundColor: '#0B59A4'}]}>
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
                source={ICONS.DROPMENU}
                resizeMode="contain"
                style={styles.backIcon}
              />
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
              <View
                style={[styles.courseMark, {backgroundColor: Colors.white}]}>
                <Text
                  style={[
                    styles.smallText,
                    {
                      letterSpacing: responsivePortion(1.2),
                      color: Colors.blue,
                      fontWeight: 'bold',
                    },
                  ]}>
                  AROMATHERAPY
                </Text>
              </View>
            </View>
            {this.renderImageView()}
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                paddingHorizontal: DEVICE_SIZE.CONTENT_PADDING,
              }}>
              <Text
                style={[
                  styles.largeText,
                  {
                    fontSize: responsivePortion(14),
                    marginTop: responsiveVerticalPortion(15),
                  },
                ]}>
                Advanced Reflexology
              </Text>
              <Text
                style={[
                  styles.font12Normal,
                  {
                    color: Colors.white,
                    opacity: 0.5,
                    marginTop: responsivePortion(5),
                  },
                ]}>
                Module 1
              </Text>
              <Slider
                style={styles.slider}
                value={40}
                maximumTrackTintColor="#88C7FF"
                minimumTrackTintColor={Colors.white}
                minimumValue={0}
                maximumValue={140}
                step={1}
                thumbTintColor={Colors.white}
                trackStyle={{
                  height: responsivePortion(8),
                  borderRadius: responsivePortion(4),
                }}
                thumbStyle={{
                  width: responsivePortion(10),
                  height: responsivePortion(10),
                }}
              />
              <View
                style={[
                  styles.rowView,
                  {
                    justifyContent: 'space-between',
                    width: '100%',
                    marginTop: responsivePortion(-6),
                  },
                ]}>
                <Text
                  style={[
                    styles.smallText,
                    {letterSpacing: responsivePortion(1.2)},
                  ]}>
                  0:40
                </Text>
                <Text
                  style={[
                    styles.smallText,
                    {letterSpacing: responsivePortion(1.2)},
                  ]}>
                  2:20
                </Text>
              </View>
              <View
                style={[
                  styles.rowView,
                  {justifyContent: 'space-between', width: '100%', flex: 1},
                ]}>
                <TouchableOpacity>
                  <Image
                    source={ICONS.REPLAYBUTTON}
                    resizeMode="contain"
                    style={[styles.dialogIcon, {tintColor: Colors.white}]}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={ICONS.PREVPLAY}
                    resizeMode="contain"
                    style={[styles.icon16, {tintColor: Colors.white}]}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={ICONS.PLAYBUTTON}
                    resizeMode="contain"
                    style={{
                      width: responsivePortion(60),
                      height: responsivePortion(60),
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={ICONS.NEXTPLAY}
                    resizeMode="contain"
                    style={[styles.icon16, {tintColor: Colors.white}]}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={ICONS.REPEAT}
                    resizeMode="contain"
                    style={[styles.dialogIcon, {tintColor: Colors.white}]}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </BaseView>
    );
  }
}

export default AudioPlay;
