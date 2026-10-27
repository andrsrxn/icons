import type { Icon } from './types'

export const IconGlobeWww: Icon = ({
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
      data-slot='icon-ui-globe-www'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='12'
        cy='12'
        r='10.28'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <path d='m1.55 10.2 1.36 3.6' stroke='currentColor' />
      <path d='m9.27 10.2 1.37 3.6' stroke='currentColor' />
      <path d='m17 10.2 1.36 3.6' stroke='currentColor' />
      <path d='m4.28 10.2 1.36 3.6' stroke='currentColor' />
      <path d='m12 10.2 1.36 3.6' stroke='currentColor' />
      <path d='m19.72 10.2 1.37 3.6' stroke='currentColor' />
      <path d='M4.28 10.2 2.9 13.8' stroke='currentColor' />
      <path d='m12 10.2-1.36 3.6' stroke='currentColor' />
      <path d='m19.72 10.2-1.36 3.6' stroke='currentColor' />
      <path d='m7 10.2-1.36 3.6' stroke='currentColor' />
      <path d='m14.73 10.2-1.37 3.6' stroke='currentColor' />
      <path d='m22.45 10.2-1.36 3.6' stroke='currentColor' />
      <path
        d='M20.94 17.04A10.5 10.5 0 0 1 12 22.28c-3.73 0-7.01-2.08-8.94-5.24'
        stroke='currentColor'
      />
      <path d='M15.4 17.21c-.75 3.07-2 5.07-3.4 5.07s-2.65-2-3.4-5.07' stroke='currentColor' />
      <path
        d='M20.94 6.96A10.5 10.5 0 0 0 12 1.72c-3.73 0-7.01 2.08-8.94 5.24'
        stroke='currentColor'
      />
      <path d='M15.4 6.79c-.75-3.07-2-5.07-3.4-5.07s-2.65 2-3.4 5.07' stroke='currentColor' />
    </svg>
  )
}
