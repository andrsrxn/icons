import type { FlagIcon } from './types'

export const IconFlagQA: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'QA',
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
      data-slot='icon-flag-qa'
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
            id='qa-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='qa-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#a6264c' />
            <stop offset='1' stopColor='#8c1e3e' />
          </linearGradient>
          <linearGradient
            id='qa-d'
            x1='3.75'
            x2='3.75'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='qa-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='qa-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#qa-clip)'>
        <g clipPath='url(#qa-a)'>
          <path fill='url(#qa-b)' d='M21 0H0v15h21z' />
          <path fill='url(#qa-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#qa-d)'
            fillRule='evenodd'
            d='M0 15h7.5L6 14l1.5-1L6 12l1.5-1L6 10l1.5-1L6 8l1.5-1L6 6l1.5-1L6 4l1.5-1L6 2l1.5-1L6 0H0z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
