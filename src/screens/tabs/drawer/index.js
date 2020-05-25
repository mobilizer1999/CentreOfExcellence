import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import DropDownItem from '@components/DropDownItem';
import PickerField from '@components/PickerField';
import SvgCategory from '@components/categories';
import {styles} from './styles';
import {responsivePortion, responsiveVerticalPortion} from '@config/constants';
import ICONS from '@config/icons';
import Colors from '@config/colors';
import {COE_URL} from '@config/global';

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
        icon: 'aromatherapy-courses',
      },
      {
        name: 'Reflexology',
        icon: 'reflexology-courses',
      },
      {
        name: 'Energy Healing',
        icon: 'energy-healing-courses',
      },
      {
        name: 'Massage',
        icon: 'massage-courses',
      },
      {
        name: 'Autism & Special Needs',
        icon: 'autism-special-needs-courses',
      },
      {
        name: 'Reiki',
        icon: 'reiki-courses',
      },
      {
        name: 'Life Coaching',
        icon: 'life-coaching-courses',
      },
      {
        name: 'CBT: Coginitive Behavioural',
        icon: 'cbt-courses',
      },
      {
        name: 'Mindfullness',
        icon: 'mindfulness-courses',
      },
      {
        name: 'Psychic & Supernatural',
        icon: 'psychic-development-courses',
      },
      {
        name: 'Beauty Therapy',
        icon: 'beauty-therapy-courses',
      },
      {
        name: 'Holistic Therapy',
        icon: 'holistic-therapy-courses',
      },
      {
        name: 'Counselling',
        icon: 'counselling-courses',
      },
      {
        name: 'Psychology',
        icon: 'psychology-courses',
      },
      {
        name: 'Diet & Nutrition',
        icon: 'diet-nutrition-courses',
      },
      {
        name: 'Nuero Linguistics',
        icon: 'nlp-practitioner-courses',
      },
      {
        name: 'Hypnotherapy',
        icon: 'hypnotherapy-courses',
      },
      {
        name: 'Animal Care',
        icon: 'animal-care-courses',
      },
      {
        name: 'Hobby & Craft',
        icon: 'hobby-craft-courses',
      },
      {
        name: 'Writing',
        icon: 'writing-courses',
      },
      {
        name: 'Fitness & Wellbeing',
        icon: 'fitness-courses',
      },
      {
        name: 'Business, Marketing & PR',
        icon: 'business-marketing-pr-courses',
      },
      {
        name: 'History',
        icon: 'history-courses',
      },
      {
        name: 'Audio Books',
        icon: 'self-help-audio-books',
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
        target: 'about',
      },
      {
        name: 'Blog',
        icon: null,
        target: 'blog',
      },
      {
        name: 'CoE Awards',
        icon: null,
        target: 'awards',
      },
      {
        name: 'Careers',
        icon: null,
        target: 'careers',
      },
      {
        name: 'Contact',
        icon: null,
        target: 'contact',
      },
      {
        name: 'Support',
        icon: null,
        target: 'support',
      },
    ],
    expanded: false,
    route: 'CustomWebView',
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

  onPressDropdownMenu = (route, target) => {
    const {navigation} = this.props;
    if (route && route === 'CustomWebView') {
      const url = `${COE_URL}/${target}/`;
      navigation.toggleDrawer();
      navigation.navigate(route, {url});
    }
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
                              style={styles.subItemView}
                              onPress={() =>
                                this.onPressDropdownMenu(
                                  item.route,
                                  subitem.target,
                                )
                              }>
                              {subitem.icon && (
                                <SvgCategory
                                  courseName={subitem.icon}
                                  size={responsivePortion(16)}
                                  color={Colors.white}
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
