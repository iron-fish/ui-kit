/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC } from 'react'
import { Icon, IconProps } from '@chakra-ui/react'

export const IronfishBurnIcon: FC<IconProps> = props => (
  <Icon
    height="70px"
    width="55px"
    viewBox="0 0 55 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M48.9485 30.7513C47.971 28.955 47.0965 27.0999 45.9878 25.3776C44.9166 23.8714 43.9828 22.2818 42.9366 20.7663C42.8148 20.7046 42.6898 20.6552 42.568 20.612C42.1527 20.5503 41.7311 20.6058 41.3126 20.612C40.3944 21.8405 38.8922 22.6121 37.5586 23.356C35.8315 24.5412 33.7141 24.5072 31.6965 24.4301C28.9513 24.3529 26.1405 23.4023 24.0731 21.609C23.2423 20.8713 22.7114 19.9052 22.3678 18.8712C21.2623 16.4915 21.3247 13.8494 21.3091 11.2875C21.1967 9.15471 21.7245 7.02498 21.3278 4.91995C21.153 4.7718 20.9 4.87983 20.6939 4.84587C20.5252 4.83353 20.3628 4.79032 20.1942 4.77797C19.3322 4.68229 18.8793 5.71011 18.389 6.25026C17.78 7.22561 16.9524 8.18244 16.0717 8.87074C14.6569 10.1486 13.2765 11.4573 12.0803 12.945C11.0122 14.0685 10.0753 15.1272 9.35701 16.4729C8.20146 18.6767 7.5175 21.0935 6.17145 23.2047C5.23452 25.3159 4.28822 27.4426 3.72918 29.6865C3.20762 31.5971 2.96402 33.3934 2.6236 35.3071C2.44247 37.1745 2.33316 38.9986 2.39562 40.8413C2.50805 42.0173 2.56739 43.1963 2.62985 44.3754C2.79225 46.4187 2.95778 48.4836 3.62612 50.4436C4.80353 53.3634 6.04028 56.3235 8.01407 58.8174C8.71677 59.8853 9.71929 60.7033 10.6906 61.512C12.0522 62.7188 13.6731 63.6077 15.3096 64.4164C15.522 64.4226 15.7375 64.4534 15.9467 64.4812C16.3527 64.2775 16.8431 63.9874 17.0367 63.5676C17.221 62.5706 16.7275 61.62 16.4464 60.6909C16.1466 59.5304 15.9592 58.3328 15.8687 57.129C15.269 54.132 15.7562 51.1658 16.6401 48.2768C17.6676 44.897 18.9762 41.4401 21.3497 38.7671C22.5833 37.2732 23.8263 35.6929 25.4722 34.6281C26.5309 34.2484 26.6121 35.3256 26.8307 36.0263C27.1962 36.9491 27.827 37.7023 28.4548 38.4492C29.323 39.3844 30.0944 40.3258 31.0001 41.2055C31.5622 41.6469 32.0994 42.1191 32.6054 42.6222C34.17 44.0606 35.5379 45.7088 36.7154 47.4681C38.8297 50.5578 39.9446 57.6352 38.5674 61.1231C38.3706 61.6262 38.127 62.1077 37.8647 62.5799C37.6991 63.5182 37.8584 64.3763 38.7953 65.0584C39.4262 65.6788 40.3132 65.9535 41.1939 65.827C41.3188 65.7961 41.4469 65.7652 41.578 65.7467C42.4306 65.2868 43.2426 64.7436 44.0015 64.0985C46.1565 62.1478 48.2989 60.1199 49.5857 57.4963C50.6912 55.1444 51.1878 52.5702 51.7187 50.0639C52.3402 46.465 52.5526 42.8476 52.0654 39.2795C51.5844 36.23 50.2571 33.5045 48.9485 30.7483V30.7513Z"
      fill="#D657D9"
    />
    <path
      d="M50.6538 30.1123C49.6981 27.782 48.63 25.5381 47.3058 23.3651C46.0285 21.2601 44.52 19.297 43.0896 17.2908C42.7117 16.8031 42.3713 16.2815 41.9684 15.8092C41.7998 15.6271 41.5562 15.5284 41.3063 15.5623C41.0253 15.5994 40.7692 15.8154 40.7036 16.0932C40.6099 16.5284 40.6911 16.9852 40.5849 17.4235C40.4069 18.3124 39.9228 19.0964 39.3513 19.7909C38.2207 21.0286 36.5436 21.8157 34.9321 22.3188C33.5923 22.7879 32.0963 22.791 30.7003 22.6027C28.8639 22.1459 26.9495 21.4731 25.6815 20.0162C22.524 16.1302 22.727 10.6856 23.4766 6.0156C23.5297 5.76867 23.589 5.52175 23.6515 5.27791C23.6515 5.27174 23.6577 5.26865 23.6577 5.26248C23.6765 5.21309 23.6858 5.16371 23.6952 5.11123C24.0762 3.66055 24.5915 2.24382 24.9413 0.793143C25.06 -0.148256 23.6796 -0.299497 23.5484 0.611037C22.2679 1.21291 21.1998 2.14197 19.9693 2.83027C18.3172 3.91365 16.8743 5.25939 15.4034 6.56809C10.7406 10.6053 7.16775 15.695 4.60056 21.2601C3.90411 22.7972 3.04838 24.2633 2.53307 25.8776C1.70545 28.2295 1.14017 30.5908 0.671704 33.0477C-0.380781 37.8009 -0.115317 42.8351 0.905936 47.5915C1.83974 51.5083 3.37006 55.5301 5.9716 58.7062C7.54877 60.7649 9.45386 62.5366 11.412 64.2373C12.2584 64.938 13.2422 65.438 14.151 66.0522C14.7725 66.472 15.4627 66.9596 16.2091 67.3485C19.7164 68.9536 23.6077 69.7622 27.4554 69.9783C33.2488 70.182 41.9778 68.8085 46.2159 64.6416C52.4902 58.5796 54.7919 51.4651 54.1891 42.8999C53.9299 38.4337 52.3028 34.2267 50.6475 30.1093L50.6538 30.1123ZM35.0633 64.228C34.0108 65.2898 32.7928 66.3454 31.3468 66.8393C30.0132 67.1911 28.6359 67.0029 27.2743 67.0677C25.9563 67.1603 24.6634 66.7312 23.5859 65.9936C22.4335 65.4596 21.4341 64.6663 20.5908 63.7249C19.7944 62.7866 18.9168 61.8946 18.3766 60.7742C17.7394 59.6075 17.6801 58.129 17.5458 56.8172C17.4771 55.6906 17.4365 54.5486 17.4927 53.4158C17.8644 49.3015 18.8013 45.0729 21.1467 41.6036C21.4559 41.3628 21.7151 41.0542 22.0587 40.8566C22.446 40.6313 22.9769 40.3597 23.4204 40.2023C24.3979 39.6251 25.5347 39.514 26.609 39.8782C26.9432 40.0233 27.293 40.1375 27.6209 40.3011C28.0425 40.7887 28.4954 41.2579 28.9451 41.7178C30.9626 43.937 33.255 45.9834 34.5573 48.7304C36.8028 53.4097 38.8735 59.8112 35.057 64.228H35.0633ZM51.7188 50.0669C51.1878 52.5701 50.6913 55.1474 49.5857 57.4993C48.299 60.1198 46.1565 62.1508 44.0016 64.1015C43.2458 64.7435 42.4338 65.2867 41.5781 65.7497C41.4469 65.7682 41.3188 65.7991 41.1939 65.83C40.3132 65.9534 39.4262 65.6787 38.7954 65.0614C37.8616 64.3793 37.6992 63.5243 37.8647 62.5829C38.127 62.1107 38.3706 61.6292 38.5674 61.126C39.9447 57.6382 38.8266 50.5608 36.7154 47.4711C35.538 45.7118 34.1732 44.0605 32.6054 42.6252C32.0995 42.1221 31.5623 41.6499 31.0001 41.2085C30.0944 40.3288 29.323 39.3874 28.4548 38.4522C27.8271 37.7022 27.1962 36.9521 26.8308 36.0293C26.6122 35.3286 26.531 34.2514 25.4722 34.6311C23.8264 35.6959 22.5834 37.2762 21.3497 38.7701C18.9762 41.4431 17.6676 44.9031 16.6401 48.2798C15.7563 51.1688 15.2691 54.135 15.8687 57.132C15.9593 58.3358 16.1467 59.5334 16.4465 60.6939C16.7276 61.6199 17.221 62.5737 17.0367 63.5706C16.8431 63.9904 16.3528 64.2805 15.9468 64.4842C15.7375 64.4564 15.5252 64.4256 15.3097 64.4194C13.6763 63.6107 12.0523 62.7218 10.6906 61.515C9.71932 60.7063 8.71681 59.8883 8.01411 58.8204C6.04031 56.3265 4.80356 53.3665 3.62616 50.4466C2.95781 48.4897 2.79229 46.4217 2.62989 44.3784C2.56743 43.1993 2.50809 42.0203 2.39565 40.8443C2.33319 39.0016 2.4425 37.1806 2.62364 35.3101C2.96094 33.3964 3.20766 31.597 3.72922 29.6895C4.28825 27.4456 5.23455 25.3158 6.17148 23.2077C7.51754 21.0965 8.2015 18.6797 9.35704 16.4759C10.0754 15.1302 11.0154 14.0715 12.0804 12.948C13.2734 11.4634 14.6569 10.1516 16.0717 8.87375C16.9524 8.18544 17.78 7.2317 18.389 6.25326C18.8794 5.71311 19.3291 4.68529 20.1942 4.78097C20.3628 4.79641 20.5284 4.83653 20.6939 4.84888C20.9031 4.88283 21.153 4.7748 21.3279 4.92296C21.7245 7.02799 21.1967 9.1608 21.3091 11.2905C21.3279 13.8524 21.2654 16.4945 22.3679 18.8742C22.7114 19.9113 23.2455 20.8774 24.0731 21.612C26.1406 23.4053 28.9514 24.3528 31.6966 24.4331C33.711 24.5102 35.8316 24.5442 37.5586 23.359C38.8922 22.6151 40.3944 21.8435 41.3126 20.615C41.7311 20.6057 42.1527 20.5533 42.5681 20.615C42.6899 20.6582 42.8148 20.7076 42.9366 20.7693C43.9828 22.2817 44.9167 23.8713 45.9879 25.3806C47.0966 27.1029 47.971 28.9611 48.9486 30.7543C50.2571 33.5106 51.5845 36.2361 52.0654 39.2856C52.5526 42.8536 52.3403 46.4711 51.7188 50.07V50.0669Z"
      fill="#0D0C22"
    />
  </Icon>
)

export default IronfishBurnIcon
