import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagLI: FlagIcon = ({
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
      <title>LI</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='li-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='li-linearGradient-2'>
          <stop stopColor='#0A3B97' offset='0%' />
          <stop stopColor='#042E7D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='li-linearGradient-3'>
          <stop stopColor='#E6273E' offset='0%' />
          <stop stopColor='#CC162C' offset='100%' />
        </linearGradient>
      </defs>
      <g id='li-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='li-LI'>
          <rect
            id='li-FlagBackground'
            fill='url(#li-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='li-Rectangle-2'
            fill='url(#li-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='8'
          />
          <rect
            id='li-Rectangle-2'
            fill='url(#li-linearGradient-3)'
            x='0'
            y='8'
            width='21'
            height='7'
          />
        </g>
      </g>
    </svg>
  )
}
