import type { FlagIcon } from './types'

export const IconFlagTN: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'TN',
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
      data-slot='icon-flag-tn'
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
            id='tn-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='tn-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e92434' />
            <stop offset='1' stopColor='#e11324' />
          </linearGradient>
          <linearGradient
            id='tn-d'
            x1='10.5'
            x2='10.5'
            y1='3'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='tn-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='tn-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tn-clip)'>
        <g clipPath='url(#tn-a)'>
          <path fill='url(#tn-b)' d='M21 0H0v15h21z' />
          <path fill='url(#tn-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#tn-d)'
            fillRule='evenodd'
            d='M11.86 4.27A3.5 3.5 0 0 0 7 7.5a3.5 3.5 0 0 0 4.86 3.23 3.25 3.25 0 0 1 0-6.46M10.5 12a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m1.77-3.62 1.35.5-.78-1.22.9-1.13-1.4.37-.8-1.2-.08 1.43-1.4.39 1.35.53-.06 1.44z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
