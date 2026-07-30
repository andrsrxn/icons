import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagDZ: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size ?? 'auto',
  ...props
}: FlagIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>DZ</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='dz-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='dz-linearGradient-2'>
          <stop stopColor='#048345' offset='0%' />
          <stop stopColor='#04753E' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='dz-linearGradient-3'>
          <stop stopColor='#E81B42' offset='0%' />
          <stop stopColor='#D20F34' offset='100%' />
        </linearGradient>
      </defs>
      <g id='dz-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='dz-DZ'>
          <rect
            id='dz-FlagBackground'
            fill='url(#dz-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='dz-Rectangle-2'
            fill='url(#dz-linearGradient-2)'
            x='0'
            y='0'
            width='11'
            height='15'
          />
          <rect
            id='dz-Rectangle-2-Copy-2'
            fill='url(#dz-linearGradient-1)'
            x='11'
            y='0'
            width='10'
            height='15'
          />
          <polygon
            id='dz-Star-8'
            fill='url(#dz-linearGradient-3)'
            points='13 8.28000003 11.8244295 9.11803399 12.2581759 7.74103327 11.097887 6.88196601 12.5415275 6.86896672 13 5.5 13.4584725 6.86896672 14.902113 6.88196601 13.7418241 7.74103327 14.1755705 9.11803399'
          />
          <path
            d='M13.2600002,4.21400036 C12.4889281,3.46100558 11.4526533,3 10.3131751,3 C7.93107426,3 6,5.01471863 6,7.5 C6,9.98528137 7.93107426,12 10.3131751,12 C11.4526533,12 12.4889281,11.5389944 13.2600002,10.7859996 C12.7281556,11.0391564 12.1265684,11.1818182 11.4894956,11.1818182 C9.32394935,11.1818182 7.5684273,9.53341203 7.5684273,7.5 C7.5684273,5.46658797 9.32394935,3.81818182 11.4894956,3.81818182 C12.1265684,3.81818182 12.7281556,3.96084355 13.2600002,4.21400036 L13.2600002,4.21400036 Z'
            id='dz-Oval-3'
            fill='url(#dz-linearGradient-3)'
          />
        </g>
      </g>
    </svg>
  )
}
