import type { FlagIcon } from './types'

export const IconFlagAZ: FlagIcon = ({
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
  const titleText = title ?? 'AZ'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-az'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='az-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='az-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#24aad5' />
          <stop offset='100%' stopColor='#1899c2' />
        </linearGradient>
        <linearGradient id='az-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ed1845' />
          <stop offset='100%' stopColor='#de0c39' />
        </linearGradient>
        <linearGradient id='az-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#21bf75' />
          <stop offset='100%' stopColor='#19ad68' />
        </linearGradient>
        <clipPath id='az-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#az-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#az-a)' d='M0 0h21v15H0z' />
          <path fill='url(#az-b)' d='M0 0h21v5H0z' />
          <path fill='url(#az-c)' d='M0 5h21v5H0z' />
          <path fill='url(#az-d)' d='M0 10h21v5H0z' />
          <path
            fill='url(#az-a)'
            d='m11.334 6.253-.084-.003a1.25 1.25 0 1 0 .084 2.497 1.5 1.5 0 1 1 0-2.495M11.5 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
        </g>
      </g>
    </svg>
  )
}
