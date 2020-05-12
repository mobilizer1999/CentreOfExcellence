import React from 'react';
import {TabView, SceneMap} from 'react-native-tab-view';
import PropTypes from 'prop-types';

export default class CustomTabView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      index,
      routes,
      renderScene,
      setIndex,
      initialLayout,
      tabBarComponent,
    } = this.props;
    return (
      <TabView
        navigationState={{index, routes}}
        renderTabBar={tabBarComponent}
        renderScene={SceneMap(renderScene)}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    );
  }
}

CustomTabView.defaultProps = {
  index: 0,
  tabBarComponent: null,
  initialLayout: null,
};

CustomTabView.propTypes = {
  index: PropTypes.number.isRequired,
  routes: PropTypes.array.isRequired,
  renderScene: PropTypes.instanceOf(Object).isRequired,
  setIndex: PropTypes.func.isRequired,
  initialLayout: PropTypes.instanceOf(Object),
  tabBarComponent: PropTypes.instanceOf(Object),
};
