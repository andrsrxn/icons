import type { FlagIcon } from './types'

export const IconFlagBY: FlagIcon = ({
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
  const titleText = title ?? 'BY'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-by'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='by-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='by-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e54252' />
          <stop offset='100%' stopColor='#c63442' />
        </linearGradient>
        <linearGradient id='by-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#5cbe6b' />
          <stop offset='100%' stopColor='#4ea55b' />
        </linearGradient>
        <clipPath id='by-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#by-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#by-a)' d='M0 0h21v15H0z' />
          <path fill='url(#by-b)' d='M0 0h21v10H0z' />
          <path fill='url(#by-c)' d='M0 10h21v5H0z' />
          <path
            fill='url(#by-a)'
            d='M3 12.75V15H0V0h3v2.25L2.5 3l.5.75v1.5L2.5 6l.5.75v1.5L2.5 9l.5.75v1.5l-.5.75z'
          />
          <path
            fill='url(#by-b)'
            d='m-1.5 3 1-1.5L.5 3l-1 1.5zm0 3 1-1.5L.5 6l-1 1.5zm0 3 1-1.5L.5 9l-1 1.5zm0 3 1-1.5 1 1.5-1 1.5z'
          />
          <path
            fill='url(#by-b)'
            d='m.5 1.5 1-1.5 1 1.5-1 1.5zm0 3 1-1.5 1 1.5-1 1.5zm0 3 1-1.5 1 1.5-1 1.5zm0 3 1-1.5 1 1.5-1 1.5zm0 3 1-1.5 1 1.5-1 1.5z'
          />
        </g>
      </g>
    </svg>
  )
}
