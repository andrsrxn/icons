import type { Icon } from './types'

export const IconSparkleScan: Icon = ({
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
      data-slot='icon-ui-sparkle-scan'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M16 21.46c1.86 0 2.79 0 3.5-.34a3.5 3.5 0 0 0 1.65-1.64c.34-.72.34-1.65.34-3.52h0'
        stroke='currentColor'
      />
      <path
        d='M16.03 2.57c1.83 0 2.74 0 3.45.33a3.5 3.5 0 0 1 1.68 1.68c.33.7.33 1.62.33 3.46'
        stroke='currentColor'
      />
      <path
        d='M8.01 21.46c-1.87 0-2.8 0-3.52-.34a3.5 3.5 0 0 1-1.64-1.64c-.34-.72-.34-1.65-.34-3.52'
        stroke='currentColor'
      />
      <path
        d='M8.01 2.57c-1.87 0-2.8 0-3.52.34a3.5 3.5 0 0 0-1.64 1.64c-.34.72-.34 1.66-.34 3.53'
        stroke='currentColor'
      />
      <path d='M12 6.09c0 2.83-3.06 5.9-5.91 5.9' stroke='currentColor' />
      <path d='M12 6.09c0 2.84 3.07 5.9 5.91 5.9' stroke='currentColor' />
      <path d='M12 17.91C12 15.13 8.92 12 6.09 12' stroke='currentColor' />
      <path d='M12 17.91c0-2.82 3.1-5.91 5.91-5.91' stroke='currentColor' />
      <path
        opacity='.2'
        d='M14.5 2.48c3.3 0 4.94 0 5.97 1.03 1.02 1.02 1.02 2.67 1.02 5.97v5.04c0 3.3 0 4.95-1.02 5.97-1.03 1.03-2.68 1.03-5.98 1.03H9.46c-3.3 0-4.95 0-5.98-1.03-1.02-1.02-1.02-2.67-1.02-5.97V9.48c0-3.3 0-4.95 1.02-5.97 1.03-1.03 2.68-1.03 5.98-1.03zm-3.78 6.57c.63-.54.94-.81 1.3-.81.38 0 .7.27 1.32.8l1.58 1.38c.8.69 1.2 1.04 1.21 1.49 0 .45-.4.8-1.19 1.51l-1.58 1.41c-.63.56-.95.85-1.33.85s-.7-.29-1.33-.85l-1.58-1.4c-.8-.71-1.2-1.07-1.2-1.52.01-.45.41-.8 1.22-1.5z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
