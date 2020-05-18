import React from 'react';
import Svg, {Path, G, Circle} from 'react-native-svg';

export default function (props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 18"
      stroke={props.color}
      xmlns="http://www.w3.org/2000/svg">
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1-2" data-name="Layer 1">
          <Path
            class="cls-1"
            d="M2.5,3.5l0-1a1,1,0,0,1,1-1h.94a1.07,1.07,0,0,1,1.06,1v1"
          />
          <Path
            class="cls-1"
            d="M19.5,3.5l-1-2A1.93,1.93,0,0,0,17,.5H12a1.93,1.93,0,0,0-1.5,1L9,3.5H2.5C1,3.5.5,4.18.5,5.22V15.61c0,1,.5,1.89,2.06,1.89H21.44c1.56,0,2.06-.85,2.06-1.89V5.22c0-1-.5-1.72-2.06-1.72Z"
          />
          <Circle class="cls-1" cx="14.5" cy="10" r="5.5" />
          <Circle class="cls-1" cx="14.5" cy="10" r="3" />
          <Circle class="cls-1" cx="4" cy="7" r="1.5" />
        </G>
      </G>
    </Svg>
  );
}
