import type { FlagIcon } from './types'

export const IconFlagCG: FlagIcon = ({
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
  const titleText = title ?? 'CG'

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
        <linearGradient id='cg-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='cg-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f33630' />
          <stop offset='100%' stopColor='#dc241e' />
        </linearGradient>
        <linearGradient id='cg-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#009643' />
          <stop offset='100%' stopColor='#09c15b' />
        </linearGradient>
        <linearGradient id='cg-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fcdf4a' />
          <stop offset='100%' stopColor='#fce154' />
        </linearGradient>
        <clipPath id='cg-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cg-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#cg-a)' d='M0 0h21v15H0z' />
          <path
            fill='url(#cg-b)'
            d='m6.062 19.017 15-14h1v15h-16z'
            transform='translate(-1.06 -5.02)'
          />
          <path
            fill='url(#cg-c)'
            d='m1.062 19.017 15-14h1v15h-16z'
            transform='matrix(-1 0 0 -1 17.063 20.015)'
          />
          <path fill='url(#cg-d)' d='M-2.63 9.667h29v5h-29z' transform='rotate(134 12.406 9.432)' />
        </g>
      </g>
    </svg>
  )
}
