import type { Icon } from './types'

export const IconToaster: Icon = ({
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
      data-slot='icon-ui-toaster'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.03 13.15c0 3.77 0 5.65 1.17 6.83 1.18 1.17 3.06 1.17 6.83 1.17h3.94c3.77 0 5.65 0 6.83-1.17 1.17-1.18 1.17-3.06 1.17-6.83v-1.13c0-1.88 0-2.83-.59-3.41-.58-.59-1.53-.59-3.41-.59H16.1v3.16H7.7V8.02H6.03c-1.88 0-2.83 0-3.41.59-.59.58-.59 1.53-.59 3.41z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M15.77 11.02V6.97s2.02-.41 2.02-2.25c0-2.07-2.24-2.07-2.24-2.07H8.21s-2 0-2 2.07 1.94 2.25 1.94 2.25v4.05'
        stroke='currentColor'
      />
      <path
        d='M20.1 8.02c1.03 0 1.87.84 1.87 1.86v4.8c0 2.5 0 3.74-.54 4.67a4 4 0 0 1-1.46 1.47c-.93.53-2.18.53-4.67.53H8.7c-2.5 0-3.74 0-4.67-.53a4 4 0 0 1-1.46-1.47c-.54-.93-.54-2.17-.54-4.66V9.82c0-1 .8-1.8 1.8-1.8'
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
