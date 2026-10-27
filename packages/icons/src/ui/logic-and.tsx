import type { Icon } from './types'

export const IconLogicAnd: Icon = ({
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
      data-slot='icon-ui-logic-and'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M9.35 19.24c1.15 0 1.73 0 2.22-.07a6 6 0 0 0 4.94-4.95c.08-.49.08-1.06.08-2.22s0-1.73-.08-2.22a6 6 0 0 0-4.94-4.95c-.49-.07-1.07-.07-2.22-.07h-.1c-.32 0-.47 0-.6.02-.62.1-1.1.6-1.22 1.21-.02.13-.02.29-.02.6v10.82c0 .31 0 .47.02.6.11.62.6 1.1 1.21 1.21.14.02.3.02.6.02z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M16.6 12h5.73' stroke='currentColor' />
      <path d='M1.67 8.46h5.74' stroke='currentColor' />
      <path d='M1.67 15.54h5.74' stroke='currentColor' />
      <path
        d='M9.03 19.24h.75a7 7 0 0 0 6.8-6.8l.01-.44v-.44a7 7 0 0 0-6.8-6.8H8.8a1.5 1.5 0 0 0-1.4 1.4v11.68a1.5 1.5 0 0 0 1.62 1.4'
        stroke='currentColor'
      />
    </svg>
  )
}
