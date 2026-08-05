import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagDO: FlagIcon = ({
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
      <title>DO</title>

      <defs>
        <linearGradient id='do-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='do-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#083d7a' />
          <stop offset='100%' stopColor='#032f61' />
        </linearGradient>
        <linearGradient id='do-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#df1e35' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <clipPath id='do-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#do-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#do-a)' d='M0 0h21v15H0z' />
          <path fill='url(#do-b)' d='M0 0h9v6H0z' />
          <path fill='url(#do-b)' d='M12 9h9v6h-9z' />
          <path fill='url(#do-c)' d='M0 9h9v6H0z' />
          <path fill='url(#do-c)' d='M12 0h9v6h-9z' />
          <path fill='url(#do-a)' d='M9 6H0v3h9v6h3V9h9V6h-9V0H9z' />
          <path
            fill='#c93127'
            fillOpacity='.2'
            d='M9.44 6.44a1.5 1.5 0 0 0 2.12 2.12 1.5 1.5 0 0 0 0-2.12'
          />
          <circle cx='10.5' cy='7.5' r='1' fill='#042f60' />
          <path
            fill='#0f6d1a'
            fillRule='nonzero'
            d='M11.56 8.56a1.5 1.5 0 0 1-2.12-2.12l.353.353a1 1 0 1 0 1.414 0l.354-.354a1.5 1.5 0 0 1 0 2.122m0 0a1.5 1.5 0 0 1-2.12-2.12l.353.353a1 1 0 1 0 1.414 0l.354-.354a1.5 1.5 0 0 1 0 2.122'
          />
        </g>
      </g>
    </svg>
  )
}
