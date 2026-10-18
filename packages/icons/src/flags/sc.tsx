import type { FlagIcon } from './types'

export const IconFlagSC: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'SC',
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
      data-slot='icon-flag-sc'
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
            id='sc-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sc-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1dbe4f' />
            <stop offset='1' stopColor='#159b3f' />
          </linearGradient>
          <linearGradient id='sc-d' x1='3.5' x2='3.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0858b4' />
            <stop offset='1' stopColor='#013f87' />
          </linearGradient>
          <linearGradient
            id='sc-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ed3535' />
            <stop offset='1' stopColor='#d62828' />
          </linearGradient>
          <linearGradient
            id='sc-f'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#08964f' />
            <stop offset='1' stopColor='#017b3e' />
          </linearGradient>
          <linearGradient id='sc-g' x1='7' x2='7' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffdd67' />
            <stop offset='1' stopColor='#fdd856' />
          </linearGradient>
          <linearGradient
            id='sc-h'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='sc-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='sc-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sc-clip)'>
        <g clipPath='url(#sc-a)'>
          <path fill='url(#sc-b)' d='M21 0H0v15h21z' />
          <path fill='url(#sc-c)' d='M21 0H0v15h21z' />
          <path fill='url(#sc-d)' fillRule='evenodd' d='M0 0h7L0 15z' clipRule='evenodd' />
          <path fill='url(#sc-e)' fillRule='evenodd' d='M14 0h7v5L0 15z' clipRule='evenodd' />
          <path fill='url(#sc-f)' fillRule='evenodd' d='M21 15v-5L0 15z' clipRule='evenodd' />
          <path fill='url(#sc-g)' fillRule='evenodd' d='M7 0h7L0 15z' clipRule='evenodd' />
          <path fill='url(#sc-h)' fillRule='evenodd' d='M21 10V5L0 15z' clipRule='evenodd' />
        </g>
      </g>
    </svg>
  )
}
