import type { Icon } from './types'

export const IconTrashCheck: Icon = ({
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
      data-slot='icon-ui-trash-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M13.54 22c1.58 0 2.37 0 2.93-.45.55-.46.7-1.24 1-2.8l1.61-8.5c.42-2.19.63-3.29.03-4.01-.6-.73-1.72-.73-3.96-.73H9.2c-2.14 0-3.22 0-3.81.7-.6.68-.45 1.74-.15 3.87l1.21 8.5c.23 1.63.35 2.45.91 2.94s1.4.49 3.05.49z'
        fill='currentColor'
      />
      <path
        d='M19.47 6.13 17.8 17.25c-.34 2.3-.5 3.44-1.27 4.15l-.2.17c-.81.65-1.97.65-4.28.65-2.3 0-3.46 0-4.27-.64l-.2-.17c-.76-.71-.93-1.85-1.28-4.13L4.59 6.13'
        stroke='currentColor'
      />
      <path d='M3.53 5.7h16.94' stroke='currentColor' />
      <path
        d='m17 5.51-.27-.63c-.53-1.23-.8-1.85-1.25-2.28a3 3 0 0 0-.86-.57c-.57-.25-1.24-.25-2.59-.25-1.32 0-1.98 0-2.55.25a3 3 0 0 0-.86.55C8.17 3 7.9 3.61 7.37 4.82l-.31.7'
        stroke='currentColor'
      />
      <path
        d='m9.31 13.73.35.43c.72.9 1.08 1.36 1.57 1.36.48 0 .84-.45 1.56-1.37l2.47-3.13'
        stroke='currentColor'
      />
    </svg>
  )
}
