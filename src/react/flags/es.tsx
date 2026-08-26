import type { FlagIcon } from './types'

export const IconFlagES: FlagIcon = ({
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
  const titleText = title ?? 'ES'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-es'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='es-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='es-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#dd172c' />
          <stop offset='100%' stopColor='#c60b1f' />
        </linearGradient>
        <linearGradient id='es-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd133' />
          <stop offset='100%' stopColor='#ffc500' />
        </linearGradient>
        <clipPath id='es-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#es-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#es-a)' d='M0 0h21v15H0z' />
          <path fill='url(#es-b)' d='M0 0h21v4H0z' />
          <path fill='url(#es-b)' d='M0 11h21v4H0z' />
          <path fill='url(#es-c)' d='M0 4h21v7H0z' />
          <path fill='#ffedb1' d='M5.5 7h1v.5h-1z' />
          <path
            fill='#a41517'
            fillRule='nonzero'
            d='M4.915 8.46c.025.295.291.54.585.54s.56-.246.585-.54L6.207 7H4.793zm-.624-1.465a.456.456 0 0 1 .465-.495h1.488a.45.45 0 0 1 .465.495l-.126 1.506A1.104 1.104 0 0 1 5.5 9.5a1.104 1.104 0 0 1-1.083-.999z'
          />
          <path
            fill='#a41517'
            d='M4.5 7.5h2V8H6l-.5 1L5 8h-.5zM3 6h1v3.5H3zM7 6h1v3.5H7zM4.5 5.5c0-.276.214-.5.505-.5h.99c.279 0 .505.232.505.5v.248c0 .139-.108.252-.245.252h-1.51a.245.245 0 0 1-.245-.252z'
          />
        </g>
      </g>
    </svg>
  )
}
