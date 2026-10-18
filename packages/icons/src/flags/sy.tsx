import type { FlagIcon } from './types'

export const IconFlagSY: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'SY',
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
      data-slot='icon-flag-sy'
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
            id='sy-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sy-c'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='sy-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e32139' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <linearGradient
            id='sy-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='sy-f' x1='7' x2='7' y1='5.5' y2='9.12' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#128a49' />
            <stop offset='1' stopColor='#0f7a40' />
          </linearGradient>
          <linearGradient
            id='sy-g'
            x1='14'
            x2='14'
            y1='5.5'
            y2='9.12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#128a49' />
            <stop offset='1' stopColor='#0f7a40' />
          </linearGradient>
          <clipPath id='sy-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='sy-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sy-clip)'>
        <g clipPath='url(#sy-a)'>
          <path fill='url(#sy-b)' d='M21 0H0v15h21z' />
          <path fill='url(#sy-c)' d='M21 10H0v5h21z' />
          <path fill='url(#sy-d)' d='M21 0H0v5h21z' />
          <path fill='url(#sy-e)' d='M21 5H0v5h21z' />
          <path
            fill='url(#sy-f)'
            fillRule='evenodd'
            d='m7 8.32-1.18.8.4-1.37-1.12-.87 1.42-.04L7 5.5l.48 1.34 1.42.04-1.12.87.4 1.37z'
            clipRule='evenodd'
          />
          <path
            fill='url(#sy-g)'
            fillRule='evenodd'
            d='m14 8.32-1.18.8.4-1.37-1.12-.87 1.42-.04L14 5.5l.48 1.34 1.42.04-1.12.87.4 1.37z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
