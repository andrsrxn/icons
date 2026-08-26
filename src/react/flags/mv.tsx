import type { FlagIcon } from './types'

export const IconFlagMV: FlagIcon = ({
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
  const titleText = title ?? 'MV'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-mv'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='mv-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='mv-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f32249' />
          <stop offset='100%' stopColor='#d01739' />
        </linearGradient>
        <linearGradient id='mv-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#15a04f' />
          <stop offset='100%' stopColor='#0f7e3d' />
        </linearGradient>
        <clipPath id='mv-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mv-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#mv-a)' d='M0 0h21v15H0z' />
          <path fill='url(#mv-b)' d='M0 0h21v15H0z' />
          <rect width='15' height='9' x='3' y='3' fill='url(#mv-c)' rx='.5' />
          <path fill='url(#mv-a)' d='M12.25 4.08a3.5 3.5 0 1 0 0 6.839 3.501 3.501 0 0 1 0-6.838' />
        </g>
      </g>
    </svg>
  )
}
