import type { FlagIcon } from './types'

export const IconFlagGG: FlagIcon = ({
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
  const titleText = title ?? 'GG'

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
        <linearGradient id='gg-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='gg-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f33349' />
          <stop offset='100%' stopColor='#e51d34' />
        </linearGradient>
        <linearGradient id='gg-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fce24c' />
          <stop offset='100%' stopColor='#f9dc38' />
        </linearGradient>
        <clipPath id='gg-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gg-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#gg-a)' d='M0 0h21v15H0z' />
          <path fill='url(#gg-b)' d='M9 6H0v3h9v6h3V9h9V6h-9V0H9z' />
          <path
            fill='url(#gg-c)'
            d='M10 8v4l-.5 1h2l-.5-1V8h4l1 .5v-2L15 7h-4V3l.5-1h-2l.5 1v4H6l-1-.5v2L6 8z'
          />
        </g>
      </g>
    </svg>
  )
}
