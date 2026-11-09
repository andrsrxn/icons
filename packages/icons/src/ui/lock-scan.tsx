import type { Icon } from './types'

export const IconLockScan: Icon = ({
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
      data-slot='icon-ui-lock-scan'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M10.4 17.42h3.2c1.4 0 2.11 0 2.55-.44s.44-1.14.44-2.56v-.85c0-1.41 0-2.12-.44-2.56s-1.14-.44-2.56-.44h-3.18c-1.42 0-2.12 0-2.56.44s-.44 1.15-.44 2.56v.85c0 1.42 0 2.12.44 2.56s1.14.44 2.56.44'
        stroke='currentColor'
      />
      <path d='m9.47 10.57.24-1.95a2.34 2.34 0 0 1 4.65.02l.23 1.93' stroke='currentColor' />
      <path
        d='M15.93 21.32c1.79 0 2.68 0 3.38-.31a3.5 3.5 0 0 0 1.72-1.73c.32-.7.32-1.59.32-3.38'
        stroke='currentColor'
      />
      <path
        d='M15.97 2.71c1.75 0 2.63 0 3.31.3a3.5 3.5 0 0 1 1.76 1.77c.31.68.31 1.56.31 3.32'
        stroke='currentColor'
      />
      <path
        d='M8.07 21.32c-1.79 0-2.68 0-3.38-.31a3.5 3.5 0 0 1-1.72-1.73c-.32-.7-.32-1.59-.32-3.38'
        stroke='currentColor'
      />
      <path
        d='M8.07 2.71c-1.79 0-2.68 0-3.38.32a3.5 3.5 0 0 0-1.72 1.72c-.32.7-.32 1.6-.32 3.38'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M14.26 2.71c3.3 0 4.95 0 5.98 1.03 1.02 1.02 1.02 2.67 1.02 5.97v4.58c0 3.3 0 4.95-1.02 5.97-1.03 1.03-2.68 1.03-5.98 1.03H9.7c-3.3 0-4.95 0-5.97-1.03-1.03-1.02-1.03-2.67-1.03-5.97V9.7c0-3.3 0-4.95 1.03-5.97C4.74 2.7 6.39 2.7 9.69 2.7zm.07 8.03c.94 0 1.4 0 1.7.29.29.29.3.75.3 1.69l.03 2.33c0 .96.01 1.43-.28 1.73s-.77.3-1.72.3H9.62c-.93 0-1.4 0-1.69-.3-.29-.28-.3-.75-.3-1.68l-.03-2.34c-.01-.95-.02-1.43.28-1.72.29-.3.77-.3 1.72-.3z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
