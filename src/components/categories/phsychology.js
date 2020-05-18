import React from 'react';
import Svg, {G, Path, Circle} from 'react-native-svg';

export default function (props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24.01 24"
      fill={props.color}
      xmlns="http://www.w3.org/2000/svg">
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1-2" data-name="Layer 1">
          <G id="Layer_2-2" data-name="Layer 2">
            <G id="Layer_1-2-2" data-name="Layer 1-2">
              <Path
                class="cls-1"
                d="M13.49,10.5A2.75,2.75,0,0,0,16,12a3.2,3.2,0,0,0,2.5-1.5c7,0,6.38-10-.1-10A4.45,4.45,0,0,0,15,2,4.52,4.52,0,0,0,9,4.07,5.15,5.15,0,0,0,8.62,5"
              />
              <Path
                class="cls-1"
                d="M7.92,23.5H15.5V21c0-.5-3-2-5.5-3V16s1-.35,1-2.5c.7,0,1-2,0-2A4.33,4.33,0,0,0,11.5,9C11,7,6,7,5.5,9,3.39,8.57,5,11.21,5,11.5c-1,0-.7,2,0,2C5,15.65,6,16,6,16v2C3.5,19,.5,20.5.5,21v2.5Z"
              />
              <Circle class="cls-1" cx="17" cy="15" r="1" />
              <Path
                class="cls-1"
                d="M14,6a.5.5,0,0,1-.5.5h0A.5.5,0,0,1,13,6h0a.5.5,0,0,1,.5-.5h0A.5.5,0,0,1,14,6Z"
              />
              <Path
                class="cls-1"
                d="M14,16.5a.5.5,0,0,1-.5.5h0a.5.5,0,0,1-.5-.5h0a.5.5,0,0,1,.5-.5h0A.5.5,0,0,1,14,16.5Z"
              />
              <Path
                class="cls-1"
                d="M17,6a.5.5,0,0,1-.5.5h0A.5.5,0,0,1,16,6h0a.5.5,0,0,1,.5-.5h0A.5.5,0,0,1,17,6Z"
              />
              <Path
                class="cls-1"
                d="M20,6a.5.5,0,0,1-.5.5h0A.5.5,0,0,1,19,6h0a.5.5,0,0,1,.5-.5h0A.5.5,0,0,1,20,6Z"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}
