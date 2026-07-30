import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagCI: FlagIcon = ({
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
      <title>CI</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ci-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ci-linearGradient-2'>
          <stop stopColor='#1DC87D' offset='0%' />
          <stop stopColor='#169E62' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ci-linearGradient-3'>
          <stop stopColor='#F89242' offset='0%' />
          <stop stopColor='#F67F22' offset='100%' />
        </linearGradient>
      </defs>
      <g id='ci-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='ci-CI'>
          <rect
            id='ci-FlagBackground'
            fill='url(#ci-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect id='ci-Mask' fill='url(#ci-linearGradient-2)' x='10' y='0' width='11' height='15' />
          <rect
            id='ci-Rectangle-2'
            fill='url(#ci-linearGradient-3)'
            x='0'
            y='0'
            width='7'
            height='15'
          />
          <rect
            id='ci-Rectangle-2-Copy'
            fill='url(#ci-linearGradient-1)'
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
