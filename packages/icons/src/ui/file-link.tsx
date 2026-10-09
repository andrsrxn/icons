import type { Icon } from './types'

export const IconFileLink: Icon = ({
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
      data-slot='icon-ui-file-link'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.7 22.25c-1.89 0-2.83 0-3.41-.58-.59-.59-.59-1.53-.59-3.42V5.78c0-1.87 0-2.8.58-3.38s1.51-.6 3.38-.62l2.23-.02c1.31-.01 1.97-.02 2.45.27a2 2 0 0 1 .68.67c.3.48.3 1.14.3 2.45 0 1.3 0 1.94.29 2.42q.25.42.67.67c.48.3 1.13.3 2.43.3s1.96 0 2.44.29a2 2 0 0 1 .66.65c.3.48.3 1.13.3 2.43l.02 2.98h-7.22l-1.83 2.32 1.57 2.78h7.44a2.26 2.26 0 0 1-2.26 2.26z'
        fill='currentColor'
      />
      <path
        d='M20.1 11v-.74c0-1.24 0-1.87-.24-2.43s-.69-1-1.58-1.86L17.1 4.82l-1.24-1.24c-.87-.87-1.3-1.3-1.85-1.53s-1.17-.23-2.4-.23H9.7c-2.83 0-4.24 0-5.12.88S3.7 5 3.7 7.82v8.43c0 2.83 0 4.25.88 5.12s2.3.88 5.12.88h.43'
        stroke='currentColor'
      />
      <path d='M13.12 2.34V4.8c0 1.89 0 2.83.58 3.42s1.53.58 3.41.58h2.47' stroke='currentColor' />
      <path d='M14.95 17.48h4' stroke='currentColor' />
      <path d='M15.25 14.84h-1.32a2.64 2.64 0 1 0 0 5.27h1.28' stroke='currentColor' />
      <path d='M18.61 14.84h.99a2.64 2.64 0 1 1 0 5.27h-.99' stroke='currentColor' />
    </svg>
  )
}
