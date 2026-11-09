import type { Icon } from './types'

export const IconFx: Icon = ({
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
      data-slot='icon-ui-fx'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.53 20.54H2.47' stroke='currentColor' />
      <path d='M21.53 3.5H2.47' stroke='currentColor' />
      <path d='m12.77 17.02 6.96-10.04' stroke='currentColor' />
      <path d='M19.73 17.02 12.77 6.98' stroke='currentColor' />
      <path d='M4.27 17.02V7.98c0-.47 0-.7.15-.85s.38-.15.85-.15h4.54' stroke='currentColor' />
      <path d='M4.27 12h4.16' stroke='currentColor' />
    </svg>
  )
}
