import type { FlagIcon } from './types'

export const IconFlagSC: FlagIcon = ({
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
  const titleText = title ?? 'SC'

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
        <linearGradient id='sc-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='sc-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1dbe4f' />
          <stop offset='100%' stopColor='#159b3f' />
        </linearGradient>
        <linearGradient id='sc-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0858b4' />
          <stop offset='100%' stopColor='#013f87' />
        </linearGradient>
        <linearGradient id='sc-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ed3535' />
          <stop offset='100%' stopColor='#d62828' />
        </linearGradient>
        <linearGradient id='sc-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#08964f' />
          <stop offset='100%' stopColor='#017b3e' />
        </linearGradient>
        <linearGradient id='sc-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffdd67' />
          <stop offset='100%' stopColor='#fdd856' />
        </linearGradient>
        <clipPath id='sc-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sc-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#sc-a)' d='M0 0h21v15H0z' />
          <path fill='url(#sc-b)' d='M0 0h21v15H0z' />
          <path fill='url(#sc-c)' d='M0 0h7L0 15z' />
          <path fill='url(#sc-d)' d='M14 0h7v5L0 15z' />
          <path fill='url(#sc-e)' d='M21 15v-5L0 15z' />
          <path fill='url(#sc-f)' d='M7 0h7L0 15z' />
          <path fill='url(#sc-a)' d='M21 10V5L0 15z' />
        </g>
      </g>
    </svg>
  )
}
