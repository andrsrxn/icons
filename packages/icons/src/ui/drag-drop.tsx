import type { Icon } from './types'

export const IconDragDrop: Icon = ({
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
      data-slot='icon-ui-drag-drop'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M22.2 15.24v-.4c0-3.3 0-4.94-1.03-5.97s-2.68-1.02-5.98-1.02h-.39c-3.3 0-4.95 0-5.97 1.02C7.8 9.9 7.8 11.55 7.8 14.85v.4c0 3.3 0 4.94 1.03 5.97 1.02 1.02 2.67 1.02 5.97 1.02h.4c3.3 0 4.94 0 5.97-1.02 1.02-1.03 1.02-2.68 1.02-5.98'
        stroke='currentColor'
      />
      <path d='M4.43 1.77h-.07A2.6 2.6 0 0 0 1.74 4.4' stroke='currentColor' />
      <path d='M14.05 1.77h.06a2.6 2.6 0 0 1 2.63 2.62' stroke='currentColor' />
      <path d='M4.43 16.75h-.07a2.6 2.6 0 0 1-2.62-2.63' stroke='currentColor' />
      <path d='M1.8 8.08v2.32' stroke='currentColor' />
      <path d='M8.2 1.78h2.07' stroke='currentColor' />
      <path
        opacity='.2'
        d='M7.86 16.75H7.8c-2.83 0-4.25 0-5.13-.88s-.87-2.3-.87-5.12V7.78c0-2.83 0-4.24.87-5.12.88-.88 2.3-.88 5.13-.88h2.9c2.83 0 4.25 0 5.13.88s.88 2.29.88 5.12v.18H9.75L7.86 9.65z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
