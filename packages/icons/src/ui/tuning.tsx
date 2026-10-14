import type { Icon } from './types'

export const IconTuning: Icon = ({
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
      data-slot='icon-ui-tuning'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='12' cy='13.19' r='6.57' fill='currentColor' />
      <circle cx='12' cy='13.19' r='6.57' stroke='currentColor' />
      <path
        d='M12.44 3.32a.44.44 0 1 1-.88 0 .44.44 0 0 1 .88 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M20.33 6.14a.44.44 0 1 1-.89 0 .44.44 0 0 1 .9 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M20.33 20.68a.44.44 0 1 1-.89 0 .44.44 0 0 1 .9 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M22.42 13.2a.44.44 0 1 1-.88 0 .44.44 0 0 1 .88 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M4.56 6.14a.44.44 0 1 1-.9 0 .44.44 0 0 1 .9 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M4.56 20.68a.44.44 0 1 1-.9 0 .44.44 0 0 1 .9 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M2.46 13.2a.44.44 0 1 1-.88 0 .44.44 0 0 1 .88 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='m12 13.2 4.45-4.46' stroke='currentColor' />
    </svg>
  )
}
