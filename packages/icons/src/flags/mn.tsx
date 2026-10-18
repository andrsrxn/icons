import type { FlagIcon } from './types'

export const IconFlagMN: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'MN',
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
      data-slot='icon-flag-mn'
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
            id='mn-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='mn-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#146bbc' />
            <stop offset='1' stopColor='#0b5396' />
          </linearGradient>
          <linearGradient id='mn-d' x1='3.5' x2='3.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e43642' />
            <stop offset='1' stopColor='#c32a34' />
          </linearGradient>
          <linearGradient
            id='mn-e'
            x1='17.5'
            x2='17.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e43642' />
            <stop offset='1' stopColor='#c32a34' />
          </linearGradient>
          <linearGradient
            id='mn-f'
            x1='3.5'
            x2='3.5'
            y1='7.5'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f8d246' />
            <stop offset='1' stopColor='#f9ce2f' />
          </linearGradient>
          <clipPath id='mn-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='mn-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mn-clip)'>
        <g clipPath='url(#mn-a)'>
          <path fill='url(#mn-b)' d='M21 0H0v15h21z' />
          <path fill='url(#mn-c)' d='M14 0H7v15h7z' />
          <path fill='url(#mn-d)' d='M7 0H0v15h7z' />
          <path fill='url(#mn-e)' d='M21 0h-7v15h7z' />
          <path
            fill='url(#mn-f)'
            fillRule='evenodd'
            d='M4 9h1v3H4zM2 9h1v3H2zm1 2h1l-.5 1zm0-2h1l-.5 1zm0-1 .5-.5.5.5zm.5 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
