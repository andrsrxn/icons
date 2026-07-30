import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagAE: FlagIcon = ({
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
      <title>AE</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ae-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ae-linearGradient-2'>
          <stop stopColor='#12833B' offset='0%' />
          <stop stopColor='#0D7332' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ae-linearGradient-3'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ae-linearGradient-4'>
          <stop stopColor='#FF323E' offset='0%' />
          <stop stopColor='#FD0D1B' offset='100%' />
        </linearGradient>
      </defs>
      <g id='ae-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='ae-AE'>
          <rect
            id='ae-FlagBackground'
            fill='url(#ae-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='ae-Rectangle-2'
            fill='url(#ae-linearGradient-2)'
            x='6'
            y='0'
            width='15'
            height='5'
          />
          <rect
            id='ae-Rectangle-2'
            fill='url(#ae-linearGradient-3)'
            x='6'
            y='10'
            width='15'
            height='5'
          />
          <rect
            id='ae-Rectangle-2'
            fill='url(#ae-linearGradient-1)'
            x='6'
            y='5'
            width='15'
            height='5'
          />
          <rect
            id='ae-Rectangle-2'
            fill='url(#ae-linearGradient-4)'
            x='0'
            y='0'
            width='6'
            height='15'
          />
        </g>
      </g>
    </svg>
  )
}
