import type { Icon } from './types'

export const IconHeartScan: Icon = ({
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
      data-slot='icon-ui-heart-scan'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M15.93 21.32c1.79 0 2.68 0 3.38-.31a3.5 3.5 0 0 0 1.72-1.73c.32-.7.32-1.59.32-3.38'
        stroke='currentColor'
      />
      <path
        d='M15.97 2.71c1.75 0 2.63 0 3.31.3a3.5 3.5 0 0 1 1.76 1.77c.31.68.31 1.56.31 3.32'
        stroke='currentColor'
      />
      <path
        d='M8.07 21.32c-1.79 0-2.68 0-3.38-.31a3.5 3.5 0 0 1-1.72-1.73c-.32-.7-.32-1.59-.32-3.38'
        stroke='currentColor'
      />
      <path
        d='M8.07 2.71c-1.79 0-2.68 0-3.38.32a3.5 3.5 0 0 0-1.72 1.72c-.32.7-.32 1.6-.32 3.38'
        stroke='currentColor'
      />
      <path
        d='M12 9.37a3.6 3.6 0 0 1 2.85-1.64c1.83 0 3.2 2.07 2.6 4.27-.58 2.2-4.07 3.99-5.45 5.55C10.62 16 7.13 14.2 6.54 12s.78-4.27 2.6-4.27A3.6 3.6 0 0 1 12 9.37'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M14.26 2.71c3.3 0 4.95 0 5.98 1.03 1.02 1.02 1.02 2.67 1.02 5.97v4.58c0 3.3 0 4.95-1.02 5.97-1.03 1.03-2.68 1.03-5.98 1.03H9.7c-3.3 0-4.95 0-5.97-1.03-1.03-1.02-1.03-2.67-1.03-5.97V9.7c0-3.3 0-4.95 1.03-5.97C4.74 2.7 6.39 2.7 9.69 2.7zM12 9.37a3.6 3.6 0 0 1 2.85-1.64c1.83 0 3.2 2.07 2.6 4.27-.38 1.43-2 2.7-3.46 3.84-.78.6-1.51 1.17-1.99 1.71a16 16 0 0 0-1.99-1.71C8.55 14.7 6.93 13.44 6.54 12c-.59-2.2.78-4.27 2.6-4.27A3.6 3.6 0 0 1 12 9.37'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
