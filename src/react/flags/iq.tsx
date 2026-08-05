import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagIQ: FlagIcon = ({
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
      <title>IQ</title>

      <defs>
        <linearGradient id='iq-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='iq-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#df1e35' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <linearGradient id='iq-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <clipPath id='iq-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#iq-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#iq-a)' d='M0 0h21v15H0z' />
          <path fill='url(#iq-b)' d='M0 0h21v5H0z' />
          <path fill='url(#iq-c)' d='M0 10h21v5H0z' />
          <path fill='url(#iq-a)' d='M0 5h21v5H0z' />
          <path
            fill='#0f7a40'
            d='M14 6.256c0-.141.092-.21.232-.14l.536.268a.44.44 0 0 1 .232.365V8.75a.247.247 0 0 1-.252.249h-.496A.254.254 0 0 1 14 8.744zM8 6.256c0-.141.092-.21.232-.14l.536.268A.44.44 0 0 1 9 6.749V8.75A.247.247 0 0 1 8.748 9h-.496A.254.254 0 0 1 8 8.744zM12 6.749c0-.138.092-.295.232-.365l.536-.268c.128-.064.232-.002.232.14v2.488a.25.25 0 0 1-.252.256h-.496A.25.25 0 0 1 12 8.751z'
          />
          <path
            fill='#0f7a40'
            d='M10 7.748c0-.137.092-.294.232-.364l.536-.268c.128-.064.232-.004.232.126v.803h1.5V9h-2.248A.255.255 0 0 1 10 8.752zM6 7.748c0-.137.092-.294.232-.364l.536-.268c.128-.064.232-.004.232.126v.803h1.5V9H6.252A.255.255 0 0 1 6 8.752z'
          />
        </g>
      </g>
    </svg>
  )
}
