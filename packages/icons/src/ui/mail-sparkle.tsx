import type { Icon } from './types'

export const IconMailSparkle: Icon = ({
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
      data-slot='icon-ui-mail-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.09 8.55c0-1.87 0-2.81.58-3.08s1.3.34 2.72 1.56l5.48 4.68c.62.53.93.8 1.3.8s.68-.27 1.3-.8l5.48-4.68c1.42-1.22 2.13-1.83 2.72-1.56.58.27.58 1.2.58 3.08v8.94l-3.22-1.98-.72.74c-.58.59-.87.89-.9 1.26-.02.37.24.7.75 1.36l.87 1.13H8.1c-2.83 0-4.24 0-5.12-.88S2.1 16.82 2.1 14z'
        fill='currentColor'
      />
      <path
        d='M22.25 12v-2c0-2.83 0-4.24-.88-5.12S19.07 4 16.25 4h-8.5c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v4c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h4.74'
        stroke='currentColor'
      />
      <path
        d='m3.34 5.1 4.47 4.5c2 2.02 3 3.03 4.26 3.03 1.24 0 2.25-1 4.25-3.02l4.49-4.5'
        stroke='currentColor'
      />
      <path d='M15.25 17.7c1.78 0 3.68-1.91 3.68-3.68' stroke='currentColor' />
      <path d='M22.6 17.7c-1.76 0-3.67-1.9-3.67-3.68' stroke='currentColor' />
      <path d='M15.25 17.7c1.76 0 3.68 1.95 3.68 3.68' stroke='currentColor' />
      <path d='M22.6 17.7c-1.74 0-3.67 1.92-3.67 3.68' stroke='currentColor' />
    </svg>
  )
}
