import type { FlagIcon } from './types'

export const IconFlagSR: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'SR',
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
      data-slot='icon-flag-sr'
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
            id='sr-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sr-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='3'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#43924c' />
            <stop offset='1' stopColor='#3a7e42' />
          </linearGradient>
          <linearGradient
            id='sr-d'
            x1='10.5'
            x2='10.5'
            y1='12'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#43924c' />
            <stop offset='1' stopColor='#3a7e42' />
          </linearGradient>
          <linearGradient
            id='sr-e'
            x1='10.5'
            x2='10.5'
            y1='3'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sr-f'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#cd153a' />
            <stop offset='1' stopColor='#b31031' />
          </linearGradient>
          <linearGradient
            id='sr-g'
            x1='10.5'
            x2='10.5'
            y1='5.25'
            y2='9.77'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f5d24b' />
            <stop offset='1' stopColor='#ecc736' />
          </linearGradient>
          <clipPath id='sr-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='sr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sr-clip)'>
        <g clipPath='url(#sr-a)'>
          <path fill='url(#sr-b)' d='M21 0H0v15h21z' />
          <path fill='url(#sr-c)' d='M21 0H0v3h21z' />
          <path fill='url(#sr-d)' d='M21 12H0v3h21z' />
          <path fill='url(#sr-e)' d='M21 3H0v9h21z' />
          <path fill='url(#sr-f)' d='M21 5H0v5h21z' />
          <path
            fill='url(#sr-g)'
            fillRule='evenodd'
            d='m10.5 8.78-1.47 1 .5-1.71-1.4-1.1 1.77-.05.6-1.67.6 1.67 1.78.06-1.4 1.09.49 1.7z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
