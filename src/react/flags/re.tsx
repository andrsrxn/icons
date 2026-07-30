import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagRE: FlagIcon = ({
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
      <title>RE</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='re-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='re-linearGradient-2'>
          <stop stopColor='#F44653' offset='0%' />
          <stop stopColor='#EE2A39' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='re-linearGradient-3'>
          <stop stopColor='#1035BB' offset='0%' />
          <stop stopColor='#042396' offset='100%' />
        </linearGradient>
      </defs>
      <g id='re-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='re-RE'>
          <rect
            id='re-FlagBackground'
            fill='url(#re-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect id='re-Mask' fill='url(#re-linearGradient-2)' x='10' y='0' width='11' height='15' />
          <rect
            id='re-Rectangle-2'
            fill='url(#re-linearGradient-3)'
            x='0'
            y='0'
            width='7'
            height='15'
          />
          <rect
            id='re-Rectangle-2-Copy'
            fill='url(#re-linearGradient-1)'
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
