import type { FlagIcon } from './types'

export const IconFlagZA: FlagIcon = ({
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
  const titleText = title ?? 'ZA'

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
        <linearGradient id='za-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='za-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#06a86e' />
          <stop offset='100%' stopColor='#007a4e' />
        </linearGradient>
        <linearGradient id='za-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffbf2e' />
          <stop offset='100%' stopColor='#ffb612' />
        </linearGradient>
        <linearGradient id='za-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='za-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f44e46' />
          <stop offset='100%' stopColor='#df3931' />
        </linearGradient>
        <linearGradient id='za-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#072cb4' />
          <stop offset='100%' stopColor='#042396' />
        </linearGradient>
        <clipPath id='za-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#za-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#za-a)' d='M0 0h21v15H0z' />
          <path fill='url(#za-b)' d='M0 0h21v15H0z' />
          <path fill='url(#za-c)' d='m0 2 7 5.5L0 13z' />
          <path fill='url(#za-d)' d='M-1 2.25 5.75 7.5-1 12.75z' />
          <path fill='#fff' d='M9 6 2 0h19v6z' />
          <path fill='url(#za-e)' d='m9.25 5-6-5H21v5z' />
          <path fill='#fff' d='M2 15h19V9H9z' />
          <path fill='url(#za-f)' d='M3.25 15H21v-5H9.25z' />
        </g>
      </g>
    </svg>
  )
}
