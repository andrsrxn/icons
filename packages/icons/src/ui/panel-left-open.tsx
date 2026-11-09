import type { Icon } from './types'

export const IconPanelLeftOpen: Icon = ({
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
      data-slot='icon-ui-panel-left-open'
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
        opacity='.2'
        d='M9.35 21.21c-2.44 0-3.67 0-4.58-.52a4 4 0 0 1-1.52-1.51c-.51-.92-.51-2.14-.51-4.58V9.4c0-2.44 0-3.66.51-4.58a4 4 0 0 1 1.52-1.51c.91-.52 2.14-.52 4.58-.52z'
        fill='currentColor'
      />
      <path
        d='M13.27 2.79h-2.53c-3.78 0-5.66 0-6.83 1.17S2.74 7.02 2.74 10.8v2.42c0 3.77 0 5.66 1.17 6.83s3.05 1.17 6.82 1.17h2.54c3.77 0 5.65 0 6.82-1.17 1.18-1.17 1.18-3.06 1.18-6.83V10.8c0-3.77 0-5.66-1.18-6.83-1.17-1.17-3.05-1.17-6.82-1.17'
        stroke='currentColor'
      />
      <path d='M9.35 2.79v18.42' stroke='currentColor' />
    </svg>
  )
}
