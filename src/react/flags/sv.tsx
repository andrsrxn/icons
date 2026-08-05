import type { FlagIcon } from './types'

export const IconFlagSV: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  title,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}) => {
  const isHidden = ariaHidden === true
  const titleText = title ?? 'SV'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='sv-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='sv-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1b57c4' />
          <stop offset='100%' stopColor='#154bad' />
        </linearGradient>
        <linearGradient id='sv-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#3c7839' />
          <stop offset='100%' stopColor='#31642e' />
        </linearGradient>
        <clipPath id='sv-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sv-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#sv-a)' d='M0 0h21v15H0z' />
          <path fill='url(#sv-b)' d='M0 0h21v5H0z' />
          <path fill='url(#sv-b)' d='M0 10h21v5H0z' />
          <path fill='url(#sv-a)' d='M0 5h21v5H0z' />
          <path fill='url(#sv-c)' d='M9.3 5.9a2 2 0 1 0 2.4 0L11 8h-1z' />
          <path fill='#f9c92e' d='M10.5 5.5 11 8h-1z' />
        </g>
      </g>
    </svg>
  )
}
