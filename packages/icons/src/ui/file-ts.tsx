import type { Icon } from './types'

export const IconFileTs: Icon = ({
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
      data-slot='icon-ui-file-ts'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.9 13V5.77c0-1.87 0-2.8.59-3.39.57-.58 1.5-.59 3.38-.6l2.15-.03c1.27-.01 1.9-.02 2.38.25a2 2 0 0 1 .73.72c.27.47.27 1.1.27 2.37 0 1.26 0 1.89.27 2.35a2 2 0 0 0 .72.72c.47.28 1.1.28 2.36.28s1.88 0 2.35.27a2 2 0 0 1 .72.72c.27.47.27 1.1.27 2.35V13z'
        fill='currentColor'
      />
      <path
        d='M3.9 12.94V7.8c0-2.83 0-4.24.89-5.12.87-.88 2.29-.88 5.12-.88h1.78c1.23 0 1.84 0 2.4.23.54.23.98.66 1.84 1.53l1.2 1.2 1.15 1.1c.9.88 1.34 1.32 1.58 1.88s.23 1.18.23 2.43v2.76'
        stroke='currentColor'
      />
      <path
        d='M13.2 2.32V4.7c0 1.89 0 2.83.59 3.42.58.58 1.53.58 3.41.58h2.39'
        stroke='currentColor'
      />
      <path d='M8.38 16v6.23' stroke='currentColor' />
      <path d='M6 16h4.75' stroke='currentColor' />
      <path
        d='M17.98 16.85a3.5 3.5 0 0 0-2.24-.85c-1.06 0-2.23.54-2.23 1.68 0 2.45 4.47.5 4.47 2.98 0 1.17-1.15 1.8-2.24 1.8s-1.82-.32-2.33-1'
        stroke='currentColor'
      />
    </svg>
  )
}
