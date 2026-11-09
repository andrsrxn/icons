import type { Icon } from './types'

export const IconNotesPlus: Icon = ({
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
      data-slot='icon-ui-notes-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12.9 21.46c3.78 0 5.66 0 6.83-1.17 1.18-1.18 1.18-3.06 1.18-6.83v-1.81c0-3.77 0-5.66-1.18-6.83-1.17-1.17-3.05-1.17-6.82-1.17h-1.82c-3.77 0-5.65 0-6.82 1.17-1.18 1.17-1.18 3.06-1.18 6.83v1.8c0 3.78 0 5.66 1.18 6.84 1.17 1.17 3.05 1.17 6.82 1.17z'
        fill='currentColor'
      />
      <path
        d='M3.1 13.46v-1.81c0-3.77 0-5.66 1.17-6.83s3.05-1.17 6.82-1.17h1.82c3.77 0 5.65 0 6.82 1.17 1.18 1.17 1.18 3.06 1.18 6.83v1.8c0 3.78 0 5.66-1.18 6.84-1.17 1.17-3.05 1.17-6.82 1.17h-1.82c-3.77 0-5.65 0-6.82-1.17-1.18-1.18-1.18-3.06-1.18-6.83'
        stroke='currentColor'
      />
      <path d='M8.23 13.39h7.54' stroke='currentColor' />
      <path d='M12 17.17V9.62' stroke='currentColor' />
      <path d='M12 5.3V2' stroke='currentColor' />
      <path d='M7.6 5.3V2' stroke='currentColor' />
      <path d='M16.4 5.3V2' stroke='currentColor' />
    </svg>
  )
}
