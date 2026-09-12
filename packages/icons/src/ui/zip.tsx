import type { Icon } from './types'

export const IconZip: Icon = ({
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
      data-slot='icon-ui-zip'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.75 1.73c-1.87.02-2.8.03-3.38.62-.58.58-.58 1.52-.58 3.38v12.5c0 1.89 0 2.83.59 3.42.58.58 1.53.58 3.41.58h8.42c1.88 0 2.83 0 3.41-.58.59-.59.59-1.53.59-3.42V11.9c0-1.3 0-1.96-.3-2.44a2 2 0 0 0-.66-.66c-.48-.3-1.13-.3-2.44-.3-1.3 0-1.95 0-2.43-.29a2 2 0 0 1-.67-.67c-.29-.47-.29-1.13-.29-2.43s0-1.97-.3-2.45a2 2 0 0 0-.67-.67c-.48-.29-1.14-.28-2.45-.27zm-.25 13.5a1.36 1.36 0 1 1 2.37 1.33 1.36 1.36 0 0 1-2.37-1.34'
        fill='currentColor'
      />
      <path
        d='M9.8 22.23c-2.84 0-4.25 0-5.13-.88-.88-.87-.88-2.29-.88-5.12V7.78c0-2.83 0-4.25.88-5.13s2.3-.87 5.12-.87h1.94c1.22 0 1.83 0 2.38.22.55.23.99.66 1.85 1.53l1.25 1.24 1.19 1.16c.89.87 1.34 1.3 1.57 1.86.24.56.24 1.19.24 2.43v6.01c0 2.83 0 4.25-.88 5.12s-2.3.88-5.12.88z'
        stroke='currentColor'
      />
      <path
        d='M13.22 2.3v2.46c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h2.48'
        stroke='currentColor'
      />
      <path d='M8.7 2.3v11.36' stroke='currentColor' />
      <path d='M7.25 6.12h2.9' stroke='currentColor' />
      <path d='M7.25 10.3h2.9' stroke='currentColor' />
      <path
        d='M8.7 17.82c-.87 0-1.57-.7-1.57-1.57 0-1.47 1.57-2.6 1.57-2.6s1.58 1.16 1.58 2.6c0 .87-.7 1.57-1.58 1.57'
        stroke='currentColor'
      />
    </svg>
  )
}
