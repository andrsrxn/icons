import type { FlagIcon } from './types'

export const IconFlagCY: FlagIcon = ({
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
  const titleText = title ?? 'CY'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-cy'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='cy-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='cy-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e7832c' />
          <stop offset='100%' stopColor='#d7751f' />
        </linearGradient>
        <clipPath id='cy-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cy-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#cy-a)' d='M0 0h21v15H0z' />
          <path
            fill='url(#cy-b)'
            d='M15.547 2.227c.25-.126.33-.043.18.183l-.454.68c-.15.226-.457.533-.683.683l-.68.454c-.226.15-.568.431-.763.626l.206-.206a.496.496 0 0 0-.003.703l.3.3a.494.494 0 0 1 0 .7l-.3.3a.73.73 0 0 1-.803.123l-.094-.046a.5.5 0 0 0-.68.226l-.046.094c-.126.25-.436.523-.702.611l-.55.184A3.7 3.7 0 0 1 9.5 8a.88.88 0 0 0-.727.453l-.046.094a.5.5 0 0 1-.67.231l-1.113-.556a3.7 3.7 0 0 1-.794-.572l-.3-.3c-.193-.193-.35-.582-.35-.85 0-.276.227-.5.5-.5h-.5c.276 0 .656-.156.85-.35l.3-.3c.193-.193.582-.35.85-.35.276 0 .57-.209.658-.475l.184-.55a.574.574 0 0 1 .64-.379l1.536.308c.266.053.696.042.966-.025l1.032-.258a5.4 5.4 0 0 0 .937-.348l.094-.046.906-.454.094-.046.906-.454z'
          />
          <circle cx='10.5' cy='11.5' r='1' fill='#445128' />
          <path
            fill='#445128'
            fillRule='nonzero'
            d='M12.158 11.474a.5.5 0 1 1-.316-.948 4.528 4.528 0 0 0 .96-.482c.354-.236.615-.497.75-.768a.5.5 0 1 1 .895.448c-.224.449-.603.828-1.09 1.152a5.5 5.5 0 0 1-1.199.598m-3-.948a.5.5 0 1 1-.316.948 5.512 5.512 0 0 1-1.2-.598c-.486-.324-.865-.703-1.09-1.152a.5.5 0 0 1 .895-.448c.136.271.397.532.75.768a4.5 4.5 0 0 0 .961.482'
            opacity='.75'
          />
        </g>
      </g>
    </svg>
  )
}
