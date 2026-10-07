import type { Icon } from './types'

export const IconWine: Icon = ({
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
      data-slot='icon-ui-wine'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17.37 7.57H6.63l.34 1.01c.5 1.52.75 2.28 1.28 2.79a3 3 0 0 0 .7.5c.66.35 1.45.35 3.05.35s2.4 0 3.05-.34a3 3 0 0 0 .7-.51c.54-.52.79-1.28 1.28-2.8z'
        fill='currentColor'
      />
      <path
        d='M16.12 2.83c-.22-.55-.33-.82-.58-.99-.26-.16-.57-.16-1.18-.16h-4.7c-.6 0-.9 0-1.15.16s-.36.42-.6.94A16 16 0 0 0 6.57 7.4c-.17 2.93 2.49 5.1 5.43 5.1 2.9 0 5.55-2.12 5.4-5.03l-.02-.38a17 17 0 0 0-1.25-4.26'
        stroke='currentColor'
      />
      <path d='M6.66 8.14h10.4' stroke='currentColor' />
      <path d='M12 21.96V12.5' stroke='currentColor' />
      <path d='M15.1 21.96H8.9' stroke='currentColor' />
    </svg>
  )
}
