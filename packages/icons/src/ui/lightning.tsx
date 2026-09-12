import type { Icon } from './types'

export const IconLightning: Icon = ({
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
      data-slot='icon-ui-lightning'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m6.27 10.9 3.93-5.3c2.09-2.8 3.13-4.2 3.86-3.88s.4 2.04-.3 5.47l-.04.22c-.22 1.1-.33 1.66-.03 2.02s.86.37 2 .37h.63c1.73 0 2.59 0 2.87.55s-.24 1.24-1.26 2.64l-4 5.43c-2.1 2.86-3.16 4.28-3.89 3.96s-.38-2.06.32-5.54l.07-.36c.22-1.1.33-1.66.03-2.03s-.86-.36-2-.36h-.59c-1.74 0-2.6 0-2.88-.55s.24-1.25 1.28-2.65'
        fill='currentColor'
      />
      <path
        d='m6.27 10.9 3.93-5.3c2.09-2.8 3.13-4.2 3.86-3.88s.4 2.04-.3 5.47l-.04.22c-.22 1.1-.33 1.66-.03 2.02s.86.37 2 .37h.63c1.73 0 2.59 0 2.87.55s-.24 1.24-1.26 2.64l-4 5.43c-2.1 2.86-3.16 4.28-3.89 3.96s-.38-2.06.32-5.54l.07-.36c.22-1.1.33-1.66.03-2.03s-.86-.36-2-.36h-.59c-1.74 0-2.6 0-2.88-.55s.24-1.25 1.28-2.65'
        stroke='currentColor'
      />
    </svg>
  )
}
