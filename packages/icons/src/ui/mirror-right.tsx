import type { Icon } from './types'

export const IconMirrorRight: Icon = ({
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
      data-slot='icon-ui-mirror-right'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.86 11.36c0-3.77 0-5.65 1.17-6.83s3.06-1.17 6.83-1.17h6.38c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v5.28c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H9.86c-3.77 0-5.66 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83z'
        fill='currentColor'
      />
      <path
        d='M11.39 3.36H9.86c-3.77 0-5.66 0-6.83 1.17-1.17 1.18-1.17 3.06-1.17 6.83v1.28c0 3.77 0 5.65 1.17 6.83s3.06 1.17 6.83 1.17h1.53'
        stroke='currentColor'
      />
      <path d='M12 1.53v20.94' stroke='currentColor' />
      <path d='M19.67 3.4h.05a2.4 2.4 0 0 1 2.42 2.4' stroke='currentColor' />
      <path d='M19.7 20.63h.06a2.37 2.37 0 0 0 2.38-2.38' stroke='currentColor' />
      <path d='M15.11 3.4h1.44' stroke='currentColor' />
      <path d='M22.2 10.29V8.84' stroke='currentColor' />
      <path d='M22.2 15.15v-1.4' stroke='currentColor' />
      <path d='M15.11 20.63h1.44' stroke='currentColor' />
    </svg>
  )
}
