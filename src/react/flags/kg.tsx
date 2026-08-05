import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagKG: FlagIcon = ({
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
      <title>KG</title>

      <defs>
        <linearGradient id='kg-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='kg-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f22a46' />
          <stop offset='100%' stopColor='#e71834' />
        </linearGradient>
        <linearGradient id='kg-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff04d' />
          <stop offset='100%' stopColor='#ffee35' />
        </linearGradient>
        <clipPath id='kg-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#kg-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#kg-a)' d='M0 0h21v15H0z' />
          <path fill='url(#kg-b)' d='M0 0h21v15H0z' />
          <circle cx='10.5' cy='7.5' r='2.5' fill='url(#kg-c)' />
          <path
            fill='url(#kg-c)'
            d='m10.5 11.035-1.224 1.827-.31-2.177L7.071 11.8l.665-2.096-2.191.182 1.508-1.6L5 7.5l2.053-.787-1.508-1.6 2.191.183L7.071 3.2l1.895 1.115.31-2.177L10.5 3.965l1.224-1.827.31 2.177L13.929 3.2l-.665 2.096 2.191-.182-1.508 1.6L16 7.5l-2.053.787 1.508 1.6-2.191-.183.665 2.096-1.895-1.115-.31 2.177zm0-.035a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7'
          />
        </g>
      </g>
    </svg>
  )
}
