import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagFR: FlagIcon = ({
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
      <title>FR</title>

      <defs>
        <linearGradient id='fr-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='fr-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f44653' />
          <stop offset='100%' stopColor='#ee2a39' />
        </linearGradient>
        <linearGradient id='fr-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1035bb' />
          <stop offset='100%' stopColor='#042396' />
        </linearGradient>
        <clipPath id='fr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#fr-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#fr-a)' d='M0 0h21v15H0z' />
          <path fill='url(#fr-b)' d='M10 0h11v15H10z' />
          <path fill='url(#fr-c)' d='M0 0h7v15H0z' />
          <path fill='url(#fr-a)' d='M7 0h7v15H7z' />
        </g>
      </g>
    </svg>
  )
}
