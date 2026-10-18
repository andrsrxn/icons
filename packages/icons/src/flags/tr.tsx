import type { FlagIcon } from './types'

export const IconFlagTR: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'TR',
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
      data-slot='icon-flag-tr'
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
            id='tr-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='tr-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e92434' />
            <stop offset='1' stopColor='#e11324' />
          </linearGradient>
          <linearGradient
            id='tr-d'
            x1='10.37'
            x2='10.37'
            y1='3'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='tr-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='tr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tr-clip)'>
        <g clipPath='url(#tr-a)'>
          <path fill='url(#tr-b)' d='M21 0H0v15h21z' />
          <path fill='url(#tr-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#tr-d)'
            fillRule='evenodd'
            d='M13.05 4.74a4 4 0 0 0-2.3-.74C8.68 4 7 5.57 7 7.5S8.68 11 10.75 11a4 4 0 0 0 2.3-.74 4.5 4.5 0 1 1 0-5.52m1.22 3.34-.92 1.11.06-1.44-1.34-.53 1.39-.39.09-1.44.8 1.2 1.4-.36-.9 1.13.77 1.22z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
