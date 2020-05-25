import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import {BaseView} from '@components/Base';
import HeaderView from '@components/HeaderView';
import {styles} from './styles';

class CustomWebView extends React.Component {
  constructor(props) {
    super(props);
    const {navigation} = props;
    const {url} = navigation.state.params;
    this.state = {
      loading: true,
      url,
    };
  }

  componentWillUpdate(nextProps, prevState) {
    const {params} = nextProps.navigation.state;
    if (params.url !== prevState.url) {
      this.setState({
        url: params.url,
      });
    }
  }

  onPressBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  render() {
    const {url} = this.state;
    return (
      <BaseView>
        <View style={styles.container}>
          <HeaderView showBack onPressMenu={this.onPressBack} />
          <View
            style={[
              styles.container,
              {alignItems: 'center', justifyContent: 'center'},
            ]}>
            <WebView
              ref={(webview) => (this.webview = webview)}
              source={{uri: url}}
              style={styles.webview}
              scalesPageToFit
              javaScriptEnabled={true}
              renderLoading={() => (
                <ActivityIndicator style={styles.webviewLoading} size="large" />
              )}
              startInLoadingState
              mixedConentMode={'compatibility'}
            />
          </View>
        </View>
      </BaseView>
    );
  }
}

export default CustomWebView;
