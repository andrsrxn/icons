import type { Icon } from './types'

export const IconHandTouchInteraction: Icon = ({
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
      data-slot='icon-ui-hand-touch-interaction'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m9.32 7.28 1.65-.55 1.27.55.67 4.9 2.55-.52 1.26 1.73h2.63l.37 7.67-1.15 1.6H9.5l-2.92-3.73-1.88-4.38 2-1.56 2.33 1.3z'
        fill='currentColor'
      />
      <path d='M16.25 16.06v-2.75a1.79 1.79 0 1 0-3.58 0v2.75' stroke='currentColor' />
      <path
        d='M16.25 15.75v-.92a1.79 1.79 0 0 1 3.57 0v3.6a8 8 0 0 1-1.26 4.02'
        stroke='currentColor'
      />
      <path d='M12.67 14.84v-6.4a1.79 1.79 0 0 0-3.57 0v6.95' stroke='currentColor' />
      <path
        d='m9.1 15.48-.88-1.5a1.93 1.93 0 0 0-2.63-.7 1.86 1.86 0 0 0-.8 2.34 28 28 0 0 0 1.87 3.67c.84 1.3 2.43 3.12 2.43 3.12'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M4.07 5.17c0-.35 0-.52.02-.67a3 3 0 0 1 2.69-2.7h9.48c.73 0 1.09 0 1.39.06a3 3 0 0 1 2.34 2.39c.06.3.05.66.04 1.38l-.02.88a1.9 1.9 0 0 1-1.89 1.85H13.6a1.5 1.5 0 0 1-1.36-.89l-.01-.03a1.45 1.45 0 0 0-1.62-.84l-.07.02c-.46.1-.83.42-.98.86a1.3 1.3 0 0 1-1.23.88H6.79a2.7 2.7 0 0 1-2.72-2.72z'
        fill='currentColor'
      />
      <path
        d='M15.77 8.36h1.67a3 3 0 0 0 2.79-3.28l-.01-.5a3 3 0 0 0-2.77-2.78H6.72a3 3 0 0 0-2.75 2.75l-.01.55v.98c0 1.22.96 2.22 2.17 2.28'
        stroke='currentColor'
      />
    </svg>
  )
}
