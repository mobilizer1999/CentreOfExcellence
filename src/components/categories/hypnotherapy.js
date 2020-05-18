import React from 'react';
import Svg, {Path, G, Circle} from 'react-native-svg';

export default function (props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 14"
      stroke={props.color}
      xmlns="http://www.w3.org/2000/svg">
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1-2" data-name="Layer 1">
          <Path
            class="cls-1"
            d="M23.5,7S18.35,13.5,12,13.5.5,7,.5,7,5.65.5,12,.5,23.5,7,23.5,7Z"
          />
          <Circle class="cls-1" cx="12" cy="7" r="4" />
        </G>
      </G>
    </Svg>
  );
}
