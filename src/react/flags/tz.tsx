import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagTZ: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>TZ</title>

      <defs>
        <clipPath id='tz-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tz-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tz-linearGradient-2'>
          <stop stopColor='#33CC4D' offset='0%' />
          <stop stopColor='#2AB441' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tz-linearGradient-3'>
          <stop stopColor='#2DAFE4' offset='0%' />
          <stop stopColor='#1BA4DC' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tz-linearGradient-4'>
          <stop stopColor='#FFD84F' offset='0%' />
          <stop stopColor='#FCD036' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tz-linearGradient-5'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
      </defs>
      <g
        clipPath='url(#tz-clip)'
        id='tz-Symbols'
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'>
        <g id='tz-TZ'>
          <rect
            id='tz-FlagBackground'
            fill='url(#tz-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <polygon
            id='tz-Rectangle-2'
            fill='url(#tz-linearGradient-2)'
            points='0.00149566929 10.0039496 21.0014957 0.00394961946 0.00149566929 0.00394961946'
          />
          <polygon
            id='tz-Rectangle-2'
            fill='url(#tz-linearGradient-3)'
            points='0.00149566929 15.0039496 21.0014957 15.0039496 21.0014957 5.00394962'
          />
          <polygon
            id='tz-Rectangle-2'
            fill='url(#tz-linearGradient-4)'
            points='2.31328447 17.0039725 22.6295352 4.30897007 18.6897069 -1.99607326 -1.62654387 10.6989292'
          />
          <polygon
            id='tz-Rectangle-2'
            fill='url(#tz-linearGradient-5)'
            points='-0.470403564 17.3078992 24.1229912 1.94024053 21.4733949 -2.29999995 -3.11999989 13.0676587'
          />
        </g>
      </g>
    </svg>
  )
}
