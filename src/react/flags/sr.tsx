import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagSR: FlagIcon = ({
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
      <title>SR</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sr-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sr-linearGradient-2'>
          <stop stopColor='#43924C' offset='0%' />
          <stop stopColor='#3A7E42' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sr-linearGradient-3'>
          <stop stopColor='#CD153A' offset='0%' />
          <stop stopColor='#B31031' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sr-linearGradient-4'>
          <stop stopColor='#F5D24B' offset='0%' />
          <stop stopColor='#ECC736' offset='100%' />
        </linearGradient>
      </defs>
      <g id='sr-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='sr-SR'>
          <rect
            id='sr-FlagBackground'
            fill='url(#sr-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='sr-Rectangle-2'
            fill='url(#sr-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='3'
          />
          <rect
            id='sr-Rectangle-2'
            fill='url(#sr-linearGradient-2)'
            x='0'
            y='12'
            width='21'
            height='3'
          />
          <rect
            id='sr-Rectangle-2'
            fill='url(#sr-linearGradient-1)'
            x='0'
            y='3'
            width='21'
            height='9'
          />
          <rect
            id='sr-Rectangle-2-Copy-4'
            fill='url(#sr-linearGradient-3)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
          <polygon
            id='sr-Star-33'
            fill='url(#sr-linearGradient-4)'
            points='10.5 8.77499999 9.03053687 9.77254249 9.52516708 8.06674242 8.12235871 6.97745751 9.89752012 6.92075759 10.5 5.25 11.1024799 6.92075759 12.8776413 6.97745751 11.4748329 8.06674242 11.9694631 9.77254249'
          />
        </g>
      </g>
    </svg>
  )
}
