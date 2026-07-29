import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagSZ: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>SZ</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sz-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sz-linearGradient-2'>
          <stop stopColor='#486BCA' offset='0%' />
          <stop stopColor='#3E5FBA' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sz-linearGradient-3'>
          <stop stopColor='#FFDF20' offset='0%' />
          <stop stopColor='#FFDA00' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sz-linearGradient-4'>
          <stop stopColor='#CF1615' offset='0%' />
          <stop stopColor='#B20D0C' offset='100%' />
        </linearGradient>
        <ellipse id='sz-path-5' cx='4.5' cy='2.5' rx='4.5' ry='2.5' />
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sz-linearGradient-7'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
      </defs>
      <g id='sz-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='sz-SZ'>
          <rect
            id='sz-FlagBackground'
            fill='url(#sz-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='sz-Rectangle-2'
            fill='url(#sz-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='3'
          />
          <rect
            id='sz-Rectangle-2'
            fill='url(#sz-linearGradient-2)'
            x='0'
            y='12'
            width='21'
            height='3'
          />
          <rect
            id='sz-Rectangle-2'
            fill='url(#sz-linearGradient-3)'
            x='0'
            y='3'
            width='21'
            height='9'
          />
          <rect
            id='sz-Rectangle-2-Copy-4'
            fill='url(#sz-linearGradient-4)'
            x='0'
            y='4'
            width='21'
            height='7'
          />
          <g id='sz-Oval-190' transform='translate(6.000000, 5.000000)'>
            <mask id='sz-mask-6' fill='white'>
              <use xlinkHref='#sz-path-5' />
            </mask>
            <use id='sz-Mask' fill='url(#sz-linearGradient-1)' xlinkHref='#sz-path-5' />
            <polygon
              id='sz-Rectangle-1180'
              fill='url(#sz-linearGradient-7)'
              mask='url(#sz-mask-6)'
              transform='translate(2.500000, 2.500000) scale(-1, 1) translate(-2.500000, -2.500000) '
              points='0 0 5 0 5 5 1 5'
            />
            <circle
              id='sz-Oval-191'
              fill='#1A1A1A'
              mask='url(#sz-mask-6)'
              cx='5.5'
              cy='2.5'
              r='1'
            />
            <circle
              id='sz-Oval-191'
              fill='#F6F6F6'
              mask='url(#sz-mask-6)'
              cx='3.5'
              cy='2.5'
              r='1'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
