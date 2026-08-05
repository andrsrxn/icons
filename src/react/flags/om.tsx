import type { FlagIcon } from './types'

export const IconFlagOM: FlagIcon = ({
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
  const titleText = title ?? 'OM'

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
        <linearGradient id='om-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='om-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#138e16' />
          <stop offset='100%' stopColor='#0f7f12' />
        </linearGradient>
        <linearGradient id='om-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ed2b35' />
          <stop offset='100%' stopColor='#d91b25' />
        </linearGradient>
        <clipPath id='om-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#om-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#om-a)' d='M0 0h21v15H0z' />
          <path fill='url(#om-b)' d='M0 10h21v5H0z' />
          <path fill='url(#om-c)' d='M0 15h7v-5h14V5H7V0H0z' />
          <path
            fill='url(#om-a)'
            d='m3.5 3.534-.868 1.268.45-1.47-1.532.113 1.43-.564-1.044-1.128 1.332.766L3.5 1l.232 1.519 1.332-.766L4.02 2.881l1.43.564-1.533-.112.45 1.469z'
          />
          <path fill='url(#om-a)' d='M7 0h14v5H7z' />
        </g>
      </g>
    </svg>
  )
}
