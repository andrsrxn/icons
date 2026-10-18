import type { FlagIcon } from './types'

export const IconFlagPF: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'PF',
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
      data-slot='icon-flag-pf'
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
            id='pf-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='pf-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='4'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e02639' />
            <stop offset='1' stopColor='#ca1a2c' />
          </linearGradient>
          <linearGradient
            id='pf-d'
            x1='10.5'
            x2='10.5'
            y1='11'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#dc2235' />
            <stop offset='1' stopColor='#ca1a2c' />
          </linearGradient>
          <linearGradient
            id='pf-e'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='pf-g'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='7.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffa135' />
            <stop offset='1' stopColor='#fd9c2d' />
          </linearGradient>
          <linearGradient
            id='pf-j'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='8'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#df2034' />
            <stop offset='1' stopColor='#ca1a2c' />
          </linearGradient>
          <linearGradient
            id='pf-l'
            x1='10.5'
            x2='10.5'
            y1='8'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0b4bad' />
            <stop offset='1' stopColor='#08429a' />
          </linearGradient>
          <clipPath id='pf-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='pf-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#pf-clip)'>
        <g clipPath='url(#pf-a)'>
          <path fill='url(#pf-b)' d='M21 0H0v15h21z' />
          <path fill='url(#pf-c)' d='M21 0H0v4h21z' />
          <path fill='url(#pf-d)' d='M21 11H0v4h21z' />
          <path fill='url(#pf-e)' d='M21 4H0v7h21z' />
          <mask
            id='pf-f'
            width='5'
            height='5'
            x='8'
            y='5'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M10.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5' />
          </mask>
          <g mask='url(#pf-f)'>
            <path fill='url(#pf-g)' d='M13 5H8v2.5h5z' />
          </g>
          <mask
            id='pf-h'
            width='5'
            height='5'
            x='8'
            y='5'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M10.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5' />
          </mask>
          <g mask='url(#pf-h)'>
            <path fill='#fff' fillRule='evenodd' d='M9 6.5h3l-.5 1h-2z' clipRule='evenodd' />
          </g>
          <mask
            id='pf-i'
            width='5'
            height='5'
            x='8'
            y='5'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M10.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5' />
          </mask>
          <g mask='url(#pf-i)'>
            <path
              fill='url(#pf-j)'
              fillRule='evenodd'
              d='M10 5h1v1.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5zM9 6s.75 1.5 1.5 1.5S12 6 12 6v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z'
              clipRule='evenodd'
            />
          </g>
          <mask
            id='pf-k'
            width='5'
            height='5'
            x='8'
            y='5'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M10.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5' />
          </mask>
          <g mask='url(#pf-k)'>
            <path fill='url(#pf-l)' d='M13 8H8v2h5z' />
          </g>
          <mask
            id='pf-m'
            width='5'
            height='5'
            x='8'
            y='5'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M10.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5' />
          </mask>
          <g mask='url(#pf-m)'>
            <path fill='#fff' fillRule='evenodd' d='M8 8.5h5V9H8z' clipRule='evenodd' />
          </g>
        </g>
      </g>
    </svg>
  )
}
