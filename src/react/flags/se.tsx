import type { FlagIcon } from './types'

export const IconFlagSE: FlagIcon = ({
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
  const titleText = title ?? 'SE'

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
        <linearGradient id='se-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='se-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#157cbb' />
          <stop offset='100%' stopColor='#0e6ca5' />
        </linearGradient>
        <linearGradient id='se-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd34d' />
          <stop offset='100%' stopColor='#fecb2f' />
        </linearGradient>
        <clipPath id='se-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#se-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#se-a)' d='M0 0h21v15H0z' />
          <path fill='url(#se-b)' d='M0 0h21v15H0z' />
          <path fill='url(#se-c)' d='M0 9h6v6h3V9h12V6H9V0H6v6H0z' />
        </g>
      </g>
    </svg>
  )
}
