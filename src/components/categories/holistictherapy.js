import React from 'react';
import Svg, {Path, G, Polygon} from 'react-native-svg';

export default function (props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 22.89"
      stroke={props.color}
      xmlns="http://www.w3.org/2000/svg">
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1-2" data-name="Layer 1">
          <Polygon
            class="cls-1"
            points="0.5 13.5 6.5 13.5 8 11.5 10 14.5 12.5 9.5 14.5 16.5 16 13.5 23.5 13.5"
          />
          <Path
            class="cls-1"
            d="M21.25,11.5A11.68,11.68,0,0,0,22.5,6.57C22.5-1.12,13.18-1.71,12,6,10.82-1.71,1.5-1.12,1.5,7.17a11.5,11.5,0,0,0,.91,4.33"
          />
          <Path
            class="cls-1"
            d="M4.73,15.5A33.3,33.3,0,0,0,12,22.39a41.7,41.7,0,0,0,6.78-6.89"
          />
        </G>
      </G>
    </Svg>
  );
}
