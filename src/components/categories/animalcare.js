import React from 'react';
import Svg, {Path, G, Ellipse} from 'react-native-svg';

export default function (props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 26 24.31"
      stroke={props.color}
      xmlns="http://www.w3.org/2000/svg">
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1-2" data-name="Layer 1">
          <Ellipse class="cls-1" cx="9.57" cy="4.28" rx="2.58" ry="3.78" />
          <Ellipse class="cls-1" cx="16.74" cy="4.28" rx="2.58" ry="3.78" />
          <Ellipse class="cls-1" cx="22.92" cy="9.94" rx="2.58" ry="3.78" />
          <Ellipse class="cls-1" cx="3.08" cy="9.94" rx="2.58" ry="3.78" />
          <Path
            class="cls-1"
            d="M17.48,15.48h0a4.11,4.11,0,0,0-4.1-4.16h-.45a4.11,4.11,0,0,0-4.1,4.16h0a4.12,4.12,0,0,0-4,4.17,4.19,4.19,0,0,0,7.45,2.6,1.22,1.22,0,0,1,1.79,0,4.19,4.19,0,0,0,7.45-2.6A4.12,4.12,0,0,0,17.48,15.48Z"
          />
        </G>
      </G>
    </Svg>
  );
}
