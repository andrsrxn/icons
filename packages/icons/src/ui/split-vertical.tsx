import type { Icon } from './types'

export const IconSplitVertical: Icon = ({
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
      data-slot='icon-ui-split-vertical'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.59 22.2c-3.3 0-4.95 0-5.98-1.03C4.6 20.15 4.6 18.5 4.6 15.2V8.8c0-3.3 0-4.95 1.02-5.97C6.64 1.8 8.3 1.8 11.6 1.8h.82c3.3 0 4.95 0 5.98 1.03 1 1.02 1 2.67 1 5.97v6.4c0 3.3 0 4.95-1.02 5.97-1.03 1.03-2.68 1.03-5.98 1.03z'
        fill='currentColor'
      />
      <path
        d='M19.41 15.2V8.8c0-3.3 0-4.95-1.02-5.97C17.36 1.8 15.7 1.8 12.4 1.8h-.82c-3.3 0-4.95 0-5.98 1.03-1 1.02-1 2.67-1 5.97v6.4c0 3.3 0 4.95 1.02 5.97C6.64 22.2 8.3 22.2 11.6 22.2h.82c3.3 0 4.95 0 5.98-1.03 1.02-1.02 1.02-2.67 1.02-5.97'
        stroke='currentColor'
      />
      <path d='M2.12 12h19.76' stroke='currentColor' />
    </svg>
  )
}
