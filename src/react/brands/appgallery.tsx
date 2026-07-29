import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandAppGallery: BrandIcon = ({ className, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='AppGallery'
    className={`ui-icon-brand ${className ?? ''}`}
    role='img'
    preserveAspectRatio='xMidYMid'
    viewBox='0 0 36 36'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}>
    <defs id='defs11'>
      <linearGradient
        id='linearGradient-1'
        x1='18'
        x2='18'
        y1='0'
        y2='36'
        gradientUnits='userSpaceOnUse'>
        <stop id='stop6' offset='0%' stopColor='#fb6361' />
        <stop id='stop8' offset='100%' stopColor='#ed3e45' />
      </linearGradient>
    </defs>
    <g
      id='ic_ag'
      fill='none'
      fillRule='evenodd'
      stroke='none'
      strokeWidth='1'
      transform='translate(-2 -2)'>
      <g id='编组' transform='translate(2 2)'>
        <path
          id='Fill-1'
          fill='url(#linearGradient-1)'
          d='M10.101 0C2.705 0 0 2.705 0 10.099v15.802C0 33.295 2.705 36 10.101 36h15.793C33.29 36 36 33.295 36 25.901V10.099C36 2.705 33.295 0 25.899 0Z'
        />
        <path
          id='path14'
          fill='#fff'
          d='M15.703 20.88h1.445l-.725-1.687zm-.356.85-.429.98h-.976L16.018 18h.844l2.068 4.71h-1.003l-.423-.98zm15.71.977H32V18h-.944zM27.3 20.685h1.74v-.858H27.3v-.965h2.525v-.859h-3.468v4.707h3.559v-.859H27.3Zm-3.749.556L22.482 18h-.78l-1.07 3.24-1.041-3.237h-1.018l1.643 4.71h.791l1.072-3.094 1.071 3.094h.798l1.639-4.71h-.992Zm-11.05-.543c0 .766-.38 1.175-1.072 1.175-.694 0-1.077-.42-1.077-1.208v-2.662h-.956v2.695c0 1.325.736 2.085 2.02 2.085 1.297 0 2.04-.774 2.04-2.125V18h-.955zM7.115 18h.956v4.713h-.956V20.8H4.956v1.914H4V18h.956v1.901h2.16z'
        />
        <path
          id='Fill-3'
          fill='#fff'
          d='M18 12c-3.309 0-6-2.692-6-6h.848A5.16 5.16 0 0 0 18 11.152 5.16 5.16 0 0 0 23.152 6H24c0 3.308-2.692 6-6 6'
        />
      </g>
    </g>
  </svg>
)
