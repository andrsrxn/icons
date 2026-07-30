import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagTG: FlagIcon = ({
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
      <title>TG</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tg-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tg-linearGradient-2'>
          <stop stopColor='#FFD44D' offset='0%' />
          <stop stopColor='#FFCD2F' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tg-linearGradient-3'>
          <stop stopColor='#159A74' offset='0%' />
          <stop stopColor='#0C6A4F' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tg-linearGradient-4'>
          <stop stopColor='#ED1F45' offset='0%' />
          <stop stopColor='#D01739' offset='100%' />
        </linearGradient>
      </defs>
      <g id='tg-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='tg-TG'>
          <rect
            id='tg-FlagBackground'
            fill='url(#tg-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='tg-Mask-Copy'
            fill='url(#tg-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <path
            d='M9,0 L21,0 L21,3 L9,3 L9,0 Z M9,6 L21,6 L21,9 L9,9 L9,6 Z M0,12 L21,12 L21,15 L0,15 L0,12 Z'
            id='tg-Rectangle-537'
            fill='url(#tg-linearGradient-3)'
          />
          <rect
            id='tg-Rectangle-1568'
            fill='url(#tg-linearGradient-4)'
            x='0'
            y='0'
            width='9'
            height='9'
          />
          <polygon
            id='tg-Star-8'
            fill='url(#tg-linearGradient-1)'
            points='4.5 5.67000005 2.73664424 6.92705098 3.38726383 4.8615499 1.64683045 3.57294902 3.81229123 3.55345008 4.5 1.5 5.18770877 3.55345008 7.35316955 3.57294902 5.61273617 4.8615499 6.26335576 6.92705098'
          />
        </g>
      </g>
    </svg>
  )
}
