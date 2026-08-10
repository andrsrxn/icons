import type { Icon } from './types'

export const IconSortZA: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      data-slot='sort-z-a'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' d='M14.67 7.93 17.1 3.9l2.02 4.02z' fill='currentColor' />
      <path
        d='m10.87 6.6-.78-.78c-1.33-1.34-2-2-2.83-2-.82 0-1.5.66-2.83 2l-.78.78m3.61 13.3v-16'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='m13.49 10.09 2.52-4.96c.39-.77.58-1.15.9-1.15.3 0 .5.38.88 1.15l2.52 4.96'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M14.77 8.1h4.27' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <path
        d='M19.6 19.43h-3.46c-1.11 0-1.67 0-1.8-.32-.11-.32.3-.7 1.14-1.43l2.84-2.5c.84-.73 1.26-1.1 1.14-1.42-.13-.33-.68-.33-1.8-.33H14.1'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
