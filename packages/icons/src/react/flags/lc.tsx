import type { FlagIcon } from './types'

export const IconFlagLC: FlagIcon = ({
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
  const titleText = title ?? 'LC'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-lc'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='lc-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='lc-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#86d7ff' />
          <stop offset='100%' stopColor='#6bcdfe' />
        </linearGradient>
        <linearGradient id='lc-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='lc-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffda57' />
          <stop offset='100%' stopColor='#fcd036' />
        </linearGradient>
        <clipPath id='lc-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#lc-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#lc-a)' d='M0 0h21v15H0z' />
          <path fill='url(#lc-b)' d='M0 0h21v15H0z' />
          <path fill='url(#lc-a)' d='M10.5 2 15 13H6z' />
          <path fill='url(#lc-c)' d='m10.5 4 3.5 9H7z' />
          <path fill='url(#lc-d)' d='m10.5 7 4.5 6H6z' />
        </g>
      </g>
    </svg>
  )
}
