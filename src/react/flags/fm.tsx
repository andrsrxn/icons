import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagFM: FlagIcon = ({
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
      <title>FM</title>

      <defs>
        <linearGradient id='fm-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='fm-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#95cef5' />
          <stop offset='100%' stopColor='#78b3dc' />
        </linearGradient>
        <clipPath id='fm-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#fm-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#fm-a)' d='M0 0h21v15H0z' />
          <path fill='url(#fm-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#fm-a)'
            d='m10.5 4.32-1.176.798.396-1.365-1.122-.871 1.42-.045L10.5 1.5l.482 1.337 1.42.045-1.122.871.396 1.365zm0 8-1.176.798.396-1.365-1.122-.871 1.42-.045L10.5 9.5l.482 1.337 1.42.045-1.122.871.396 1.365zm4-4-1.176.798.396-1.365-1.122-.871 1.42-.045L14.5 5.5l.482 1.337 1.42.045-1.122.871.396 1.365zm-8 0-1.176.798.396-1.365-1.122-.871 1.42-.045L6.5 5.5l.482 1.337 1.42.045-1.122.871.396 1.365z'
          />
        </g>
      </g>
    </svg>
  )
}
