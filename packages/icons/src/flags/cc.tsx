import type { FlagIcon } from './types'

export const IconFlagCC: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CC',
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
      data-slot='icon-flag-cc'
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
            id='cc-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='cc-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#229716' />
            <stop offset='1' stopColor='#1c7e12' />
          </linearGradient>
          <linearGradient id='cc-d' x1='4' x2='4' y1='2' y2='6' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffe244' />
            <stop offset='1' stopColor='#ffdf32' />
          </linearGradient>
          <linearGradient
            id='cc-e'
            x1='16'
            x2='16'
            y1='11.79'
            y2='13.21'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffe244' />
            <stop offset='1' stopColor='#ffdf32' />
          </linearGradient>
          <linearGradient
            id='cc-f'
            x1='16'
            x2='16'
            y1='2.29'
            y2='3.71'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffe244' />
            <stop offset='1' stopColor='#ffdf32' />
          </linearGradient>
          <linearGradient
            id='cc-g'
            x1='19'
            x2='19'
            y1='5.29'
            y2='6.71'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffe244' />
            <stop offset='1' stopColor='#ffdf32' />
          </linearGradient>
          <linearGradient
            id='cc-h'
            x1='14'
            x2='14'
            y1='6.29'
            y2='7.71'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffe244' />
            <stop offset='1' stopColor='#ffdf32' />
          </linearGradient>
          <linearGradient
            id='cc-i'
            x1='17.5'
            x2='17.5'
            y1='8.15'
            y2='8.85'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffe244' />
            <stop offset='1' stopColor='#ffdf32' />
          </linearGradient>
          <linearGradient
            id='cc-j'
            x1='10.03'
            x2='10.03'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffe244' />
            <stop offset='1' stopColor='#ffdf32' />
          </linearGradient>
          <clipPath id='cc-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='cc-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cc-clip)'>
        <g clipPath='url(#cc-a)'>
          <path fill='url(#cc-b)' d='M21 0H0v15h21z' />
          <path fill='url(#cc-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#cc-d)'
            fillRule='evenodd'
            d='M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0-2c.2 0-.16 1.05 0 1 .26-.09 1-1.33 1-1.5 0-.28-.45-.5-1-.5s-1 .22-1 .5.45.5 1 .5'
            clipRule='evenodd'
          />
          <path
            fill='url(#cc-e)'
            fillRule='evenodd'
            d='m16 13-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
          <path
            fill='url(#cc-f)'
            fillRule='evenodd'
            d='m16 3.5-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
          <path
            fill='url(#cc-g)'
            fillRule='evenodd'
            d='m19 6.5-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
          <path
            fill='url(#cc-h)'
            fillRule='evenodd'
            d='m14 7.5-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
          <path
            fill='url(#cc-i)'
            fillRule='evenodd'
            d='m17.5 8.75-.35.1.1-.35-.1-.35.35.1.35-.1-.1.35.1.35z'
            clipRule='evenodd'
          />
          <path
            fill='url(#cc-j)'
            fillRule='evenodd'
            d='M12.06 5.55a2.5 2.5 0 1 0 0 3.9 2.08 2.08 0 1 1 0-3.9'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
