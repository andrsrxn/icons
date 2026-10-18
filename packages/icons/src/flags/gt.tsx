import type { FlagIcon } from './types'

export const IconFlagGT: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'GT',
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
      data-slot='icon-flag-gt'
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
            id='gt-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gt-c'
            x1='15.5'
            x2='15.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#63aee3' />
            <stop offset='1' stopColor='#4998d0' />
          </linearGradient>
          <linearGradient id='gt-d' x1='3.5' x2='3.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#63aee3' />
            <stop offset='1' stopColor='#4998d0' />
          </linearGradient>
          <linearGradient
            id='gt-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='gt-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='gt-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gt-clip)'>
        <g clipPath='url(#gt-a)'>
          <path fill='url(#gt-b)' d='M21 0H0v15h21z' />
          <path fill='url(#gt-c)' d='M21 0H10v15h11z' />
          <path fill='url(#gt-d)' d='M7 0H0v15h7z' />
          <path fill='url(#gt-e)' d='M14 0H7v15h7z' />
          <path
            fill='#628a40'
            d='M8 7c0 .9.48 1.72 1.25 2.16a.5.5 0 0 0 .5-.86A1.5 1.5 0 0 1 9 7a.5.5 0 0 0-1 0m3.85 2.1A2.5 2.5 0 0 0 13 7a.5.5 0 0 0-1 0c0 .52-.26 1-.7 1.26a.5.5 0 0 0 .55.85'
          />
          <path fill='#dcc26d' d='M10.5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
        </g>
      </g>
    </svg>
  )
}
