import type { FlagIcon } from './types'

export const IconFlagCG: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CG',
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
      data-slot='icon-flag-cg'
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
            id='cg-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='cg-c' x1='13' x2='13' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f33630' />
            <stop offset='1' stopColor='#dc241e' />
          </linearGradient>
          <linearGradient id='cg-d' x1='8' x2='8' y1='15' y2='0' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#009643' />
            <stop offset='1' stopColor='#09c15b' />
          </linearGradient>
          <linearGradient
            id='cg-e'
            x1='12.61'
            x2='9.01'
            y1='8.88'
            y2='5.41'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fcdf4a' />
            <stop offset='1' stopColor='#fce154' />
          </linearGradient>
          <clipPath id='cg-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='cg-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cg-clip)'>
        <g clipPath='url(#cg-a)'>
          <path fill='url(#cg-b)' d='M21 0H0v15h21z' />
          <path fill='url(#cg-c)' fillRule='evenodd' d='M5 14 20 0h1v15H5z' clipRule='evenodd' />
          <path fill='url(#cg-d)' fillRule='evenodd' d='M16 1 1 15H0V0h16z' clipRule='evenodd' />
          <path
            fill='url(#cg-e)'
            fillRule='evenodd'
            d='M22.68-1.55 2.54 19.31l-3.6-3.47L19.09-5.02z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
