import React from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
// import DocumentPicker from 'react-native-document-picker';
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

const QUESTIONTYPES = {
  OPTION: 0,
  WRITING: 1,
};

const stepQustions = [
  {
    question: 'The Nicaraguan Schook for The Deaf was established in:',
    type: QUESTIONTYPES.OPTION,
    options: [
      {
        option: 'A. 1980',
        selected: false,
      },
      {
        option: 'B. 1990',
        selected: false,
      },
      {
        option: 'C. 1970',
        selected: false,
      },
      {
        option: 'D. 1955',
        selected: false,
      },
    ],
  },
  {
    question: 'Discuss the Nicaraguan School of the Deaf:',
    type: QUESTIONTYPES.WRITING,
  },
  {
    question:
      'American Sign Language and the Irish Sign Language are two examples of:',
    type: QUESTIONTYPES.OPTION,
    options: [
      {
        option:
          'A. Language des Signes Francaise (LSF) languages, which are completely autonomous to the BSL',
        selected: false,
      },
      {
        option:
          'B. Easy to learn sign languages that have a universally compatible grammar',
        selected: false,
      },
      {
        option: 'C. The earliest sign languages to be standardized',
        selected: false,
      },
      {
        option:
          'D. Sign Languages that evolved out of the British Sign Language',
        selected: false,
      },
    ],
  },
];

