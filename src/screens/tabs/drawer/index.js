import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import DropDownItem from '@components/DropDownItem';
import PickerField from '@components/PickerField';
import {styles} from './styles';
import {responsivePortion, responsiveVerticalPortion} from '@config/constants';
import ICONS from '@config/icons';

const logoImg = require('@assets/logo/logo.png');
const avatarImg = require('@assets/profile/avatar.png');

const socialIcons = [
  ICONS.SOCIAL_FB,
  ICONS.SOCIAL_TW,
  ICONS.SOCIAL_INSTA,
  ICONS.SOCIAL_YOU,
  ICONS.SOCIAL_IN,
];

const currencies = [
  {
    label: 'GBP  £',
    value: 0,
  },
  {
    label: 'USD $',
    value: 1,
  },
];

const dropDownData = [
  {
    title: 'Course Categories',
    items: [
      {
        name: 'Aromatherapy',
        icon: ICONS.AROMA,
      },
      {
        name: 'Reflexology',
        icon: ICONS.REFLEXOLOGY,
      },
      {
        name: 'Energy Healing',
        icon: ICONS.ENERGY,
      },
      {
        name: 'Massage',
        icon: ICONS.MASSAGE,
      },
      {
        name: 'Autism & Special Needs',
        icon: ICONS.AUTISM,
      },
      {
        name: 'Reiki',
        icon: ICONS.REIKI,
      },
      {
        name: 'Life Coaching',
        icon: ICONS.COACHING,
      },
      {
        name: 'CBT: Coginitive Behavioural',
        icon: ICONS.COGNITIVE,
      },
      {
        name: 'Mindfullness',
        icon: ICONS.COGNITIVE,
      },
      {
        name: 'Psychic & Supernatural',
        icon: ICONS.SUPERNATURAL,
      },
      {
        name: 'Beauty Therapy',
        icon: ICONS.BEAUTY,
      },
      {
        name: 'Holistic Therapy',
        icon: ICONS.LOVE,
      },
      {
        name: 'Counselling',
        icon: ICONS.COUNSELLING,
      },
      {
        name: 'Psychology',
        icon: ICONS.PSYCHOLOGY,
      },
      {
        name: 'Diet & Nutrition',
        icon: ICONS.DIET,
      },
      {
        name: 'Nuero Linguistics',
        icon: ICONS.NUERO,
      },
      {
        name: 'Hypnotherapy',
        icon: ICONS.EYE,
      },
      {
        name: 'Animal Care',
        icon: ICONS.ANIMAL,
      },
      {
        name: 'Hobby & Craft',
        icon: ICONS.HOBBY,
      },
      {
        name: 'Writing',
        icon: ICONS.EDIT,
      },
      {
        name: 'Fitness & Wellbeing',
        icon: ICONS.FITNESS,
      },
      {
        name: 'Business, Marketing & PR',
        icon: ICONS.BUSINESS,
      },
      {
        name: 'History',
        icon: ICONS.HISTORY,
      },
      {
        name: 'Audio Books',
        icon: ICONS.AUDIO,
      },
    ],
    expanded: false,
  },
  {
    title: 'My Courses',
    items: [
      {
        name: 'Audio Downloads',
        icon: null,
      },
      {
        name: 'Courses',
        icon: null,
      },
    ],
    expanded: false,
  },
  {
    title: 'Explore CoE',
    items: [
      {
        name: 'About CoE',
        icon: null,
      },
      {
        name: 'Blog',
        icon: null,
      },
      {
        name: 'CoE Awards',
        icon: null,
      },
      {
        name: 'Careers',
        icon: null,
      },
      {
        name: 'Contact',
        icon: null,
      },
      {
        name: 'Support',
        icon: null,
      },
    ],
    expanded: false,
  },
];

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [],
      selectedCurrency: 0,
    };
  }

  componentDidMount() {
    this.initCategories();
  }

  onCloseDrawer = () => {
    const {navigation} = this.props;
    navigation.toggleDrawer();
  };

  initCategories = () => {
    this.setState({
      categoryData: dropDownData,
    });
  };

  onPressToggleCategory = (index) => {
    const {categoryData} = this.state;
    const chnData = categoryData[index];
    chnData.expanded = !chnData.expanded;
    this.setState({categoryData});
  };

  render() {
    const {categoryData, selectedCurrency} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.statusbar} />
        <View style={styles.navigationView}>
          <TouchableOpacity style={styles.rowView} onPress={this.onCloseDrawer}>
            <Image
              source={ICONS.CLOSE}
              resizeMode="contain"
              style={styles.icon}
            />
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
          <Image source={logoImg} resizeMode="contain" style={styles.logo} />
        </View>
        <View style={styles.scrollView}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.topView}>
              <View style={styles.categoryView}>
                {categoryData.map((item, index) => {
                  return (
                    <View key={index}>
                      <DropDownItem
                        key={index}
                        headerStyle={styles.rowView}
                        invisibleImage={ICONS.DOWN}
                        visibleImage={ICONS.UP}
                        header={
                          <View style={styles.category}>
                            <Text style={styles.boldText}>{item.title}</Text>
                          </View>
                        }>
                        {item.items.map((subitem, subindex) => {
                          return (
                            <TouchableOpacity
                              key={subindex}
                              style={styles.subItemView}>
                              {subitem.icon && (
                                <Image
                                  source={subitem.icon}
                                  resizeMode="contain"
                                  style={[
                                    styles.icon,
                                    {
                                      width: responsivePortion(18),
                                      height: responsivePortion(18),
                                    },
                                  ]}
                                />
                              )}
                              <Text
                                style={[
                                  styles.closeText,
                                  {
                                    fontSize: responsivePortion(12),
                                    marginLeft: subitem.icon
                                      ? responsivePortion(17)
                                      : 0,
                                  },
                                ]}>
                                {subitem.name}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </DropDownItem>
                    </View>
                  );
                })}
              </View>
              <View style={styles.lineView}>
                <View style={styles.line} />
              </View>
              <View style={styles.categoryView}>
                <TouchableOpacity style={styles.category}>
                  <Text
                    style={[
                      styles.closeText,
                      {fontSize: responsivePortion(12)},
                    ]}>
                    My Orders
                  </Text>
                </TouchableOpacity>
                <View
                  style={[styles.rowView, {justifyContent: 'space-between'}]}>
                  <TouchableOpacity style={styles.category}>
                    <Text
                      style={[
                        styles.closeText,
                        {fontSize: responsivePortion(12)},
                      ]}>
                      Currency
                    </Text>
                  </TouchableOpacity>
                  <PickerField
                    style={styles.currencyDropDown}
                    data={currencies}
                    width={responsivePortion(100)}
                    value={selectedCurrency}
                    onValueChange={(value) => {
                      this.setState({selectedCurrency: value});
                    }}
                  />
                </View>
                <TouchableOpacity style={[styles.category, {marginBottom: 0}]}>
                  <Text
                    style={[
                      styles.closeText,
                      {fontSize: responsivePortion(12)},
                    ]}>
                    Settings
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.categoryView, {borderBottomWidth: 0}]}>
                <Text
                  style={[
                    styles.boldText,
                    {marginTop: responsiveVerticalPortion(20)},
                  ]}>
                  Follow Us
                </Text>
                <View
                  style={[
                    styles.category,
                    {
                      justifyContent: 'space-between',
                      paddingHorizontal: responsivePortion(10),
                    },
                  ]}>
                  {socialIcons.map((icon, index) => (
                    <TouchableOpacity key={index}>
                      <Image
                        source={icon}
                        resizeMode="contain"
                        style={[
                          styles.icon,
                          {
                            width: responsivePortion(17),
                            height: responsivePortion(17),
                          },
                        ]}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
            <View style={styles.avatarView}>
              <View style={styles.rowView}>
                <Image
                  source={avatarImg}
                  resizeMode="contain"
                  style={styles.avatar}
                />
                <View style={{flex: 1, marginLeft: responsivePortion(12)}}>
                  <Text style={styles.boldText}>Beatrice Tyler</Text>
                  <Text
                    style={[
                      styles.closeText,
                      {marginLeft: 0, textDecorationLine: 'underline'},
                    ]}>
                    Edit Profile
                  </Text>
                </View>
              </View>
              <View style={styles.versionView}>
                <Text
                  style={[styles.closeText, {fontSize: responsivePortion(8)}]}>
                  Version 1.0
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Drawer;
