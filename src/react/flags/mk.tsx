import type { FlagIcon } from './types'

export const IconFlagMK: FlagIcon = ({
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
  const titleText = title ?? 'MK'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-mk'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='mk-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='mk-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e81b26' />
          <stop offset='100%' stopColor='#d00914' />
        </linearGradient>
        <linearGradient id='mk-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffe94f' />
          <stop offset='100%' stopColor='#ffe633' />
        </linearGradient>
        <clipPath id='mk-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mk-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#mk-a)' d='M0 0h21v15H0z' />
          <path fill='url(#mk-b)' d='M-.004-.002h21v15h-21z' />
          <circle cx='10.496' cy='7.498' r='2.5' fill='url(#mk-c)' />
          <path
            fill='url(#mk-c)'
            d='m13.961 7.993 7.035 1.005v-3l-7.035 1.005a3.5 3.5 0 0 1 0 .99m-6.93-.99L-.004 5.998v3l7.035-1.005a3.5 3.5 0 0 1 0-.99m4.152-2.938.813-4.067h-3l.814 4.067a3.5 3.5 0 0 1 1.373 0M9.81 10.931l-.814 4.067h3l-.813-4.067a3.5 3.5 0 0 1-1.373 0'
          />
          <path
            fill='url(#mk-c)'
            d='M7.652 9.539-.54 15.417l2.007 2.229 6.703-7.533a3.5 3.5 0 0 1-.518-.574m5.688-4.082L21.532-.42 19.525-2.65l-6.702 7.533q.29.258.517.574m-.517 4.656 6.702 7.533 2.007-2.23L13.34 9.54a3.5 3.5 0 0 1-.517.574M8.17 4.883 1.467-2.65-.54-.42l8.192 5.877a3.5 3.5 0 0 1 .518-.574'
          />
        </g>
      </g>
    </svg>
  )
}
