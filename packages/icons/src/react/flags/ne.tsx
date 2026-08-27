import type { FlagIcon } from './types'

export const IconFlagNE: FlagIcon = ({
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
  const titleText = title ?? 'NE'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-ne'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='ne-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ne-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f0642f' />
          <stop offset='100%' stopColor='#df531d' />
        </linearGradient>
        <linearGradient id='ne-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#2dcc45' />
          <stop offset='100%' stopColor='#1faf35' />
        </linearGradient>
        <linearGradient id='ne-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e85c27' />
          <stop offset='100%' stopColor='#df531d' />
        </linearGradient>
        <clipPath id='ne-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ne-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ne-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ne-b)' d='M0 0h21v5H0z' />
          <path fill='url(#ne-c)' d='M0 10h21v5H0z' />
          <path fill='url(#ne-a)' d='M0 5h21v5H0z' />
          <circle cx='10.5' cy='7.5' r='2' fill='url(#ne-d)' />
        </g>
      </g>
    </svg>
  )
}
