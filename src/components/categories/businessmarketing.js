import React from 'react';
import Svg, {Line, Rect, Circle, G} from 'react-native-svg';

export default function (props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill={props.color}
      xmlns="http://www.w3.org/2000/svg">
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1-2" data-name="Layer 1">
          <Line class="cls-1" x1="0.5" y1="23.5" x2="23.5" y2="23.5" />
          <Rect class="cls-1" x="1.5" y="18.5" width="3" height="5" />
          <Rect class="cls-1" x="7.5" y="13.5" width="3" height="10" />
          <Rect class="cls-1" x="13.5" y="15.5" width="3" height="8" />
          <Rect class="cls-1" x="19.5" y="8.5" width="3" height="15" />
          <Circle class="cls-1" cx="3" cy="11.5" r="1" />
          <Circle class="cls-1" cx="9" cy="6.5" r="1" />
          <Circle class="cls-1" cx="15" cy="8.5" r="1" />
          <Circle class="cls-1" cx="21" cy="1.5" r="1" />
          <Line class="cls-1" x1="3.77" y1="10.86" x2="8.23" y2="7.14" />
          <Line class="cls-1" x1="9.95" y1="6.81" x2="14.08" y2="8.19" />
          <Line class="cls-1" x1="20.35" y1="2.26" x2="15.65" y2="7.74" />
        </G>
      </G>
    </Svg>
  );
}
