import type { FlagIcon } from './types'

export const IconFlagMG: FlagIcon = ({
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
  const titleText = title ?? 'MG'

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
        <linearGradient id='mg-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='mg-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#149047' />
          <stop offset='100%' stopColor='#0f7e3d' />
        </linearGradient>
        <linearGradient id='mg-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f84f4b' />
          <stop offset='100%' stopColor='#fa3f3b' />
        </linearGradient>
        <clipPath id='mg-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mg-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#mg-a)' d='M0 0h21v15H0z' />
          <path fill='url(#mg-b)' d='M0 7h21v8H0z' />
          <path fill='url(#mg-c)' d='M0 0h21v7H0z' />
          <path fill='url(#mg-a)' d='M0 0h7v15H0z' />
        </g>
      </g>
    </svg>
  )
}
