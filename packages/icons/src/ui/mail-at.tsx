import type { Icon } from './types'

export const IconMailAt: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-mail-at'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.77 8.69c0-1.93 0-2.89.59-3.15.6-.27 1.3.37 2.74 1.66l5.71 5.12c.65.58.97.87 1.35.86.4 0 .71-.3 1.34-.88l5.39-4.98c1.44-1.33 2.16-2 2.76-1.74s.6 1.24.6 3.2V12c0 3.77 0 5.66-1.17 6.83C19.9 20 18.02 20 14.25 20H9.77C6 20 4.1 20 2.94 18.83S1.77 15.77 1.77 12z'
        fill='currentColor'
      />
      <path
        d='M11.16 20h-1.4c-3.78 0-5.66 0-6.84-1.17S1.75 15.77 1.75 12s0-5.66 1.17-6.83C4.1 4 5.98 4 9.75 4h5.47c2.83 0 4.25 0 5.27.69a4 4 0 0 1 1.07 1.07c.69 1.02.69 2.43.69 5.27'
        stroke='currentColor'
      />
      <path
        d='m3.34 5.1 4.47 4.5c2 2.02 3 3.03 4.26 3.03 1.24 0 2.25-1 4.25-3.02l4.49-4.5'
        stroke='currentColor'
      />
      <circle cx='18.37' cy='17.73' r='1.47' stroke='currentColor' />
      <path
        d='M18.37 21.66a4.04 4.04 0 1 1 4.05-4.04c0 .98-.38 2.27-.94 2.59s-1.58.35-1.58-.85V16.6'
        stroke='currentColor'
      />
    </svg>
  )
}
