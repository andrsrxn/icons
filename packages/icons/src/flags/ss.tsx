import type { FlagIcon } from './types'

export const IconFlagSS: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'SS',
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
      data-slot='icon-flag-ss'
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
            id='ss-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ss-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='4'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='ss-d'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e22a32' />
            <stop offset='1' stopColor='#d61c24' />
          </linearGradient>
          <linearGradient
            id='ss-e'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ss-f'
            x1='10.5'
            x2='10.5'
            y1='11'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#2ca244' />
            <stop offset='1' stopColor='#218736' />
          </linearGradient>
          <linearGradient
            id='ss-g'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='ss-h' x1='5' x2='5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#185ac6' />
            <stop offset='1' stopColor='#104cad' />
          </linearGradient>
          <linearGradient
            id='ss-i'
            x1='3.39'
            x2='3.39'
            y1='5.5'
            y2='9.27'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fde14a' />
            <stop offset='1' stopColor='#fcdc34' />
          </linearGradient>
          <clipPath id='ss-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ss-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ss-clip)'>
        <g clipPath='url(#ss-a)'>
          <path fill='url(#ss-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ss-c)' d='M21 0H0v4h21z' />
          <path fill='url(#ss-d)' d='M21 5H0v5h21z' />
          <path fill='url(#ss-e)' d='M21 4H0v1h21z' />
          <path fill='url(#ss-f)' d='M21 11H0v4h21z' />
          <path fill='url(#ss-g)' d='M21 10H0v1h21z' />
          <path fill='url(#ss-h)' fillRule='evenodd' d='m0 0 10 7.5L0 15z' clipRule='evenodd' />
          <path
            fill='url(#ss-i)'
            fillRule='evenodd'
            d='m3.84 7.99-.69 1.28-.2-1.44-1.43-.25 1.3-.64-.2-1.44 1.01 1.04 1.3-.63-.67 1.28 1 1.05z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
