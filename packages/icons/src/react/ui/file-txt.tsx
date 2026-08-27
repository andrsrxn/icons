import type { Icon } from './types'

export const IconFileTxt: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-file-txt'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M4.53 13.02V6.65c0-1.86 0-2.8.58-3.38s1.51-.6 3.38-.62l1.69-.01c1.02-.01 1.53-.02 1.93.16a2 2 0 0 1 1 1c.18.39.18.9.18 1.92 0 1.01 0 1.52.18 1.91a2 2 0 0 0 1 1c.4.18.9.18 1.91.18s1.52 0 1.91.18a2 2 0 0 1 1 .99c.18.4.18.9.18 1.91v1.13z'
        fill='currentColor'
      />
      <path
        d='M4.53 12.96V8.7c0-2.83 0-4.25.88-5.13s2.3-.87 5.12-.87h1c1.22 0 1.83 0 2.38.22.55.23.99.66 1.86 1.53l.97.97.91.9c.9.86 1.34 1.3 1.58 1.86s.24 1.18.24 2.43v2.35'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M13.11 3.16v1.89c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58H19m-9 12.37 4-5.77m0 5.77-4-5.77m-4.73.03v5.88m13.46-5.88v5.88M3.1 15.68h4.34m9.12 0h4.33'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
