import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagAF: FlagIcon = ({
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
      <title>AF</title>

      <defs>
        <linearGradient id='af-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='af-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1ab11f' />
          <stop offset='100%' stopColor='#149818' />
        </linearGradient>
        <linearGradient id='af-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='af-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#dc0d18' />
          <stop offset='100%' stopColor='#be0711' />
        </linearGradient>
        <clipPath id='af-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#af-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#af-a)' d='M0 0h21v15H0z' />
          <path fill='url(#af-b)' d='M10 0h11v15H10z' />
          <path fill='url(#af-c)' d='M0 0h7v15H0z' />
          <path fill='url(#af-d)' d='M7 0h7v15H7z' />
          <path
            fill='#fff'
            fillRule='nonzero'
            d='M8 7c0 .901.482 1.72 1.247 2.164a.5.5 0 0 0 .502-.865A1.5 1.5 0 0 1 9 7a.5.5 0 0 0-1 0m3.846 2.107A2.5 2.5 0 0 0 13 7a.5.5 0 1 0-1 0c0 .518-.264.99-.693 1.265a.5.5 0 1 0 .539.842'
            opacity='.75'
          />
          <ellipse cx='10.5' cy='6.5' fill='#fff' fillOpacity='.5' rx='1' ry='1.5' />
        </g>
      </g>
    </svg>
  )
}
