import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagSX: FlagIcon = ({
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
      <title>SX</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sx-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sx-linearGradient-2'>
          <stop stopColor='#0740AA' offset='0%' />
          <stop stopColor='#012F85' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sx-linearGradient-3'>
          <stop stopColor='#F02C33' offset='0%' />
          <stop stopColor='#D82027' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sx-linearGradient-4'>
          <stop stopColor='#E72C33' offset='0%' />
          <stop stopColor='#D82027' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sx-linearGradient-5'>
          <stop stopColor='#78C1F0' offset='0%' />
          <stop stopColor='#67B1E0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sx-linearGradient-6'>
          <stop stopColor='#F7E14B' offset='0%' />
          <stop stopColor='#F7DF3E' offset='100%' />
        </linearGradient>
      </defs>
      <g id='sx-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='sx-SX'>
          <rect
            id='sx-FlagBackground'
            fill='url(#sx-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='sx-Rectangle-2'
            fill='url(#sx-linearGradient-2)'
            x='0'
            y='7'
            width='21'
            height='8'
          />
          <rect
            id='sx-Rectangle-2'
            fill='url(#sx-linearGradient-3)'
            x='0'
            y='0'
            width='21'
            height='7'
          />
          <polygon id='sx-Rectangle-83' fill='url(#sx-linearGradient-1)' points='0 0 10 7.5 0 15' />
          <path
            d='M1.5,7 L1.5,5.50614953 C1.5,4.95161419 1.9382901,4.5 2.49538898,4.5 L4.50461102,4.5 C5.05579652,4.5 5.5,4.95726048 5.5,5.50614953 L5.5,7 C5.5,7.84456945 5.1157048,8.44663194 4.49650629,8.79751109 C4.13871224,9.00026105 3.78910418,9.08183627 3.46674049,9.09889258 C3.21089582,9.08183627 2.86128776,9.00026105 2.50349371,8.79751109 C1.8842952,8.44663194 1.5,7.84456945 1.5,7 Z'
            id='sx-Mask'
            fill='url(#sx-linearGradient-4)'
            fillRule='nonzero'
          />
          <path
            d='M2,7 L2,5.50614953 C2,5.22661086 2.2157526,5 2.49538898,5 L4.50461102,5 C4.7782068,5 5,5.23211365 5,5.50614953 L5,7 C5,8.5 3.5,8.6 3.5,8.6 C3.5,8.6 2,8.5 2,7 Z'
            id='sx-Mask'
            fill='url(#sx-linearGradient-5)'
          />
          <polygon id='sx-Rectangle-1394' fill='#FFFFFF' points='3 6.5 3.5 6 4 6.5 4 7.5 3 7.5' />
          <path
            d='M1.00127315,9.36801632 C1.60691933,10.0659994 2.56116706,10.5 3.5,10.5 C4.44801721,10.5 5.41530379,10.0519486 6.02102886,9.33837767 C6.19973322,9.12785602 6.17394022,8.812326 5.96341857,8.63362164 C5.75289693,8.45491728 5.43736691,8.48071029 5.25866255,8.69123193 C4.84286812,9.18105617 4.15430852,9.5 3.5,9.5 C2.85053603,9.5 2.17199371,9.19139271 1.75657246,8.71263631 C1.57559427,8.50406616 1.25980295,8.48169846 1.0512328,8.66267666 C0.842662659,8.84365485 0.820294962,9.15944617 1.00127315,9.36801632 Z'
            id='sx-Oval-276'
            fill='#F9D835'
            fillRule='nonzero'
          />
          <circle id='sx-Oval-275' fill='url(#sx-linearGradient-6)' cx='3.5' cy='4.5' r='1' />
        </g>
      </g>
    </svg>
  )
}
