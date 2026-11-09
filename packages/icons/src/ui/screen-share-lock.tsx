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
        d='M15.15 4.88c2.92 0 4.38 0 5.41.73q.57.4.98.97c.73 1.04.73 2.5.73 5.42s0 4.38-.73 5.42a4 4 0 0 1-.98.97c-1.03.73-2.49.73-5.41.73h-6.3c-2.92 0-4.38 0-5.42-.73a4 4 0 0 1-.97-.97c-.73-1.04-.73-2.5-.73-5.42s0-4.38.73-5.42a4 4 0 0 1 .97-.97c1.04-.73 2.5-.73 5.42-.73zm.12 6.3v4.75H8.75v-4.75z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M1.73 12c0-2.92 0-4.38.73-5.42a4 4 0 0 1 .97-.97c1.04-.73 2.5-.73 5.42-.73h6.3c2.92 0 4.38 0 5.41.73q.57.4.98.97c.73 1.04.73 2.5.73 5.42v0c0 2.92 0 4.38-.73 5.42a4 4 0 0 1-.98.97c-1.03.73-2.49.73-5.41.73h-6.3c-2.92 0-4.38 0-5.42-.73a4 4 0 0 1-.97-.97c-.73-1.04-.73-2.5-.73-5.42'
        stroke='currentColor'
      />
    </svg>
  )
}
