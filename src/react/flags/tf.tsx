import type { FlagIcon } from './types'

export const IconFlagTF: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  title,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}) => {
  const isHidden = ariaHidden === true
  const titleText = title ?? 'TF'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='tf-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='tf-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#073ab6' />
          <stop offset='100%' stopColor='#002b93' />
        </linearGradient>
        <linearGradient id='tf-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f44653' />
          <stop offset='100%' stopColor='#ee2a39' />
        </linearGradient>
        <linearGradient id='tf-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1035bb' />
          <stop offset='100%' stopColor='#042396' />
        </linearGradient>
        <clipPath id='tf-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tf-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#tf-a)' d='M0 0h21v15H0z' />
          <path fill='url(#tf-b)' d='M0 0h21v15H0z' />
          <path fill='url(#tf-a)' d='M0 0h9.5v7.25c0 .138-.107.25-.254.25H0z' />
          <path fill='url(#tf-c)' d='M6 0h3v7H6z' />
          <path fill='url(#tf-d)' d='M0 0h3v7H0z' />
          <path fill='url(#tf-a)' d='M3 0h3v7H3z' />
          <path
            fill='#fff'
            d='M13 6h5l-.5 1H16v.5h1l-.5 1H16V10h-1V7h-1.5zm4 2.5 1 1.5h-2zm-3 0 1 1.5h-2zm1.5 3-1-1.5h2zm3-3.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-6 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m4 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
        </g>
      </g>
    </svg>
  )
}
