import type { FlagIcon } from './types'

export const IconFlagTG: FlagIcon = ({
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
  const titleText = title ?? 'TG'

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
        <linearGradient id='tg-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='tg-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd44d' />
          <stop offset='100%' stopColor='#ffcd2f' />
        </linearGradient>
        <linearGradient id='tg-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#159a74' />
          <stop offset='100%' stopColor='#0c6a4f' />
        </linearGradient>
        <linearGradient id='tg-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ed1f45' />
          <stop offset='100%' stopColor='#d01739' />
        </linearGradient>
        <clipPath id='tg-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tg-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#tg-a)' d='M0 0h21v15H0z' />
          <path fill='url(#tg-b)' d='M0 0h21v15H0z' />
          <path fill='url(#tg-c)' d='M9 0h12v3H9zm0 6h12v3H9zm-9 6h21v3H0z' />
          <path fill='url(#tg-d)' d='M0 0h9v9H0z' />
          <path
            fill='url(#tg-a)'
            d='M4.5 5.67 2.737 6.927l.65-2.065-1.74-1.29 2.165-.019L4.5 1.5l.688 2.053 2.165.02-1.74 1.289.65 2.065z'
          />
        </g>
      </g>
    </svg>
  )
}
