import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagDK: FlagIcon = ({
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
      <title>DK</title>

      <defs>
        <linearGradient id='dk-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='dk-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ef264d' />
          <stop offset='100%' stopColor='#e1143c' />
        </linearGradient>
        <clipPath id='dk-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#dk-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#dk-a)' d='M0 0h21v15H0z' />
          <path fill='url(#dk-b)' d='M0 0h21v15H0z' />
          <path fill='url(#dk-a)' d='M0 9h6v6h3V9h12V6H9V0H6v6H0z' />
        </g>
      </g>
    </svg>
  )
}
