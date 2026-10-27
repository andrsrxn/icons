import type { Icon } from './types'

export const IconHdr: Icon = ({
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
      data-slot='icon-ui-hdr'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M6.56 8.69v6.65' stroke='currentColor' />
      <path d='m19.25 12.62 2.69 2.72' stroke='currentColor' />
      <path d='M17.73 8.69v6.65' stroke='currentColor' />
      <path d='M2.06 8.69v6.65' stroke='currentColor' />
      <path d='M2.06 12.02h4.5' stroke='currentColor' />
      <path
        d='M9.75 13.56v-3.09c0-.84 0-1.26.33-1.56.34-.3.7-.25 1.4-.18 1.46.17 3.33.85 3.33 3.29s-1.87 3.12-3.33 3.28c-.7.08-1.06.12-1.4-.18s-.33-.72-.33-1.56'
        stroke='currentColor'
      />
      <path
        d='M17.76 8.69h2.37c1 0 1.8.85 1.8 1.9 0 1.06-.8 1.91-1.8 1.91h-2.37'
        stroke='currentColor'
      />
      <path d='M22.26 20.17H1.74' stroke='currentColor' />
      <path d='M22.26 3.86H1.74' stroke='currentColor' />
    </svg>
  )
}
