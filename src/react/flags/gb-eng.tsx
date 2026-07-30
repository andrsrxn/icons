import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagGBENG: FlagIcon = ({
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
      <title>GB-ENG</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gb-eng-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gb-eng-linearGradient-2'>
          <stop stopColor='#E82739' offset='0%' />
          <stop stopColor='#CA1A2B' offset='100%' />
        </linearGradient>
      </defs>
      <g id='gb-eng-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='gb-eng-GB-ENG'>
          <rect
            id='gb-eng-FlagBackground'
            fill='url(#gb-eng-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <path
            d='M9,6 L0,6 L0,9 L9,9 L9,15 L12,15 L12,9 L21,9 L21,6 L12,6 L12,0 L9,0 L9,6 Z'
            id='gb-eng-Rectangle-2'
            fill='url(#gb-eng-linearGradient-2)'
          />
        </g>
      </g>
    </svg>
  )
}
