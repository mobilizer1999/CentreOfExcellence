import React from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import {BaseView} from '@components/Base';
import HeaderView from '@components/HeaderView';
import {ModalView} from '@components/Modal';
import ICONS from '@config/icons';
import {styles} from './styles';
import {
  responsivePortion,
  responsiveVerticalPortion,
  DEVICE_SIZE,
} from '@config/constants';
import Colors from '@config/colors';

const questions = [
  {
    question: 'Lorum Ipsum sit dolor',
    passed: 1,
  },
  {
    question: 'Lorum Ipsum sit dolor',
    passed: 1,
  },
  {
    question: 'Lorum Ipsum sit dolor',
    passed: 1,
  },
  {
    question: 'Lorum Ipsum sit dolor',
    passed: 0,
  },
  {
    question: 'Lorum Ipsum sit dolor',
    passed: 0,
  },
  {
    question: 'Lorum Ipsum sit dolor',
    passed: 0,
  },
  {
    question: 'Lorum Ipsum sit dolor',
    passed: 0,
  },
  {
    question: 'Lorum Ipsum sit dolor',
    passed: 0,
  },
  {
    question: 'Lorum Ipsum sit dolor',
    passed: 0,
  },
  {
    question: 'Lorum Ipsum sit dolor',
    passed: 0,
  },
  {
    question: 'Lorum Ipsum sit dolor',
    passed: 0,
  },
  {
    question: 'Lorum Ipsum sit dolor',
    passed: 0,
  },
  {
    question: 'Lorum Ipsum sit dolor',
    passed: 0,
  },
  {
    question: 'Lorum Ipsum sit dolor',
    passed: 0,
  },
  {
    question: 'Lorum Ipsum sit dolor',
    passed: 0,
  },
  {
    question: 'Lorum Ipsum sit dolor',
    passed: 0,
  },
  {
    question: 'Lorum Ipsum sit dolor',
    passed: 0,
  },
  {
    question: 'Lorum Ipsum sit dolor',
    passed: 0,
  },
  {
    question: 'Lorum Ipsum sit dolor',
    passed: 0,
  },
];

class Assessment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      questionStep: 0,
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

  renderSticky = () => {
    const {questionStep} = this.state;
    return (
      <View
        style={[styles.bottomSticky, {height: responsiveVerticalPortion(67)}]}>
        <View style={styles.shadowView} />
        <View style={styles.stickyContent}>
          <View style={[styles.rowView, {justifyContent: 'space-between'}]}>
            <Text style={[styles.font12Normal, {color: Colors.black200}]}>
              {`Question - ${questionStep + 1} / 19`}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({modalVisible: true});
              }}>
              <Image
                source={ICONS.UP}
                resizeMode="contain"
                style={[
                  styles.icon,
                  {
                    tintColor: Colors.black,
                    marginVertical: responsivePortion(5),
                  },
                ]}
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.normalText, {color: Colors.green}]}>
            This assignment is not completed yet
          </Text>
        </View>
      </View>
    );
  };

  renderModal = () => {
    const {modalVisible, questionStep} = this.state;
    return (
      <ModalView
        visible={modalVisible}
        onBackdropPress={() => {
          this.setState({modalVisible: false});
        }}
        onBackButtonPress={() => {
          this.setState({modalVisible: false});
        }}>
        <View style={styles.questionModal}>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: Colors.disabled,
              height: responsiveVerticalPortion(64),
              paddingHorizontal: DEVICE_SIZE.CONTENT_PADDING,
              paddingVertical: responsiveVerticalPortion(12),
              justifyContent: 'space-between',
            }}>
            <View style={[styles.rowView, {justifyContent: 'space-between'}]}>
              <Text style={[styles.font12Normal, {color: Colors.black200}]}>
                {`Question - ${questionStep + 1} / 19`}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.setState({modalVisible: false});
                }}>
                <Image
                  source={ICONS.DOWN}
                  resizeMode="contain"
                  style={[
                    styles.icon,
                    {
                      tintColor: Colors.black,
                      marginVertical: responsivePortion(5),
                    },
                  ]}
                />
              </TouchableOpacity>
            </View>
            <Text style={[styles.normalText, {color: Colors.green}]}>
              This assignment is not completed yet
            </Text>
          </View>
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            {questions.map((item, index) => {
              return (
                <View
                  key={index}
                  style={[
                    styles.questionItem,
                    {
                      marginBottom:
                        index === questions.length - 1
                          ? responsiveVerticalPortion(12)
                          : 0,
                    },
                  ]}>
                  <View style={styles.stickyContent}>
                    <Text
                      style={[
                        styles.font12Normal,
                        {color: Colors.black200},
                      ]}>{`Question ${index + 1}`}</Text>
                    <View
                      style={[
                        styles.rowView,
                        {
                          justifyContent: 'space-between',
                        },
                      ]}>
                      <View style={styles.rowView}>
                        <View
                          style={
                            item.passed ? styles.complete : styles.notstarted
                          }>
                          {item.passed === 1 && (
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
                              color: Colors.black200,
                              fontWeight: '600',
                              marginLeft: responsivePortion(8),
                            },
                          ]}>
                          {item.question}
                        </Text>
                      </View>
                      <TouchableOpacity>
                        <Image
                          source={ICONS.NEXT}
                          resizeMode="contain"
                          style={[
                            styles.icon,
                            {
                              tintColor: Colors.blue,
                              marginVertical: responsivePortion(5),
                            },
                          ]}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </ModalView>
    );
  };

  render() {
    return (
      <BaseView>
        <View style={styles.container}>
          <HeaderView onPressMenu={this.onPressMenu} />
          {this.renderSticky()}
          {this.renderModal()}
        </View>
      </BaseView>
    );
  }
}

export default Assessment;
