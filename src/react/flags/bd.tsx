import type { FlagIcon } from './types'

export const IconFlagBD: FlagIcon = ({
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
  const titleText = title ?? 'BD'

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
        <linearGradient id='bd-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='bd-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#128363' />
          <stop offset='100%' stopColor='#0c6a4f' />
        </linearGradient>
        <linearGradient id='bd-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f23c53' />
          <stop offset='100%' stopColor='#f22e46' />
        </linearGradient>
        <clipPath id='bd-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#bd-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#bd-a)' d='M0 0h21v15H0z' />
          <path fill='url(#bd-b)' d='M0 0h21v15H0z' />
          <circle cx='9.5' cy='7.5' r='4.5' fill='url(#bd-c)' />
        </g>
      </g>
    </svg>
  )
}
