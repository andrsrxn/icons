import type { FlagIcon } from './types'

export const IconFlagSK: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'SK',
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
      data-slot='icon-flag-sk'
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
            id='sk-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sk-c'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0c47b7' />
            <stop offset='1' stopColor='#073da4' />
          </linearGradient>
          <linearGradient
            id='sk-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e53b35' />
            <stop offset='1' stopColor='#d32e28' />
          </linearGradient>
          <linearGradient
            id='sk-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sk-f'
            x1='7.5'
            x2='7.5'
            y1='2'
            y2='12.92'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sk-g'
            x1='7.5'
            x2='7.5'
            y1='3'
            y2='11.92'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f73744' />
            <stop offset='1' stopColor='#ec212f' />
          </linearGradient>
          <linearGradient id='sk-i' x1='7.5' x2='7.5' y1='4' y2='10' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='sk-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='sk-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sk-clip)'>
        <g clipPath='url(#sk-a)'>
          <path fill='url(#sk-b)' d='M21 0H0v15h21z' />
          <path fill='url(#sk-c)' d='M21 5H0v5h21z' />
          <path fill='url(#sk-d)' d='M21 10H0v5h21z' />
          <path fill='url(#sk-e)' d='M21 0H0v5h21z' />
          <path
            fill='url(#sk-f)'
            d='M5.25 2h4.5c1.09 0 2 .87 2.04 1.96l.17 4.5a3.3 3.3 0 0 1-1.07 2.45l-1.6 1.37c-1 .86-2.58.86-3.59 0L4.1 10.9a3.3 3.3 0 0 1-1.06-2.45l.17-4.5A2.05 2.05 0 0 1 5.25 2'
          />
          <path
            fill='url(#sk-g)'
            d='M4.21 4c.02-.55.49-1 1.04-1h4.5c.55 0 1.02.45 1.04 1l.17 4.5c.02.55-.3 1.29-.72 1.65l-1.6 1.37c-.63.54-1.66.54-2.29 0l-1.6-1.37a2.3 2.3 0 0 1-.71-1.65z'
          />
          <mask
            id='sk-h'
            width='7'
            height='9'
            x='4'
            y='3'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path
              fill='#fff'
              d='M4.21 4c.02-.55.49-1 1.04-1h4.5c.55 0 1.02.45 1.04 1l.17 4.5c.02.55-.3 1.29-.72 1.65l-1.6 1.37c-.63.54-1.66.54-2.29 0l-1.6-1.37a2.3 2.3 0 0 1-.71-1.65z'
            />
          </mask>
          <g mask='url(#sk-h)'>
            <path
              fill='url(#sk-i)'
              fillRule='evenodd'
              d='M7 8.25A.25.25 0 0 0 6.75 8h-1a.25.25 0 0 1-.25-.25v-.5c0-.14.12-.25.25-.25h1q.23-.01.25-.25v-.5C7 6.11 6.9 6 6.75 6h-.5A.25.25 0 0 1 6 5.75v-.5c0-.14.1-.25.25-.25h.5c.14 0 .25-.1.25-.25v-.5c0-.14.1-.25.25-.25h.5c.14 0 .25.1.25.25v.5c0 .14.1.25.25.25h.5q.23.01.25.25v.5c0 .14-.1.25-.25.25h-.5q-.23.01-.25.25v.5c0 .14.12.25.25.25h1q.23.01.25.25v.5c0 .14-.12.25-.25.25h-1q-.24.01-.25.25v1.5q-.01.23-.25.25h-.5A.25.25 0 0 1 7 9.75z'
              clipRule='evenodd'
            />
          </g>
          <mask
            id='sk-j'
            width='7'
            height='9'
            x='4'
            y='3'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path
              fill='#fff'
              d='M4.21 4c.02-.55.49-1 1.04-1h4.5c.55 0 1.02.45 1.04 1l.17 4.5c.02.55-.3 1.29-.72 1.65l-1.6 1.37c-.63.54-1.66.54-2.29 0l-1.6-1.37a2.3 2.3 0 0 1-.71-1.65z'
            />
          </mask>
          <g mask='url(#sk-j)'>
            <path
              fill='#1251a1'
              fillRule='evenodd'
              d='M6.6 10.07c-1.22.2-2.1.76-2.1 1.43 0 .83 1.34 1.5 3 1.5s3-.67 3-1.5c0-.67-.88-1.24-2.1-1.43a1 1 0 0 0-1.8 0'
              clipRule='evenodd'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
