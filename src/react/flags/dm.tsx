import type { FlagIcon } from './types'

export const IconFlagDM: FlagIcon = ({
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
  const titleText = title ?? 'DM'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-dm'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='dm-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='dm-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#108753' />
          <stop offset='100%' stopColor='#0b6b41' />
        </linearGradient>
        <linearGradient id='dm-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='dm-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fcd449' />
          <stop offset='100%' stopColor='#fcd036' />
        </linearGradient>
        <linearGradient id='dm-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e02c42' />
          <stop offset='100%' stopColor='#d22036' />
        </linearGradient>
        <clipPath id='dm-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#dm-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#dm-a)' d='M0 0h21v15H0z' />
          <path fill='url(#dm-b)' d='M0 0h21v6H0z' />
          <path fill='url(#dm-b)' d='M0 9h21v6H0z' />
          <path fill='url(#dm-a)' d='M9 6H0v3h9v6h3V9h9V6h-9V0H9z' />
          <path fill='url(#dm-c)' d='M10 8v7h1V8h10V7H11V0h-1v7H0v1z' />
          <path fill='url(#dm-d)' d='M9 7v8h1V7h11V6H10V0H9v6H0v1z' />
          <circle cx='10.5' cy='7.5' r='3.5' fill='url(#dm-e)' />
          <path
            fill='#0e673f'
            fillRule='nonzero'
            d='M10.5 10.5a.5.5 0 1 1 0-1c.274 0 .538-.055.784-.16a.5.5 0 1 1 .392.92c-.369.158-.767.24-1.176.24m2.816-1.965a3 3 0 0 0 .177-1.242.5.5 0 1 0-.998.068 1.983 1.983 0 0 1-.117.83.5.5 0 1 0 .938.344m-.95-3.383a3 3 0 0 0-1.07-.545.5.5 0 0 0-.264.964c.26.072.502.195.712.363a.5.5 0 1 0 .623-.782m-3.422-.217c-.345.21-.645.487-.88.814a.5.5 0 1 0 .811.584c.158-.218.358-.404.588-.544a.5.5 0 0 0-.52-.854M7.564 8.12c.084.397.247.771.479 1.101a.5.5 0 0 0 .818-.574 2 2 0 0 1-.318-.733.5.5 0 1 0-.979.206m2.54 2.354a.5.5 0 1 1 .132-.991q.121.015.245.017a.5.5 0 1 1-.009 1 3 3 0 0 1-.367-.026'
          />
          <path
            fill='#0e673f'
            d='M10.5 8.5c.552 0 .5-.448.5-1s.052-1-.5-1-.5.448-.5 1-.052 1 .5 1'
          />
        </g>
      </g>
    </svg>
  )
}
