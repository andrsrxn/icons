import type { Icon } from './types'

export const IconMolecules: Icon = ({
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
      data-slot='icon-ui-molecules'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M13.87 4.4a1.87 1.87 0 1 1-3.74 0 1.87 1.87 0 0 1 3.74 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M5.25 18.86a1.85 1.85 0 1 1-3.7 0 1.85 1.85 0 0 1 3.7 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M22.46 18.85a1.87 1.87 0 1 1-3.74 0 1.87 1.87 0 0 1 3.74 0'
        fill='currentColor'
      />
      <path d='M12 6.27V10' stroke='currentColor' />
      <path d='m15.22 15.98 3.6 2.17' stroke='currentColor' />
      <path d='M8.71 15.98 5.14 18.1' stroke='currentColor' />
      <path
        d='M13.87 4.4A1.86 1.86 0 0 1 12 6.27a1.87 1.87 0 1 1 1.87-1.87'
        stroke='currentColor'
      />
      <path
        d='M15.86 13.87A3.85 3.85 0 0 1 12 17.73a3.86 3.86 0 1 1 3.86-3.86'
        stroke='currentColor'
      />
      <path
        d='M5.25 18.86a1.85 1.85 0 0 1-1.86 1.86 1.85 1.85 0 1 1 1.86-1.86'
        stroke='currentColor'
      />
      <path
        d='M22.46 18.85a1.86 1.86 0 0 1-1.87 1.87 1.87 1.87 0 1 1 1.87-1.87'
        stroke='currentColor'
      />
    </svg>
  )
}
