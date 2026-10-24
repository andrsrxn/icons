import type { FlagIcon } from './types'

export const IconFlagGBNIR: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'GBNIR',
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
      data-slot='icon-flag-gb-nir'
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
            id='gb-nir-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gb-nir-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e82739' />
            <stop offset='1' stopColor='#ca1a2b' />
          </linearGradient>
          <linearGradient
            id='gb-nir-d'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gb-nir-e'
            x1='10.55'
            x2='10.55'
            y1='6.13'
            y2='9'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e6101e' />
            <stop offset='1' stopColor='#ca0814' />
          </linearGradient>
          <linearGradient
            id='gb-nir-f'
            x1='10.5'
            x2='10.5'
            y1='2.91'
            y2='4.1'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gb-nir-g'
            x1='10.5'
            x2='10.5'
            y1='2'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd148' />
            <stop offset='1' stopColor='#ffcb2f' />
          </linearGradient>
          <clipPath id='gb-nir-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='gb-nir-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gb-nir-clip)'>
        <g clipPath='url(#gb-nir-a)'>
          <path fill='url(#gb-nir-b)' d='M21 0H0v15h21z' />
          <path
            fill='url(#gb-nir-c)'
            fillRule='evenodd'
            d='M9 6H0v3h9v6h3V9h9V6h-9V0H9z'
            clipRule='evenodd'
          />
          <path
            fill='url(#gb-nir-d)'
            fillRule='evenodd'
            d='M11.52 9.26 10.5 11 9.48 9.26l-2.01-.01 1-1.75-1-1.75 2.01-.01L10.5 4l1.02 1.74 2.01.01-1 1.75 1 1.75z'
            clipRule='evenodd'
          />
          <path
            fill='url(#gb-nir-e)'
            fillRule='evenodd'
            d='M9.55 7a.7.7 0 0 1 .42-.66l.56-.18c.26-.09.47.06.47.35v.99s.32-1.04.5-.5-.13 1.53-.13 1.53a.7.7 0 0 1-.63.47h-.48a.6.6 0 0 1-.56-.5z'
            clipRule='evenodd'
          />
          <path
            fill='url(#gb-nir-f)'
            d='M10.5 2.9c-.51 0-.97.31-1.17.77l-.1.23.46.2.1-.23a.77.77 0 0 1 1.42 0l.1.22.46-.2-.1-.23a1.3 1.3 0 0 0-1.17-.75'
          />
          <path
            fill='url(#gb-nir-g)'
            d='M9 3.75 10 4l.5-.5.5.5 1-.25-.4 1a.4.4 0 0 1-.35.25h-1.5a.4.4 0 0 1-.35-.24zM10.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
          <mask id='gb-nir-h' width='3' height='3' x='9' y='2' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M9 3.75 10 4l.5-.5.5.5 1-.25-.4 1a.4.4 0 0 1-.35.25h-1.5a.4.4 0 0 1-.35-.24zM10.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
            />
          </mask>
          <g mask='url(#gb-nir-h)'>
            <path fill='#5169e2' d='M10.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          </g>
          <mask id='gb-nir-i' width='3' height='3' x='9' y='2' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M9 3.75 10 4l.5-.5.5.5 1-.25-.4 1a.4.4 0 0 1-.35.25h-1.5a.4.4 0 0 1-.35-.24zM10.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
            />
          </mask>
          <g mask='url(#gb-nir-i)'>
            <path fill='#d34d43' d='M11.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          </g>
          <mask id='gb-nir-j' width='3' height='3' x='9' y='2' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M9 3.75 10 4l.5-.5.5.5 1-.25-.4 1a.4.4 0 0 1-.35.25h-1.5a.4.4 0 0 1-.35-.24zM10.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
            />
          </mask>
          <g mask='url(#gb-nir-j)'>
            <path fill='#d34d43' d='M9.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          </g>
        </g>
      </g>
    </svg>
  )
}
