import type { FlagIcon } from './types'

export const IconFlagLU: FlagIcon = ({
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
  const titleText = title ?? 'LU'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-lu'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='lu-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='lu-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f14455' />
          <stop offset='100%' stopColor='#eb2d3f' />
        </linearGradient>
        <linearGradient id='lu-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#29b4ee' />
          <stop offset='100%' stopColor='#1aa3dc' />
        </linearGradient>
        <clipPath id='lu-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#lu-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#lu-a)' d='M0 0h21v15H0z' />
          <path fill='url(#lu-b)' d='M0 0h21v5H0z' />
          <path fill='url(#lu-c)' d='M0 10h21v5H0z' />
          <path fill='url(#lu-a)' d='M0 5h21v5H0z' />
        </g>
      </g>
    </svg>
  )
}
