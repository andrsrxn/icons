import type { Icon } from './types'

export const IconCameraPlus: Icon = ({
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
      data-slot='icon-ui-camera-plus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.66 4.87a2.5 2.5 0 0 1-2.05 1.07h-.44c-.31 0-.47 0-.6.02a3 3 0 0 0-2.73 2.72v5.55c0 2.83 0 4.24.87 5.12.88.88 2.3.88 5.12.88h8.34c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12V9.45c0-.47 0-.7-.03-.9a3 3 0 0 0-2.57-2.58c-.2-.03-.44-.03-.9-.03h-.31A3 3 0 0 1 16.24 5l-.1-.12-.11-.12a3 3 0 0 0-2.12-.95H9.7c-.8 0-1.57.4-2.04 1.07'
        fill='currentColor'
      />
      <path
        d='M1.83 9.2v-.12a3 3 0 0 1 2.95-2.95h.29c.97 0 1.88-.52 2.37-1.36s1.4-1.35 2.38-1.35h4.33c.98 0 1.9.51 2.4 1.35a2.8 2.8 0 0 0 2.4 1.36h.27a3 3 0 0 1 2.95 3.07v5.03c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H7.83c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12z'
        stroke='currentColor'
      />
      <path
        d='M19.15 9.53a.44.44 0 1 1-.9 0 .44.44 0 0 1 .9 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M12 9.63v6.69' stroke='currentColor' />
      <path d='M8.66 12.97h6.68' stroke='currentColor' />
    </svg>
  )
}
