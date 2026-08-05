import type { FlagIcon } from './types'

export const IconFlagCK: FlagIcon = ({
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
  const titleText = title ?? 'CK'

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
        <linearGradient id='ck-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ck-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0a17a7' />
          <stop offset='100%' stopColor='#030e88' />
        </linearGradient>
        <linearGradient id='ck-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#db1e36' />
          <stop offset='100%' stopColor='#d51931' />
        </linearGradient>
        <clipPath id='ck-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ck-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ck-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ck-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#ck-a)'
            fillRule='nonzero'
            d='M3 3.23-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5z'
          />
          <path
            fill='url(#ck-c)'
            d='M3.5 3 0 0h.5L4 2.5h1L9 0v.25a.54.54 0 0 1-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.9.9 0 0 1-.458-.149L5 4.5H4L0 7v-.5L3.5 4z'
          />
          <path
            fill='url(#ck-a)'
            d='M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 0 0 .505-.495V4.5h3.51a.49.49 0 0 0 .49-.505v-.99a.495.495 0 0 0-.49-.505H5.5V0h-2v2.5z'
          />
          <path fill='url(#ck-c)' d='M0 3h4V0h1v3h4v1H5v3H4V4H0z' />
          <path
            fill='#fff'
            d='M15.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M13 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m6 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-5.268 1.768a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707m4.243-4.243a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707m-.707 4.243a.5.5 0 1 1 .707.707.5.5 0 0 1-.707-.707m-4.243-4.243a.5.5 0 1 1 .707.707.5.5 0 0 1-.707-.707'
          />
        </g>
      </g>
    </svg>
  )
}
