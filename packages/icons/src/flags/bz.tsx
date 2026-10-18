import type { FlagIcon } from './types'

export const IconFlagBZ: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'BZ',
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
      data-slot='icon-flag-bz'
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
            id='bz-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='bz-c'
            x1='10.5'
            x2='10.5'
            y1='2'
            y2='13'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#094995' />
            <stop offset='1' stopColor='#074185' />
          </linearGradient>
          <linearGradient
            id='bz-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='2'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#d5182f' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <linearGradient
            id='bz-e'
            x1='10.5'
            x2='10.5'
            y1='13'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#d5182f' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <linearGradient
            id='bz-f'
            x1='10.5'
            x2='10.5'
            y1='3'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='bz-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='bz-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#bz-clip)'>
        <g clipPath='url(#bz-a)'>
          <path fill='url(#bz-b)' d='M21 0H0v15h21z' />
          <path fill='url(#bz-c)' d='M21 2H0v11h21z' />
          <path fill='url(#bz-d)' d='M21 0H0v2h21z' />
          <path fill='url(#bz-e)' d='M21 13H0v2h21z' />
          <path fill='url(#bz-f)' d='M10.5 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9' />
          <path
            fill='#118014'
            d='M10.5 11a.5.5 0 0 1 0-1q.42 0 .82-.14a.5.5 0 0 1 .33.95q-.55.19-1.15.19m2.65-1.21q.39-.46.6-1a.5.5 0 1 0-.92-.37q-.15.4-.44.71a.5.5 0 1 0 .76.66m.82-2.76q-.08-.6-.35-1.12a.5.5 0 0 0-.9.46q.2.37.26.79a.5.5 0 1 0 .99-.13m-1.61-2.5q-.5-.31-1.08-.44a.5.5 0 0 0-.22.97q.4.1.77.32a.5.5 0 1 0 .53-.85m-2.8-.4q-.58.15-1.06.5a.5.5 0 1 0 .57.82q.35-.24.76-.36a.5.5 0 1 0-.27-.96M7.35 5.97q-.26.53-.33 1.12a.5.5 0 1 0 1 .12q.04-.42.23-.8a.5.5 0 0 0-.9-.44M7.29 8.9q.24.54.64.97a.5.5 0 1 0 .73-.67 3 3 0 0 1-.45-.7.5.5 0 1 0-.92.4m2.15 1.94a.5.5 0 0 1 .3-.96q.35.12.71.12a.5.5 0 0 1-.01 1 4 4 0 0 1-1-.16'
          />
        </g>
      </g>
    </svg>
  )
}
