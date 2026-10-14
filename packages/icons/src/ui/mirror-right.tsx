import type { Icon } from './types'

export const IconMirrorRight: Icon = ({
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
      data-slot='icon-ui-mirror-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='1.86'
        y='3.36'
        width='20.38'
        height='17.27'
        rx='3'
        fill='currentColor'
      />
      <path
        d='M11.39 3.36H7.86c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v5.28c0 2.83 0 4.24.88 5.12s2.29.88 5.12.88h3.53'
        stroke='currentColor'
      />
      <path d='M12 1.53v20.94' stroke='currentColor' />
      <path d='M19.67 3.4h.05a2.4 2.4 0 0 1 2.42 2.4' stroke='currentColor' />
      <path d='M19.7 20.63h.06a2.37 2.37 0 0 0 2.38-2.38' stroke='currentColor' />
      <path d='M14.83 3.4h1.89' stroke='currentColor' />
      <path d='M22.2 10.46V8.68' stroke='currentColor' />
      <path d='M22.2 15.33v-1.78' stroke='currentColor' />
      <path d='M14.83 20.63h1.89' stroke='currentColor' />
    </svg>
  )
}
