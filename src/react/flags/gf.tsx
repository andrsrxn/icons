import type { FlagIcon } from './types'

export const IconFlagGF: FlagIcon = ({
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
  const titleText = title ?? 'GF'

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
        <linearGradient id='gf-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='gf-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#2da446' />
          <stop offset='100%' stopColor='#218736' />
        </linearGradient>
        <linearGradient id='gf-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffe24a' />
          <stop offset='100%' stopColor='#fcdc34' />
        </linearGradient>
        <linearGradient id='gf-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e7242c' />
          <stop offset='100%' stopColor='#d61c24' />
        </linearGradient>
        <clipPath id='gf-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gf-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#gf-a)' d='M0 0h21v15H0z' />
          <path fill='url(#gf-b)' d='M0 0h21v15H0z' />
          <path fill='url(#gf-c)' d='m0 0 21 15H0z' />
          <path
            fill='url(#gf-d)'
            d='m10.5 9.073-1.837 1.33.697-2.158L7.528 6.91l2.268-.004.704-2.155.704 2.155 2.268.004-1.832 1.336.697 2.158z'
          />
        </g>
      </g>
    </svg>
  )
}
