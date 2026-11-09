import type { Icon } from './types'

export const IconShredder: Icon = ({
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
      data-slot='icon-ui-shredder'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M2.28 13.27h19.4' stroke='currentColor' />
      <path d='M3.95 19.9v-3.84' stroke='currentColor' />
      <path d='M11.84 19.9v-3.84' stroke='currentColor' />
      <path d='M20.02 19.9v-3.84' stroke='currentColor' />
      <path d='M7.9 22.32v-6.26' stroke='currentColor' />
      <path d='M15.78 22.32v-6.26' stroke='currentColor' />
      <path
        opacity='.2'
        d='M3.72 13.27V5.78c0-1.86 0-2.8.58-3.38s1.52-.6 3.38-.62l2.3-.02c1.34-.01 2.01-.02 2.5.28a2 2 0 0 1 .65.64c.3.49.3 1.16.3 2.5 0 1.33 0 2 .31 2.48a2 2 0 0 0 .64.64c.49.3 1.15.3 2.48.3s2 0 2.48.3a2 2 0 0 1 .64.64c.3.49.3 1.15.3 2.48v1.25z'
        fill='currentColor'
      />
      <path
        d='M3.72 13.2V9.27c0-3.23 0-4.84.88-5.93a4 4 0 0 1 .63-.63c1.1-.88 2.7-.88 5.93-.88 1.4 0 2.1 0 2.74.23l.4.17c.62.3 1.12.79 2.1 1.78h0l.86.85.6.59c1.2 1.16 1.8 1.74 2.1 2.49.32.74.32 1.57.32 3.24v2.04'
        stroke='currentColor'
      />
      <path d='M13.24 2.35v2.52c0 1.89 0 2.83.58 3.42s1.53.58 3.41.58h2.54' stroke='currentColor' />
    </svg>
  )
}
