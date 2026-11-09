import type { Icon } from './types'

export const IconPanelTopOpen: Icon = ({
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
      data-slot='icon-ui-panel-top-open'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m8.1 16.8 1.07-1.08h0c1.33-1.33 2-2 2.83-2s1.5.67 2.83 2l1.07 1.07'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M2.79 9.35c0-2.44 0-3.66.52-4.58a4 4 0 0 1 1.51-1.52c.92-.51 2.14-.51 4.58-.51h5.2c2.44 0 3.66 0 4.58.51a4 4 0 0 1 1.51 1.52c.52.92.52 2.14.52 4.58z'
        fill='currentColor'
      />
      <path
        d='M21.21 13.27v-2.53c0-3.78 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-2.42c-3.77 0-5.66 0-6.83 1.17S2.8 6.96 2.8 10.74v2.53c0 3.77 0 5.65 1.17 6.82 1.17 1.18 3.06 1.18 6.83 1.18h2.42c3.77 0 5.66 0 6.83-1.18 1.17-1.17 1.17-3.05 1.17-6.82'
        stroke='currentColor'
      />
      <path d='M21.21 9.35H2.79' stroke='currentColor' />
    </svg>
  )
}
