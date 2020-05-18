import React from 'react';
import Svg, {Path, Line, Rect, G} from 'react-native-svg';

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
          <Line class="cls-1" x1="9.5" y1="7.5" x2="14.5" y2="7.5" />
          <Rect
            class="cls-1"
            x="4.5"
            y="0.5"
            width="5"
            height="13"
            rx="1"
            ry="1"
          />
          <Path
            class="cls-1"
            d="M1.5,9.5a1,1,0,0,0,1,1h2v-7h-2a1,1,0,0,0-1,1Z"
          />
          <Line class="cls-1" x1="1.5" y1="7" x2="0.5" y2="7" />
          <Rect
            class="cls-1"
            x="14.5"
            y="0.5"
            width="5"
            height="13"
            rx="1"
            ry="1"
          />
          <Path
            class="cls-1"
            d="M22.5,9.5a1,1,0,0,1-1,1h-2v-7h2a1,1,0,0,1,1,1Z"
          />
          <Line class="cls-1" x1="22.5" y1="7" x2="23.5" y2="7" />
        </G>
      </G>
    </Svg>
  );
}
