import type { FlagIcon } from './types'

export const IconFlagSV: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'SV',
  'aria-hidden': ariaHidden,
  preserveAspectRatio,
  cover,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())
  const isHidden = ariaHidden === true || ariaHidden === 'true'
  const isAccessible = isLabelled && !isHidden

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='icon-flag-sv'
      preserveAspectRatio={cover ? 'xMidYMid slice' : preserveAspectRatio}
      className={`icon-flag ${className ?? ''}`.trim()}
      {...props}
      role={isAccessible ? 'img' : undefined}
      aria-hidden={!isAccessible}
      aria-label={isAccessible ? ariaLabel : undefined}
      focusable={false}>
      <defs>
        <defs>
          <linearGradient
            id='sv-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sv-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1b57c4' />
            <stop offset='1' stopColor='#154bad' />
          </linearGradient>
          <linearGradient
            id='sv-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1b57c4' />
            <stop offset='1' stopColor='#154bad' />
          </linearGradient>
          <linearGradient
            id='sv-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sv-f'
            x1='10.5'
            x2='10.5'
            y1='5.9'
            y2='9.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#3c7839' />
            <stop offset='1' stopColor='#31642e' />
          </linearGradient>
          <clipPath id='sv-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='sv-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sv-clip)'>
        <g clipPath='url(#sv-a)'>
          <path fill='url(#sv-b)' d='M21 0H0v15h21z' />
          <path fill='url(#sv-c)' d='M21 0H0v5h21z' />
          <path fill='url(#sv-d)' d='M21 10H0v5h21z' />
          <path fill='url(#sv-e)' d='M21 5H0v5h21z' />
          <path
            fill='url(#sv-f)'
            fillRule='evenodd'
            d='M9.3 5.9a2 2 0 1 0 2.4 0L11 8h-1z'
            clipRule='evenodd'
          />
          <path fill='#f9c92e' fillRule='evenodd' d='M10.5 5.5 11 8h-1z' clipRule='evenodd' />
        </g>
      </g>
    </svg>
  )
}
