import type { Icon } from './types'

export const IconSuitcase: Icon = ({
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
      data-slot='icon-ui-suitcase'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path opacity='.2' d='M6.55 7.12h10.9V20.2H6.55z' fill='currentColor' />
      <path
        d='M8.26 20.2h7.48c2.86 0 4.28 0 5.25-.78q.27-.23.5-.5c.79-.97.79-2.4.79-5.26v0c0-2.86 0-4.29-.78-5.25a4 4 0 0 0-.51-.5c-.97-.8-2.4-.8-5.25-.8H8.26c-2.86 0-4.28 0-5.25.8a4 4 0 0 0-.5.5c-.79.96-.79 2.4-.79 5.25v0c0 2.86 0 4.29.78 5.25q.24.29.51.5c.97.8 2.4.8 5.25.8'
        stroke='currentColor'
      />
      <path d='M6.35 19.55V7.78' stroke='currentColor' />
      <path d='M17.65 19.55V7.78' stroke='currentColor' />
      <path d='M15.75 7.08c0-2.28-.55-4.09-3.75-4.09S8.25 4.96 8.25 7.08' stroke='currentColor' />
    </svg>
  )
}
