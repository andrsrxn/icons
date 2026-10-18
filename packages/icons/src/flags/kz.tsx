import type { FlagIcon } from './types'

export const IconFlagKZ: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'KZ',
  'aria-hidden': ariaHidden,
  preserveAspectRatio,
  cover,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)
  const isHidden = ariaHidden === true

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='icon-flag-kz'
      role={isHidden || !isLabelled ? undefined : 'img'}
      aria-hidden={isHidden || !isLabelled ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      focusable={isHidden || !isLabelled ? false : undefined}
      preserveAspectRatio={cover ? 'xMidYMid slice' : preserveAspectRatio}
      className={`icon-flag ${className ?? ''}`.trim()}
      {...props}>
      <defs>
        <defs>
          <linearGradient
            id='kz-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='kz-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#30c6e0' />
            <stop offset='1' stopColor='#1cb0c9' />
          </linearGradient>
          <linearGradient
            id='kz-d'
            x1='10.5'
            x2='10.5'
            y1='4.5'
            y2='10.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffcd4b' />
            <stop offset='1' stopColor='#fec531' />
          </linearGradient>
          <linearGradient
            id='kz-e'
            x1='10.5'
            x2='10.5'
            y1='2.14'
            y2='12.86'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffcd4b' />
            <stop offset='1' stopColor='#fec531' />
          </linearGradient>
          <linearGradient id='kz-f' x1='2' x2='2' y1='1' y2='14' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffcd4b' />
            <stop offset='1' stopColor='#fec531' />
          </linearGradient>
          <clipPath id='kz-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='kz-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#kz-clip)'>
        <g clipPath='url(#kz-a)'>
          <path fill='url(#kz-b)' d='M21 0H0v15h21z' />
          <path fill='url(#kz-c)' d='M21 0H0v15h21z' />
          <path fill='url(#kz-d)' d='M10.5 10.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6' />
          <path
            fill='url(#kz-e)'
            fillRule='evenodd'
            d='m10.5 11.04-1.22 1.82-.31-2.18-1.9 1.12.67-2.1-2.2.19 1.51-1.6L5 7.5l2.05-.79-1.5-1.6 2.19.19-.67-2.1 1.9 1.11.3-2.17 1.23 1.82 1.22-1.82.31 2.17 1.9-1.11-.67 2.1 2.2-.19-1.51 1.6L16 7.5l-2.05.79 1.5 1.6-2.19-.19.67 2.1-1.9-1.12-.3 2.18zm0-.04a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7'
            clipRule='evenodd'
          />
          <path
            fill='url(#kz-f)'
            fillRule='evenodd'
            d='M1 1.25q.01-.23.25-.25h.5c.14 0 .25.1.25.25v.5c0 .14-.1.25-.25.25h-.5A.25.25 0 0 1 1 1.75zm0 2c0-.14.1-.25.25-.25h.5c.14 0 .25.1.25.25v.5c0 .14-.1.25-.25.25h-.5A.25.25 0 0 1 1 3.75zm0 2c0-.14.1-.25.25-.25h.5c.14 0 .25.1.25.25v.5c0 .14-.1.25-.25.25h-.5A.25.25 0 0 1 1 5.75zm0 2c0-.14.1-.25.25-.25h.5c.14 0 .25.1.25.25v.5c0 .14-.1.25-.25.25h-.5A.25.25 0 0 1 1 7.75zm0 2q.01-.23.25-.25h.5c.14 0 .25.1.25.25v.5q-.01.23-.25.25h-.5A.25.25 0 0 1 1 9.75zm0 2q.01-.23.25-.25h.5c.14 0 .25.1.25.25v.5q-.01.23-.25.25h-.5a.25.25 0 0 1-.25-.25zm0 2q.01-.23.25-.25h.5c.14 0 .25.1.25.25v.5q-.01.23-.25.25h-.5a.25.25 0 0 1-.25-.25zm1-1q.01-.23.25-.25h.5c.14 0 .25.1.25.25v.5q-.01.23-.25.25h-.5a.25.25 0 0 1-.25-.25zm0-2q.01-.23.25-.25h.5c.14 0 .25.1.25.25v.5q-.01.23-.25.25h-.5a.25.25 0 0 1-.25-.25zm0-2q.01-.23.25-.25h.5c.14 0 .25.1.25.25v.5q-.01.23-.25.25h-.5A.25.25 0 0 1 2 8.75zm0-2c0-.14.1-.25.25-.25h.5c.14 0 .25.1.25.25v.5c0 .14-.1.25-.25.25h-.5A.25.25 0 0 1 2 6.75zm0-2c0-.14.1-.25.25-.25h.5c.14 0 .25.1.25.25v.5c0 .14-.1.25-.25.25h-.5A.25.25 0 0 1 2 4.75zm0-2c0-.14.1-.25.25-.25h.5c.14 0 .25.1.25.25v.5c0 .14-.1.25-.25.25h-.5A.25.25 0 0 1 2 2.75z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
