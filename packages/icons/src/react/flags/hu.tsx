import type { FlagIcon } from './types'

export const IconFlagHU: FlagIcon = ({
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
  const titleText = title ?? 'HU'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-hu'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='hu-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='hu-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e03d52' />
          <stop offset='100%' stopColor='#cd2a3f' />
        </linearGradient>
        <linearGradient id='hu-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#5a9165' />
          <stop offset='100%' stopColor='#44704d' />
        </linearGradient>
        <clipPath id='hu-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#hu-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#hu-a)' d='M0 0h21v15H0z' />
          <path fill='url(#hu-b)' d='M0 0h21v5H0z' />
          <path fill='url(#hu-c)' d='M0 10h21v5H0z' />
          <path fill='url(#hu-a)' d='M0 5h21v5H0z' />
        </g>
      </g>
    </svg>
  )
}
