import type { FlagIcon } from './types'

export const IconFlagMY: FlagIcon = ({
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
  const titleText = title ?? 'MY'

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
        <linearGradient id='my-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='my-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e1244a' />
          <stop offset='100%' stopColor='#be1134' />
        </linearGradient>
        <linearGradient id='my-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0c3f8e' />
          <stop offset='100%' stopColor='#032a67' />
        </linearGradient>
        <linearGradient id='my-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd34f' />
          <stop offset='100%' stopColor='#ffcb2f' />
        </linearGradient>
        <clipPath id='my-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#my-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#my-a)' d='M0 0h21v15H0z' />
          <path
            fill='url(#my-b)'
            d='M10 0h11v1H10zm0 2h11v1H10zm0 2h11v1H10zm0 2h11v1H10zM0 8h21v1H0zm0 2h21v1H0zm0 2h21v1H0zm0 2h21v1H0z'
          />
          <path fill='url(#my-c)' d='M0 0h12v8H0z' />
          <path
            fill='url(#my-d)'
            d='M6.874 1.657a2.5 2.5 0 1 0 0 4.686 3 3 0 1 1 0-4.686M8 4.82l-.868.982.227-1.29-1.309-.067 1.15-.627-.764-1.065 1.208.508L8 2l.356 1.261 1.208-.508-.765 1.065 1.15.627-1.308.066.227 1.29z'
          />
        </g>
      </g>
    </svg>
  )
}
