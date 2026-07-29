import type { FlagIcon, FlagIconProps } from '../types'

export const IconFlagBF: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>BF</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bf-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bf-linearGradient-2'>
          <stop stopColor='#00B051' offset='0%' />
          <stop stopColor='#009F49' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bf-linearGradient-3'>
          <stop stopColor='#FA494B' offset='0%' />
          <stop stopColor='#F02B2D' offset='100%' />
        </linearGradient>
      </defs>
      <g id='bf-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='bf-BF'>
          <rect
            id='bf-FlagBackground'
            fill='url(#bf-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='bf-Rectangle-2'
            fill='url(#bf-linearGradient-2)'
            x='0'
            y='8'
            width='21'
            height='7'
          />
          <rect
            id='bf-Rectangle-2'
            fill='url(#bf-linearGradient-3)'
            x='0'
            y='0'
            width='21'
            height='8'
          />
          <polygon
            id='bf-Star-8'
            fill='#FDD216'
            points='10.5 9.17000005 8.73664424 10.427051 9.38726383 8.3615499 7.64683045 7.07294902 9.81229123 7.05345008 10.5 5 11.1877088 7.05345008 13.3531695 7.07294902 11.6127362 8.3615499 12.2633558 10.427051'
          />
        </g>
      </g>
    </svg>
  )
}
