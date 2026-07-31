import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagNI: FlagIcon = ({
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
      <title>NI</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ni-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ni-linearGradient-2'>
          <stop stopColor='#1A78D6' offset='0%' />
          <stop stopColor='#106AC4' offset='100%' />
        </linearGradient>
      </defs>
      <g id='ni-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='ni-NI'>
          <rect
            id='ni-FlagBackground'
            fill='url(#ni-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='ni-Rectangle-2'
            fill='url(#ni-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
          <rect
            id='ni-Rectangle-2'
            fill='url(#ni-linearGradient-2)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <rect
            id='ni-Rectangle-2'
            fill='url(#ni-linearGradient-1)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
          <path
            d='M10.5,9 C11.3284271,9 12,8.32842712 12,7.5 C12,6.67157288 11.3284271,6 10.5,6 C9.67157288,6 9,6.67157288 9,7.5 C9,8.32842712 9.67157288,9 10.5,9 Z M10.5,9.5 C9.3954305,9.5 8.5,8.6045695 8.5,7.5 C8.5,6.3954305 9.3954305,5.5 10.5,5.5 C11.6045695,5.5 12.5,6.3954305 12.5,7.5 C12.5,8.6045695 11.6045695,9.5 10.5,9.5 Z'
            id='ni-Oval-1'
            fill='#DBCD92'
            fillRule='nonzero'
          />
          <polygon id='ni-Rectangle-390' fill='#9CDDEE' points='10.5 6.5 11.5 8.5 9.5 8.5' />
        </g>
      </g>
    </svg>
  )
}
