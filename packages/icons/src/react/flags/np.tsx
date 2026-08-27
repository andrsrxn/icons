import type { FlagIcon } from './types'

export const IconFlagNP: FlagIcon = ({
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
  const titleText = title ?? 'NP'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-np'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='np-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='np-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ee1b44' />
          <stop offset='100%' stopColor='#dd153c' />
        </linearGradient>
        <linearGradient id='np-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0543a8' />
          <stop offset='100%' stopColor='#003893' />
        </linearGradient>
        <path
          id='np-a'
          d='M0 0h1.495c.279 0 .693.126.918.275L13.175 7.45c.456.304.372.55-.172.55H6l7.247 6.341c.416.364.303.659-.254.659H0z'
        />
        <path
          id='np-e'
          d='M0 0h1.495c.279 0 .693.126.918.275L13.175 7.45c.456.304.372.55-.172.55H6l7.247 6.341c.416.364.303.659-.254.659H0z'
        />
        <clipPath id='np-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#np-clip)'>
        <g fill='none' fillRule='evenodd'>
          <mask id='np-c' fill='#fff'>
            <use xlinkHref='#np-a' />
          </mask>
          <use xlinkHref='#np-a' fill='url(#np-b)' />
          <g mask='url(#np-c)'>
            <use xlinkHref='#np-e' fill='url(#np-d)' />
            <path
              stroke='url(#np-f)'
              d='M.5.5v14h12.17l-8-7h7.679L2.136.691A1.5 1.5 0 0 0 1.496.5z'
            />
          </g>
          <path
            fill='url(#np-b)'
            d='M5.138 5.85a3.5 3.5 0 0 0 .789-.318 2 2 0 0 1-3.857 0q.356.199.791.32L3.25 5.5l-.636-.574.856.044-.044-.856L4 4.75l.574-.636-.044.856.856-.044-.636.574zM4 12l-.765.848.058-1.14-1.14.057L3 11l-.848-.765 1.14.058-.057-1.14L4 10l.765-.848-.058 1.14 1.14-.057L5 11l.848.765-1.14-.058.057 1.14z'
            mask='url(#np-c)'
          />
        </g>
      </g>
    </svg>
  )
}
