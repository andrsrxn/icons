import type { FlagIcon } from './types'

export const IconFlagCD: FlagIcon = ({
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
  const titleText = title ?? 'CD'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-cd'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='cd-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='cd-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#158aff' />
          <stop offset='100%' stopColor='#007fff' />
        </linearGradient>
        <linearGradient id='cd-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ce1120' />
          <stop offset='100%' stopColor='#e11b2b' />
        </linearGradient>
        <clipPath id='cd-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cd-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#cd-a)' d='M0 0h21v15H0z' />
          <path fill='url(#cd-b)' d='M4.294 1.443h21v15h-21z' transform='translate(-4.29 -1.44)' />
          <path fill='#fdd216' d='m24.273 3.906-25.84 13.166-2.723-5.346L21.55-1.44z' />
          <path fill='url(#cd-c)' d='M.057 7.074h29v4h-29z' transform='rotate(153 12.585 7.839)' />
          <path
            fill='#fdd216'
            d='m3.504 4.478-1.47 1.047.542-1.721-1.45-1.074 1.805-.016.573-1.711.573 1.71 1.804.017-1.45 1.074.542 1.721z'
          />
        </g>
      </g>
    </svg>
  )
}
