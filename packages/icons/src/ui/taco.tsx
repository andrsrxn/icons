import type { Icon } from './types'

export const IconTaco: Icon = ({
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
      data-slot='icon-ui-taco'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M6.87 15.2a.43.43 0 1 1-.87 0 .43.43 0 0 1 .87 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M9.3 12.15a.43.43 0 1 1-.86 0 .43.43 0 0 1 .87 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M11.61 14.9a.43.43 0 1 1-.86 0 .43.43 0 0 1 .86 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M20.15 18.15c-5.44.01-13.12.03-16.64.01-1.07 0-1.82-.84-1.55-1.87.74-2.86 3.03-8.03 9.88-8.03 6.56 0 9.1 4.8 10.03 7.71.37 1.14-.53 2.18-1.72 2.18'
        stroke='currentColor'
      />
      <path
        d='m3.12 13.08-.63-2.6A2 2 0 0 1 3.8 8.1l1.08-.36a2 2 0 0 0 .88-.58l.92-1.06a2 2 0 0 1 2.03-.62l1.65.44a2 2 0 0 0 1.26-.07l1.21-.49a2 2 0 0 1 1.77.15l1.32.79a2 2 0 0 0 1.14.28l.78-.05a2 2 0 0 1 1.98 1.3l.07.2q.24.62.82.97a1.9 1.9 0 0 1 .86 2.18l-.7 2.35'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.4 12.87c.54-4.38-1.75-6.91-9.57-7.2C5.6 5.44 2.14 8.63 2.5 10.7l.8 1.58 4.61-3.66h7.85l4.05 3.24s1.58 1.77 1.58 1'
        fill='currentColor'
      />
    </svg>
  )
}
