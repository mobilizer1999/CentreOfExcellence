import React from 'react';
import Svg, {G, Path, Circle} from 'react-native-svg';

export default function (props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 47 46.95"
      stroke={props.color}
      xmlns="http://www.w3.org/2000/svg">
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1-2" data-name="Layer 1">
          <Path
            class="cls-1"
            d="M32.35,46.45h-18c0-5,4-12,9-12S32.35,41.55,32.35,46.45Z"
          />
          <Circle class="cls-1" cx="23.45" cy="24.55" r="6" />
          <Path
            class="cls-1"
            d="M12.85,34.15A15,15,0,0,1,34.05,13a15.09,15.09,0,0,1,0,21.2"
          />
          <Path class="cls-1" d="M7.25,39.75a23,23,0,1,1,32.5,0" />
        </G>
      </G>
    </Svg>
  );
}
