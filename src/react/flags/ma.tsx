import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagMA: FlagIcon = ({
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
      <title>MA</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ma-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ma-linearGradient-2'>
          <stop stopColor='#E33B44' offset='0%' />
          <stop stopColor='#C02A32' offset='100%' />
        </linearGradient>
      </defs>
      <g id='ma-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='ma-MA'>
          <rect
            id='ma-FlagBackground'
            fill='url(#ma-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='ma-Mask-Copy'
            fill='url(#ma-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <path
            d='M10.5,9.25500007 L7.85496636,11.1405765 L8.83089575,8.04232485 L6.22024568,6.10942353 L9.46843684,6.08017512 L10.5,3 L11.5315632,6.08017512 L14.7797543,6.10942353 L12.1691043,8.04232485 L13.1450336,11.1405765 L10.5,9.25500007 Z M10.5,8.02691631 L11.2941375,8.5930365 L11.0011272,7.6628261 L11.7849415,7.08249721 L10.8097136,7.07371575 L10.5,6.14893259 L10.1902864,7.07371575 L9.21505853,7.08249721 L9.99887281,7.6628261 L9.7058625,8.5930365 L10.5,8.02691631 Z'
            id='ma-Star-8'
            fill='#0A6135'
            fillRule='nonzero'
          />
        </g>
      </g>
    </svg>
  )
}
