import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagDZ: FlagIcon = ({
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
      <title>DZ</title>

      <defs>
        <linearGradient id='dz-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='dz-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#048345' />
          <stop offset='100%' stopColor='#04753e' />
        </linearGradient>
        <linearGradient id='dz-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e81b42' />
          <stop offset='100%' stopColor='#d20f34' />
        </linearGradient>
        <clipPath id='dz-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#dz-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#dz-a)' d='M0 0h21v15H0z' />
          <path fill='url(#dz-b)' d='M0 0h11v15H0z' />
          <path fill='url(#dz-a)' d='M11 0h10v15H11z' />
          <path
            fill='url(#dz-c)'
            d='m13 8.28-1.176.838.434-1.377-1.16-.859 1.444-.013L13 5.5l.458 1.369 1.444.013-1.16.859.434 1.377z'
          />
          <path
            fill='url(#dz-c)'
            d='M13.26 4.214A4.2 4.2 0 0 0 10.313 3C7.931 3 6 5.015 6 7.5S7.931 12 10.313 12c1.14 0 2.176-.461 2.947-1.214a4.1 4.1 0 0 1-1.77.396c-2.166 0-3.922-1.649-3.922-3.682s1.756-3.682 3.921-3.682c.638 0 1.24.143 1.771.396'
          />
        </g>
      </g>
    </svg>
  )
}
