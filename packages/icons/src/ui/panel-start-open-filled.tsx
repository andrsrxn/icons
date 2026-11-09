import type { Icon } from './types'

export const IconPanelStartOpenFilled: Icon = ({
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
      data-slot='icon-ui-panel-start-open-filled'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m16.8 15.9-1.08-1.07h0c-1.33-1.33-2-2-2-2.83s.67-1.5 2-2.83l1.07-1.07'
        stroke='currentColor'
      />
      <path
        d='M9.35 21.21h-.61c-2.83 0-4.25 0-5.13-.88s-.87-2.3-.87-5.12V8.79c0-2.83 0-4.24.87-5.12.88-.88 2.3-.88 5.13-.88h.61z'
        fill='currentColor'
      />
      <path
        d='M13.26 2.79h-2.53c-3.77 0-5.65 0-6.82 1.17-1.18 1.17-1.18 3.06-1.18 6.83v2.42c0 3.77 0 5.66 1.18 6.83 1.17 1.17 3.05 1.17 6.82 1.17h2.53c3.78 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83v-2.42c0-3.77 0-5.66-1.17-6.83S17.04 2.8 13.26 2.8'
        stroke='currentColor'
      />
      <path d='M9.35 3.18v17.64' stroke='currentColor' />
    </svg>
  )
}
