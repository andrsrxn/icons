import type { Icon } from './types'

export const IconChalkboard: Icon = ({
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
      data-slot='icon-ui-chalkboard'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.8 15.3c1.88 0 2.82 0 3.41-.58s.59-1.52.59-3.41V8.75c0-1.89 0-2.83-.59-3.42s-1.53-.58-3.41-.58H7.22c-1.89 0-2.83 0-3.42.58-.58.59-.58 1.53-.58 3.42v6.5c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h3c1.1 0 1.98-.88 1.98-1.97s.88-1.97 1.97-1.97z'
        fill='currentColor'
      />
      <path
        d='M20.8 19.25v-8.5c0-2.83 0-4.25-.88-5.12s-2.3-.88-5.12-.88H9.22c-2.83 0-4.25 0-5.12.88-.88.87-.88 2.29-.88 5.12v8.5'
        stroke='currentColor'
      />
      <path
        d='M20.02 19.25v-.97c0-1.42 0-2.12-.44-2.56s-1.15-.44-2.56-.44H15c-1.42 0-2.12 0-2.56.44S12 16.86 12 18.28v.97'
        stroke='currentColor'
      />
      <path d='M22.4 19.25H1.6' stroke='currentColor' />
    </svg>
  )
}
