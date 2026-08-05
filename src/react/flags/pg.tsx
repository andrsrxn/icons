import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagPG: FlagIcon = ({
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
      <title>PG</title>

      <defs>
        <linearGradient id='pg-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='pg-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='pg-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e8283f' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <linearGradient id='pg-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd84e' />
          <stop offset='100%' stopColor='#fcd036' />
        </linearGradient>
        <clipPath id='pg-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#pg-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#pg-a)' d='M0 0h21v15H0z' />
          <path fill='url(#pg-b)' d='M0 0h21v15H0z' />
          <path fill='url(#pg-c)' d='M0 0h21v15z' />
          <path
            fill='url(#pg-a)'
            d='m5 12.5-.707.207L4.5 12l-.207-.707L5 11.5l.707-.207L5.5 12l.207.707z'
          />
          <path
            fill='url(#pg-a)'
            d='m5 6.5-.707.207L4.5 6l-.207-.707L5 5.5l.707-.207L5.5 6l.207.707z'
          />
          <path
            fill='url(#pg-a)'
            d='m2.5 9-.707.207L2 8.5l-.207-.707L2.5 8l.707-.207L3 8.5l.207.707z'
          />
          <path
            fill='url(#pg-a)'
            d='m7 8.5-.707.207L6.5 8l-.207-.707L7 7.5l.707-.207L7.5 8l.207.707z'
          />
          <path
            fill='url(#pg-d)'
            d='M14.146 6.95a.49.49 0 0 1-.217-.377V5.65c0-.136-.098-.213-.246-.164l-.568.19a.87.87 0 0 1-.492 0l-.57-.19c-.135-.045-.15-.14-.028-.212l1.334-.8a.32.32 0 0 0 .135-.377l-.19-.568c-.045-.136.016-.214.164-.164l.569.19a.33.33 0 0 0 .376-.136l.8-1.334c.072-.12.163-.119.212.03l.19.568a.87.87 0 0 1 0 .492l-.19.569c-.045.136.03.246.165.246h.921c.136 0 .304.095.377.216l.8 1.335c.072.12.014.24-.116.266l-1.276.255a.41.41 0 0 0-.295.295l-.255 1.276c-.027.136-.144.189-.266.116z'
          />
        </g>
      </g>
    </svg>
  )
}
