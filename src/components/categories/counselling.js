import React from 'react';
import Svg, {Path, Polygon, G} from 'react-native-svg';

export default function (props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      stroke={props.color}
      xmlns="http://www.w3.org/2000/svg">
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1-2" data-name="Layer 1">
          <Path
            class="cls-1"
            d="M10.5,6.5A6.27,6.27,0,0,1,17,.5a6.27,6.27,0,0,1,6.5,6,6,6,0,0,1-4,5.54c-.5.46-3,3-3.5,3.46V12.43A6.92,6.92,0,0,1,14.48,12"
          />
          <Polygon class="cls-2" points="20 6 19 6 19 7 20 7 20 6 20 6" />
          <Polygon
            class="cls-2"
            points="17.5 6 16.5 6 16.5 7 17.5 7 17.5 6 17.5 6"
          />
          <Polygon class="cls-2" points="15 6 14 6 14 7 15 7 15 6 15 6" />
          <Path
            class="cls-1"
            d="M7.92,23.5H15.5V21c0-.5-3-2-5.5-3V16s1-.35,1-2.5c.7,0,1-2,0-2A4.31,4.31,0,0,0,11.5,9C11,7,6,7,5.5,9,3.39,8.57,5,11.21,5,11.5c-1,0-.7,2,0,2C5,15.65,6,16,6,16v2C3.5,19,.5,20.5.5,21v2.5Z"
          />
        </G>
      </G>
    </Svg>
  );
}
