import type { FlagIcon } from './types'

export const IconFlagHR: FlagIcon = ({
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
  const titleText = title ?? 'HR'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-hr'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='hr-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='hr-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ff202d' />
          <stop offset='100%' stopColor='#fd0d1b' />
        </linearGradient>
        <linearGradient id='hr-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#2027ac' />
          <stop offset='100%' stopColor='#191f94' />
        </linearGradient>
        <linearGradient id='hr-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ff212e' />
          <stop offset='100%' stopColor='#fd0d1b' />
        </linearGradient>
        <clipPath id='hr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#hr-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#hr-a)' d='M0 0h21v15H0z' />
          <path fill='url(#hr-b)' d='M0 0h21v5H0z' />
          <path
            fill='#1895db'
            d='m8 4 .5-.5.5.5v1H8zm2 0 .5-.5.5.5v1h-1zm2 0 .5-.5.5.5v1h-1z'
            opacity='.5'
          />
          <path fill='#191f94' d='m9 4 .5-.5.5.5v1H9zm2 0 .5-.5.5.5v1h-1z' opacity='.5' />
          <path fill='url(#hr-c)' d='M0 10h21v5H0z' />
          <path
            fill='url(#hr-a)'
            d='M0 10V5h21v5zm12 0h1l-.273.547c-.126.25-.454.453-.727.453zm-2 0h1v1h-1zm-2 0h1v1a.88.88 0 0 1-.727-.453z'
          />
          <path
            fill='url(#hr-d)'
            d='M10 5h1v1h-1zm2 0h.5l.5 1h-1zM8.5 5H9v1H8zM9 6h1v1H9zm2 0h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zM8 7h1v1H8zm1 1h1v1H9zM8 9h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-2 0h1v1H9z'
          />
        </g>
      </g>
    </svg>
  )
}
