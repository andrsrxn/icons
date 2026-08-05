import type { FlagIcon } from './types'

export const IconFlagVA: FlagIcon = ({
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
  const titleText = title ?? 'VA'

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
        <linearGradient id='va-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='va-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fde048' />
          <stop offset='100%' stopColor='#ffdf32' />
        </linearGradient>
        <linearGradient id='va-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#cdcccc' />
          <stop offset='100%' stopColor='#e4e4e4' />
        </linearGradient>
        <linearGradient id='va-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#cd9d25' />
          <stop offset='100%' stopColor='#ebb93a' />
        </linearGradient>
        <linearGradient id='va-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f5252c' />
          <stop offset='100%' stopColor='#f6151c' />
        </linearGradient>
        <clipPath id='va-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#va-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#va-a)' d='M0 0h21v15H0z' />
          <path fill='url(#va-b)' d='M0 0h21v15H0z' />
          <path fill='url(#va-a)' d='M10 0h11v15H10z' />
          <path
            fill='url(#va-c)'
            d='M18.682 8.025a1.5 1.5 0 1 0-2.415-.414l-2.181 2.182-.354-.354-.353-.353-.707.707.353.353.707.708.354.353.353-.353 2.536-2.536a1.5 1.5 0 0 0 1.707-.293'
            transform='matrix(1 0 0 -1 0 16.672)'
          />
          <path
            fill='url(#va-d)'
            d='M14.025 8.318a1.5 1.5 0 1 1 .708-.707l2.181 2.182.354-.354.353-.353.707.707-.353.353-.707.708-.354.353-.353-.353z'
            transform='matrix(1 0 0 -1 0 16.672)'
          />
          <path
            fill='url(#va-d)'
            d='M15.5 5c-.828 0-1.5-.224-1.5-.5s.672-.5 1.5-.5 1.5.224 1.5.5-.672.5-1.5.5m0-2.5c-.414 0-.75-.112-.75-.25s.336-.25.75-.25.75.112.75.25-.336.25-.75.25m0 1.167c-.552 0-1-.15-1-.334S14.948 3 15.5 3s1 .15 1 .333-.448.334-1 .334'
          />
          <path
            fill='url(#va-e)'
            fillRule='nonzero'
            d='M13.026 10.658c.08.242.247.576.527.912.48.576 1.13.93 1.947.93s1.467-.354 1.947-.93c.28-.336.447-.67.527-.912a.5.5 0 1 0-.948-.316 2 2 0 0 1-.348.588c-.301.362-.683.57-1.178.57s-.877-.208-1.178-.57a2 2 0 0 1-.348-.588.5.5 0 1 0-.948.316'
          />
        </g>
      </g>
    </svg>
  )
}
