import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagCR: FlagIcon = ({
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
      <title>CR</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cr-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cr-linearGradient-2'>
          <stop stopColor='#06358F' offset='0%' />
          <stop stopColor='#042E7D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cr-linearGradient-3'>
          <stop stopColor='#E61F37' offset='0%' />
          <stop stopColor='#CC162C' offset='100%' />
        </linearGradient>
      </defs>
      <g id='cr-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='cr-CR'>
          <rect
            id='cr-FlagBackground'
            fill='url(#cr-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='cr-Rectangle-2'
            fill='url(#cr-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='3'
          />
          <rect
            id='cr-Rectangle-2'
            fill='url(#cr-linearGradient-2)'
            x='0'
            y='12'
            width='21'
            height='3'
          />
          <rect
            id='cr-Rectangle-2'
            fill='url(#cr-linearGradient-1)'
            x='0'
            y='3'
            width='21'
            height='9'
          />
          <rect
            id='cr-Rectangle-2-Copy-4'
            fill='url(#cr-linearGradient-3)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
        </g>
      </g>
    </svg>
  )
}
