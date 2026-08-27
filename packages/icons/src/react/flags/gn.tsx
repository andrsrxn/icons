import type { FlagIcon } from './types'

export const IconFlagGN: FlagIcon = ({
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
  const titleText = title ?? 'GN'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-gn'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='gn-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='gn-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1dbe5e' />
          <stop offset='100%' stopColor='#169e4d' />
        </linearGradient>
        <linearGradient id='gn-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e72b42' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <linearGradient id='gn-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd952' />
          <stop offset='100%' stopColor='#fcd036' />
        </linearGradient>
        <clipPath id='gn-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gn-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#gn-a)' d='M0 0h21v15H0z' />
          <path fill='url(#gn-b)' d='M10 0h11v15H10z' />
          <path fill='url(#gn-c)' d='M0 0h7v15H0z' />
          <path fill='url(#gn-d)' d='M7 0h7v15H7z' />
        </g>
      </g>
    </svg>
  )
}
