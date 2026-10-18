import type { FlagIcon } from './types'

export const IconFlagNR: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'NR',
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
      data-slot='icon-flag-nr'
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
            id='nr-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='nr-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0744a7' />
            <stop offset='1' stopColor='#00307d' />
          </linearGradient>
          <linearGradient
            id='nr-d'
            x1='10.5'
            x2='10.5'
            y1='6'
            y2='8'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fcc747' />
            <stop offset='1' stopColor='#fec539' />
          </linearGradient>
          <linearGradient
            id='nr-e'
            x1='5.5'
            x2='5.5'
            y1='8.62'
            y2='13.38'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='nr-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='nr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#nr-clip)'>
        <g clipPath='url(#nr-a)'>
          <path fill='url(#nr-b)' d='M21 0H0v15h21z' />
          <path fill='url(#nr-c)' d='M21 0H0v15h21z' />
          <path fill='url(#nr-d)' d='M21 6H0v2h21z' />
          <path
            fill='url(#nr-e)'
            fillRule='evenodd'
            d='m5.5 12.25-.77 1.13.04-1.37-1.3.46.84-1.08L3 11l1.31-.39-.83-1.08 1.29.46-.04-1.37.77 1.13.77-1.13L6.23 10l1.3-.46-.84 1.08L8 11l-1.31.39.83 1.08-1.29-.46.04 1.37z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
