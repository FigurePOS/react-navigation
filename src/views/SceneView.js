/* @flow */

import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

import type {
  NavigationScreenProp,
  NavigationRoute,
  NavigationAction,
  NavigationNavigatorProps,
} from '../TypeDefinition';

type Props = {
  screenProps?: {},
  navigation: NavigationScreenProp<NavigationRoute, NavigationAction>,
  component: ReactClass<NavigationNavigatorProps<NavigationRoute>>,
};

export default class SceneView extends PureComponent<void, Props, void> {
  props: Props;

  render() {
    const { screenProps, navigation, component: Component } = this.props;

    return <Component screenProps={screenProps} navigation={navigation} />;
  }
}
