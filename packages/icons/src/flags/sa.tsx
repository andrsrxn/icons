import type { FlagIcon } from './types'

export const IconFlagSA: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'SA',
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
      data-slot='icon-flag-sa'
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
            id='sa-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sa-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#128c4b' />
            <stop offset='1' stopColor='#0b6c38' />
          </linearGradient>
          <linearGradient
            id='sa-d'
            x1='10.5'
            x2='10.5'
            y1='7.68'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='sa-e' x1='6.5' x2='6.5' y1='4' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sa-f'
            x1='14.5'
            x2='14.5'
            y1='4'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sa-g'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='sa-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='sa-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sa-clip)'>
        <g clipPath='url(#sa-a)'>
          <path fill='url(#sa-b)' d='M21 0H0v15h21z' />
          <path fill='url(#sa-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#sa-d)'
            fillRule='evenodd'
            d='M5 9h8V8c0-.27.2-.4.45-.27L14 8v1h1.5c.27 0 .5.21.5.5v.5a1 1 0 0 1-1 1h-1.5a.5.5 0 0 1-.5-.5V10H6.5a1.4 1.4 0 0 1-.85-.35z'
            clipRule='evenodd'
          />
          <path
            fill='url(#sa-e)'
            fillRule='evenodd'
            d='M5 6.25a.7.7 0 0 1 .18-.43l.14-.14c.1-.1.1-.26 0-.36l-.14-.14A.7.7 0 0 1 5 4.75v-.5c0-.14.1-.25.25-.25h.5c.14 0 .25.1.25.25v.5q0 .22.12.02l.26-.54A.5.5 0 0 1 6.75 4h1c.14 0 .25.12.25.25 0 .14-.1.25-.25.25h-.5a.25.25 0 0 0-.25.25c0 .14.1.25.25.25h.5c.14 0 .25.1.25.25v1.5q-.01.23-.25.25h-.5A.25.25 0 0 1 7 6.75v-.5c0-.14.12-.25.25-.25.14 0 .25-.12.25-.25 0-.14-.1-.25-.25-.25h-.5a.25.25 0 0 0-.25.25v1c0 .14-.12.25-.25.25A.25.25 0 0 1 6 6.75v-.5A.25.25 0 0 0 5.75 6c-.14 0-.25.1-.25.25v.5c0 .14-.12.25-.25.25A.25.25 0 0 1 5 6.75z'
            clipRule='evenodd'
          />
          <path
            fill='url(#sa-f)'
            fillRule='evenodd'
            d='M13 6.25a.7.7 0 0 1 .18-.43l.14-.14c.1-.1.1-.26 0-.36l-.14-.14a.7.7 0 0 1-.18-.43v-.5q.01-.23.25-.25h.5q.23.01.25.25v.5q0 .22.12.02l.26-.54a.5.5 0 0 1 .37-.23h1c.14 0 .25.12.25.25 0 .14-.1.25-.25.25h-.5a.25.25 0 0 0-.25.25c0 .14.1.25.25.25h.5q.23.01.25.25v1.5q-.01.23-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5c0-.14.12-.25.25-.25.14 0 .25-.12.25-.25 0-.14-.1-.25-.25-.25h-.5a.25.25 0 0 0-.25.25v1c0 .14-.12.25-.25.25a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 0-.25-.25q-.23.01-.25.25v.5c0 .14-.12.25-.25.25a.25.25 0 0 1-.25-.25z'
            clipRule='evenodd'
          />
          <path
            fill='url(#sa-g)'
            fillRule='evenodd'
            d='M12 4.75a.7.7 0 0 1-.18.43l-.14.14c-.1.1-.1.26 0 .36l.14.14c.1.1.18.29.18.43v.5c0 .14-.1.25-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5q0-.22-.12-.02l-.26.54a.5.5 0 0 1-.37.23h-1A.25.25 0 0 1 9 6.75c0-.14.1-.25.25-.25h.5c.14 0 .25-.12.25-.25 0-.14-.1-.25-.25-.25h-.5A.25.25 0 0 1 9 5.75v-1.5q.01-.23.25-.25h.5q.23.01.25.25v.5c0 .14-.12.25-.25.25a.25.25 0 0 0-.25.25c0 .14.1.25.25.25h.5c.14 0 .25-.12.25-.25v-1c0-.14.12-.25.25-.25q.23.01.25.25v.5c0 .14.12.25.25.25q.23-.01.25-.25v-.5c0-.14.12-.25.25-.25q.23.01.25.25z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
