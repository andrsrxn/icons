import type { FlagIcon } from './types'

export const IconFlagTG: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'TG',
  'aria-hidden': ariaHidden,
  preserveAspectRatio,
  cover,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)
  const isHidden = ariaHidden === true

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='icon-flag-tg'
      role={isHidden || !isLabelled ? undefined : 'img'}
      aria-hidden={isHidden || !isLabelled ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      focusable={isHidden || !isLabelled ? false : undefined}
      preserveAspectRatio={cover ? 'xMidYMid slice' : preserveAspectRatio}
      className={`icon-flag ${className ?? ''}`.trim()}
      {...props}>
      <defs>
        <defs>
          <linearGradient
            id='tg-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='tg-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd44d' />
            <stop offset='1' stopColor='#ffcd2f' />
          </linearGradient>
          <linearGradient
            id='tg-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#159a74' />
            <stop offset='1' stopColor='#0c6a4f' />
          </linearGradient>
          <linearGradient id='tg-e' x1='4.5' x2='4.5' y1='0' y2='9' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ed1f45' />
            <stop offset='1' stopColor='#d01739' />
          </linearGradient>
          <linearGradient
            id='tg-f'
            x1='4.5'
            x2='4.5'
            y1='1.5'
            y2='6.93'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='tg-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='tg-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tg-clip)'>
        <g clipPath='url(#tg-a)'>
          <path fill='url(#tg-b)' d='M21 0H0v15h21z' />
          <path fill='url(#tg-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#tg-d)'
            fillRule='evenodd'
            d='M9 0h12v3H9zm0 6h12v3H9zm-9 6h21v3H0z'
            clipRule='evenodd'
          />
          <path fill='url(#tg-e)' d='M9 0H0v9h9z' />
          <path
            fill='url(#tg-f)'
            fillRule='evenodd'
            d='M4.5 5.67 2.74 6.93l.65-2.07-1.74-1.29 2.16-.02.69-2.05.69 2.05 2.16.02-1.74 1.3.65 2.06z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
