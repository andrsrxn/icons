import type { FlagIcon } from './types'

export const IconFlagAG: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'AG',
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
      data-slot='icon-flag-ag'
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
            id='ag-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ag-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e2243b' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <linearGradient
            id='ag-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='ag-f'
            x1='10.5'
            x2='10.5'
            y1='1.5'
            y2='10.16'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffcf3c' />
            <stop offset='1' stopColor='#fecb2f' />
          </linearGradient>
          <linearGradient
            id='ag-h'
            x1='10.5'
            x2='10.5'
            y1='6'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1984d8' />
            <stop offset='1' stopColor='#1175c4' />
          </linearGradient>
          <linearGradient
            id='ag-j'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='ag-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ag-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ag-clip)'>
        <g clipPath='url(#ag-a)'>
          <path fill='url(#ag-b)' d='M21 0H0v15h21z' />
          <path
            fill='#fff'
            fillOpacity='.5'
            d='M10.5 8c.55 0 1-.67 1-1.5s-.45-1.5-1-1.5-1 .67-1 1.5.45 1.5 1 1.5'
          />
          <path fill='url(#ag-c)' d='M21 0H0v15h21z' />
          <path fill='url(#ag-d)' d='M0 0h21L10.5 15z' />
          <mask
            id='ag-e'
            width='21'
            height='15'
            x='0'
            y='0'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M0 0h21L10.5 15z' />
          </mask>
          <g mask='url(#ag-e)'>
            <path
              fill='url(#ag-f)'
              fillRule='evenodd'
              d='m10.5 8.25-1.72 1.9.13-2.56-2.57.13L8.25 6 6 4l2.9.5-.4-3 2 2.5 2-2.5-.4 3L15 4l-2.25 2 1.9 1.72-2.56-.13.13 2.57z'
              clipRule='evenodd'
            />
          </g>
          <mask
            id='ag-g'
            width='21'
            height='15'
            x='0'
            y='0'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M0 0h21L10.5 15z' />
          </mask>
          <g mask='url(#ag-g)'>
            <path fill='url(#ag-h)' d='M21 6H0v4h21z' />
          </g>
          <mask
            id='ag-i'
            width='21'
            height='15'
            x='0'
            y='0'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M0 0h21L10.5 15z' />
          </mask>
          <g mask='url(#ag-i)'>
            <path fill='url(#ag-j)' d='M21 10H0v5h21z' />
          </g>
        </g>
      </g>
    </svg>
  )
}
