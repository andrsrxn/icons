import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagMW: FlagIcon = ({
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
      <title>MW</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mw-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mw-linearGradient-2'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mw-linearGradient-3'>
          <stop stopColor='#E42038' offset='0%' />
          <stop stopColor='#CC162C' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mw-linearGradient-4'>
          <stop stopColor='#47B849' offset='0%' />
          <stop stopColor='#399E3B' offset='100%' />
        </linearGradient>
      </defs>
      <g id='mw-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='mw-MW'>
          <rect
            id='mw-FlagBackground'
            fill='url(#mw-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='mw-Rectangle-2'
            fill='url(#mw-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
          <circle id='mw-Oval-200' fill='url(#mw-linearGradient-3)' cx='10.5' cy='5.5' r='3.5' />
          <rect
            id='mw-Rectangle-2'
            fill='url(#mw-linearGradient-3)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
          <rect
            id='mw-Rectangle-2'
            fill='url(#mw-linearGradient-4)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
        </g>
      </g>
    </svg>
  )
}
