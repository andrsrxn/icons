import type { FlagIcon } from './types'

export const IconFlagLV: FlagIcon = ({
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
  const titleText = title ?? 'LV'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-lv'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='lv-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='lv-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#b9414b' />
          <stop offset='100%' stopColor='#9d323b' />
        </linearGradient>
        <clipPath id='lv-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#lv-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#lv-a)' d='M0 0h21v15H0z' />
          <path fill='url(#lv-b)' d='M0 0h21v6H0z' />
          <path fill='url(#lv-b)' d='M0 9h21v6H0z' />
          <path fill='url(#lv-a)' d='M0 6h21v3H0z' />
        </g>
      </g>
    </svg>
  )
}
