import type { Icon } from './types'

export const IconImageX: Icon = ({
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
      data-slot='icon-ui-image-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.74 9.76c0-2.82 0-4.24.88-5.12.87-.88 2.29-.88 5.12-.88h10.61l3.91 3.8v9.63l-5.08-4.61-4.02 3.45-5-7.6-6.42 8.75z'
        fill='currentColor'
      />
      <path d='m17.5 2.66 4.83 4.82' stroke='currentColor' />
      <path d='m17.5 7.48 4.82-4.82' stroke='currentColor' />
      <path
        d='M22.26 10.97v3.27c0 2.82 0 4.24-.87 5.12-.88.88-2.3.88-5.13.88H7.74c-2.83 0-4.25 0-5.12-.88s-.88-2.3-.88-5.12V9.76c0-2.82 0-4.24.88-5.12.87-.88 2.29-.88 5.12-.88h4.4'
        stroke='currentColor'
      />
      <path
        d='m1.83 17.07 4.65-6.62C7.27 9.33 7.66 8.77 8.2 8.8c.54.01.9.6 1.62 1.76l2.06 3.35c.63 1.02.94 1.53 1.44 1.58.49.05 1.26-.82 2.08-1.7.66-.7 1.2-1.24 1.63-1.25s.77.33 1.45 1l3.6 3.54'
        stroke='currentColor'
      />
    </svg>
  )
}
