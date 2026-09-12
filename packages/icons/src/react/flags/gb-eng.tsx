import type { FlagIcon } from './types'

export const IconFlagGBENG: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'GBENG',
  'aria-hidden': ariaHidden,
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
      data-slot='icon-flag-gb-eng'
      role={isHidden || !isLabelled ? undefined : 'img'}
      aria-hidden={isHidden || !isLabelled ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      focusable={isHidden || !isLabelled ? false : undefined}
      className={`icon-flag ${className ?? ''}`.trim()}
      {...props}>
      <defs>
        <defs>
          <linearGradient id='gb-eng-a' x1='50%' x2='50%' y1='0%' y2='100%'>
            <stop offset='0%' stopColor='#fff' />
            <stop offset='100%' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='gb-eng-b' x1='50%' x2='50%' y1='0%' y2='100%'>
            <stop offset='0%' stopColor='#e82739' />
            <stop offset='100%' stopColor='#ca1a2b' />
          </linearGradient>
        </defs>
        <clipPath id='gb-eng-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gb-eng-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#gb-eng-a)' d='M0 0h21v15H0z' />
          <path fill='url(#gb-eng-b)' d='M9 6H0v3h9v6h3V9h9V6h-9V0H9z' />
        </g>
      </g>
    </svg>
  )
}
