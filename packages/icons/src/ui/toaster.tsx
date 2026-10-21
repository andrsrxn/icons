import type { Icon } from './types'

export const IconToaster: Icon = ({
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
      data-slot='icon-ui-toaster'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.03 15.15c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h7.94c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12v-3.13c0-1.88 0-2.83-.59-3.41-.58-.59-1.53-.59-3.41-.59H16.1v3.16H7.7V8.02H6.03c-1.88 0-2.83 0-3.41.59-.59.58-.59 1.53-.59 3.41z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M15.77 11.02V6.97s2.02-.41 2.02-2.25c0-2.07-2.24-2.07-2.24-2.07H8.21s-2 0-2 2.07 1.94 2.25 1.94 2.25v4.05'
        stroke='currentColor'
      />
      <path
        d='M20.1 8.02c1.03 0 1.87.84 1.87 1.86v5.47c0 2.83 0 4.25-.88 5.12s-2.3.88-5.12.88H8.03c-2.83 0-4.24 0-5.12-.88-.88-.87-.88-2.29-.88-5.12V9.82c0-1 .8-1.8 1.8-1.8'
        stroke='currentColor'
      />
      <path d='M5.6 11.02h12.8' stroke='currentColor' />
      <path
        d='M7.22 16a.5.5 0 1 1-1.01 0 .5.5 0 0 1 1 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M12 16a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0' fill='currentColor' stroke='currentColor' />
    </svg>
  )
}
