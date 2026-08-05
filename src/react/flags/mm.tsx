import type { FlagIcon } from './types'

export const IconFlagMM: FlagIcon = ({
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
  const titleText = title ?? 'MM'

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
        <linearGradient id='mm-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='mm-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f13d4f' />
          <stop offset='100%' stopColor='#e92c3f' />
        </linearGradient>
        <linearGradient id='mm-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#4ac94b' />
          <stop offset='100%' stopColor='#3bb13c' />
        </linearGradient>
        <linearGradient id='mm-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd043' />
          <stop offset='100%' stopColor='#feca2f' />
        </linearGradient>
        <clipPath id='mm-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mm-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#mm-a)' d='M0 0h21v15H0z' />
          <path fill='url(#mm-b)' d='M0 10h21v5H0z' />
          <path fill='url(#mm-c)' d='M0 5h21v5H0z' />
          <path fill='url(#mm-d)' d='M0 0h21v5H0z' />
          <path
            fill='url(#mm-a)'
            d='m10.5 9.255-2.645 1.886.976-3.099L6.22 6.11l3.247-.029L10.5 3l1.032 3.08 3.248.03-2.61 1.932.975 3.099z'
          />
        </g>
      </g>
    </svg>
  )
}
