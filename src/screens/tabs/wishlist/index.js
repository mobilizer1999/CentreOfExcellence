import React from 'react';
import {View, Text} from 'react-native';
import {BaseView} from '@components/Base';
import HeaderView from '@components/HeaderView';
import {styles} from './styles';

class Wishlist extends React.Component {
  constructor(props) {
    super(props);
  }

  onPressMenu = () => {
    const {navigation} = this.props;
    navigation.toggleDrawer();
  };

  render() {
    return (
      <BaseView>
        <View style={styles.container}>
          <HeaderView onPressMenu={this.onPressMenu} />
        </View>
      </BaseView>
    );
  }
}

export default Wishlist;
