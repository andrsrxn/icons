import type { FlagIcon } from './types'

export const IconFlagAF: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'AF',
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
      data-slot='icon-flag-af'
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
            id='af-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='af-c'
            x1='15.5'
            x2='15.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1ab11f' />
            <stop offset='1' stopColor='#149818' />
          </linearGradient>
          <linearGradient id='af-d' x1='3.5' x2='3.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='af-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#dc0d18' />
            <stop offset='1' stopColor='#be0711' />
          </linearGradient>
          <clipPath id='af-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='af-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#af-clip)'>
        <g clipPath='url(#af-a)'>
          <path fill='url(#af-b)' d='M21 0H0v15h21z' />
          <path fill='url(#af-c)' d='M21 0H10v15h11z' />
          <path fill='url(#af-d)' d='M7 0H0v15h7z' />
          <path fill='url(#af-e)' d='M14 0H7v15h7z' />
          <path
            fill='#fff'
            d='M8 7c0 .9.48 1.72 1.25 2.16a.5.5 0 0 0 .5-.86A1.5 1.5 0 0 1 9 7a.5.5 0 0 0-1 0m3.85 2.1A2.5 2.5 0 0 0 13 7a.5.5 0 0 0-1 0c0 .52-.26 1-.7 1.26a.5.5 0 0 0 .55.85'
            opacity='.75'
          />
          <path
            fill='#fff'
            fillOpacity='.5'
            d='M10.5 8c.55 0 1-.67 1-1.5s-.45-1.5-1-1.5-1 .67-1 1.5.45 1.5 1 1.5'
          />
        </g>
      </g>
    </svg>
  )
}
