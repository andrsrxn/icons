import type { FlagIcon } from './types'

export const IconFlagPS: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'PS',
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
      data-slot='icon-flag-ps'
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
            id='ps-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ps-c'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#20934f' />
            <stop offset='1' stopColor='#197940' />
          </linearGradient>
          <linearGradient
            id='ps-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='ps-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='ps-f' x1='5' x2='5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e62539' />
            <stop offset='1' stopColor='#ca1a2c' />
          </linearGradient>
          <clipPath id='ps-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ps-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ps-clip)'>
        <g clipPath='url(#ps-a)'>
          <path fill='url(#ps-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ps-c)' d='M21 10H0v5h21z' />
          <path fill='url(#ps-d)' d='M21 0H0v5h21z' />
          <path fill='url(#ps-e)' d='M21 5H0v5h21z' />
          <path fill='url(#ps-f)' fillRule='evenodd' d='m0 0 10 7.5L0 15z' clipRule='evenodd' />
        </g>
      </g>
    </svg>
  )
}
