import type { Icon } from './types'

export const IconScreenShareLock: Icon = ({
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
      data-slot='icon-ui-screen-share-lock'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M10.63 15.98h2.74c.95 0 1.42 0 1.71-.3.3-.28.3-.75.3-1.7v-1.03c0-.94 0-1.41-.3-1.7s-.76-.3-1.7-.3h-2.75c-.95 0-1.42 0-1.71.3-.3.29-.3.76-.3 1.7v1.03c0 .95 0 1.42.3 1.7.3.3.76.3 1.7.3'
        stroke='currentColor'
      />
      <path d='m10.14 10.95.18-1.43a1.72 1.72 0 0 1 3.41.02l.17 1.41' stroke='currentColor' />
      <path
        opacity='.2'
        d='M16.27 4.88c2.82 0 4.24 0 5.12.88s.88 2.3.88 5.12v2.24c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H7.73c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-2.24c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88zm-3.38 6.3a2.37 2.37 0 0 1 0 4.75h-1.77a2.37 2.37 0 1 1 0-4.75z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M1.73 13.12v-2.24c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h8.54c2.82 0 4.24 0 5.12.88s.88 2.3.88 5.12v2.24c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H7.73c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12'
        stroke='currentColor'
      />
    </svg>
  )
}
