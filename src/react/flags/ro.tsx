import type { FlagIcon } from './types'

export const IconFlagRO: FlagIcon = ({
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
  const titleText = title ?? 'RO'

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
        <linearGradient id='ro-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ro-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e5253d' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <linearGradient id='ro-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0a3d9c' />
          <stop offset='100%' stopColor='#042e7d' />
        </linearGradient>
        <linearGradient id='ro-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd955' />
          <stop offset='100%' stopColor='#fcd036' />
        </linearGradient>
        <clipPath id='ro-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ro-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ro-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ro-b)' d='M10 0h11v15H10z' />
          <path fill='url(#ro-c)' d='M0 0h7v15H0z' />
          <path fill='url(#ro-d)' d='M7 0h7v15H7z' />
        </g>
      </g>
    </svg>
  )
}
