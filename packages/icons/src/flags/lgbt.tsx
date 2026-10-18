import type { FlagIcon } from './types'

export const IconFlagLGBT: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'LGBT',
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
      data-slot='icon-flag-lgbt'
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
            id='lgbt-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='lgbt-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='3'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f71e24' />
            <stop offset='1' stopColor='#fb141b' />
          </linearGradient>
          <linearGradient
            id='lgbt-d'
            x1='10.5'
            x2='10.5'
            y1='3'
            y2='6'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fb6c2c' />
            <stop offset='1' stopColor='#fc6420' />
          </linearGradient>
          <linearGradient
            id='lgbt-e'
            x1='10.5'
            x2='10.5'
            y1='6'
            y2='9'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fdfc42' />
            <stop offset='1' stopColor='#fffd38' />
          </linearGradient>
          <linearGradient
            id='lgbt-f'
            x1='10.5'
            x2='10.5'
            y1='9'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#238f35' />
            <stop offset='1' stopColor='#1c7e2c' />
          </linearGradient>
          <linearGradient
            id='lgbt-g'
            x1='10.5'
            x2='10.5'
            y1='12'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0f62fa' />
            <stop offset='1' stopColor='#0059fc' />
          </linearGradient>
          <clipPath id='lgbt-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='lgbt-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#lgbt-clip)'>
        <g clipPath='url(#lgbt-a)'>
          <path fill='url(#lgbt-b)' d='M21 0H0v15h21z' />
          <path fill='url(#lgbt-c)' d='M21 0H0v3h21z' />
          <path fill='url(#lgbt-d)' d='M21 3H0v3h21z' />
          <path fill='url(#lgbt-e)' d='M21 6H0v3h21z' />
          <path fill='url(#lgbt-f)' d='M21 9H0v3h21z' />
          <path fill='url(#lgbt-g)' d='M21 12H0v3h21z' />
        </g>
      </g>
    </svg>
  )
}
