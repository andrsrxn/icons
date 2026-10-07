import type { Icon } from './types'

export const IconFileDoc: Icon = ({
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
      data-slot='icon-ui-file-doc'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.87 13V5.73c0-1.87 0-2.8.58-3.38s1.51-.6 3.38-.62l2.18-.02c1.28-.01 1.92-.02 2.4.26a2 2 0 0 1 .7.7c.29.48.29 1.12.29 2.4 0 1.26 0 1.9.28 2.37a2 2 0 0 0 .7.7c.47.28 1.1.28 2.37.28s1.9 0 2.38.28a2 2 0 0 1 .7.7c.28.48.28 1.1.28 2.38V13z'
        fill='currentColor'
      />
      <path
        d='M3.87 12.94V7.77c0-2.82 0-4.24.88-5.12s2.3-.88 5.12-.88h1.82c1.23 0 1.84 0 2.4.23.54.23.98.66 1.84 1.53l1.22 1.2 1.15 1.13c.9.87 1.34 1.3 1.58 1.87.23.56.23 1.18.23 2.43v2.78'
        stroke='currentColor'
      />
      <path
        d='M13.2 2.28v2.4c0 1.9 0 2.83.58 3.42.59.59 1.53.59 3.42.59h2.4'
        stroke='currentColor'
      />
      <path
        d='M2.29 17.68v2.91c0 .85 0 1.27.33 1.56.34.3.69.26 1.4.18 1.41-.17 3.2-.85 3.2-3.2 0-2.34-1.79-3.02-3.2-3.19-.71-.08-1.06-.12-1.4.18s-.33.72-.33 1.56'
        stroke='currentColor'
      />
      <path
        d='M15.25 19.14c0 .88-.3 1.68-.8 2.26-.5.6-1.22.98-2 .98-1.54 0-2.8-1.45-2.8-3.24s1.26-3.24 2.8-3.24 2.8 1.45 2.8 3.24'
        stroke='currentColor'
      />
      <path
        d='M22 16.12q-.63-.35-1.42-.36a3.2 3.2 0 0 0-3.13 3.3c0 1.83 1.4 3.32 3.13 3.32q.79 0 1.42-.36'
        stroke='currentColor'
      />
    </svg>
  )
}
