import type { FlagIcon, FlagIconProps } from '../types'

export const IconFlagJM: FlagIcon = ({ className, ...props }: FlagIconProps) => {
  return (
    <svg
      width='21px'
      height='15px'
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>JM</title>

      <defs>
        <clipPath id='jm-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='jm-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='jm-linearGradient-2'>
          <stop stopColor='#1DBE4F' offset='0%' />
          <stop stopColor='#159B3F' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='jm-linearGradient-3'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='jm-linearGradient-4'>
          <stop stopColor='#FFD646' offset='0%' />
          <stop stopColor='#FED02F' offset='100%' />
        </linearGradient>
      </defs>
      <g
        clipPath='url(#jm-clip)'
        id='jm-Symbols'
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'>
        <g id='jm-JM'>
          <rect
            id='jm-FlagBackground'
            fill='url(#jm-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='jm-Mask-Copy'
            fill='url(#jm-linearGradient-2)'
            x='0.000237781813'
            y='-0.00266538434'
            width='21'
            height='15'
          />
          <polygon
            id='jm-Rectangle-253'
            fill='url(#jm-linearGradient-3)'
            points='0.000237781813 -0.00266538434 9.00023778 7.49733462 0.000237781813 14.9973346'
          />
          <polygon
            id='jm-Rectangle-253'
            fill='url(#jm-linearGradient-3)'
            transform='translate(16.500238, 7.497335) scale(-1, 1) translate(-16.500238, -7.497335) '
            points='12.0002378 -0.00266538434 21.0002378 7.49733462 12.0002378 14.9973346'
          />
          <path
            d='M10.5002378,6.29111667 L-0.961614117,-1.44000006 L-2.07999992,0.218075088 L8.71194613,7.49733462 L-2.07999992,14.7765941 L-0.961614117,16.4346693 L10.5002378,8.70355256 L21.9620897,16.4346693 L23.0804755,14.7765941 L12.2885294,7.49733462 L23.0804755,0.218075088 L21.9620897,-1.44000006 L10.5002378,6.29111667 Z'
            id='jm-Rectangle-2'
            fill='url(#jm-linearGradient-4)'
          />
        </g>
      </g>
    </svg>
  )
}
