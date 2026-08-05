import type { FlagIcon } from './types'

export const IconFlagCZ: FlagIcon = ({
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
  const titleText = title ?? 'CZ'

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
        <linearGradient id='cz-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='cz-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e8252a' />
          <stop offset='100%' stopColor='#d7151a' />
        </linearGradient>
        <linearGradient id='cz-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#17579e' />
          <stop offset='100%' stopColor='#10457f' />
        </linearGradient>
        <clipPath id='cz-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cz-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#cz-a)' d='M0 0h21v15H0z' />
          <path fill='url(#cz-b)' d='M0 7h21v8H0z' />
          <path fill='url(#cz-a)' d='M0 0h21v7H0z' />
          <path fill='url(#cz-c)' d='m0 0 10 7.5L0 15z' />
        </g>
      </g>
    </svg>
  )
}
