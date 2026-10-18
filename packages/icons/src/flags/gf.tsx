import type { FlagIcon } from './types'

export const IconFlagGF: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'GF',
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
      data-slot='icon-flag-gf'
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
            id='gf-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gf-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#2da446' />
            <stop offset='1' stopColor='#218736' />
          </linearGradient>
          <linearGradient
            id='gf-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffe24a' />
            <stop offset='1' stopColor='#fcdc34' />
          </linearGradient>
          <linearGradient
            id='gf-e'
            x1='10.5'
            x2='10.5'
            y1='4.75'
            y2='10.4'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e7242c' />
            <stop offset='1' stopColor='#d61c24' />
          </linearGradient>
          <clipPath id='gf-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='gf-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gf-clip)'>
        <g clipPath='url(#gf-a)'>
          <path fill='url(#gf-b)' d='M21 0H0v15h21z' />
          <path fill='url(#gf-c)' d='M21 0H0v15h21z' />
          <path fill='url(#gf-d)' fillRule='evenodd' d='m0 0 21 15H0z' clipRule='evenodd' />
          <path
            fill='url(#gf-e)'
            fillRule='evenodd'
            d='M10.5 9.07 8.66 10.4l.7-2.15L7.53 6.9H9.8l.7-2.16.7 2.16h2.27l-1.83 1.34.7 2.15z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
