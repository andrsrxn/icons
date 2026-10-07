import type { Icon } from './types'

export const IconNanotechnology: Icon = ({
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
      data-slot='icon-ui-nanotechnology'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M13.56 3.17a1.59 1.59 0 1 1-3.18 0 1.59 1.59 0 0 1 3.18 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M14.55 19.83a2.58 2.58 0 1 1-5.16 0 2.58 2.58 0 0 1 5.16 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M6.23 15.67a1.58 1.58 0 1 1-3.15 0 1.58 1.58 0 0 1 3.15 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M7.18 7.47a2.52 2.52 0 1 1-5.05 0 2.52 2.52 0 0 1 5.05 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M21.87 7.47a2.52 2.52 0 1 1-5.05 0 2.52 2.52 0 0 1 5.05 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M20.86 15.66a1.59 1.59 0 1 1-3.18 0 1.59 1.59 0 0 1 3.18 0'
        fill='currentColor'
      />
      <path d='M10.38 3.17 6.56 5.71' stroke='currentColor' />
      <path d='M9.39 19.13 5.85 16.7' stroke='currentColor' />
      <path d='m13.56 3.17 3.63 2.54' stroke='currentColor' />
      <path d='M14.55 19.13 18 16.7' stroke='currentColor' />
      <path d='M4.66 9.99v4.1' stroke='currentColor' />
      <path d='M19.27 9.99v4.1' stroke='currentColor' />
      <path d='M13.56 3.17a1.6 1.6 0 0 1-1.59 1.6 1.59 1.59 0 1 1 1.59-1.6' stroke='currentColor' />
      <path
        d='M14.55 19.83a2.57 2.57 0 0 1-2.58 2.58 2.58 2.58 0 1 1 2.58-2.58'
        stroke='currentColor'
      />
      <path
        d='M6.23 15.67a1.57 1.57 0 0 1-1.57 1.58 1.58 1.58 0 1 1 1.57-1.58'
        stroke='currentColor'
      />
      <path
        d='M7.18 7.47a2.5 2.5 0 0 1-2.52 2.52 2.52 2.52 0 1 1 2.52-2.52'
        stroke='currentColor'
      />
      <path
        d='M21.87 7.47a2.5 2.5 0 0 1-2.53 2.52 2.52 2.52 0 1 1 2.53-2.52'
        stroke='currentColor'
      />
      <path
        d='M20.86 15.66a1.6 1.6 0 0 1-1.59 1.59 1.59 1.59 0 1 1 1.6-1.59'
        stroke='currentColor'
      />
    </svg>
  )
}
