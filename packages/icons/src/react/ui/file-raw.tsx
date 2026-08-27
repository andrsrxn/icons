import type { Icon } from './types'

export const IconFileRaw: Icon = ({
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
      data-slot='ui-icon-file-raw'
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
        d='M13.11 3.16v1.89c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58H19M4.34 19.06l2.37 2.4m3.22-1.68h2.83M3 15.59v5.88m8.34-5.88L9 21.47m2.37-5.88 2.34 5.88M3.02 15.59h2.1c.88 0 1.6.75 1.6 1.68s-.72 1.68-1.6 1.68h-2.1m13.14 2.48v-5.84m.08 5.88 2.42-2.94M21 21.47l-2.34-2.96M21 21.43v-5.84'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
