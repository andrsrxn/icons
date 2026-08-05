import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagGE: FlagIcon = ({
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
      <title>GE</title>

      <defs>
        <linearGradient id='ge-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ge-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ff2b37' />
          <stop offset='100%' stopColor='#fd0d1b' />
        </linearGradient>
        <clipPath id='ge-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ge-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ge-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ge-b)' d='M9 6H0v3h9v6h3V9h9V6h-9V0H9z' />
          <path
            fill='#fd0d1b'
            d='M16.2 2.7 16 1.5h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1zM4.2 2.7 4 1.5h1l-.2 1.2L6 2.5v1l-1.2-.2.2 1.2H4l.2-1.2-1.2.2v-1zM4.2 11.7 4 10.5h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2H4l.2-1.2-1.2.2v-1zM16.2 11.7l-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1z'
          />
        </g>
      </g>
    </svg>
  )
}
