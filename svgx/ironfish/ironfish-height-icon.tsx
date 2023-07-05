/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC } from 'react'
import { Icon, IconProps } from '@chakra-ui/react'

export const IronfishHeightIcon: FC<IconProps> = props => (
  <Icon
    height="70px"
    width="70px"
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M44.571 50.819c-.366-.016-.57-.288-.599-.591-.19-.29-.073-.755-.035-1.125.102-1.56.192-3.124.249-4.688.118-2.713.251-5.433.321-8.147.016-.777.007-1.554-.003-2.331 0 0 0-.003-.003-.006v.006c-.777-2.085-3.452-2.811-5.432-2.151-.446.151-.873.43-1.14.821a.577.577 0 0 1-.067.158c.105 2.135.143 4.27.035 6.413-.147 2.957-.013 5.916-.16 8.873-.028.784-.019 1.57-.066 2.354a.645.645 0 0 1-.72.66.607.607 0 0 1-.602-.161c-2.92-3.494-6.502-6.366-10.651-8.245a18.035 18.035 0 0 0-8.77-1.813c-.65-.022-1.309.076-1.955.082 0 1.301-.112 2.6-.054 3.901-.039.386.137 1.09.172 1.697.417.015.853.116 1.242.116.617.016 1.238.045 1.85.146 4.617.657 8.865 2.97 12.44 5.863 3.529 3.03 5.866 7.253 6.927 11.732.248.989.36 2.032.414 3.04.025.138.05.3.054.457.255.01.506.01.751.007 1.736-.086 3.478.151 5.2.218.016-.332.083-.677.093-.97.044-3.128 1.22-6.094 2.827-8.744 3.506-5.987 9.668-10.62 16.683-11.458.78-.136 1.608-.174 2.391-.196.201-.006.437-.038.666-.044-.01-.202-.032-.404-.035-.603.05-1.804.137-3.614.398-5.393a8.408 8.408 0 0 0-.8-.057c-1.455-.07-2.91.11-4.35.297-5.244.733-10.491 2.648-14.195 6.54-.895.944-1.694 1.816-2.43 2.868a.643.643 0 0 1-.64.474h-.006zM37.52 14.08c.138.553.256 1.118.584 1.598 1.035 1.314 3.114 3.21 4.894 2.97.927-.124 1.458-.882 1.926-1.602.023-2.944.06-5.885.054-8.83.042-1.73.214-3.477.109-5.186-.073-.55-.016-1.106-.038-1.656-.007-.025-.01-.05-.016-.072-.31-.023-.602-.057-.917-.038-.437.079-.867.202-1.316.16a23.619 23.619 0 0 0-5.152-.025c0 .032 0 .064-.006.095-.035 1.33.092 2.66.057 3.99.016 1.308-.153 2.603-.12 3.91-.017 1.454-.055 2.91-.093 4.363a.62.62 0 0 1 .032.323h.003z"
      fill="#FFC2E8"
    />
    <path
      d="M25.44 52.746c-.548.363-1.115.745-1.513 1.273-.175.284-.408.568-.58.85a.945.945 0 0 1-.105.17c-.032 2.537-.124 5.076.006 7.613.09 1.68.118 3.361.093 5.042-.022.17-.016.376-.02.587 2.28.083 4.481.237 6.745.386.182-.006.366.01.548.025.01-.117.025-.23.035-.331.044-.67.08-1.337.105-2.01.064-1.75-.02-3.5.067-5.25.025-1.118.01-2.268.013-3.412-.679-2.227-2.666-6.017-5.392-4.95l-.003.007zM9.037 29.145c2.675-.515 5.295-1.431 7.502-3.052 2.111-1.469 4.203-3.06 5.834-5.06.153-.354.484-.673.885-.534h.01c.98.047.55 1.475.672 2.132-.016 2.458-.026 4.912-.045 7.37.048 2.265-.092 4.527-.191 6.792.665 2.006 2.012 3.064 4.22 3 .951-.129 1.999-.596 2.515-1.427a.925.925 0 0 1 .048-.082c-.01-.386-.016-.771-.02-1.156a1.87 1.87 0 0 1 .03-.42c-.017-4.35-.1-8.707.095-13.05.063-.92.038-1.845.073-2.758a.597.597 0 0 1 .513-.446.585.585 0 0 1 .528-.015c.414.236.455.663.777.97 2.984 3.342 6.91 5.863 11.091 7.445 2.048.727 4.181 1.251 6.353 1.444.879.028 1.793 0 2.662.07.153.009.331.012.51.034.038-.17.073-.344.082-.502.099-2 .258-3.99.191-5.993-3.671-.597-7.502-.887-10.871-2.6-3.605-1.734-6.789-4.485-8.951-7.828a30.244 30.244 0 0 1-2.127-4.106c-.551-1.495-.898-3.1-1.268-4.638a3.356 3.356 0 0 1-.073-1.39 3.842 3.842 0 0 1-.003-.856c-.51.022-1.016.095-1.529.041h.016c-1.35-.1-2.703-.164-4.056-.259-.1-.006-.21-.01-.325-.016.057 1.138-.471 2.837-.548 3.624-.815 4.069-2.809 7.793-5.573 10.883-2.859 3.146-6.7 5.269-10.807 6.352-1.742.537-3.563.777-5.382.882-.08.019-.159.038-.242.06.013.154.016.31.016.448.08 1.567.032 3.147-.168 4.698-.02.151-.023.334-.032.518 2.544.11 5.091-.089 7.588-.569v-.006z"
      fill="#D657D9"
    />
    <path
      d="M31.49 69.877c-.029.019-.06.028-.092.044.006 0 .012-.004.019-.007.025-.012.047-.025.07-.037h.003z"
      fill="#000"
    />
    <path
      d="M16.944 27.347a31.438 31.438 0 0 0 3.703-2.82c.681-.585 1.395-1.18 2.012-1.849.007.404.007.809-.015 1.213.025 2.512-.03 5.023-.02 7.531-.012 1.76-.105 3.516-.19 5.272a.617.617 0 0 0-.01.218c-.029.57-.054 1.138-.077 1.703-.032.44-.067.951-.137 1.463-2.47-.626-5.053-.572-7.578-.395H14.574h.023c-.045 0-.09.01-.13.022a.59.59 0 0 0-.15-.019c-1.01.104-.513 1.393-.64 2.066-.055 1.605-.112 3.21.117 4.805 0 .057.026.246.007.376a.64.64 0 0 0 .216.553c.144.271.462.455.79.31 2.58.005 4.987.457 7.28 1.3 0 .013-.004.023-.007.035-.016.711-.083 1.419-.086 2.13-.073 2.561.029 5.127-.099 7.689-.054 2.47.21 4.94.182 7.407-.02.81-.004 1.612-.067 2.417a.62.62 0 0 0 .337.566c.09.082.21.145.367.164 2.652.1 5.33.287 7.983.448.232.044.48.06.697-.044-.01 0-.02.006-.029.01a.585.585 0 0 0 .38-.38.783.783 0 0 0 .12-.514c.115-1.624.226-3.251.175-4.881.035-2.088.032-4.18.058-6.267a.564.564 0 0 0 .003-.326c.006-.502.019-1.004.032-1.51a20.895 20.895 0 0 1 4.604 12.052.58.58 0 0 0 .217.467c.01.08.025.158.07.23.086.203.366.38.665.33.481.04.965.018 1.446.009 1.669-.029 3.305.158 5 .252.101.004.2-.006.302-.009.303.013.51-.095.63-.253a.546.546 0 0 0 .087-.085c.302-.401-.01-.881.101-1.349.13-1.248.13-2.527.529-3.73.87-3.267 2.79-6.173 4.961-8.738 3.054-3.535 7.394-6.037 12.021-6.931.955-.12 1.907-.256 2.872-.297.405-.05 1.06.057 1.468-.14a.637.637 0 0 0 .64-.223c.245-.395.118-.91.112-1.352-.01-1.062.057-2.127.14-3.185.012-.59.108-1.178.159-1.766.035-.271.13-.628.099-.925a.666.666 0 0 0 .041-.136c.163-1.125-2.245-.844-2.993-.916-6.983.281-14.323 2.42-19.077 7.765-.319.331-.647.695-.968 1.074l.047-.872c.14-2.543.258-5.09.338-7.635.022-1.447.146-2.885.16-4.331-.119-1.5-.03-3.014-.042-4.515 1.34.342 2.71.579 4.101.711 1.121.048 2.239-.022 3.353.136a.64.64 0 0 0 .58-.224c.07-.02.14-.05.2-.098.341-.3.331-.724.427-1.144.105-1.87.27-3.737.217-5.613-.045-.648.277-1.842-.695-1.877-2.91-.474-5.426-.761-7.833-1.43.01-.146.013-.291.02-.42.025-1.18.053-2.357.056-3.533a.573.573 0 0 0 0-.274v-.127c.026-3.102.039-6.207.064-9.31.124-2.189.188-4.454 0-6.659a.512.512 0 0 0-.09-.192.516.516 0 0 0 .01-.101c0-.534-.544-.686-.99-.632-.611-.054-1.235-.114-1.828.082-.36.076-.722-.019-1.085-.022-1.64-.142-3.309-.145-4.949.054-.41-.02-.79.29-.866.64a.6.6 0 0 0-.09.484c0 .465-.037.929-.002 1.393.08 1.517.08 3.042.003 4.562-.118 2.382-.086 4.852-.175 7.247 0 .132-.004.265-.007.398a16.748 16.748 0 0 1-1.56-2.085c-1.041-1.766-2.111-3.633-2.55-5.658a36.903 36.903 0 0 1-.749-3.017 1.22 1.22 0 0 1 .01-.515c.015-.524-.058-1.049.092-1.563.166-.56-.38-1.037-.866-.828-.414-.044-.844.028-1.258.05-.506.026-1.006-.034-1.516-.056-1.226-.12-2.461-.133-3.69-.244-.21.007-.453-.107-.67-.044a.64.64 0 0 0-.458.442l-.006.054a.64.64 0 0 0-.07.686c-.054 1.816-.52 3.61-1.003 5.357-.647 2.556-2.029 4.846-3.567 6.969-2.694 3.608-6.636 6.15-11.001 7.32-1.058.35-2.15.59-3.252.751-.732.221-3.283-.044-3.579.834-.188.193-.267.5-.137.749.153 1.943-.035 3.85-.197 5.79a.637.637 0 0 0-.163.383c-.015.672.695.694 1.22.723 5.4.085 11.167-.524 15.724-3.646l.007.013zm13.874 33.757c-.086 1.75 0 3.5-.067 5.25-.026.67-.06 1.337-.105 2.01-.01.1-.026.214-.035.331a4.523 4.523 0 0 0-.548-.025c-2.264-.152-4.461-.303-6.744-.386 0-.211 0-.42.019-.587.025-1.68 0-3.361-.093-5.042-.13-2.537-.038-5.076-.006-7.613.038-.057.076-.114.105-.17.172-.282.404-.566.58-.85.398-.528.965-.91 1.512-1.273 2.726-1.071 4.713 2.722 5.391 4.95 0 1.143.013 2.293-.013 3.411l.004-.006zm16.82-13.634c3.703-3.892 8.95-5.806 14.195-6.54 1.44-.186 2.895-.366 4.35-.296.267.006.535.022.799.057-.261 1.775-.347 3.588-.398 5.392 0 .202.025.404.035.603-.226.007-.465.038-.665.045-.784.022-1.612.06-2.392.195-7.015.838-13.177 5.472-16.683 11.458-1.608 2.65-2.783 5.617-2.827 8.744-.01.297-.074.638-.093.97-1.722-.066-3.464-.303-5.2-.218-.242.003-.496 0-.751-.006a3.408 3.408 0 0 0-.054-.458c-.051-1.008-.166-2.054-.414-3.04-1.06-4.479-3.398-8.702-6.926-11.732-3.576-2.893-7.824-5.206-12.441-5.863-.612-.101-1.233-.13-1.85-.145-.389 0-.828-.101-1.242-.117-.035-.61-.214-1.311-.172-1.696-.058-1.302.054-2.6.054-3.902.65-.006 1.306-.104 1.955-.082 3.025-.145 6.031.48 8.77 1.813 4.149 1.88 7.731 4.752 10.651 8.245.153.168.392.212.602.161.382.05.745-.271.72-.66.047-.783.038-1.567.067-2.353.146-2.957.016-5.917.159-8.874.108-2.142.07-4.277-.035-6.413a.692.692 0 0 0 .067-.158c.264-.391.69-.67 1.14-.82 1.98-.664 4.658.065 5.435 2.15v-.006.006c.013.778.023 1.555.004 2.332-.07 2.713-.204 5.43-.322 8.147a164.35 164.35 0 0 1-.248 4.688c-.039.37-.156.834.035 1.124.028.304.232.578.598.591.3.013.564-.196.64-.474.736-1.052 1.532-1.927 2.43-2.868h.006zm-11.203 1.56s0 .032.003.045c-1.025-1.147-2.172-2.218-3.34-3.223-.37-.31-.745-.61-1.128-.9v-.054c.058-.916-.012-1.996-.089-2.938-.067-1.172-.064-2.334-.114-3.519-.007-4.337-.035-8.677.015-13.015.035-.931.09-1.867.125-2.802 1.159 1.337 2.65 2.597 4.238 3.706.006.04.01.079.022.12.118 2.631.42 5.25.52 7.885.006 3.44-.176 6.883-.166 10.323.05 1.46-.064 2.913-.086 4.372zm1.264-43.55c.035-1.33-.092-2.66-.057-3.99.003-.03.003-.062.006-.094a23.62 23.62 0 0 1 5.152.025c.45.038.882-.082 1.315-.16.312-.02.609.015.917.037.007.025.007.05.016.073.023.55-.035 1.105.039 1.655.101 1.709-.07 3.456-.109 5.187.007 2.941-.032 5.885-.054 8.83-.471.72-1 1.481-1.926 1.601-1.78.24-3.856-1.655-4.895-2.97-.328-.48-.445-1.045-.582-1.598a.62.62 0 0 0-.032-.322c.038-1.453.076-2.906.092-4.363-.032-1.304.134-2.603.121-3.91H37.7zM1.481 29.196c.2-1.551.248-3.134.168-4.697 0-.14 0-.294-.016-.449.083-.022.163-.041.242-.06 1.819-.104 3.637-.344 5.382-.881 4.108-1.084 7.945-3.207 10.808-6.353 2.76-3.09 4.757-6.814 5.572-10.883.076-.783.605-2.486.548-3.623.117.006.229.01.325.016 1.35.098 2.703.16 4.056.259h-.016c.51.053 1.02-.02 1.529-.041-.029.284-.032.568.003.856-.07.464-.05.932.073 1.39.37 1.538.717 3.143 1.268 4.637a30.623 30.623 0 0 0 2.127 4.107c2.162 3.339 5.346 6.09 8.95 7.828 3.37 1.712 7.2 2.003 10.872 2.6.067 2.002-.089 3.996-.19 5.992-.01.158-.045.329-.084.502-.178-.018-.356-.025-.51-.034-.869-.07-1.782-.041-2.661-.07-2.169-.196-4.302-.717-6.353-1.443-4.181-1.583-8.11-4.104-11.09-7.446-.323-.31-.364-.736-.778-.97a.585.585 0 0 0-.529.016.605.605 0 0 0-.512.445c-.035.913-.01 1.839-.073 2.758-.195 4.344-.112 8.7-.096 13.05a1.699 1.699 0 0 0-.029.42c.004.389.013.774.02 1.156-.016.025-.035.05-.048.082-.52.831-1.564 1.299-2.516 1.428-2.207.063-3.557-.995-4.22-3 .096-2.263.24-4.528.192-6.793.02-2.457.029-4.915.044-7.37-.12-.657.31-2.081-.671-2.132h-.01c-.404-.139-.732.18-.885.534-1.63 1.996-3.723 3.592-5.834 5.06-2.203 1.621-4.827 2.537-7.502 3.052-2.5.48-5.044.68-7.588.569.012-.18.012-.364.032-.518v.006z"
      fill="#000"
    />
  </Icon>
)

export default IronfishHeightIcon