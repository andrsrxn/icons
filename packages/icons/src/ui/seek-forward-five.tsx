import type { Icon } from './types'

export const IconSeekForwardFive: Icon = ({
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
      data-slot='icon-ui-seek-forward-five'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.69 12a9.57 9.57 0 1 0 19.14 0A9.57 9.57 0 0 0 2.7 12'
        fill='currentColor'
      />
      <path d='M20.3 6.18a11 11 0 0 0-9.49-3.63 9.51 9.51 0 1 0 9.1 15.07' stroke='currentColor' />
      <path
        d='M17.14 7.26h1.1c1.42 0 2.13 0 2.57-.44s.44-1.14.44-2.56V3.15'
        stroke='currentColor'
      />
      <path
        d='M10.06 16.48h1.9a2.1 2.1 0 0 0 0-4.22H9.8q0 0 0 0v-1.82c0-.77 0-1.16.2-1.42a1 1 0 0 1 .2-.2c.26-.2.65-.2 1.42-.2h2.02'
        stroke='currentColor'
      />
    </svg>
  )
}
