import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import DropDownItem from '@components/DropDownItem';
import PickerField from '@components/PickerField';
import {styles} from './styles';
import {responsivePortion, responsiveVerticalPortion} from '@config/constants';
import Colors from '@config/colors';

const closeIcon = require('@assets/icons/cancel.png');
const downIcon = require('@assets/icons/down.png');
const logoImg = require('@assets/logo/logo.png');
const facebookIcon = require('@assets/icons/facebook.png');
const avatarImg = require('@assets/profile/avatar.png');

const socialIcons = [
  facebookIcon,
  facebookIcon,
  facebookIcon,
  facebookIcon,
  facebookIcon,
];

const currencies = [
  {
    label: 'GBP  £',
    value: 'GBP  £',
  },
  {
    label: 'USD $',
    value: 'USD $',
  },
  {
    label: 'GBP  £',
    value: 'GBP  £',
  },
  {
    label: 'USD $',
    value: 'USD $',
  },
];

const dropDownData = [
  {
    title: 'Course Categories',
    items: [
      {
        name: 'Aromatherapy',
        icon: closeIcon,
      },
      {
        name: 'Reflexology',
        icon: closeIcon,
      },
      {
        name: 'Energy Healing',
        icon: closeIcon,
      },
      {
        name: 'Message',
        icon: closeIcon,
      },
    ],
    expanded: false,
  },
  {
    title: 'My Courses',
    items: [
      {
        name: 'Aromatherapy',
        icon: closeIcon,
      },
      {
        name: 'Reflexology',
        icon: closeIcon,
      },
      {
        name: 'Energy Healing',
        icon: closeIcon,
      },
      {
        name: 'Message',
        icon: closeIcon,
      },
    ],
    expanded: false,
  },
  {
    title: 'General Settings',
    items: [
      {
        name: 'Aromatherapy',
        icon: closeIcon,
      },
      {
        name: 'Reflexology',
        icon: closeIcon,
      },
      {
        name: 'Energy Healing',
        icon: closeIcon,
      },
      {
        name: 'Message',
        icon: closeIcon,
      },
    ],
    expanded: false,
  },
  {
    title: 'Explore CoE',
    items: [
      {
        name: 'Aromatherapy',
        icon: closeIcon,
      },
      {
        name: 'Reflexology',
        icon: closeIcon,
      },
      {
        name: 'Energy Healing',
        icon: closeIcon,
      },
      {
        name: 'Message',
        icon: closeIcon,
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
      selectedCurrency: '',
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
              source={closeIcon}
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
                        invisibleImage={downIcon}
                        visibleImage={downIcon}
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
                              <Image
                                source={subitem.icon}
                                resizeMode="contain"
                                style={styles.icon}
                              />
                              <Text style={styles.closeText}>
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
                  <Text style={styles.closeText}>My Orders</Text>
                </TouchableOpacity>
                <View
                  style={[styles.rowView, {justifyContent: 'space-between'}]}>
                  <TouchableOpacity style={styles.category}>
                    <Text style={styles.closeText}>Currency</Text>
                  </TouchableOpacity>
                  <PickerField
                    style={styles.currencyDropDown}
                    data={currencies}
                    value={selectedCurrency}
                    onValueChange={(value) => {
                      this.setState({selectedCurrency: value});
                    }}
                  />
                </View>
                <TouchableOpacity style={[styles.category, {marginBottom: 0}]}>
                  <Text style={styles.closeText}>Settings</Text>
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
                        style={styles.icon}
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
                <Text style={styles.closeText}>Version 1.0</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Drawer;
