import type { FlagIcon } from './types'

export const IconFlagLS: FlagIcon = ({
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
  const titleText = title ?? 'LS'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-ls'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='ls-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ls-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0c33b8' />
          <stop offset='100%' stopColor='#05279d' />
        </linearGradient>
        <linearGradient id='ls-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1db158' />
          <stop offset='100%' stopColor='#149447' />
        </linearGradient>
        <linearGradient id='ls-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <clipPath id='ls-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ls-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ls-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ls-b)' d='M0 0h21v5H0z' />
          <path fill='url(#ls-c)' d='M0 10h21v5H0z' />
          <path fill='url(#ls-a)' d='M0 5h21v5H0z' />
          <path
            fill='url(#ls-d)'
            d='m10 7.5.342-1.025c.087-.263.228-.266.316 0L11 7.5l.861 1.291c.077.116.057.279-.055.356 0 0-.306.353-1.306.353s-1.306-.353-1.306-.353a.27.27 0 0 1-.055-.356z'
          />
          <path
            fill='#242424'
            fillRule='nonzero'
            d='M10.5 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 0c.276 0 .5-.724.5-1a.5.5 0 1 0-1 0c0 .276.224 1 .5 1'
          />
        </g>
      </g>
    </svg>
  )
}
