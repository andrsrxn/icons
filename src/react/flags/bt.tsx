import type { FlagIcon } from './types'

export const IconFlagBT: FlagIcon = ({
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
  const titleText = title ?? 'BT'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-bt'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='bt-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='bt-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ff5f38' />
          <stop offset='100%' stopColor='#fd5026' />
        </linearGradient>
        <linearGradient id='bt-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd951' />
          <stop offset='100%' stopColor='#ffd43b' />
        </linearGradient>
        <clipPath id='bt-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#bt-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#bt-a)' d='M0 0h21v15H0z' />
          <path fill='url(#bt-b)' d='M0 0h21v15H0z' />
          <path fill='url(#bt-c)' d='M0 15 21 0H0z' />
        </g>
      </g>
    </svg>
  )
}
