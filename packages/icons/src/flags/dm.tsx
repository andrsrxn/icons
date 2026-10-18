import type { FlagIcon } from './types'

export const IconFlagDM: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'DM',
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
      data-slot='icon-flag-dm'
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
            id='dm-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='dm-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='6'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#108753' />
            <stop offset='1' stopColor='#0b6b41' />
          </linearGradient>
          <linearGradient
            id='dm-d'
            x1='10.5'
            x2='10.5'
            y1='9'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#108753' />
            <stop offset='1' stopColor='#0b6b41' />
          </linearGradient>
          <linearGradient
            id='dm-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='dm-f'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='dm-g'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fcd449' />
            <stop offset='1' stopColor='#fcd036' />
          </linearGradient>
          <linearGradient
            id='dm-h'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e02c42' />
            <stop offset='1' stopColor='#d22036' />
          </linearGradient>
          <clipPath id='dm-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='dm-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#dm-clip)'>
        <g clipPath='url(#dm-a)'>
          <path fill='url(#dm-b)' d='M21 0H0v15h21z' />
          <path fill='url(#dm-c)' d='M21 0H0v6h21z' />
          <path fill='url(#dm-d)' d='M21 9H0v6h21z' />
          <path
            fill='url(#dm-e)'
            fillRule='evenodd'
            d='M9 6H0v3h9v6h3V9h9V6h-9V0H9z'
            clipRule='evenodd'
          />
          <path
            fill='url(#dm-f)'
            fillRule='evenodd'
            d='M10 8v7h1V8h10V7H11V0h-1v7H0v1z'
            clipRule='evenodd'
          />
          <path
            fill='url(#dm-g)'
            fillRule='evenodd'
            d='M9 7v8h1V7h11V6H10V0H9v6H0v1z'
            clipRule='evenodd'
          />
          <path fill='url(#dm-h)' d='M10.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7' />
          <path
            fill='#0e673f'
            d='M10.5 10.5a.5.5 0 0 1 0-1 2 2 0 0 0 .78-.16.5.5 0 0 1 .4.92 3 3 0 0 1-1.18.24m2.82-1.97a3 3 0 0 0 .17-1.24.5.5 0 1 0-1 .07v.19q0 .32-.11.64a.5.5 0 1 0 .94.34m-.95-3.38a3 3 0 0 0-1.07-.54.5.5 0 1 0-.27.96q.4.11.71.36a.5.5 0 0 0 .63-.78m-3.43-.22q-.52.33-.88.82a.5.5 0 0 0 .82.58q.23-.33.58-.54a.5.5 0 0 0-.52-.86M7.56 8.12q.13.6.48 1.1a.5.5 0 0 0 .82-.57 2 2 0 0 1-.32-.74.5.5 0 0 0-.98.2m2.54 2.35a.5.5 0 1 1 .14-.99l.24.02a.5.5 0 0 1 0 1q-.19 0-.38-.03'
          />
          <path
            fill='#0e673f'
            fillRule='evenodd'
            d='M10.5 8.5c.55 0 .5-.45.5-1s.05-1-.5-1-.5.45-.5 1-.05 1 .5 1'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
