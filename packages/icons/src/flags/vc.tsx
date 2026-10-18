import type { FlagIcon } from './types'

export const IconFlagVC: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'VC',
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
      data-slot='icon-flag-vc'
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
            id='vc-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='vc-c'
            x1='15.5'
            x2='15.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#08c47a' />
            <stop offset='1' stopColor='#009f60' />
          </linearGradient>
          <linearGradient id='vc-d' x1='3.5' x2='3.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0c87e1' />
            <stop offset='1' stopColor='#0073c7' />
          </linearGradient>
          <linearGradient
            id='vc-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd147' />
            <stop offset='1' stopColor='#feca2f' />
          </linearGradient>
          <linearGradient
            id='vc-f'
            x1='10.5'
            x2='10.5'
            y1='3'
            y2='13'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#00c778' />
            <stop offset='1' stopColor='#009f60' />
          </linearGradient>
          <clipPath id='vc-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='vc-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#vc-clip)'>
        <g clipPath='url(#vc-a)'>
          <path fill='url(#vc-b)' d='M21 0H0v15h21z' />
          <path fill='url(#vc-c)' d='M21 0H10v15h11z' />
          <path fill='url(#vc-d)' d='M7 0H0v15h7z' />
          <path fill='url(#vc-e)' d='M15 0H6v15h9z' />
          <path
            fill='url(#vc-f)'
            fillRule='evenodd'
            d='m11 6 1.5-3L14 6l-1.5 3zM7 6l1.5-3L10 6 8.5 9zm2 4 1.5-3 1.5 3-1.5 3z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
