import type { Icon } from './types'

export const IconArchiveIn: Icon = ({
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
      data-slot='icon-ui-archive-in'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M16.23 21.28c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12v-2.27c0-2.83 0-4.24-.88-5.12S19.05 7 16.23 7H7.77c-2.83 0-4.24 0-5.12.88s-.88 2.29-.88 5.12v2.27c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88z'
        fill='currentColor'
      />
      <path
        d='M1.77 13.28v-.27c0-2.83 0-4.24.88-5.12S4.95 7 7.77 7h8.46c2.83 0 4.24 0 5.12.88s.88 2.29.88 5.12v.27c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17H9.77c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
      <path
        d='m2.44 8.08.77-1.34C4.33 4.78 4.9 3.8 5.83 3.26s2.06-.54 4.32-.54h3.78c2.39 0 3.58 0 4.54.6.97.58 1.5 1.65 2.59 3.77l.5 1'
        stroke='currentColor'
      />
      <path
        d='m15.6 15.01-.77.77c-1.33 1.34-2 2-2.83 2s-1.5-.66-2.83-2l-.77-.77'
        stroke='currentColor'
      />
      <path d='M12 10.9v6.53' stroke='currentColor' />
    </svg>
  )
}
