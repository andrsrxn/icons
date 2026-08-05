import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagAW: FlagIcon = ({
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
      <title>AW</title>

      <defs>
        <linearGradient id='aw-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='aw-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#5098ea' />
          <stop offset='100%' stopColor='#458bdb' />
        </linearGradient>
        <linearGradient id='aw-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e82045' />
          <stop offset='100%' stopColor='#d01739' />
        </linearGradient>
        <clipPath id='aw-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#aw-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#aw-a)' d='M0 0h21v15H0z' />
          <path fill='url(#aw-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#aw-a)'
            fillRule='nonzero'
            d='M1.803 4.96a.5.5 0 0 1 0-.92l1.566-.67.671-1.567a.5.5 0 0 1 .92 0l.67 1.566 1.567.671a.5.5 0 0 1 0 .92l-1.566.67-.671 1.567a.5.5 0 0 1-.92 0l-.67-1.566z'
          />
          <path
            fill='url(#aw-c)'
            d='M3.75 5.25 2 4.5l1.75-.75L4.5 2l.75 1.75L7 4.5l-1.75.75L4.5 7z'
          />
          <path fill='#f9d536' d='M0 11h21v1H0zM0 9h21v1H0z' />
        </g>
      </g>
    </svg>
  )
}
