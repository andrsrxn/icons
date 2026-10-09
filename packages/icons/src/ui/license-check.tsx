import type { Icon } from './types'

export const IconLicenseCheck: Icon = ({
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
      data-slot='icon-ui-license-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.8 22.28c-1.9 0-2.83 0-3.42-.59s-.59-1.53-.59-3.41V5.78c0-1.87 0-2.8.58-3.38s1.51-.6 3.38-.62l5.67-.06 2.83.24c1.58.14 2.36.2 2.88.7.51.51.6 1.3.76 2.87l.32 3.01v7.74c0 2.82 0 4.24-.88 5.12s-2.3.88-5.12.88z'
        fill='currentColor'
      />
      <path
        d='M11.82 22.28H9.8c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V7.82c0-2.82 0-4.24.88-5.12s2.3-.88 5.12-.88h4.42c2.82 0 4.24 0 5.12.88s.88 2.3.88 5.12v5.5'
        stroke='currentColor'
      />
      <path d='M12.98 12.05H7.66' stroke='currentColor' />
      <path d='M12.98 16.6H7.66' stroke='currentColor' />
      <path d='M16.34 7.56H7.66' stroke='currentColor' />
      <path
        d='m15.67 20.22.51.65c.73.9 1.09 1.36 1.57 1.36.49 0 .85-.46 1.57-1.37l2.84-3.6'
        stroke='currentColor'
      />
    </svg>
  )
}
