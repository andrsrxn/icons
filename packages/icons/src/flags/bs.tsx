import type { FlagIcon } from './types'

export const IconFlagBS: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'BS',
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
      data-slot='icon-flag-bs'
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
            id='bs-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='bs-c'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#22b7d5' />
            <stop offset='1' stopColor='#1cacc8' />
          </linearGradient>
          <linearGradient
            id='bs-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#22b7d5' />
            <stop offset='1' stopColor='#1cacc8' />
          </linearGradient>
          <linearGradient
            id='bs-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fce569' />
            <stop offset='1' stopColor='#fadf52' />
          </linearGradient>
          <linearGradient id='bs-f' x1='5' x2='5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <clipPath id='bs-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='bs-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#bs-clip)'>
        <g clipPath='url(#bs-a)'>
          <path fill='url(#bs-b)' d='M21 0H0v15h21z' />
          <path fill='url(#bs-c)' d='M21 10H0v5h21z' />
          <path fill='url(#bs-d)' d='M21 0H0v5h21z' />
          <path fill='url(#bs-e)' d='M21 5H0v5h21z' />
          <path fill='url(#bs-f)' fillRule='evenodd' d='m0 0 10 7.5L0 15z' clipRule='evenodd' />
        </g>
      </g>
    </svg>
  )
}
