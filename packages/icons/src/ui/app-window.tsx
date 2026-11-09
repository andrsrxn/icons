import type { Icon } from './types'

export const IconAppWindow: Icon = ({
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
      data-slot='icon-ui-app-window'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.78 12c0-3.26 0-4.88.9-5.98a4 4 0 0 1 .59-.6c1.1-.89 2.73-.89 5.98-.89h5.5c3.25 0 4.88 0 5.98.9a4 4 0 0 1 .6.59c.89 1.1.89 2.72.89 5.98s0 4.88-.9 5.98a4 4 0 0 1-.59.6c-1.1.89-2.73.89-5.98.89h-5.5c-3.25 0-4.88 0-5.98-.9a4 4 0 0 1-.6-.59c-.89-1.1-.89-2.72-.89-5.98'
        fill='currentColor'
      />
      <path
        d='M9.25 19.47h5.5c3.25 0 4.88 0 5.98-.9a4 4 0 0 0 .6-.59c.89-1.1.89-2.72.89-5.98v0c0-3.26 0-4.88-.9-5.98a4 4 0 0 0-.59-.6c-1.1-.89-2.73-.89-5.98-.89h-5.5c-3.25 0-4.88 0-5.98.9a4 4 0 0 0-.6.59c-.89 1.1-.89 2.72-.89 5.98v0c0 3.26 0 4.88.9 5.98a4 4 0 0 0 .59.6c1.1.89 2.73.89 5.98.89'
        stroke='currentColor'
      />
      <path
        d='M6.64 8.78a.54.54 0 1 1-1.07 0 .54.54 0 0 1 1.07 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M10.72 8.78a.54.54 0 1 1-1.08 0 .54.54 0 0 1 1.08 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.8 8.78a.54.54 0 1 1-1.08 0 .54.54 0 0 1 1.07 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
