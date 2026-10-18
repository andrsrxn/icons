import type { FlagIcon } from './types'

export const IconFlagMY: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'MY',
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
      data-slot='icon-flag-my'
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
            id='my-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='my-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e1244a' />
            <stop offset='1' stopColor='#be1134' />
          </linearGradient>
          <linearGradient id='my-d' x1='6' x2='6' y1='0' y2='8' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0c3f8e' />
            <stop offset='1' stopColor='#032a67' />
          </linearGradient>
          <linearGradient
            id='my-e'
            x1='5.97'
            x2='5.97'
            y1='1'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd34f' />
            <stop offset='1' stopColor='#ffcb2f' />
          </linearGradient>
          <clipPath id='my-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='my-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#my-clip)'>
        <g clipPath='url(#my-a)'>
          <path fill='url(#my-b)' d='M21 0H0v15h21z' />
          <path
            fill='url(#my-c)'
            fillRule='evenodd'
            d='M10 0h11v1H10zm0 2h11v1H10zm0 2h11v1H10zm0 2h11v1H10zM0 8h21v1H0zm0 2h21v1H0zm0 2h21v1H0zm0 2h21v1H0z'
            clipRule='evenodd'
          />
          <path fill='url(#my-d)' d='M12 0H0v8h12z' />
          <path
            fill='url(#my-e)'
            fillRule='evenodd'
            d='M6.87 1.66a2.5 2.5 0 1 0 0 4.68 3 3 0 1 1 0-4.69M8 4.82l-.87.98.23-1.29-1.31-.06 1.15-.63-.76-1.07 1.2.51L8 2l.36 1.26 1.2-.5-.76 1.06 1.15.63-1.3.06.22 1.3z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
