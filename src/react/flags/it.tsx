import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagIT: FlagIcon = ({
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
      <title>IT</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='it-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='it-linearGradient-2'>
          <stop stopColor='#E43D4C' offset='0%' />
          <stop stopColor='#CC2E3C' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='it-linearGradient-3'>
          <stop stopColor='#1BB65D' offset='0%' />
          <stop stopColor='#139149' offset='100%' />
        </linearGradient>
      </defs>
      <g id='it-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='it-IT'>
          <rect
            id='it-FlagBackground'
            fill='url(#it-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect id='it-Mask' fill='url(#it-linearGradient-2)' x='10' y='0' width='11' height='15' />
          <rect
            id='it-Rectangle-2'
            fill='url(#it-linearGradient-3)'
            x='0'
            y='0'
            width='7'
            height='15'
          />
          <rect
            id='it-Rectangle-2-Copy'
            fill='url(#it-linearGradient-1)'
            x='7'
            y='0'
            width='7'
            height='15'
          />
        </g>
      </g>
    </svg>
  )
}
