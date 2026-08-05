import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagMX: FlagIcon = ({
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
      <title>MX</title>

      <defs>
        <linearGradient id='mx-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='mx-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e3283e' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <linearGradient id='mx-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#128a60' />
          <stop offset='100%' stopColor='#0b6848' />
        </linearGradient>
        <clipPath id='mx-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mx-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#mx-a)' d='M0 0h21v15H0z' />
          <path fill='url(#mx-b)' d='M10 0h11v15H10z' />
          <path fill='url(#mx-c)' d='M0 0h7v15H0z' />
          <path fill='url(#mx-a)' d='M7 0h7v15H7z' />
          <path
            fill='#8c9157'
            fillRule='nonzero'
            d='M8 7c0 .901.482 1.72 1.247 2.164a.5.5 0 0 0 .502-.865A1.5 1.5 0 0 1 9 7a.5.5 0 0 0-1 0m3.846 2.107A2.5 2.5 0 0 0 13 7a.5.5 0 1 0-1 0c0 .518-.264.99-.693 1.265a.5.5 0 1 0 .539.842'
          />
          <ellipse cx='10.5' cy='6.5' fill='#c59262' rx='1' ry='1.5' />
        </g>
      </g>
    </svg>
  )
}
