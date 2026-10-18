import type { FlagIcon } from './types'

export const IconFlagHR: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'HR',
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
      data-slot='icon-flag-hr'
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
            id='hr-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='hr-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ff202d' />
            <stop offset='1' stopColor='#fd0d1b' />
          </linearGradient>
          <linearGradient
            id='hr-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#2027ac' />
            <stop offset='1' stopColor='#191f94' />
          </linearGradient>
          <linearGradient
            id='hr-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='hr-f'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ff212e' />
            <stop offset='1' stopColor='#fd0d1b' />
          </linearGradient>
          <clipPath id='hr-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='hr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#hr-clip)'>
        <g clipPath='url(#hr-a)'>
          <path fill='url(#hr-b)' d='M21 0H0v15h21z' />
          <path fill='url(#hr-c)' d='M21 0H0v5h21z' />
          <path
            fill='#1895db'
            fillRule='evenodd'
            d='m8 4 .5-.5.5.5v1H8zm2 0 .5-.5.5.5v1h-1zm2 0 .5-.5.5.5v1h-1z'
            clipRule='evenodd'
            opacity='.5'
          />
          <path
            fill='#191f94'
            fillRule='evenodd'
            d='m9 4 .5-.5.5.5v1H9zm2 0 .5-.5.5.5v1h-1z'
            clipRule='evenodd'
            opacity='.5'
          />
          <path fill='url(#hr-d)' d='M21 10H0v5h21z' />
          <path
            fill='url(#hr-e)'
            fillRule='evenodd'
            d='M0 10V5h21v5zm12 0h1l-.27.55A.9.9 0 0 1 12 11zm-2 0h1v1h-1zm-2 0h1v1a.9.9 0 0 1-.73-.45z'
            clipRule='evenodd'
          />
          <path
            fill='url(#hr-f)'
            fillRule='evenodd'
            d='M10 5h1v1h-1zm2 0h.5l.5 1h-1zM8.5 5H9v1H8zM9 6h1v1H9zm2 0h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zM8 7h1v1H8zm1 1h1v1H9zM8 9h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-2 0h1v1H9z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
