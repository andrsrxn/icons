import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagPS: FlagIcon = ({
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
      <title>PS</title>

      <defs>
        <linearGradient id='ps-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ps-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#20934f' />
          <stop offset='100%' stopColor='#197940' />
        </linearGradient>
        <linearGradient id='ps-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='ps-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e62539' />
          <stop offset='100%' stopColor='#ca1a2c' />
        </linearGradient>
        <clipPath id='ps-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ps-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ps-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ps-b)' d='M0 10h21v5H0z' />
          <path fill='url(#ps-c)' d='M0 0h21v5H0z' />
          <path fill='url(#ps-a)' d='M0 5h21v5H0z' />
          <path fill='url(#ps-d)' d='m0 0 10 7.5L0 15z' />
        </g>
      </g>
    </svg>
  )
}
