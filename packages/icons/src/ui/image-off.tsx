import type { Icon } from './types'

export const IconImageOff: Icon = ({
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
      data-slot='icon-ui-image-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.26 9.76c0-2.82 0-4.24-.87-5.12-.88-.88-2.3-.88-5.13-.88H7.74c-2.83 0-4.25 0-5.12.88s-.88 2.3-.88 5.12v1.31c0 2.52 0 3.78.69 4s1.43-.78 2.92-2.82l1.41-1.92c.65-.88.97-1.32 1.43-1.36.46-.03.85.36 1.61 1.14l3.26 3.31c.57.58.85.87 1.22.9.36.04.7-.2 1.35-.66l.24-.16c.63-.45.94-.66 1.29-.64s.63.28 1.2.79l.56.5c1.44 1.3 2.15 1.96 2.75 1.7.6-.27.6-1.24.6-3.18z'
        fill='currentColor'
      />
      <path d='m2.74 2.64 18.52 18.51' stroke='currentColor' />
      <path
        d='M17.95 8.04a.78.78 0 1 1-1.57 0 .78.78 0 0 1 1.57 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M4.26 4.14q-.8.25-1.35.8C1.74 6.1 1.74 7.99 1.74 11.76v.48c0 3.77 0 5.65 1.17 6.82 1.17 1.18 3.06 1.18 6.83 1.18h4.52c2.62 0 4.32 0 5.52-.4'
        stroke='currentColor'
      />
      <path
        d='M8.04 3.8c.8-.04.61-.04 1.7-.04h4.52c3.78 0 5.66 0 6.83 1.18 1.17 1.17 1.17 3.05 1.17 6.82v.48c0 2.68 0 4.41-.42 5.61'
        stroke='currentColor'
      />
      <path
        d='m1.96 17.07 4.63-6.62c.78-1.12 1.17-1.68 1.7-1.66.54.01.9.6 1.61 1.76h0l2.05 3.35c.62 1.02.94 1.53 1.43 1.58.34.04.78-.32 1.32-.87'
        stroke='currentColor'
      />
      <path
        d='m21.96 16.95-3.45-3.42c-.69-.67-1.03-1.01-1.45-1-.18 0-.32.1-.42.18'
        stroke='currentColor'
      />
    </svg>
  )
}
