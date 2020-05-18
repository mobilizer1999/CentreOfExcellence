import React from 'react';
import Svg, {G, Polygon, Line} from 'react-native-svg';

export default function (props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 47 41"
      stroke={props.color}
      xmlns="http://www.w3.org/2000/svg">
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1-2" data-name="Layer 1">
          <Polygon
            class="cls-1"
            points="46.5 32.5 22.5 32.5 14.5 40.5 14.5 32.5 0.5 32.5 0.5 0.5 46.5 0.5 46.5 32.5"
          />
          <Line class="cls-1" x1="10.5" y1="10.5" x2="28.5" y2="10.5" />
          <Line class="cls-1" x1="10.5" y1="16.5" x2="36.5" y2="16.5" />
          <Line class="cls-1" x1="10.5" y1="22.5" x2="36.5" y2="22.5" />
        </G>
      </G>
    </Svg>
  );
}
