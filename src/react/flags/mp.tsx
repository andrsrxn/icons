import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagMP: FlagIcon = ({
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
      <title>MP</title>

      <defs>
        <linearGradient id='mp-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='mp-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1e8bd6' />
          <stop offset='100%' stopColor='#1074ba' />
        </linearGradient>
        <linearGradient id='mp-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#a9a7a9' />
          <stop offset='100%' stopColor='#8c8a8c' />
        </linearGradient>
        <clipPath id='mp-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mp-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#mp-a)' d='M0 0h21v15H0z' />
          <path fill='url(#mp-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#mp-a)'
            fillRule='nonzero'
            d='M10.5 12.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0-1a4 4 0 1 1 0-8 4 4 0 0 1 0 8'
          />
          <path
            fill='url(#mp-c)'
            d='M8.938 5.997C8.972 5.447 9.443 5 9.999 5h1.002c.552 0 1.027.453 1.061.997l.376 6.006a.927.927 0 0 1-.947.997H9.509a.935.935 0 0 1-.947-.997z'
          />
          <path
            fill='url(#mp-a)'
            d='m10.5 9.515-2.057 1.467.759-2.41-2.03-1.504 2.526-.022.802-2.396.802 2.396 2.527.022-2.03 1.504.758 2.41z'
          />
        </g>
      </g>
    </svg>
  )
}
