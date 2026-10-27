import type { Icon } from './types'

export const IconDragDrop: Icon = ({
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
      data-slot='icon-ui-drag-drop'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M22.2 16.24v-2.4c0-2.82 0-4.24-.88-5.11s-2.3-.88-5.13-.88H13.8c-2.83 0-4.24 0-5.12.88-.88.87-.88 2.29-.88 5.12v2.4c0 2.82 0 4.23.88 5.11s2.3.88 5.12.88h2.4c2.82 0 4.24 0 5.12-.88s.87-2.29.87-5.12'
        stroke='currentColor'
      />
      <path d='M4.42 1.77h-.06A2.6 2.6 0 0 0 1.74 4.4' stroke='currentColor' />
      <path d='M14.05 1.77h.06a2.6 2.6 0 0 1 2.63 2.62' stroke='currentColor' />
      <path d='M4.42 16.75h-.06a2.6 2.6 0 0 1-2.62-2.62' stroke='currentColor' />
      <path d='M1.8 8.08v2.32' stroke='currentColor' />
      <path d='M8.2 1.78h2.07' stroke='currentColor' />
      <path
        opacity='.2'
        d='M7.86 16.75H7.8c-2.83 0-4.25 0-5.13-.88s-.87-2.3-.87-5.12V7.78c0-2.83 0-4.24.87-5.12.88-.88 2.3-.88 5.13-.88h2.9c2.83 0 4.25 0 5.13.88s.88 2.29.88 5.12v.18H9.75l-1.89 1.7z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
