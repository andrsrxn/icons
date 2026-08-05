import type { FlagIcon } from './types'

export const IconFlagPW: FlagIcon = ({
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
  const titleText = title ?? 'PW'

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
        <linearGradient id='pw-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='pw-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#65c6ee' />
          <stop offset='100%' stopColor='#4faed5' />
        </linearGradient>
        <linearGradient id='pw-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffe044' />
          <stop offset='100%' stopColor='#ffdd32' />
        </linearGradient>
        <clipPath id='pw-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#pw-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#pw-a)' d='M0 0h21v15H0z' />
          <path fill='url(#pw-b)' d='M0 0h21v15H0z' />
          <circle cx='9.5' cy='7.5' r='4.5' fill='url(#pw-c)' />
        </g>
      </g>
    </svg>
  )
}
