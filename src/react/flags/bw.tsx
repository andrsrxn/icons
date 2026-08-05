import type { FlagIcon } from './types'

export const IconFlagBW: FlagIcon = ({
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
  const titleText = title ?? 'BW'

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
        <linearGradient id='bw-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='bw-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#8bbdea' />
          <stop offset='100%' stopColor='#78abda' />
        </linearGradient>
        <linearGradient id='bw-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <clipPath id='bw-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#bw-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#bw-a)' d='M0 0h21v15H0z' />
          <path fill='url(#bw-b)' d='M0 0h21v5H0z' />
          <path fill='url(#bw-b)' d='M0 10h21v5H0z' />
          <path fill='url(#bw-a)' d='M0 5h21v5H0z' />
          <path fill='url(#bw-c)' d='M0 6h21v3H0z' />
        </g>
      </g>
    </svg>
  )
}
