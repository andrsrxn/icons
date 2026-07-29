import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagGY: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>GY</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gy-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gy-linearGradient-2'>
          <stop stopColor='#08C55F' offset='0%' />
          <stop stopColor='#009F49' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gy-linearGradient-3'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gy-linearGradient-4'>
          <stop stopColor='#FFD831' offset='0%' />
          <stop stopColor='#FDD117' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gy-linearGradient-5'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gy-linearGradient-6'>
          <stop stopColor='#E92034' offset='0%' />
          <stop stopColor='#CE1225' offset='100%' />
        </linearGradient>
      </defs>
      <g id='gy-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='gy-GY'>
          <rect
            id='gy-FlagBackground'
            fill='url(#gy-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect id='gy-Mask' fill='url(#gy-linearGradient-2)' x='0' y='0' width='21' height='15' />
          <polygon
            id='gy-Rectangle-1134'
            fill='url(#gy-linearGradient-3)'
            fillRule='nonzero'
            points='-1 15 -1 0 0 0 21 7 21 8 0 15'
          />
          <polygon
            id='gy-Rectangle-1134'
            fill='url(#gy-linearGradient-4)'
            fillRule='nonzero'
            points='8.8817842e-16 1.05409255 1.99840144e-15 13.9459074 19.3377223 7.5'
          />
          <polygon
            id='gy-Rectangle-1134'
            fill='url(#gy-linearGradient-5)'
            fillRule='nonzero'
            points='-1 15 -1 0 0 0 11.5 7.5 0 15'
          />
          <polygon
            id='gy-Rectangle-1134'
            fill='url(#gy-linearGradient-6)'
            fillRule='nonzero'
            points='0 13.8061278 9.66939597 7.5 0 1.19387219'
          />
        </g>
      </g>
    </svg>
  )
}
