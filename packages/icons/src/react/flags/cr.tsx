import type { FlagIcon } from './types'

export const IconFlagCR: FlagIcon = ({
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
  const titleText = title ?? 'CR'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-cr'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='cr-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='cr-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#06358f' />
          <stop offset='100%' stopColor='#042e7d' />
        </linearGradient>
        <linearGradient id='cr-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e61f37' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <clipPath id='cr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cr-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#cr-a)' d='M0 0h21v15H0z' />
          <path fill='url(#cr-b)' d='M0 0h21v3H0z' />
          <path fill='url(#cr-b)' d='M0 12h21v3H0z' />
          <path fill='url(#cr-a)' d='M0 3h21v9H0z' />
          <path fill='url(#cr-c)' d='M0 5h21v5H0z' />
        </g>
      </g>
    </svg>
  )
}
