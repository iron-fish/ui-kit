/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC } from 'react'
import { Icon, IconProps } from '@chakra-ui/react'

export const IronfishSizeIcon: FC<IconProps> = props => (
  <Icon
    height="70px"
    width="72px"
    viewBox="0 0 72 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.60427 67.6084C10.7589 66.0553 13.9796 64.5805 17.372 63.6147C20.0213 62.8545 22.8918 62.7795 25.6071 62.985C27.3743 63.1351 29.0821 63.5821 30.7239 64.2347C32.2236 64.7208 33.644 65.3799 35.0181 66.1434C35.4674 66.3326 35.8737 66.6002 36.2635 66.8873C36.8647 67.1679 37.4361 67.5236 37.9382 67.9445C38.219 68.1272 38.5196 68.2968 38.7971 68.4959C39.0514 68.3229 39.3487 68.1761 39.5337 67.9869C41.0796 66.8025 42.5298 65.5006 43.97 64.1923C43.534 63.5462 43.2268 62.8153 42.6883 62.2411C41.813 61.458 41.0169 60.613 40.191 59.7777C36.1908 55.6535 30.1491 54.7301 24.6558 54.2668C24.0777 54.2342 23.526 54.2114 22.9579 54.2114C22.687 54.3158 22.3435 54.2114 22.1783 53.9732C21.7654 53.3467 22.4987 52.9454 22.9314 52.6126C23.9158 51.8328 24.8308 50.9681 25.7425 50.1068C28.7023 47.3171 31.6653 44.5274 34.5953 41.7051C34.7968 41.4669 35.0545 41.2417 35.2064 41.0362C35.5499 40.5892 35.9298 40.1063 36.0818 39.5647C36.7193 37.5417 35.18 35.2676 33.089 34.9609C32.5539 34.863 31.9758 34.8369 31.444 34.9576C30.6578 35.3459 29.908 35.8027 29.0921 36.1322C28.9731 36.2105 28.841 36.3019 28.699 36.3867C26.1687 38.948 23.6152 41.4799 21.0849 44.0217C20.1864 44.9091 19.387 45.7248 18.5348 46.5797C18.5348 46.5862 18.5315 46.596 18.5282 46.6058C18.3102 47.0495 17.8345 47.3171 17.4976 47.676C16.9525 48.0969 16.3381 48.7919 15.5817 48.6548C15.3934 48.6059 15.2381 48.4852 15.1489 48.3285C14.8616 48.0708 14.8252 47.5748 14.9078 47.2714C15.0333 45.6139 14.9805 44.0902 14.736 42.4784C13.7913 36.4585 11.2313 31.1858 6.8247 26.905C6.24662 27.3781 5.74453 27.7795 5.216 28.2917C4.27457 29.3587 3.1977 30.2755 2.14066 31.2217C1.96558 31.3685 1.7806 31.5937 1.5791 31.7927C2.36528 32.6671 3.14155 34.2039 3.48509 34.615C7.48205 41.1243 8.73729 49.6239 5.50999 56.6846C4.81631 58.2115 3.898 59.6145 2.80131 60.887C2.57008 61.1415 2.33555 61.5233 2.07129 61.8039C2.10102 61.843 2.12744 61.8855 2.15717 61.9246C2.54696 62.3422 2.84756 62.6848 3.1944 63.1155C4.52892 64.7535 6.39527 65.902 7.61088 67.6182L7.60427 67.6084Z"
      fill="#FFC2E8"
    />
    <path
      d="M37.3008 34.9185C39.3124 36.142 40.5512 35.6004 42.15 34.1387C42.2821 33.9984 42.4473 33.8515 42.6256 33.7537C43.2764 33.088 43.9238 32.4159 44.5415 31.7275C46.5896 29.636 48.7235 27.5413 50.7484 25.4564C52.1225 24.0599 53.3844 22.5035 54.9105 21.2767C55.0591 20.9276 55.3564 20.6405 55.7826 20.771C55.918 20.8265 56.0171 20.8982 56.0931 20.9766C56.2747 21.0908 56.4069 21.2898 56.3871 21.5769C56.3507 21.8216 56.245 22.2164 56.2153 22.4154C55.4555 27.2966 58.3922 33.3882 60.8696 37.5287C61.7218 39.3591 63.1918 40.5794 64.2786 42.2141C64.599 42.0151 64.9227 41.8226 65.2464 41.6268C66.7461 40.6904 68.0212 39.4636 69.3425 38.3346C67.4035 35.6493 65.2365 32.8955 64.4008 29.6556C63.6675 26.9181 63.2975 24.0501 63.6113 21.2278C63.5915 20.4186 63.6939 19.6225 63.8855 18.8394C63.9747 18.1869 64.0507 17.5278 64.2455 16.8948C64.7476 14.7283 65.2497 12.4835 66.472 10.5846C66.9377 9.66118 67.2383 8.66277 67.9122 7.85033C68.3119 7.21735 68.7479 6.61373 69.2038 6.0199C68.7479 5.4848 68.1236 5.17484 67.5918 4.71805C66.505 3.88277 65.4413 2.99529 64.4966 1.99688C64.3876 2.10455 64.2654 2.20243 64.1597 2.29379C63.3933 2.95614 62.6336 3.63806 61.7417 4.14053C60.1495 5.14547 58.4384 5.76214 56.7802 6.58437C54.0781 7.66435 51.224 8.38869 48.3007 8.20597C45.298 8.15377 42.3217 7.45879 39.6064 6.19609C37.4032 5.18136 35.3551 3.85341 33.3963 2.44388C33.023 2.16328 32.6894 1.84352 32.3558 1.52051C32.1906 1.66407 32.0188 1.79785 31.8669 1.94467C31.193 2.54503 30.6513 3.26937 30.0369 3.92519C29.5546 4.33956 29.1119 4.7833 28.7156 5.27598C28.0714 5.83066 27.5066 6.39186 26.9219 6.96285C27.2027 7.35112 27.49 7.73613 27.7609 8.13419C31.3681 13.5048 38.1893 15.7528 44.4986 15.3384C45.8761 15.296 47.2271 15.0252 48.5748 14.7707C48.8853 14.7446 49.1033 14.9012 49.2091 15.1166C49.3907 15.3221 49.4535 15.6223 49.2421 15.9323C47.8778 17.1101 46.6226 18.3924 45.4532 19.7595C43.3127 21.6487 41.1656 23.6586 39.0548 25.564C38.0407 26.6049 37.0299 27.6946 36.0257 28.7648C35.9035 28.9802 35.7548 29.1923 35.6656 29.3815C34.8762 30.53 34.8894 31.982 35.6359 33.15C36.0257 33.9201 36.4882 34.6281 37.2975 34.9315L37.3008 34.9185Z"
      fill="#D657D9"
    />
    <path
      d="M6.20695 67.8954C6.70244 68.5513 6.97991 69.4779 7.99402 68.9036C9.14686 68.1956 10.455 67.7584 11.6673 67.1483C16.2654 64.9752 20.8272 63.6832 25.9737 64.339C27.665 64.5054 29.2572 65.0535 30.8394 65.6735C33.5547 66.6197 36.0454 68.1401 38.3478 69.814L38.3147 69.7781C38.6418 70.137 39.1241 70.0097 39.3454 69.703C39.831 69.4942 40.3397 68.9591 40.7195 68.7438C41.8922 67.7682 43.0516 66.7861 44.1946 65.7681C44.4588 65.5332 44.7066 65.2754 44.9808 65.047C45.2516 64.9393 45.4234 64.6294 45.3804 64.3423C45.3804 64.3357 45.3771 64.3325 45.3771 64.3292C45.3871 64.2639 45.3937 64.1954 45.3804 64.1204C45.3144 63.7419 45.0567 63.4613 44.8618 63.1481C44.6207 62.7565 44.4225 62.3487 44.1582 61.9702C43.6859 61.2491 42.9658 60.7467 42.3646 60.143C41.149 58.727 39.7517 57.4871 38.1595 56.4985C34.1229 53.9927 29.2473 53.3107 24.5566 52.9649C25.9968 51.7054 27.3512 50.3546 28.7683 49.0724C30.9617 46.9842 33.155 44.896 35.3352 42.7948C35.4013 42.7523 35.4574 42.6969 35.507 42.6316C37.9514 40.2759 40.3793 37.9006 42.761 35.4828C43.818 34.5334 44.6801 33.4305 45.681 32.4289C48.4327 29.662 51.1942 26.9049 53.8765 24.0696C54.1804 23.7335 54.4843 23.4007 54.808 23.0875C54.405 28.011 57.0245 33.3849 59.3103 37.5319C59.7728 38.1877 60.0899 38.9316 60.5293 39.6005C61.4112 40.8045 62.5046 41.8485 63.304 43.121C63.3998 43.2613 63.5187 43.3462 63.6442 43.3886C64.0869 44.0477 64.9226 43.3331 65.4412 43.0166C66.8385 42.2336 68.0706 41.209 69.2565 40.1388C71.4598 38.191 71.2451 38.7163 69.5769 36.4519C67.8856 34.0015 66.0721 31.5838 65.4908 28.582C64.4932 24.683 64.655 20.4577 65.6857 16.5651C66.0589 14.4802 66.8154 12.4899 67.9022 10.6627C68.3778 9.27606 69.2928 8.09167 70.155 6.91706C70.5448 6.4929 71.0568 5.75224 70.3631 5.35092C70.3598 5.35092 70.3532 5.35092 70.3499 5.34439C69.9304 4.77993 69.3391 4.35903 68.7577 3.97076C68.0277 3.42913 67.3274 2.8092 66.6304 2.21537C66.0391 1.78468 65.5766 1.18759 65.0514 0.681858C64.8598 0.508929 64.6253 0.411046 64.3643 0.450199C64.1496 0.46325 63.9911 0.554609 63.8854 0.688383C63.7169 0.76669 63.5815 0.910253 63.5253 1.08971C62.8415 1.68354 62.171 2.29368 61.4145 2.79615C57.9197 4.79624 54.0581 6.63972 49.9555 6.90074C46.1831 7.02799 42.3943 6.25797 39.0679 4.47323C36.967 3.27252 34.7274 2.03918 33.0031 0.309899C32.8908 0.202227 32.752 0.140234 32.61 0.117394C32.359 -0.0457457 32.0121 -0.0620597 31.771 0.198964C31.2722 0.799318 30.6016 1.24632 30.0962 1.84994C29.5611 2.48945 29.016 3.10938 28.3785 3.64774C27.6188 4.57111 26.6707 5.31176 25.8449 6.1764C25.7623 6.24166 25.6996 6.32323 25.6533 6.41133C25.5377 6.50268 25.4485 6.62993 25.4287 6.78981C25.3957 7.40974 26.0266 7.83064 26.314 8.33311C29.4323 13.3089 35.1799 16.1736 40.997 16.588C42.9228 16.7218 44.8585 16.6696 46.7678 16.402C46.0279 17.1198 45.321 17.8735 44.6702 18.6664C42.4736 20.6371 40.3033 22.6339 38.1232 24.6243C37.1652 25.6292 36.2073 26.6439 35.246 27.6586C35.1568 27.7076 35.0775 27.7728 35.0181 27.8609C34.9884 27.9034 34.9619 27.9458 34.9322 27.9882C32.6166 30.4386 30.2845 32.8954 27.9094 35.3034C27.6716 35.4241 27.4701 35.6003 27.3974 35.8254C27.3446 35.8776 27.295 35.9298 27.2422 35.982C24.5137 38.7261 21.7455 41.506 18.9807 44.2434C18.0756 45.1766 17.23 46.0575 16.2357 46.9385C16.5396 40.9872 14.5543 34.7389 11.1288 29.8708C10.3063 28.7615 9.40782 27.7076 8.45648 26.7059C8.04357 26.2948 7.69672 25.7532 7.10213 25.5835C6.97661 25.5574 6.8676 25.5574 6.7685 25.577C6.60995 25.5378 6.43818 25.5541 6.27962 25.6455C4.98474 26.595 3.80877 27.8414 2.67575 28.9931C2.0217 29.463 1.46345 30.0438 0.882075 30.5984C0.673968 30.7844 0.419617 31.0128 0.290789 31.264C0.234633 31.3032 0.178478 31.3521 0.125625 31.4141C-0.145243 31.7437 0.023224 32.2331 0.376674 32.4321C0.634329 32.7029 0.849042 33.0064 1.07036 33.3098C1.85984 34.4192 2.51719 35.6068 3.20758 36.7749C6.68923 43.4082 7.24748 51.9697 3.03911 58.4235C2.42801 59.2556 1.77065 60.0549 1.1133 60.8543C0.882075 61.0468 0.716911 61.334 0.753247 61.6113C0.436133 62.1986 1.27186 62.8642 1.68477 63.334C2.97965 65.0535 4.70396 66.3391 6.19704 67.8922L6.20695 67.8954ZM35.6688 29.3684C35.758 29.1791 35.9067 28.967 36.0289 28.7517C37.0331 27.6815 38.0439 26.5917 39.058 25.5509C41.1688 23.6454 43.3159 21.6355 45.4564 19.7464C46.6258 18.3793 47.881 17.097 49.2453 15.9191C49.4567 15.6091 49.3939 15.309 49.2122 15.1034C49.1032 14.8881 48.8852 14.7315 48.578 14.7576C47.2303 15.0121 45.8792 15.2829 44.5018 15.3253C38.1958 15.7397 31.3746 13.4916 27.7641 8.12103C27.4932 7.72297 27.2058 7.33796 26.9251 6.94969C27.5097 6.3787 28.0713 5.8175 28.7187 5.26282C29.1184 4.77014 29.5578 4.3264 30.0401 3.91202C30.6545 3.2562 31.1962 2.53513 31.8701 1.93151C32.022 1.78468 32.1938 1.64764 32.3589 1.50734C32.6926 1.83036 33.0262 2.15012 33.3995 2.43072C35.3583 3.84351 37.4063 5.1682 39.6096 6.18293C42.3249 7.44563 45.3012 8.14061 48.3038 8.19281C51.2272 8.37553 54.0813 7.65119 56.7833 6.5712C58.4383 5.74898 60.1494 5.13231 61.7449 4.12737C62.6334 3.62816 63.3965 2.94624 64.1628 2.28063C64.2686 2.18927 64.3908 2.09139 64.4998 1.98371C65.4445 2.98213 66.5049 3.86961 67.5949 4.70488C68.1268 5.16168 68.7544 5.47164 69.2069 6.00674C68.7511 6.60057 68.3151 7.20419 67.9154 7.83717C67.2415 8.6496 66.9409 9.64802 66.4751 10.5714C65.2529 12.4703 64.7475 14.7151 64.2487 16.8816C64.0538 17.5146 63.9779 18.1704 63.8887 18.8263C63.6971 19.6093 63.5914 20.4055 63.6145 21.2146C63.3007 24.0402 63.674 26.9049 64.404 29.6424C65.2364 32.8791 67.4034 35.6329 69.3457 38.3215C68.0244 39.4504 66.7493 40.6805 65.2496 41.6136C64.9259 41.8094 64.6022 42.0019 64.2818 42.2009C63.195 40.5663 61.725 39.346 60.8728 37.5156C58.3953 33.3751 55.4587 27.2834 56.2185 22.4023C56.2515 22.2033 56.3539 21.8085 56.3903 21.5637C56.4068 21.2799 56.2779 21.0776 56.0963 20.9634C56.0236 20.8851 55.9245 20.8166 55.7858 20.7578C55.3596 20.6273 55.0656 20.9144 54.9137 21.2636C53.3876 22.4904 52.1257 24.05 50.7516 25.4432C48.7267 27.5314 46.5927 29.6229 44.5447 31.7143C43.9237 32.4028 43.2796 33.0749 42.6288 33.7405C42.4504 33.8384 42.2853 33.9852 42.1531 34.1255C40.5544 35.5905 39.3156 36.1321 37.3039 34.9053C36.4946 34.5986 36.0322 33.8938 35.6424 33.1238C34.8926 31.959 34.8793 30.5071 35.6721 29.3553L35.6688 29.3684ZM2.15383 61.9147C2.1241 61.8756 2.09768 61.8332 2.06795 61.794C2.33221 61.5134 2.57005 61.1284 2.79797 60.8772C3.89796 59.6047 4.81297 58.2017 5.50665 56.6747C8.73395 49.614 7.48201 41.1144 3.48175 34.6051C3.13821 34.1973 2.36524 32.6573 1.57576 31.7828C1.77396 31.5838 1.95894 31.3554 2.13732 31.2118C3.19436 30.2656 4.26793 29.3488 5.21266 28.2818C5.74119 27.7728 6.24328 27.3715 6.82136 26.8952C11.2279 31.1759 13.788 36.4486 14.7327 42.4685C14.9771 44.077 15.03 45.6008 14.9045 47.2615C14.8219 47.565 14.8615 48.0642 15.1456 48.3187C15.2348 48.4753 15.39 48.596 15.5783 48.6449C16.3348 48.782 16.9492 48.0903 17.4942 47.6661C17.8312 47.3105 18.3068 47.0396 18.5248 46.5959C18.5248 46.5894 18.5282 46.5796 18.5315 46.5698C19.387 45.715 20.1864 44.8993 21.0816 44.0118C23.6119 41.4668 26.1653 38.9349 28.6956 36.3768C28.8377 36.292 28.9698 36.2006 29.0887 36.1223C29.9046 35.7928 30.6512 35.336 31.4406 34.9477C31.9725 34.827 32.5505 34.8564 33.0857 34.951C35.1733 35.2577 36.7127 37.5319 36.0784 39.5548C35.9232 40.0997 35.5466 40.5793 35.2031 41.0263C35.0511 41.2319 34.7935 41.457 34.592 41.6952C31.662 44.5175 28.6989 47.3072 25.7392 50.0969C24.8308 50.9615 23.9158 51.8229 22.9281 52.6027C22.4954 52.9355 21.7621 53.3368 22.175 53.9633C22.3401 54.2015 22.6837 54.3092 22.9545 54.2015C23.5227 54.2015 24.0743 54.2243 24.6524 54.257C30.1458 54.7203 36.1874 55.6436 40.1877 59.7678C41.0102 60.5998 41.8063 61.4482 42.685 62.2312C43.2234 62.8055 43.5306 63.5363 43.9666 64.1824C42.5264 65.4908 41.0763 66.7959 39.5303 67.977C39.3454 68.163 39.0448 68.3131 38.7937 68.486C38.5162 68.2902 38.219 68.1173 37.9349 67.9346C37.4328 67.5104 36.8613 67.158 36.2601 66.8774C35.8703 66.5903 35.464 66.3228 35.0148 66.1335C33.6406 65.37 32.2202 64.7077 30.7205 64.2248C29.0788 63.569 27.371 63.1252 25.6038 62.9751C22.8852 62.7696 20.0146 62.8446 17.3687 63.6049C13.9762 64.5706 10.7556 66.0454 7.60093 67.5985C6.38532 65.879 4.51898 64.7305 3.18446 63.0959C2.83761 62.6652 2.53701 62.3226 2.14723 61.9049L2.15383 61.9147Z"
      fill="black"
    />
  </Icon>
)

export default IronfishSizeIcon