import type { Icon } from './types'

export const IconPanelStartFilled: Icon = ({
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
      data-slot='icon-ui-panel-start-filled'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M9.35 21.28h-.61c-2.83 0-4.25 0-5.13-.88s-.87-2.3-.87-5.12V8.72c0-2.83 0-4.24.87-5.12.88-.88 2.3-.88 5.13-.88h.61z'
        fill='currentColor'
      />
      <path
        d='M13.27 2.72h-2.53c-3.78 0-5.66 0-6.83 1.17s-1.17 3.06-1.17 6.83v2.56c0 3.77 0 5.66 1.17 6.83s3.05 1.17 6.82 1.17h2.54c3.77 0 5.65 0 6.82-1.17 1.18-1.17 1.18-3.06 1.18-6.83v-2.56c0-3.77 0-5.66-1.18-6.83-1.17-1.17-3.05-1.17-6.82-1.17'
        stroke='currentColor'
      />
      <path d='M9.35 3.12v17.76' stroke='currentColor' />
    </svg>
  )
}