class Assessment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      questionStep: 0,
      stepQustions,
      writingQuestion: '',
      uploadFile: null,
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

  onPressSubmitAnswer = () => {
    const {navigation} = this.props;
    navigation.navigate('MyCourses');
  };

  onSelectOption = (index) => {
    const {questionStep, stepQustions} = this.state;
    const currentItem = stepQustions[questionStep];
    currentItem.options[index].selected = !currentItem.options[index].selected;
    stepQustions.splice(questionStep, 1, currentItem);
    this.setState({stepQustions});
  };

  onPressNext = () => {
    const {questionStep, stepQustions} = this.state;
    if (questionStep === stepQustions.length) {
      return;
    }
    this.setState({questionStep: questionStep + 1});
  };

  onPressPrev = () => {
    const {questionStep} = this.state;
    if (questionStep === 0) {
      return;
    }
    this.setState({questionStep: questionStep - 1});
  };

  onAttatchFile = async () => {
    // try {
    //   const res = await DocumentPicker.pick({
    //     type: [DocumentPicker.types.allFiles],
    //   });
    //   const file = {
    //     uri: res.uri,
    //     type: res.type,
    //     name: res.name,
    //   };
    //   this.setState({
    //     uploadFile: file,
    //   });
    // } catch (err) {
    //   if (DocumentPicker.isCancel(err)) {
    //     console.log('You cancelled document pick');
    //   } else {
    //     throw err;
    //   }
    // }
  };

  renderQuestionsHeader = () => {
    const {questionStep} = this.state;
    return (
      <View style={styles.questionInfo}>
        <TouchableOpacity
          style={[styles.backIconView, styles.rowView]}
          onPress={this.onPressBack}>
          <Image
            source={ICONS.BACK}
            resizeMode="contain"
            style={[styles.backIcon, {tintColor: Colors.blue}]}
          />
          <Text
            style={[
              styles.font12Normal,
              {color: Colors.blue, marginLeft: responsivePortion(16)},
            ]}>
            Course Overview
          </Text>
        </TouchableOpacity>
        <Text
          style={[
            styles.font12Normal,
            {
              fontWeight: 'bold',
              letterSpacing: responsivePortion(0.09),
              color: Colors.black100,
              marginTop: responsiveVerticalPortion(48),
            },
          ]}>
          Advanced Reflexology
        </Text>
        <Text
          style={[
            styles.largeText,
            {
              fontSize: responsivePortion(24),
              color: Colors.black,
              height: responsiveVerticalPortion(40),
            },
          ]}>
          Module 1 Assessment
        </Text>
        <View
          style={[styles.rowView, {marginTop: responsiveVerticalPortion(1)}]}>
          <Text style={[styles.normalText, {color: Colors.blue}]}>{`Question ${
            questionStep + 1
          }`}</Text>
          <Text
            style={[
              styles.normalText,
              {color: Colors.black, marginLeft: responsivePortion(32)},
            ]}>
            {'Marks Awarded: 1'}
          </Text>
        </View>
      </View>
    );
  };

  renderSticky = () => {
    const {questionStep, stepQustions} = this.state;
    return (
      <View
        style={[
          styles.bottomSticky,
          {
            height:
              questionStep === stepQustions.length
                ? responsiveVerticalPortion(120)
                : responsiveVerticalPortion(67),
          },
        ]}>
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
        {questionStep === stepQustions.length && (
          <View
            style={{
              height: responsiveVerticalPortion(53),
              alignItems: 'center',
              paddingHorizontal: DEVICE_SIZE.CONTENT_PADDING,
            }}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  height: responsiveVerticalPortion(40),
                  width: '100%',
                  backgroundColor: Colors.green,
                },
              ]}
              onPress={this.onPressSubmitAnswer}>
              <Text style={styles.font12Normal}>Submit Answers</Text>
            </TouchableOpacity>
          </View>
        )}
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

  renderContent = () => {
    const {questionStep, stepQustions} = this.state;
    if (questionStep === stepQustions.length) {
      return this.renderFinal();
    }
    const currentItem = stepQustions[questionStep];
    if (!currentItem) {
      return null;
    }
    if (currentItem.type === QUESTIONTYPES.OPTION) {
      return this.renderOption(currentItem);
    } else if (currentItem.type === QUESTIONTYPES.WRITING) {
      return this.renderWriting(currentItem);
    }
  };

  renderOption = (item) => {
    return (
      <>
        <View style={[styles.searchView, {marginTop: responsivePortion(19)}]}>
          <Text
            style={[
              styles.normalText,
              {
                fontSize: responsivePortion(16),
                letterSpacing: responsivePortion(0.5),
                color: Colors.black200,
                marginBottom: responsivePortion(28),
              },
            ]}>
            {item.question}
          </Text>
          {item.options.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.rowView,
                {
                  paddingHorizontal: responsivePortion(16),
                  paddingVertical: responsivePortion(8),
                  borderWidth: 1,
                  borderRadius: responsivePortion(2),
                  borderColor: item.selected ? Colors.blue : Colors.disabled,
                  marginBottom: responsivePortion(20),
                  backgroundColor: item.selected ? Colors.blue : Colors.white,
                },
              ]}
              onPress={() => this.onSelectOption(index)}>
              <View
                style={[
                  styles.optionView,
                  {borderColor: item.selected ? Colors.white : Colors.disabled},
                ]}>
                <View style={styles.option} />
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={[
                    styles.normalText,
                    {
                      fontSize: responsivePortion(14),
                      letterSpacing: responsivePortion(0.25),
                      color: item.selected ? Colors.white : Colors.black,
                    },
                  ]}>
                  {item.option}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        {this.renderStepButtons()}
      </>
    );
  };

  renderStepButtons = () => {
    const {questionStep, stepQustions} = this.state;
    return (
      <View style={styles.stepButtonView}>
        <TouchableOpacity
          style={[styles.rowView, {flex: 1}]}
          disabled={questionStep === 0}
          onPress={this.onPressPrev}>
          <Image
            source={ICONS.BACK}
            resizeMode="contain"
            style={[
              styles.backIcon,
              {tintColor: questionStep === 0 ? Colors.disabled : Colors.blue},
            ]}
          />
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={[
                styles.font12Normal,
                {color: questionStep === 0 ? Colors.disabled : Colors.blue},
              ]}>
              Previous
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separateView} />
        <TouchableOpacity
          style={[styles.rowView, {flex: 1}]}
          disabled={questionStep === stepQustions.length}
          onPress={this.onPressNext}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={[
                styles.font12Normal,
                {
                  color:
                    questionStep === stepQustions.length
                      ? Colors.disabled
                      : Colors.blue,
                },
              ]}>
              NEXT
            </Text>
          </View>
          <Image
            source={ICONS.RIGHTARROW}
            resizeMode="contain"
            style={[
              styles.backIcon,
              {
                tintColor:
                  questionStep === stepQustions.length
                    ? Colors.disabled
                    : Colors.blue,
              },
            ]}
          />
        </TouchableOpacity>
      </View>
    );
  };

  renderFinal = () => {
    const {uploadFile} = this.state;
    return (
      <>
        <View
          style={[
            styles.searchView,
            {marginTop: responsiveVerticalPortion(19)},
          ]}>
          <Text
            style={[
              styles.normalText,
              {
                fontSize: responsivePortion(16),
                letterSpacing: responsivePortion(0.5),
                color: Colors.black200,
              },
            ]}>
            {'Upload your essay on your chosen topic'}
          </Text>
          <TouchableOpacity
            style={[
              styles.uploadButton,
              {borderColor: uploadFile ? Colors.green : Colors.disabled},
            ]}
            disabled={uploadFile}
            onPress={this.onAttatchFile}>
            <Text
              style={[
                styles.normalText,
                {
                  fontSize: responsivePortion(14),
                  letterSpacing: responsivePortion(0.25),
                  opacity: 0.5,
                  color: Colors.black,
                },
              ]}>
              {uploadFile ? uploadFile.name : 'Upload a file'}
            </Text>
            {uploadFile ? (
              <Text
                style={[
                  styles.normalText,
                  {color: Colors.red, letterSpacing: responsivePortion(0.33)},
                ]}
                onPress={() => this.setState({uploadFile: null})}>
                Remove
              </Text>
            ) : (
              <Image
                source={ICONS.UPLOAD}
                resizeMode="contain"
                style={[styles.icon, {tintColor: Colors.blue}]}
              />
            )}
          </TouchableOpacity>
          <Text
            style={[
              styles.font12Normal,
              {
                fontWeight: 'bold',
                color: '#000000',
                marginTop: responsivePortion(8),
              },
            ]}>
            Please only upload the following
          </Text>
          <Text
            style={[
              styles.font12Normal,
              {
                color: Colors.black,
                marginTop: responsivePortion(8),
              },
            ]}>
            .txt .pdf .jpg / .jpeg .png .docx .odm
          </Text>
          <View style={styles.noteView}>
            <Text
              style={[
                styles.font12Normal,
                {fontWeight: 'bold', color: Colors.black200},
              ]}>
              Important
            </Text>
            <Text
              style={[
                styles.normalText,
                {
                  letterSpacing: responsivePortion(0.33),
                  color: Colors.black200,
                  marginTop: responsivePortion(5),
                },
              ]}>
              {
                'Once you have pressed "Submit answers" (in the last question) and your assessment has been graded, you will no longer be able to access the assessment. If you wish to keep a record of your answers for your own reference, we suggest that you copy and paste them into a word document (or similar) which you can then save on your own computer/device and refer to at your leisure.'
              }
            </Text>
          </View>
        </View>
        {this.renderStepButtons()}
      </>
    );
  };

  renderWriting = (item) => {
    const {writingQuestion} = this.state;
    return (
      <>
        <View
          style={[
            styles.searchView,
            {marginTop: responsiveVerticalPortion(19)},
          ]}>
          <Text
            style={[
              styles.normalText,
              {
                fontSize: responsivePortion(16),
                letterSpacing: responsivePortion(0.5),
                color: Colors.black200,
                marginBottom: responsivePortion(28),
              },
            ]}>
            {item.question}
          </Text>
        </View>
        <View style={styles.writingView}>
          <TextInput
            value={writingQuestion}
            style={styles.textInput}
            multiline
            placeholder="Start writing here"
            placeholderTextColor="#BEBEBE"
            numberOfLines={20}
            autoCapitalize="sentences"
            underlineColorAndroid="transparent"
            autoCorrect
            textAlignVertical="top"
            returnKeyType="done"
            onChangeText={(text) =>
              this.setState({
                writingQuestion: text,
              })
            }
          />
        </View>
        {this.renderStepButtons()}
      </>
    );
  };

  render() {
    const {stepQustions, questionStep} = this.state;
    return (
      <BaseView>
        <View style={styles.container}>
          <HeaderView onPressMenu={this.onPressMenu} />
          <ScrollView
            style={[
              styles.scrollView,
              {
                marginBottom:
                  questionStep === stepQustions.length
                    ? responsiveVerticalPortion(120)
                    : responsiveVerticalPortion(67),
              },
            ]}
            showsVerticalScrollIndicator={false}>
            {this.renderQuestionsHeader()}
            {this.renderContent()}
          </ScrollView>
          {this.renderSticky()}
          {this.renderModal()}
        </View>
      </BaseView>
    );
  }
}

export default Assessment;
