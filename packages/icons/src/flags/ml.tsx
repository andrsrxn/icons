import type { FlagIcon } from './types'

export const IconFlagML: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'ML',
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
      data-slot='icon-flag-ml'
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
            id='ml-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ml-c'
            x1='15.5'
            x2='15.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e2233a' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <linearGradient id='ml-d' x1='3.5' x2='3.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#2ecb4d' />
            <stop offset='1' stopColor='#24b441' />
          </linearGradient>
          <linearGradient
            id='ml-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd749' />
            <stop offset='1' stopColor='#fcd036' />
          </linearGradient>
          <clipPath id='ml-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ml-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ml-clip)'>
        <g clipPath='url(#ml-a)'>
          <path fill='url(#ml-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ml-c)' d='M21 0H10v15h11z' />
          <path fill='url(#ml-d)' d='M7 0H0v15h7z' />
          <path fill='url(#ml-e)' d='M14 0H7v15h7z' />
        </g>
      </g>
    </svg>
  )
}
