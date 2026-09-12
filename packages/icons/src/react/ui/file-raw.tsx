import type { Icon } from './types'

export const IconFileRaw: Icon = ({
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
      data-slot='icon-ui-file-raw'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.82 13.08V5.74c0-1.87 0-2.8.58-3.39.58-.58 1.51-.6 3.38-.61L10 1.72c1.3-.02 1.95-.03 2.44.26a2 2 0 0 1 .69.68c.29.48.29 1.13.29 2.43s0 1.94.28 2.41a2 2 0 0 0 .69.69c.47.28 1.12.28 2.4.28 1.3 0 1.94 0 2.42.29a2 2 0 0 1 .68.68c.29.48.29 1.12.29 2.41v1.23z'
        fill='currentColor'
      />
      <path
        d='M3.82 13.02V7.78c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h1.9c1.22 0 1.83 0 2.39.23.55.23.98.66 1.85 1.52l1.23 1.24 1.17 1.14c.9.87 1.34 1.3 1.58 1.86s.24 1.19.24 2.44v2.81'
        stroke='currentColor'
      />
      <path
        d='M13.22 2.3v2.44c0 1.88 0 2.83.58 3.41.58.6 1.53.6 3.42.6h2.45'
        stroke='currentColor'
      />
      <path d='m3.61 19.7 2.6 2.64' stroke='currentColor' />
      <path d='M9.73 20.49h3.1' stroke='currentColor' />
      <path d='M2.14 15.9v6.44' stroke='currentColor' />
      <path d='m11.28 15.9-2.56 6.44' stroke='currentColor' />
      <path d='m11.3 15.9 2.57 6.44' stroke='currentColor' />
      <path
        d='M2.17 15.9h2.3c.96 0 1.74.82 1.74 1.84a1.8 1.8 0 0 1-1.74 1.84h-2.3'
        stroke='currentColor'
      />
      <path d='M16.55 22.3v-6.4' stroke='currentColor' />
      <path d='m16.64 22.34 2.65-3.22' stroke='currentColor' />
      <path d='m21.86 22.34-2.57-3.24' stroke='currentColor' />
      <path d='M21.86 22.3v-6.4' stroke='currentColor' />
    </svg>
  )
}
