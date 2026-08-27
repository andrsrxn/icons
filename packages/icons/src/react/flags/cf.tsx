import type { FlagIcon } from './types'

export const IconFlagCF: FlagIcon = ({
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
  const titleText = title ?? 'CF'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-cf'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='cf-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='cf-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#083d96' />
          <stop offset='100%' stopColor='#053380' />
        </linearGradient>
        <linearGradient id='cf-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#37ae39' />
          <stop offset='100%' stopColor='#2e9630' />
        </linearGradient>
        <linearGradient id='cf-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd13f' />
          <stop offset='100%' stopColor='#ffcd2f' />
        </linearGradient>
        <linearGradient id='cf-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e42346' />
          <stop offset='100%' stopColor='#d01739' />
        </linearGradient>
        <linearGradient id='cf-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd03b' />
          <stop offset='100%' stopColor='#ffcd2f' />
        </linearGradient>
        <clipPath id='cf-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cf-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#cf-a)' d='M0 0h21v15H0z' />
          <path fill='url(#cf-b)' d='M0 0h21v4H0z' />
          <path fill='url(#cf-c)' d='M0 7h21v4H0z' />
          <path fill='url(#cf-d)' d='M0 11h21v4H0z' />
          <path fill='url(#cf-a)' d='M0 4h21v3H0z' />
          <path fill='url(#cf-e)' d='M8 0h5v15H8z' />
          <path
            fill='url(#cf-f)'
            d='m3.5 2.585-.882.629.326-1.033-.87-.645 1.082-.01L3.5.5l.344 1.027 1.083.01-.87.644.325 1.033z'
          />
        </g>
      </g>
    </svg>
  )
}
