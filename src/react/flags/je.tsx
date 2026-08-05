import type { FlagIcon } from './types'

export const IconFlagJE: FlagIcon = ({
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
  const titleText = title ?? 'JE'

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
        <linearGradient id='je-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='je-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ef273f' />
          <stop offset='100%' stopColor='#db1c33' />
        </linearGradient>
        <linearGradient id='je-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f22a41' />
          <stop offset='100%' stopColor='#e51d34' />
        </linearGradient>
        <linearGradient id='je-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fadf46' />
          <stop offset='100%' stopColor='#f9dc38' />
        </linearGradient>
        <clipPath id='je-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#je-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#je-a)' d='M0 0h21v15H0z' />
          <path
            fill='url(#je-b)'
            d='M10.5 6.291-.962-1.44-2.08.218l10.792 7.28-10.792 7.279 1.118 1.658L10.5 8.704l11.462 7.73 1.118-1.657-10.791-7.28L23.08.218 21.962-1.44z'
          />
          <path
            fill='url(#je-c)'
            d='M9 2.502c0-.279.216-.505.496-.505h2.009c.273 0 .495.214.495.505v.99c0 .28-.16.666-.348.853l-.804.804a.496.496 0 0 1-.696 0l-.804-.804A1.35 1.35 0 0 1 9 3.493z'
          />
          <path
            fill='url(#je-d)'
            d='M10.5 3.997a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0-2c-.828 0-1.5-.224-1.5-.5s.672-.5 1.5-.5c.829 0 1.5.224 1.5.5s-.671.5-1.5.5'
          />
        </g>
      </g>
    </svg>
  )
}
