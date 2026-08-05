import type { FlagIcon } from './types'

export const IconFlagTZ: FlagIcon = ({
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
  const titleText = title ?? 'TZ'

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
        <linearGradient id='tz-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='tz-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#33cc4d' />
          <stop offset='100%' stopColor='#2ab441' />
        </linearGradient>
        <linearGradient id='tz-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#2dafe4' />
          <stop offset='100%' stopColor='#1ba4dc' />
        </linearGradient>
        <linearGradient id='tz-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd84f' />
          <stop offset='100%' stopColor='#fcd036' />
        </linearGradient>
        <linearGradient id='tz-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <clipPath id='tz-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tz-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#tz-a)' d='M0 0h21v15H0z' />
          <path fill='url(#tz-b)' d='m.001 10.004 21-10h-21z' />
          <path fill='url(#tz-c)' d='M.001 15.004h21v-10z' />
          <path fill='url(#tz-d)' d='M2.313 17.004 22.63 4.309l-3.94-6.305-20.317 12.695z' />
          <path fill='url(#tz-e)' d='M-.47 17.308 24.123 1.94l-2.65-4.24L-3.12 13.068z' />
        </g>
      </g>
    </svg>
  )
}
