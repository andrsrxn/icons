import type { Icon } from './types'

export const IconMoonOff: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-moon-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M12.44 21.6a9.96 9.96 0 0 1-9.96-9.95c0-5.5 3.57-8.3 6.12-8.93 0 0-1.56 5.29 2.43 10.2 4.79 4.8 10.48.75 10.7 1.68.22.94-3.8 7-9.3 7'
        fill='currentColor'
      />
      <path
        d='M12.44 21.6A9.96 9.96 0 0 1 7.46 3.02c.9-.52 1.36-.78 1.63-.57.26.2.09.8-.27 1.97a8.2 8.2 0 0 0 2.13 8.6c2.97 2.97 6.82 2.39 9.15 1.62 1-.33 1.5-.5 1.72-.25s.02.67-.38 1.5a10 10 0 0 1-9 5.71'
        stroke='currentColor'
      />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
