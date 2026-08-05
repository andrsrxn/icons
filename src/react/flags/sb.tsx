import type { FlagIcon } from './types'

export const IconFlagSB: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  title,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}) => {
  const isHidden = ariaHidden === true
  const titleText = title ?? 'SB'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='sb-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='sb-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1dbe4f' />
          <stop offset='100%' stopColor='#159b3f' />
        </linearGradient>
        <linearGradient id='sb-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0660d4' />
          <stop offset='100%' stopColor='#0051bb' />
        </linearGradient>
        <linearGradient id='sb-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#2c7442' />
          <stop offset='100%' stopColor='#225b34' />
        </linearGradient>
        <linearGradient id='sb-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd646' />
          <stop offset='100%' stopColor='#fed02f' />
        </linearGradient>
        <clipPath id='sb-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sb-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#sb-a)' d='M0 0h21v15H0z' />
          <path
            fill='url(#sb-a)'
            d='M5.92 5.812c0-.139.078-.33.18-.433l.14-.138c.1-.1.102-.26 0-.362l-.14-.138a.7.7 0 0 1-.18-.433v-.496c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139.046.16.116.02l.268-.536a.46.46 0 0 1 .364-.232h1.004c.137 0 .248.116.248.25 0 .138-.107.25-.252.25h-.496a.254.254 0 0 0-.252.25c0 .138.107.25.252.25h.496c.139 0 .252.108.252.245v1.51a.245.245 0 0 1-.252.245h-.496a.25.25 0 0 1-.252-.252v-.496c0-.139.116-.252.25-.252.138 0 .25-.116.25-.25a.247.247 0 0 0-.252-.25h-.496a.255.255 0 0 0-.252.248v1.004a.25.25 0 0 1-.25.248.247.247 0 0 1-.25-.252v-.496a.254.254 0 0 0-.25-.252.247.247 0 0 0-.25.252v.496c0 .139-.116.252-.25.252a.247.247 0 0 1-.25-.252z'
          />
          <path fill='url(#sb-b)' d='M0-.003h21v15H0z' />
          <path fill='url(#sb-c)' d='M0-.003h21l-21 15z' />
          <path fill='url(#sb-d)' d='m0-.003 21 15H0z' transform='matrix(-1 0 0 1 21 0)' />
          <path fill='url(#sb-e)' d='M-4 6.497h29v2H-4z' />
          <path
            fill='#fff'
            d='m2.25 2.872-.734.387.14-.819-.595-.579.822-.12.367-.744.368.745.821.12-.594.578.14.819zm5 0-.734.387.14-.819-.595-.579.822-.12.367-.744.368.745.821.12-.594.578.14.819zm0 3-.734.387.14-.819-.595-.579.822-.12.367-.744.368.745.821.12-.594.578.14.819zm-5 0-.734.387.14-.819-.595-.579.822-.12.367-.744.368.745.821.12-.594.578.14.819zm2.5-1.5-.734.387.14-.819-.595-.579.822-.12.367-.744.368.745.821.12-.594.578.14.819z'
          />
        </g>
      </g>
    </svg>
  )
}
