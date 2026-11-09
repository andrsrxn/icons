import type { Icon } from './types'

export const IconBookUser: Icon = ({
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
      data-slot='icon-ui-book-user'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M20.97 9.75c0-3.78 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-1.94c-3.77 0-5.66 0-6.83 1.17S3.03 5.97 3.03 9.75v4.74c0 1.88 0 2.83.58 3.41.59.59 1.53.59 3.42.59h5.94c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83zM8.12 14.82a3.88 3.88 0 1 1 7.76 0zM12 10.94a2.76 2.76 0 1 1 0-5.52 2.76 2.76 0 0 1 0 5.52'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M3.03 18.49h9.94c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83v-.74c0-3.78 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-1.94c-3.77 0-5.66 0-6.83 1.17S3.03 5.97 3.03 9.75z'
        stroke='currentColor'
      />
      <path
        d='M3.03 18.49c0 .71 0 1.07.06 1.36a3 3 0 0 0 2.34 2.34c.3.06.65.06 1.36.06H15c1.32 0 1.98 0 2.5-.2a3 3 0 0 0 1.71-1.71c.2-.52.2-1.18.2-2.5'
        stroke='currentColor'
      />
      <path d='M14.76 8.18a2.76 2.76 0 1 0-5.52 0 2.76 2.76 0 0 0 5.52 0' stroke='currentColor' />
      <path d='M8.12 14.82a3.88 3.88 0 1 1 7.76 0' stroke='currentColor' />
    </svg>
  )
}
