import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagCO: FlagIcon = ({ className, ...props }: FlagIconProps) => {
  return (
    <svg
      width='21px'
      height='15px'
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>CO</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='co-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='co-linearGradient-2'>
          <stop stopColor='#0748AE' offset='0%' />
          <stop stopColor='#003993' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='co-linearGradient-3'>
          <stop stopColor='#DE2035' offset='0%' />
          <stop stopColor='#CE1126' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='co-linearGradient-4'>
          <stop stopColor='#FFD935' offset='0%' />
          <stop stopColor='#FDD216' offset='100%' />
        </linearGradient>
      </defs>
      <g id='co-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='co-CO'>
          <rect
            id='co-FlagBackground'
            fill='url(#co-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='co-Rectangle-2'
            fill='url(#co-linearGradient-2)'
            x='0'
            y='7'
            width='21'
            height='4'
          />
          <rect
            id='co-Rectangle-2'
            fill='url(#co-linearGradient-3)'
            x='0'
            y='11'
            width='21'
            height='4'
          />
          <rect
            id='co-Rectangle-2'
            fill='url(#co-linearGradient-4)'
            x='0'
            y='0'
            width='21'
            height='7'
          />
        </g>
      </g>
    </svg>
  )
}
