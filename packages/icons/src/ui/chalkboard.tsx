import type { Icon } from './types'

export const IconChalkboard: Icon = ({
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
      data-slot='icon-ui-chalkboard'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M16.8 15.3c1.88 0 2.82 0 3.41-.58s.59-1.52.59-3.41V8.75c0-1.89 0-2.83-.59-3.42s-1.53-.58-3.41-.58H7.22c-1.89 0-2.83 0-3.42.58-.58.59-.58 1.53-.58 3.42v6.5c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h3.94a2 2 0 0 0 1.76-1.55l.06-.42.06-.41a2 2 0 0 1 1.77-1.55l.42-.01z'
        fill='currentColor'
      />
      <path
        d='M20.8 19.25v-6.5c0-3.77 0-5.66-1.18-6.83-1.17-1.17-3.05-1.17-6.82-1.17h-1.58c-3.77 0-5.66 0-6.83 1.17s-1.17 3.06-1.17 6.83v6.5'
        stroke='currentColor'
      />
      <path
        d='M20.8 19.25v-.97c0-1.42 0-2.12-.44-2.56s-1.15-.44-2.56-.44h-2.02c-1.41 0-2.12 0-2.56.44s-.44 1.14-.44 2.56v.97'
        stroke='currentColor'
      />
      <path d='M22.4 19.25H1.6' stroke='currentColor' />
    </svg>
  )
}
