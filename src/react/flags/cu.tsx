import type { FlagIcon } from './types'

export const IconFlagCU: FlagIcon = ({
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
  const titleText = title ?? 'CU'

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
        <linearGradient id='cu-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='cu-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0b389f' />
          <stop offset='100%' stopColor='#052e8d' />
        </linearGradient>
        <linearGradient id='cu-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e12a43' />
          <stop offset='100%' stopColor='#cd1931' />
        </linearGradient>
        <clipPath id='cu-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cu-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#cu-a)' d='M0 0h21v15H0z' />
          <path fill='url(#cu-b)' d='M0 0h21v3H0z' />
          <path fill='url(#cu-b)' d='M0 6h21v3H0z' />
          <path fill='url(#cu-a)' d='M0 3h21v3H0z' />
          <path fill='url(#cu-b)' d='M0 12h21v3H0z' />
          <path fill='url(#cu-a)' d='M0 9h21v3H0z' />
          <path fill='url(#cu-c)' d='m0 0 10 7.5L0 15z' />
          <path
            fill='url(#cu-a)'
            d='m3.5 8.267-1.176.851.447-1.381-1.173-.855 1.451-.003L3.5 5.5l.45 1.38 1.452.002-1.173.855.447 1.381z'
          />
        </g>
      </g>
    </svg>
  )
}
