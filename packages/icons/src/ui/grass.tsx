import type { Icon } from './types'

export const IconGrass: Icon = ({
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
      data-slot='icon-ui-grass'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M6.1 3.84c.8 4.8 1.46 12.08 1.46 12.08l.6 4.33c.05.45.08.68.25.82s.4.13.86.13h3.37c.34 0 .51 0 .64-.09.12-.08.16-.24.25-.55l2.85-10.42 1.47-4.56c.12-.36.18-.54.1-.71s-.25-.27-.62-.48l-.1-.07c-.35-.2-.53-.3-.7-.28-.18.02-.3.15-.55.4l-2.9 3c-.42.43-.63.65-.88.61-.26-.03-.45-.31-.84-.88a13 13 0 0 0-2.01-2.35c-1.73-1.44-2.6-1.58-3.01-1.5-.06 0-.08.01-.18.16s-.1.21-.07.36'
        fill='currentColor'
      />
      <path d='M1.7 21h20.6' stroke='currentColor' />
      <path
        d='M3.18 20.73s.33-2.82 0-5.44q-.16-1.14-.4-2.18c-.36-1.48-.53-2.21.1-2.6.62-.37 1.07.03 1.98.82.72.64 1.45 1.5 2.04 2.68 1.33 2.64 1.33 6.46 1.33 6.46'
        stroke='currentColor'
      />
      <path
        d='M20.49 20.73s-.41-3.53 0-6.81c.16-1.28.44-2.53.73-3.62.4-1.5.61-2.24.03-2.64-.59-.4-1.1-.02-2.15.73a11 11 0 0 0-3.27 3.92c-1.66 3.31-1.66 8.1-1.66 8.1'
        stroke='currentColor'
      />
      <path
        d='M12.08 8.25A11 11 0 0 0 8.5 4.03c-1.07-.75-1.6-1.12-2.17-.72-.58.4-.37 1.16.04 2.66a25 25 0 0 1 .94 8.7'
        stroke='currentColor'
      />
      <path
        d='M16.72 10.75c.19-1.5.54-3.01.89-4.3.4-1.43.59-2.15 0-2.55-.58-.4-1.1-.03-2.11.71-1.23.9-2.65 2.3-3.91 4.44-3.1 5.25-3.37 11.02-3.37 11.02'
        stroke='currentColor'
      />
    </svg>
  )
}
