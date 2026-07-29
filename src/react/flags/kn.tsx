import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagKN: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>KN</title>

      <defs>
        <clipPath id='kn-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='kn-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='kn-linearGradient-2'>
          <stop stopColor='#1EC160' offset='0%' />
          <stop stopColor='#169E4D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='kn-linearGradient-3'>
          <stop stopColor='#DF2A40' offset='0%' />
          <stop stopColor='#CC162C' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='16.7418103%' x2='50%' y2='82.421746%' id='kn-linearGradient-4'>
          <stop stopColor='#FFD956' offset='0%' />
          <stop stopColor='#FCD036' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='kn-linearGradient-5'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
      </defs>
      <g
        clipPath='url(#kn-clip)'
        id='kn-Symbols'
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'>
        <g id='kn-KN'>
          <rect
            id='kn-FlagBackground'
            fill='url(#kn-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <polygon
            id='kn-Rectangle-2'
            fill='url(#kn-linearGradient-2)'
            points='0.00133425498 10.0000458 21.0013343 4.57640854e-05 0.00133425498 4.57640854e-05'
          />
          <polygon
            id='kn-Rectangle-2'
            fill='url(#kn-linearGradient-3)'
            points='0.00133425498 15.0000458 21.0013343 15.0000458 21.0013343 5.00004576'
          />
          <polygon
            id='kn-Rectangle-2'
            fill='url(#kn-linearGradient-4)'
            points='0.58927355 19.0000915 25.1826683 3.63243287 20.413395 -4 -4.17999983 11.3676587'
          />
          <polygon
            id='kn-Rectangle-2'
            fill='url(#kn-linearGradient-5)'
            points='-0.470564979 17.3039953 24.1228298 1.93633667 21.4732335 -2.30390381 -3.1201613 13.0637549'
          />
          <polygon
            id='kn-Star-29'
            fill='url(#kn-linearGradient-1)'
            points='15.2333851 5.84812198 14.5243281 6.97114036 14.0642545 5.7252414 12.7770899 5.39791995 13.8198396 4.57535993 13.7333851 3.25004576 14.8379135 3.98757468 16.0716463 3.49580692 15.7115327 4.77418488 16.560476 5.79556986'
          />
          <polygon
            id='kn-Star-29'
            fill='url(#kn-linearGradient-1)'
            points='7.23338506 10.6981281 6.52432814 11.8211465 6.06425446 10.5752475 4.77708986 10.2479261 5.8198396 9.42536603 5.73338506 8.10005187 6.83791353 8.83758078 8.07164628 8.34581302 7.71153266 9.62419098 8.56047598 10.645576'
          />
        </g>
      </g>
    </svg>
  )
}
