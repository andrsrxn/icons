import type { FlagIcon } from './types'

export const IconFlagAZ: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'AZ',
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
      data-slot='icon-flag-az'
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
            id='az-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='az-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#24aad5' />
            <stop offset='1' stopColor='#1899c2' />
          </linearGradient>
          <linearGradient
            id='az-d'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ed1845' />
            <stop offset='1' stopColor='#de0c39' />
          </linearGradient>
          <linearGradient
            id='az-e'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#21bf75' />
            <stop offset='1' stopColor='#19ad68' />
          </linearGradient>
          <linearGradient
            id='az-f'
            x1='10.5'
            x2='10.5'
            y1='6'
            y2='9'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='az-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='az-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#az-clip)'>
        <g clipPath='url(#az-a)'>
          <path fill='url(#az-b)' d='M21 0H0v15h21z' />
          <path fill='url(#az-c)' d='M21 0H0v5h21z' />
          <path fill='url(#az-d)' d='M21 5H0v5h21z' />
          <path fill='url(#az-e)' d='M21 10H0v5h21z' />
          <path
            fill='url(#az-f)'
            fillRule='evenodd'
            d='M11.33 6.25h-.08a1.25 1.25 0 1 0 .08 2.5 1.5 1.5 0 1 1 0-2.5M11.5 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
