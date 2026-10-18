import type { FlagIcon } from './types'

export const IconFlagCX: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CX',
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
      data-slot='icon-flag-cx'
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
            id='cx-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='cx-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0637c5' />
            <stop offset='1' stopColor='#002caa' />
          </linearGradient>
          <linearGradient
            id='cx-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#3ba758' />
            <stop offset='1' stopColor='#2c8945' />
          </linearGradient>
          <linearGradient
            id='cx-e'
            x1='17.16'
            x2='17.16'
            y1='1.36'
            y2='7.96'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffcc5d' />
            <stop offset='1' stopColor='#fec54a' />
          </linearGradient>
          <linearGradient
            id='cx-f'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffcc5d' />
            <stop offset='1' stopColor='#fec54a' />
          </linearGradient>
          <clipPath id='cx-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='cx-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cx-clip)'>
        <g clipPath='url(#cx-a)'>
          <path fill='url(#cx-b)' d='M21 0H0v15h21z' />
          <path fill='url(#cx-c)' d='M21 0H0v15h21z' />
          <path
            fill='#fff'
            fillRule='evenodd'
            d='m4 13-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm0-7.5-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm2 3-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm-4 1-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm3.5 1.25-.35.1.1-.35-.1-.35.35.1.35-.1-.1.35.1.35z'
            clipRule='evenodd'
          />
          <path
            fill='url(#cx-d)'
            fillRule='evenodd'
            d='m21 15-8.92-6.37s-1.98 1.02-2.74.48-.35-2.69-.35-2.69L0 0h21z'
            clipRule='evenodd'
          />
          <path
            fill='url(#cx-e)'
            fillRule='evenodd'
            d='M14.46 7.5s2.42-.4 2.7-1.53c.3-1.12-2.3-1.93-2.4-2.34s.95-.11 1.42 0c.45.12 1.33.7 1.33.7s-.01-.8-.13-1.17c-.2-.62-.84-1.8-.84-1.8s1.08.69 1.54 1.24c.26.31.36 1.73.69 2.22.58.87 1.95-.1 1.37.83S18.23 6.7 17.16 7.1a34 34 0 0 1-3.11.86z'
            clipRule='evenodd'
          />
          <path
            fill='url(#cx-f)'
            fillRule='evenodd'
            d='M10.5 10a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5M9.26 7.5 9 8s.84-.19 1.12 0c.39.26.38 1 .38 1h.5s-.16-.73.1-1.24c.25-.52.9-.76.9-.76V6s-.68.73-1.5 1S9 7 9 7z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
