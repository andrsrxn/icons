import type { FlagIcon } from './types'

export const IconFlagSB: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'SB',
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
      data-slot='icon-flag-sb'
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
            id='sb-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sb-c'
            x1='7.42'
            x2='7.42'
            y1='3.56'
            y2='6.56'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sb-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1dbe4f' />
            <stop offset='1' stopColor='#159b3f' />
          </linearGradient>
          <linearGradient
            id='sb-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0660d4' />
            <stop offset='1' stopColor='#0051bb' />
          </linearGradient>
          <linearGradient
            id='sb-f'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#2c7442' />
            <stop offset='1' stopColor='#225b34' />
          </linearGradient>
          <linearGradient
            id='sb-g'
            x1='10.5'
            x2='10.5'
            y1='6.5'
            y2='8.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd646' />
            <stop offset='1' stopColor='#fed02f' />
          </linearGradient>
          <clipPath id='sb-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='sb-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sb-clip)'>
        <g clipPath='url(#sb-a)'>
          <path fill='url(#sb-b)' d='M21 0H0v15h21z' />
          <path
            fill='url(#sb-c)'
            fillRule='evenodd'
            d='M5.92 5.81a.7.7 0 0 1 .18-.43l.14-.14c.1-.1.1-.26 0-.36l-.14-.14a.7.7 0 0 1-.18-.43v-.5c0-.14.1-.25.25-.25h.5q.23.01.25.25v.5q0 .22.12.02l.26-.54a.5.5 0 0 1 .37-.23h1c.14 0 .25.12.25.25 0 .14-.1.25-.25.25h-.5a.25.25 0 0 0-.25.25c0 .14.1.25.25.25h.5q.23.01.25.25v1.5q-.01.23-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5c0-.14.12-.25.25-.25.14 0 .25-.12.25-.25 0-.14-.1-.25-.25-.25h-.5a.25.25 0 0 0-.25.25v1c0 .14-.12.25-.25.25a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 0-.25-.25q-.23.01-.25.25v.5c0 .14-.12.25-.25.25a.25.25 0 0 1-.25-.25z'
            clipRule='evenodd'
          />
          <path fill='url(#sb-d)' d='M21 0H0v15h21z' />
          <path fill='url(#sb-e)' fillRule='evenodd' d='M0 0h21L0 15z' clipRule='evenodd' />
          <path fill='url(#sb-f)' fillRule='evenodd' d='M21 0 0 15h21z' clipRule='evenodd' />
          <path fill='url(#sb-g)' d='M25 6.5H-4v2h29z' />
          <path
            fill='#fff'
            fillRule='evenodd'
            d='m2.25 2.87-.73.39.14-.82-.6-.58.82-.12.37-.74.37.74.82.12-.6.58.14.82zm5 0-.73.39.14-.82-.6-.58.82-.12.37-.74.37.74.82.12-.6.58.14.82zm0 3-.73.39.14-.82-.6-.58.82-.12.37-.74.37.74.82.12-.6.58.14.82zm-5 0-.73.39.14-.82-.6-.58.82-.12.37-.74.37.74.82.12-.6.58.14.82zm2.5-1.5-.73.39.14-.82-.6-.58.82-.12.37-.74.37.74.82.12-.6.58.14.82z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
