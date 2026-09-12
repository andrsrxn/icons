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
        d='M2.42 17.68v2.83c0 .84 0 1.26.33 1.56.34.3.7.25 1.4.17 1.4-.17 3.13-.84 3.13-3.15 0-2.3-1.74-2.98-3.14-3.15-.7-.08-1.05-.12-1.39.18s-.33.71-.33 1.56'
        stroke='currentColor'
      />
      <path
        d='M15.2 19.1c0 .86-.3 1.65-.78 2.23-.5.6-1.2.96-1.97.96-1.52 0-2.76-1.43-2.76-3.2 0-1.76 1.24-3.2 2.76-3.2s2.75 1.44 2.75 3.2'
        stroke='currentColor'
      />
      <path
        d='M21.78 16.23q-.61-.33-1.34-.34a3.05 3.05 0 0 0-2.96 3.13 3.05 3.05 0 0 0 2.96 3.13q.73 0 1.34-.34'
        stroke='currentColor'
      />
    </svg>
  )
}
