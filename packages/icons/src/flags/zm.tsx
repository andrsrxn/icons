import type { FlagIcon } from './types'

export const IconFlagZM: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'ZM',
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
      data-slot='icon-flag-zm'
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
            id='zm-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='zm-c'
            x1='10.5'
            x2='10.5'
            y1='15'
            y2='0'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#2a8815' />
            <stop offset='1' stopColor='#35a51d' />
          </linearGradient>
          <linearGradient
            id='zm-d'
            x1='16.57'
            x2='16.57'
            y1='1.43'
            y2='4.64'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ef8a34' />
            <stop offset='1' stopColor='#ec7e21' />
          </linearGradient>
          <linearGradient
            id='zm-e'
            x1='19.5'
            x2='19.5'
            y1='6'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f48d36' />
            <stop offset='1' stopColor='#ec7e21' />
          </linearGradient>
          <linearGradient
            id='zm-f'
            x1='16.5'
            x2='16.5'
            y1='6'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='zm-g'
            x1='13.5'
            x2='13.5'
            y1='6'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ec322b' />
            <stop offset='1' stopColor='#db261f' />
          </linearGradient>
          <clipPath id='zm-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='zm-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#zm-clip)'>
        <g clipPath='url(#zm-a)'>
          <path fill='url(#zm-b)' d='M21 0H0v15h21z' />
          <path fill='url(#zm-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#zm-d)'
            fillRule='evenodd'
            d='M16.2 3.62s-.4.16-.84 0c-.34-.12-.68-.53-.97-.67-.16-.09.14-.48-.18-.37-.33.1-.86-.4-.86-.4s-.55-.66.26-.66c.8 0 2.51.58 2.51.58s.07-.3.2-.44c.14-.14.25-.26.47-.23.23.04.36.36.36.36l-.36.13v.27s2.36-.73 2.92-.67.11.67-.23 1.06c-.13.15-.55.45-.81.2-.26-.24-.16.27-.43.44-.44.27-.6.51-.75.58-.15.08-.48 0-.48 0l.1.25s.02.3-.1.41c-.12.12-.21.2-.51.17s-.44.04-.54-.29.24-.72.24-.72m.24-.34v.77l.34-.28z'
            clipRule='evenodd'
          />
          <path fill='url(#zm-e)' d='M21 6h-3v9h3z' />
          <path fill='url(#zm-f)' d='M18 6h-3v9h3z' />
          <path fill='url(#zm-g)' d='M15 6h-3v9h3z' />
        </g>
      </g>
    </svg>
  )
}
