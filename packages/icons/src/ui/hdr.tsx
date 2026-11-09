import type { Icon } from './types'

export const IconHdr: Icon = ({
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
      data-slot='icon-ui-hdr'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.53 20.54H2.47' stroke='currentColor' />
      <path d='M21.53 3.5H2.47' stroke='currentColor' />
      <path
        d='M9.51 14.82V9.18c0-.41 0-.62.15-.76s.33-.15.7-.15c1.46-.02 4.3.39 4.3 3.73s-2.84 3.75-4.3 3.73c-.37 0-.56 0-.7-.15-.15-.14-.15-.35-.15-.76'
        stroke='currentColor'
      />
      <path d='M6.88 8.27v7.46' stroke='currentColor' />
      <path d='M2.47 8.27v7.46' stroke='currentColor' />
      <path d='M2.47 12h4.4' stroke='currentColor' />
      <path d='m18.6 12.56 2.61 2.98' stroke='currentColor' />
      <path
        d='M16.94 15.54V9.27c0-.48 0-.71.14-.86.15-.14.39-.14.86-.14h1.62c1.09 0 1.97.93 1.97 2.08s-.88 2.08-1.97 2.08h-2.6'
        stroke='currentColor'
      />
    </svg>
  )
}
