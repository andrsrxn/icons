import type { FlagIcon } from './types'

export const IconFlagMT: FlagIcon = ({
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
  const titleText = title ?? 'MT'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-mt'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='mt-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='mt-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#de233c' />
          <stop offset='100%' stopColor='#cd1931' />
        </linearGradient>
        <path id='mt-c' d='M4 3V2H3v1H2v1h1v1h1V4h1V3z' />
        <clipPath id='mt-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mt-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#mt-a)' d='M0 0h21v15H0z' />
          <path fill='url(#mt-b)' d='M11 0h10v15H11z' />
          <path fill='url(#mt-a)' d='M0 0h11v15H0z' />
          <use xlinkHref='#mt-c' fill='#cccccd' />
          <path
            stroke='#7b716a'
            strokeOpacity='.66'
            strokeWidth='.5'
            d='M4.25 2.75h1v1.5h-1v1h-1.5v-1h-1v-1.5h1v-1h1.5z'
          />
          <circle cx='3.5' cy='3.5' r='1' fill='#7b716a' />
        </g>
      </g>
    </svg>
  )
}
