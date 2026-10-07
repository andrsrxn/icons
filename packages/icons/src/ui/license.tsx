import type { Icon } from './types'

export const IconLicense: Icon = ({
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
      data-slot='icon-ui-license'
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
        d='M3.8 7.82v8.46c0 2.82 0 4.24.87 5.12.88.88 2.3.88 5.12.88h4.42c2.82 0 4.24 0 5.12-.88s.88-2.3.88-5.12V7.82c0-2.82 0-4.24-.88-5.12s-2.3-.88-5.12-.88H9.79c-2.82 0-4.24 0-5.12.88S3.8 5 3.8 7.82'
        stroke='currentColor'
      />
      <path
        d='M13.1 12.79a.75.75 0 0 0 0-1.5zm-5.31-1.5a.75.75 0 0 0 0 1.5zm5.32.75v-.75H7.79v1.5h5.32z'
        fill='currentColor'
      />
      <path
        d='M13.1 17.33a.75.75 0 1 0 0-1.5zm-5.31-1.5a.75.75 0 0 0 0 1.5zm5.32.75v-.75H7.79v1.5h5.32z'
        fill='currentColor'
      />
      <path d='M16.46 7.5H7.8' stroke='currentColor' />
    </svg>
  )
}
