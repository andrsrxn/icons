import type { FlagIcon } from './types'

export const IconFlagMV: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'MV',
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
      data-slot='icon-flag-mv'
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
            id='mv-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='mv-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f32249' />
            <stop offset='1' stopColor='#d01739' />
          </linearGradient>
          <linearGradient
            id='mv-d'
            x1='10.5'
            x2='10.5'
            y1='3'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#15a04f' />
            <stop offset='1' stopColor='#0f7e3d' />
          </linearGradient>
          <linearGradient
            id='mv-e'
            x1='10.13'
            x2='10.13'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='mv-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='mv-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mv-clip)'>
        <g clipPath='url(#mv-a)'>
          <path fill='url(#mv-b)' d='M21 0H0v15h21z' />
          <path fill='url(#mv-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#mv-d)'
            d='M17.5 3h-14a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5h14a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5'
          />
          <path
            fill='url(#mv-e)'
            fillRule='evenodd'
            d='M12.25 4.08A3.5 3.5 0 0 0 8 7.5a3.5 3.5 0 0 0 4.25 3.42 3.5 3.5 0 0 1 0-6.84'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
