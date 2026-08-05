import type { FlagIcon } from './types'

export const IconFlagHK: FlagIcon = ({
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
  const titleText = title ?? 'HK'

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
        <linearGradient id='hk-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='hk-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f0371d' />
          <stop offset='100%' stopColor='#de290f' />
        </linearGradient>
        <clipPath id='hk-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#hk-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#hk-a)' d='M0 0h21v15H0z' />
          <path fill='url(#hk-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#hk-a)'
            d='M12 7.19c-.798-.5-1 .409-1 0 0-.828.895-1.5 2-1.5s2 .672 2 1.5c-.949 0-1.044.5-1.5.5-.56 0-.702 0-1.5-.5M13.25 7a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5m-1.81 1.962c.228-.913-.698-.824-.31-.95.788-.257 1.703.387 2.045 1.438s-.021 2.11-.809 2.366c-.293-.903-.798-.838-.939-1.272-.173-.533-.217-.668.012-1.582m.566 1.13a.25.25 0 1 0 .476-.154.25.25 0 0 0-.476.154M9.58 8.977c.94-.065.57-.919.81-.588.486.67.157 1.74-.737 2.389-.894.65-2.013.632-2.5-.038.768-.558.55-1.018.92-1.286.453-.33.568-.413 1.507-.477m-.899.888a.25.25 0 1 0 .294.405.25.25 0 0 0-.294-.405m.312-2.652c.351.874 1.049.258.809.588-.487.67-1.606.687-2.5.038-.894-.65-1.223-1.719-.736-2.39.767.559 1.138.21 1.507.478.453.33.568.413.92 1.286m-1.124-.58a.25.25 0 1 0-.293.404.25.25 0 0 0 .293-.404m2.619-.524c-.722.605.08 1.078-.309.951-.788-.256-1.15-1.315-.809-2.365.342-1.05 1.257-1.695 2.045-1.439-.293.903.153 1.147.012 1.581-.173.533-.217.668-.939 1.272m.205-1.247a.25.25 0 1 0-.475-.155.25.25 0 0 0 .475.155'
          />
        </g>
      </g>
    </svg>
  )
}
