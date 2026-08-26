import type { FlagIcon } from './types'

export const IconFlagSY: FlagIcon = ({
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
  const titleText = title ?? 'SY'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-sy'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='sy-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='sy-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='sy-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e32139' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <linearGradient id='sy-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#128a49' />
          <stop offset='100%' stopColor='#0f7a40' />
        </linearGradient>
        <clipPath id='sy-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sy-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#sy-a)' d='M0 0h21v15H0z' />
          <path fill='url(#sy-b)' d='M0 10h21v5H0z' />
          <path fill='url(#sy-c)' d='M0 0h21v5H0z' />
          <path fill='url(#sy-a)' d='M0 5h21v5H0z' />
          <path
            fill='url(#sy-d)'
            d='m7 8.32-1.176.798.396-1.365-1.122-.871 1.42-.045L7 5.5l.482 1.337 1.42.045-1.122.871.396 1.365z'
          />
          <path
            fill='url(#sy-d)'
            d='m14 8.32-1.176.798.396-1.365-1.122-.871 1.42-.045L14 5.5l.482 1.337 1.42.045-1.122.871.396 1.365z'
          />
        </g>
      </g>
    </svg>
  )
}
