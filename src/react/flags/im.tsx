import type { FlagIcon } from './types'

export const IconFlagIM: FlagIcon = ({
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
  const titleText = title ?? 'IM'

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
        <linearGradient id='im-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='im-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e52d42' />
          <stop offset='100%' stopColor='#cb1d31' />
        </linearGradient>
        <linearGradient id='im-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f8dd4e' />
          <stop offset='100%' stopColor='#f9da38' />
        </linearGradient>
        <clipPath id='im-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#im-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#im-a)' d='M0 0h21v15H0z' />
          <path fill='url(#im-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#im-a)'
            d='M12.5 1.5h-2L9 5 7.5 4S6.411 1.411 6 1s-.828-.03-2.13.349c-1.301.38-1.352.815-1.86.815-.207 0-.862-.76-1.228-.987C.244.844.051 1 .18 1.5c.056.216.483.483.754.87.355.51.566 1.13.566 1.13s.488-.456.75-.53c.398-.114.846.08 1.372 0C4.289 2.865 5 2.5 5 2.5l.174 1.907S2.795 6.617 3 7.5s2.469 1.966 3 2.74c.531.773-.316 1.061-.316 1.433 0 .371-.088.866.316.717.404-.148.453-.792.823-1.377.255-.402.46-.614.496-.773.086-.39-1.028-1.415-1.635-2.14-.289-.346-.871-.815-.871-.815L6.53 6s2.966 1.225 3.635.817C10.836 6.409 11 2.5 11 2.5l2.062-.5z'
            transform='translate(4 1.5)'
          />
          <path
            fill='url(#im-c)'
            d='M7.5 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2-8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-6 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2-6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1 4C6.224 6 6 5.552 6 5s.224-1 .5-1 .5.448.5 1-.224 1-.5 1m-5-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
            transform='translate(4 1.5)'
          />
        </g>
      </g>
    </svg>
  )
}
