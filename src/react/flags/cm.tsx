import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagCM: FlagIcon = ({
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
      <title>CM</title>

      <defs>
        <linearGradient id='cm-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='cm-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffdc44' />
          <stop offset='100%' stopColor='#fdd216' />
        </linearGradient>
        <linearGradient id='cm-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#059170' />
          <stop offset='100%' stopColor='#007b5e' />
        </linearGradient>
        <linearGradient id='cm-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e21a30' />
          <stop offset='100%' stopColor='#ce1126' />
        </linearGradient>
        <linearGradient id='cm-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffdc42' />
          <stop offset='100%' stopColor='#fdd217' />
        </linearGradient>
        <clipPath id='cm-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cm-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#cm-a)' d='M0 0h21v15H0z' />
          <path fill='url(#cm-b)' d='M10 0h11v15H10z' />
          <path fill='url(#cm-c)' d='M0 0h7v15H0z' />
          <path fill='url(#cm-d)' d='M7 0h7v15H7z' />
          <path fill='url(#cm-b)' d='M14 0h7v15h-7z' />
          <path
            fill='url(#cm-e)'
            d='M10.5 8.475 9.03 9.523 9.574 7.8l-1.45-1.074 1.804-.016L10.5 5l.573 1.711 1.805.016-1.45 1.074.541 1.722z'
          />
        </g>
      </g>
    </svg>
  )
}
