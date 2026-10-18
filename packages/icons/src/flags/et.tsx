import type { FlagIcon } from './types'

export const IconFlagET: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'ET',
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
      data-slot='icon-flag-et'
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
            id='et-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='et-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#20aa46' />
            <stop offset='1' stopColor='#168835' />
          </linearGradient>
          <linearGradient
            id='et-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e92f3b' />
            <stop offset='1' stopColor='#d81824' />
          </linearGradient>
          <linearGradient
            id='et-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fadf50' />
            <stop offset='1' stopColor='#fcdc34' />
          </linearGradient>
          <linearGradient
            id='et-f'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#205cca' />
            <stop offset='1' stopColor='#154bad' />
          </linearGradient>
          <linearGradient
            id='et-g'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='9.52'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffdb3d' />
            <stop offset='1' stopColor='#fdd420' />
          </linearGradient>
          <clipPath id='et-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='et-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#et-clip)'>
        <g clipPath='url(#et-a)'>
          <path fill='url(#et-b)' d='M21 0H0v15h21z' />
          <path fill='url(#et-c)' d='M21 0H0v5h21z' />
          <path fill='url(#et-d)' d='M21 10H0v5h21z' />
          <path fill='url(#et-e)' d='M21 5H0v5h21z' />
          <path fill='url(#et-f)' d='M10.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7' />
          <path
            fill='url(#et-g)'
            d='M10.5 8.48 9.03 9.52l.54-1.72-1.45-1.07 1.8-.02L10.5 5l.57 1.71 1.8.02-1.44 1.07.54 1.72zm0-.62.54.39-.2-.64.54-.4h-.67l-.21-.64-.21.64h-.67l.54.4-.2.64z'
          />
        </g>
      </g>
    </svg>
  )
}
