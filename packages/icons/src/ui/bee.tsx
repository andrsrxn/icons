import type { Icon } from './types'

export const IconBee: Icon = ({
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
      data-slot='icon-ui-bee'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M21.57 12.53c0 5.18-5.6 4.07-5.6 4.07v-3.77L14.7 8.45s6.88.65 6.88 4.08'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M2.49 12.53c0 5.18 5.6 4.07 5.6 4.07v-3.77l1.28-4.38S2.5 9.1 2.5 12.53'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M11.88 7.59c-3.05 0-3.63 4.4-3.63 4.4l7.62-.22s-.55-4.18-3.99-4.18'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M11.88 22.2c-3.05 0-3.63-4.64-3.63-4.64l7.62.25s-.55 4.4-3.99 4.4'
        fill='currentColor'
      />
      <path
        d='M7.84 14.99c0-4.09 1.86-7.4 4.16-7.4s4.16 3.31 4.16 7.4-1.86 7.4-4.16 7.4c-1.16 0-2.22-.86-2.97-2.23A11 11 0 0 1 7.84 15'
        stroke='currentColor'
      />
      <path
        d='M14.3 8.56s4.38-.06 6.17 1.97c1.56 1.77 1.27 4.03.16 5.15-1.1 1.1-3.17 1-4.32.47'
        stroke='currentColor'
      />
      <path
        d='M9.7 8.56s-4.38-.06-6.17 1.97c-1.56 1.77-1.27 4.03-.16 5.15 1.1 1.1 3.2.96 4.35.44'
        stroke='currentColor'
      />
      <path d='M9.6 8A3.35 3.35 0 0 1 12 2.3 3.36 3.36 0 0 1 14.4 8' stroke='currentColor' />
      <path d='M15.62 12.1H8.38' stroke='currentColor' />
      <path d='M15.62 17.47H8.38' stroke='currentColor' />
      <path d='m7.55 1.61 1.82 1.83' stroke='currentColor' />
      <path d='m16.45 1.61-1.82 1.83' stroke='currentColor' />
    </svg>
  )
}
