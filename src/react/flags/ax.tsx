import type { FlagIcon } from './types'

export const IconFlagAX: FlagIcon = ({
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
  const titleText = title ?? 'AX'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-ax'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='ax-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ax-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#157cbb' />
          <stop offset='100%' stopColor='#0e6ca5' />
        </linearGradient>
        <linearGradient id='ax-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd34d' />
          <stop offset='100%' stopColor='#fecb2f' />
        </linearGradient>
        <linearGradient id='ax-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#eb363a' />
          <stop offset='100%' stopColor='#d52b2f' />
        </linearGradient>
        <clipPath id='ax-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ax-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ax-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ax-b)' d='M0 0h21v15H0z' />
          <path fill='url(#ax-c)' d='M0 9h6v6h3V9h12V6H9V0H6v6H0z' />
          <path fill='url(#ax-d)' d='M0 8h7v7h1V8h13V7H8V0H7v7H0z' />
        </g>
      </g>
    </svg>
  )
}
