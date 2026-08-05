import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagTR: FlagIcon = ({
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
      <title>TR</title>

      <defs>
        <linearGradient id='tr-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='tr-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e92434' />
          <stop offset='100%' stopColor='#e11324' />
        </linearGradient>
        <clipPath id='tr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tr-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#tr-a)' d='M0 0h21v15H0z' />
          <path fill='url(#tr-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#tr-a)'
            d='M13.052 4.737A3.9 3.9 0 0 0 10.75 4C8.679 4 7 5.567 7 7.5S8.679 11 10.75 11c.868 0 1.667-.275 2.302-.737a4.5 4.5 0 1 1 0-5.526m1.214 3.34-.919 1.113.063-1.442-1.343-.53 1.39-.386.09-1.441.796 1.204 1.398-.361-.898 1.13.775 1.217z'
          />
        </g>
      </g>
    </svg>
  )
}
