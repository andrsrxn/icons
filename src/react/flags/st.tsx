import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagST: FlagIcon = ({
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
      <title>ST</title>

      <defs>
        <linearGradient id='st-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='st-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#2acb41' />
          <stop offset='100%' stopColor='#21ac35' />
        </linearGradient>
        <linearGradient id='st-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fdd043' />
          <stop offset='100%' stopColor='#ffcd2f' />
        </linearGradient>
        <linearGradient id='st-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e71e43' />
          <stop offset='100%' stopColor='#d01739' />
        </linearGradient>
        <linearGradient id='st-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <clipPath id='st-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#st-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#st-a)' d='M0 0h21v15H0z' />
          <path fill='url(#st-b)' d='M0 10h21v5H0z' />
          <path fill='url(#st-b)' d='M0 0h21v5H0z' />
          <path fill='url(#st-c)' d='M0 5h21v5H0z' />
          <path fill='url(#st-d)' d='m0 0 8 7.5L0 15z' />
          <path
            fill='url(#st-e)'
            d='m11 8.32-1.176.798.396-1.365-1.122-.871 1.42-.045L11 5.5l.482 1.337 1.42.045-1.122.871.396 1.365z'
          />
          <path
            fill='url(#st-e)'
            d='m16 8.32-1.176.798.396-1.365-1.122-.871 1.42-.045L16 5.5l.482 1.337 1.42.045-1.122.871.396 1.365z'
          />
        </g>
      </g>
    </svg>
  )
}
