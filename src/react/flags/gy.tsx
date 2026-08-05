import type { FlagIcon } from './types'

export const IconFlagGY: FlagIcon = ({
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
  const titleText = title ?? 'GY'

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
        <linearGradient id='gy-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='gy-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#08c55f' />
          <stop offset='100%' stopColor='#009f49' />
        </linearGradient>
        <linearGradient id='gy-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='gy-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd831' />
          <stop offset='100%' stopColor='#fdd117' />
        </linearGradient>
        <linearGradient id='gy-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='gy-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e92034' />
          <stop offset='100%' stopColor='#ce1225' />
        </linearGradient>
        <clipPath id='gy-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gy-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#gy-a)' d='M0 0h21v15H0z' />
          <path fill='url(#gy-b)' d='M0 0h21v15H0z' />
          <path fill='url(#gy-c)' fillRule='nonzero' d='M-1 15V0h1l21 7v1L0 15z' />
          <path fill='url(#gy-d)' fillRule='nonzero' d='M0 1.054v12.892L19.338 7.5z' />
          <path fill='url(#gy-e)' fillRule='nonzero' d='M-1 15V0h1l11.5 7.5L0 15z' />
          <path fill='url(#gy-f)' fillRule='nonzero' d='M0 13.806 9.67 7.5 0 1.194z' />
        </g>
      </g>
    </svg>
  )
}
