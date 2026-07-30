import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagBT: FlagIcon = ({
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
      <title>BT</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bt-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bt-linearGradient-2'>
          <stop stopColor='#FF5F38' offset='0%' />
          <stop stopColor='#FD5026' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bt-linearGradient-3'>
          <stop stopColor='#FFD951' offset='0%' />
          <stop stopColor='#FFD43B' offset='100%' />
        </linearGradient>
      </defs>
      <g id='bt-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='bt-BT'>
          <rect
            id='bt-FlagBackground'
            fill='url(#bt-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='bt-Mask-Copy'
            fill='url(#bt-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <polygon id='bt-Rectangle-2' fill='url(#bt-linearGradient-3)' points='0 15 21 0 0 0' />
        </g>
      </g>
    </svg>
  )
}
