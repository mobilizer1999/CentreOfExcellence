import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export default function (props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 39 47"
      stroke={props.color}
      xmlns="http://www.w3.org/2000/svg">
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1-2" data-name="Layer 1">
          <Path
            class="cls-1"
            d="M19.5,44.5c3,0,1,2,7,2s12-12,12-20-5-14-11-14-6,2-8,2-2-2-8-2-11,6-11,14,6,20,12,20S16.5,44.5,19.5,44.5Z"
          />
          <Path class="cls-2" d="M19.5,14.5v-4a4,4,0,0,0-4-4h-4" />
          <Path class="cls-1" d="M23.5,9.5a9,9,0,0,0,9-9A9,9,0,0,0,23.5,9.5Z" />
        </G>
      </G>
    </Svg>
  );
}
