import type { FlagIcon } from './types'

export const IconFlagGD: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'GD',
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
      data-slot='icon-flag-gd'
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
            id='gd-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gd-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e42235' />
            <stop offset='1' stopColor='#ce1225' />
          </linearGradient>
          <linearGradient
            id='gd-d'
            x1='10.5'
            x2='10.5'
            y1='2'
            y2='13'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#079b77' />
            <stop offset='1' stopColor='#007b5d' />
          </linearGradient>
          <linearGradient
            id='gd-f'
            x1='4.22'
            x2='4.22'
            y1='5.8'
            y2='8.43'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd938' />
            <stop offset='1' stopColor='#fdd117' />
          </linearGradient>
          <linearGradient
            id='gd-h'
            x1='10.5'
            x2='10.5'
            y1='2'
            y2='13'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd93b' />
            <stop offset='1' stopColor='#fdd117' />
          </linearGradient>
          <linearGradient
            id='gd-j'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e21c30' />
            <stop offset='1' stopColor='#ce1225' />
          </linearGradient>
          <linearGradient
            id='gd-l'
            x1='10.5'
            x2='10.5'
            y1='5.5'
            y2='9.12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd938' />
            <stop offset='1' stopColor='#fdd117' />
          </linearGradient>
          <clipPath id='gd-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='gd-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gd-clip)'>
        <g clipPath='url(#gd-a)'>
          <path fill='url(#gd-b)' d='M21 0H0v15h21z' />
          <path fill='url(#gd-c)' d='M21 0H0v15h21z' />
          <path fill='url(#gd-d)' d='M19 2H2v11h17z' />
          <mask
            id='gd-e'
            width='17'
            height='11'
            x='2'
            y='2'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M19 2H2v11h17z' />
          </mask>
          <g mask='url(#gd-e)'>
            <path
              fill='url(#gd-f)'
              fillRule='evenodd'
              d='M3.3 7.6c.28.45.68.75 1.06.83.21.04-.17-.92 0-1.02.14-.09.82.7.88.54.14-.38.06-.92-.25-1.41-.44-.7-.46-.24-1.64-.74.12.72-.5 1.1-.06 1.8'
              clipRule='evenodd'
            />
          </g>
          <mask
            id='gd-g'
            width='17'
            height='11'
            x='2'
            y='2'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M19 2H2v11h17z' />
          </mask>
          <g mask='url(#gd-g)'>
            <path
              fill='url(#gd-h)'
              fillRule='evenodd'
              d='M2 2h17l-8.5 5.5zm0 11 8.5-5.5L19 13z'
              clipRule='evenodd'
            />
          </g>
          <mask
            id='gd-i'
            width='17'
            height='11'
            x='2'
            y='2'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M19 2H2v11h17z' />
          </mask>
          <g mask='url(#gd-i)'>
            <path fill='url(#gd-j)' d='M10.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5' />
          </g>
          <mask
            id='gd-k'
            width='17'
            height='11'
            x='2'
            y='2'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M19 2H2v11h17z' />
          </mask>
          <g mask='url(#gd-k)'>
            <path
              fill='url(#gd-l)'
              fillRule='evenodd'
              d='m10.5 8.27-1.18.85.45-1.38-1.17-.86h1.45l.45-1.38.45 1.38h1.45l-1.17.86.45 1.38z'
              clipRule='evenodd'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
