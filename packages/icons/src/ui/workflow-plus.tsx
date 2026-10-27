import type { Icon } from './types'

export const IconWorkflowPlus: Icon = ({
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
      data-slot='icon-ui-workflow-plus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M12.01 18.52h-4.5l-.54-.01a3 3 0 0 1-2.75-2.75v-1.09a3 3 0 0 1 2.75-2.75l.55-.01h8.63c.32 0 .49 0 .63-.02a3 3 0 0 0 2.7-2.7c.02-.14.02-.3.02-.64l-.01-.63a3 3 0 0 0-2.71-2.7c-.14-.02-.3-.02-.63-.02H7.73'
        stroke='currentColor'
      />
      <rect opacity='.2' x='2.36' y='2.64' width='5.11' height='5.11' rx='1' fill='currentColor' />
      <rect x='2.36' y='2.64' width='5.11' height='5.11' rx='1' stroke='currentColor' />
      <path d='M15.8 18.52h5.84' stroke='currentColor' />
      <path d='M18.71 21.44V15.6' stroke='currentColor' />
    </svg>
  )
}
