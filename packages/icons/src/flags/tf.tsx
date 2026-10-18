import type { FlagIcon } from './types'

export const IconFlagTF: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'TF',
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
      data-slot='icon-flag-tf'
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
            id='tf-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='tf-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#073ab6' />
            <stop offset='1' stopColor='#002b93' />
          </linearGradient>
          <linearGradient
            id='tf-d'
            x1='4.75'
            x2='4.75'
            y1='0'
            y2='7.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='tf-e' x1='7.5' x2='7.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f44653' />
            <stop offset='1' stopColor='#ee2a39' />
          </linearGradient>
          <linearGradient id='tf-f' x1='1.5' x2='1.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1035bb' />
            <stop offset='1' stopColor='#042396' />
          </linearGradient>
          <linearGradient id='tf-g' x1='4.5' x2='4.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='tf-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='tf-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tf-clip)'>
        <g clipPath='url(#tf-a)'>
          <path fill='url(#tf-b)' d='M21 0H0v15h21z' />
          <path fill='url(#tf-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#tf-d)'
            fillRule='evenodd'
            d='M0 0h9.5v7.25c0 .14-.1.25-.25.25H0z'
            clipRule='evenodd'
          />
          <path fill='url(#tf-e)' d='M9 0H6v7h3z' />
          <path fill='url(#tf-f)' d='M3 0H0v7h3z' />
          <path fill='url(#tf-g)' d='M6 0H3v7h3z' />
          <path
            fill='#fff'
            fillRule='evenodd'
            d='M13 6h5l-.5 1H16v.5h1l-.5 1H16V10h-1V7h-1.5zm4 2.5 1 1.5h-2zm-3 0 1 1.5h-2zm1.5 3-1-1.5h2zm3-3.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-6 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m4 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
