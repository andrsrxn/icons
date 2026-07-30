import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagTD: FlagIcon = ({
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
      <title>TD</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='td-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='td-linearGradient-2'>
          <stop stopColor='#DE1D42' offset='0%' />
          <stop stopColor='#C51335' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='td-linearGradient-3'>
          <stop stopColor='#083780' offset='0%' />
          <stop stopColor='#032862' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='td-linearGradient-4'>
          <stop stopColor='#FFD147' offset='0%' />
          <stop stopColor='#FECA2F' offset='100%' />
        </linearGradient>
      </defs>
      <g id='td-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='td-TD'>
          <rect
            id='td-FlagBackground'
            fill='url(#td-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect id='td-Mask' fill='url(#td-linearGradient-2)' x='10' y='0' width='11' height='15' />
          <rect
            id='td-Rectangle-2'
            fill='url(#td-linearGradient-3)'
            x='0'
            y='0'
            width='7'
            height='15'
          />
          <rect
            id='td-Rectangle-2-Copy'
            fill='url(#td-linearGradient-4)'
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
