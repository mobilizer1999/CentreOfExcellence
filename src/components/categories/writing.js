import React from 'react';
import Svg, {G, Path, Line} from 'react-native-svg';

export default function (props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 23.65 23.65"
      stroke={props.color}
      xmlns="http://www.w3.org/2000/svg">
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1-2" data-name="Layer 1">
          <Path
            class="cls-1"
            d="M7,21.64.5,23.15,2,16.69l15.6-15.6a2,2,0,0,1,2.83,0l2.12,2.12a2,2,0,0,1,0,2.83Z"
          />
          <Line class="cls-1" x1="21.86" y1="6.75" x2="16.91" y2="1.79" />
          <Line class="cls-1" x1="20.44" y1="8.17" x2="15.5" y2="3.21" />
          <Line class="cls-1" x1="7.22" y1="21.39" x2="2.27" y2="16.44" />
        </G>
      </G>
    </Svg>
  );
}
