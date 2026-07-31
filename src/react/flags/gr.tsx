import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagGR: FlagIcon = ({
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
      <title>GR</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gr-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gr-linearGradient-2'>
          <stop stopColor='#1C6DC1' offset='0%' />
          <stop stopColor='#1660AD' offset='100%' />
        </linearGradient>
      </defs>
      <g id='gr-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='gr-GR'>
          <rect
            id='gr-FlagBackground'
            fill='url(#gr-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <path
            d='M0,0 L4,0 L4,4 L0,4 L0,0 Z M6,0 L10,0 L10,4 L6,4 L6,0 Z M10,0 L21,0 L21,2 L10,2 L10,0 Z M10,4 L21,4 L21,6 L10,6 L10,4 Z M10,8 L21,8 L21,10 L10,10 L10,8 Z M0,12 L21,12 L21,14 L0,14 L0,12 Z M6,6 L10,6 L10,10 L6,10 L6,6 Z M0,6 L4,6 L4,10 L0,10 L0,6 Z'
            id='gr-Rectangle-537'
            fill='url(#gr-linearGradient-2)'
          />
        </g>
      </g>
    </svg>
  )
}
