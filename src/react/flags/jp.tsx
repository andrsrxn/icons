import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagJP: FlagIcon = ({
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
      <title>JP</title>

      <defs>
        <linearGradient id='jp-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='jp-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#d81441' />
          <stop offset='100%' stopColor='#bb0831' />
        </linearGradient>
        <clipPath id='jp-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#jp-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#jp-a)' d='M0 0h21v15H0z' />
          <circle cx='10.5' cy='7.5' r='4.5' fill='url(#jp-b)' />
        </g>
      </g>
    </svg>
  )
}
