import type { Icon } from './types'

export const IconStrokeStyle: Icon = ({
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
      data-slot='icon-ui-stroke-style'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.33 5.65H2.67' stroke='currentColor' />
      <path d='M18.82 11.57h2.5' stroke='currentColor' />
      <path d='M13.45 11.57h2.49' stroke='currentColor' />
      <path d='M8.02 11.57h2.5' stroke='currentColor' />
      <path d='M2.67 11.57h2.5' stroke='currentColor' />
      <path
        d='M3.55 17.9a.44.44 0 1 1-.88 0 .44.44 0 0 1 .88 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M8 17.9a.44.44 0 1 1-.88 0 .44.44 0 0 1 .87 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.43 17.9a.44.44 0 1 1-.87 0 .44.44 0 0 1 .87 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16.87 17.9a.44.44 0 1 1-.87 0 .44.44 0 0 1 .87 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M21.31 17.9a.44.44 0 1 1-.87 0 .44.44 0 0 1 .87 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
