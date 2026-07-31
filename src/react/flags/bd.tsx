import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagBD: FlagIcon = ({
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
      <title>BD</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bd-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bd-linearGradient-2'>
          <stop stopColor='#128363' offset='0%' />
          <stop stopColor='#0C6A4F' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bd-linearGradient-3'>
          <stop stopColor='#F23C53' offset='0%' />
          <stop stopColor='#F22E46' offset='100%' />
        </linearGradient>
      </defs>
      <g id='bd-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='bd-BD'>
          <rect
            id='bd-FlagBackground'
            fill='url(#bd-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='bd-Mask-Copy'
            fill='url(#bd-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <circle id='bd-Oval-9' fill='url(#bd-linearGradient-3)' cx='9.5' cy='7.5' r='4.5' />
        </g>
      </g>
    </svg>
  )
}
