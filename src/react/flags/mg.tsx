import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagMG: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
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
      <title>MG</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mg-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mg-linearGradient-2'>
          <stop stopColor='#149047' offset='0%' />
          <stop stopColor='#0F7E3D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mg-linearGradient-3'>
          <stop stopColor='#F84F4B' offset='0%' />
          <stop stopColor='#FA3F3B' offset='100%' />
        </linearGradient>
      </defs>
      <g id='mg-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='mg-MG'>
          <rect
            id='mg-FlagBackground'
            fill='url(#mg-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='mg-Rectangle-2'
            fill='url(#mg-linearGradient-2)'
            x='0'
            y='7'
            width='21'
            height='8'
          />
          <rect
            id='mg-Rectangle-2'
            fill='url(#mg-linearGradient-3)'
            x='0'
            y='0'
            width='21'
            height='7'
          />
          <rect
            id='mg-Rectangle-2'
            fill='url(#mg-linearGradient-1)'
            x='0'
            y='0'
            width='7'
            height='15'
          />
        </g>
      </g>
    </svg>
  )
}
