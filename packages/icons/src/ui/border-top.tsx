import type { Icon } from './types'

export const IconBorderTop: Icon = ({
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
      data-slot='icon-ui-border-top'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.28 2.77c2.82 0 4.24 0 5.12.88.88.87.88 2.29.88 5.12v6.48c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H8.79c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V8.77c0-2.83 0-4.25.88-5.12s2.3-.88 5.12-.88z'
        fill='currentColor'
      />
      <path d='M15.4 12.01H8.67' stroke='currentColor' />
      <path d='M12.04 8.64v6.73' stroke='currentColor' />
      <path
        d='M21.27 5.33a2.57 2.57 0 0 0-2.56-2.56H5.36a2.57 2.57 0 0 0-2.57 2.56'
        stroke='currentColor'
      />
      <path d='M2.74 18.62v.06a2.6 2.6 0 0 0 2.61 2.61' stroke='currentColor' />
      <path d='M21.33 18.76v.06c0 1.36-1.1 2.47-2.47 2.47' stroke='currentColor' />
      <path d='M10.88 21.23h2.25' stroke='currentColor' />
      <path d='M21.23 13.11v-2.24' stroke='currentColor' />
      <path d='M2.75 13.11v-2.24' stroke='currentColor' />
    </svg>
  )
}
