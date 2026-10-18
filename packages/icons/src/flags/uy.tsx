import type { FlagIcon } from './types'

export const IconFlagUY: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'UY',
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
      data-slot='icon-flag-uy'
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
            id='uy-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='uy-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0e4dc5' />
            <stop offset='1' stopColor='#073da6' />
          </linearGradient>
          <linearGradient
            id='uy-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='14'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='uy-e'
            x1='5'
            x2='5'
            y1='2.14'
            y2='7.99'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fed443' />
            <stop offset='1' stopColor='#fcd036' />
          </linearGradient>
          <clipPath id='uy-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='uy-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#uy-clip)'>
        <g clipPath='url(#uy-a)'>
          <path fill='url(#uy-b)' d='M21 0H0v15h21z' />
          <path fill='url(#uy-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#uy-d)'
            fillRule='evenodd'
            d='M10 0h11v2H10zm0 4h11v2H10zm0 4h11v2H10zM0 12h21v2H0zM0 0h10v10H0z'
            clipRule='evenodd'
          />
          <path
            fill='url(#uy-e)'
            fillRule='evenodd'
            d='m5 7-.67.99-.17-1.19-1.03.6.36-1.14-1.2.1.83-.87L2 5.06l1.12-.43-.82-.87 1.2.1-.37-1.14 1.03.6.17-1.18.67 1 .67-1 .17 1.19 1.03-.61-.36 1.14 1.2-.1-.83.87L8 5.06l-1.12.43.82.87-1.2-.1.37 1.15-1.03-.61-.17 1.19zm0-.03a1.9 1.9 0 1 0 0-3.82 1.9 1.9 0 0 0 0 3.82m0-.47a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3'
            clipRule='evenodd'
          />
          <path
            fill='#c6a326'
            d='M4.13 5a.12.12 0 1 1 .25 0 .6.6 0 0 0 .62.63c.24 0 .46-.14.56-.36l.04-.07.02-.02q.06-.1.06-.18a.13.13 0 0 1 .25 0q0 .15-.1.3l-.01.03-.03.05A.87.87 0 0 1 4.13 5m1.37-.25a.25.25 0 1 1 0-.5.25.25 0 0 1 0 .5m-1 0a.25.25 0 1 1 0-.5.25.25 0 0 1 0 .5'
          />
        </g>
      </g>
    </svg>
  )
}
