import type { FlagIcon, FlagIconProps } from '../types'

export const IconFlagMN: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>MN</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mn-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mn-linearGradient-2'>
          <stop stopColor='#146BBC' offset='0%' />
          <stop stopColor='#0B5396' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mn-linearGradient-3'>
          <stop stopColor='#E43642' offset='0%' />
          <stop stopColor='#C32A34' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mn-linearGradient-4'>
          <stop stopColor='#F8D246' offset='0%' />
          <stop stopColor='#F9CE2F' offset='100%' />
        </linearGradient>
      </defs>
      <g id='mn-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='mn-MN'>
          <rect
            id='mn-FlagBackground'
            fill='url(#mn-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='mn-Rectangle-2-Copy'
            fill='url(#mn-linearGradient-2)'
            x='7'
            y='0'
            width='7'
            height='15'
          />
          <rect
            id='mn-Rectangle-2'
            fill='url(#mn-linearGradient-3)'
            x='0'
            y='0'
            width='7'
            height='15'
          />
          <rect
            id='mn-Rectangle-2'
            fill='url(#mn-linearGradient-3)'
            x='14'
            y='0'
            width='7'
            height='15'
          />
          <path
            d='M4,9 L5,9 L5,12 L4,12 L4,9 Z M2,9 L3,9 L3,12 L2,12 L2,9 Z M3,11 L4,11 L3.5,12 L3,11 Z M3,9 L4,9 L3.5,10 L3,9 Z M3,8 L3.5,7.5 L4,8 L3,8 Z M3.5,9 C3.22385763,9 3,8.77614237 3,8.5 C3,8.22385763 3.22385763,8 3.5,8 C3.77614237,8 4,8.22385763 4,8.5 C4,8.77614237 3.77614237,9 3.5,9 Z M3.5,11 C3.22385763,11 3,10.7761424 3,10.5 C3,10.2238576 3.22385763,10 3.5,10 C3.77614237,10 4,10.2238576 4,10.5 C4,10.7761424 3.77614237,11 3.5,11 Z'
            id='mn-Rectangle-1611'
            fill='url(#mn-linearGradient-4)'
          />
        </g>
      </g>
    </svg>
  )
}
