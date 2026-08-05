import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagQA: FlagIcon = ({
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
      <title>QA</title>

      <defs>
        <linearGradient id='qa-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='qa-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#a6264c' />
          <stop offset='100%' stopColor='#8c1e3e' />
        </linearGradient>
        <clipPath id='qa-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#qa-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#qa-a)' d='M0 0h21v15H0z' />
          <path fill='url(#qa-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#qa-a)'
            d='M0 15h7.5L6 14l1.5-1L6 12l1.5-1L6 10l1.5-1L6 8l1.5-1L6 6l1.5-1L6 4l1.5-1L6 2l1.5-1L6 0H0z'
          />
        </g>
      </g>
    </svg>
  )
}
