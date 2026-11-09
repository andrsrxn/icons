import type { Icon } from './types'

export const IconSpeaker: Icon = ({
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
      data-slot='icon-ui-speaker'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M19.43 8.79c0-3.3 0-4.95-1.02-5.98-1.03-1.02-2.68-1.02-5.98-1.02h-.86c-3.3 0-4.95 0-5.98 1.02C4.57 3.84 4.57 5.5 4.57 8.8v6.45c0 3.3 0 4.95 1.02 5.98 1.03 1.02 2.68 1.02 5.98 1.02h.86c3.3 0 4.95 0 5.98-1.02 1.02-1.03 1.02-2.68 1.02-5.98zm-3.71 6.14a3.72 3.72 0 1 1-7.44 0 3.72 3.72 0 0 1 7.44 0'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M11.57 22.24h.86c3.3 0 4.95 0 5.98-1.02 1.02-1.03 1.02-2.68 1.02-5.98V8.8c0-3.3 0-4.95-1.02-5.98-1.03-1.02-2.68-1.02-5.98-1.02h-.86c-3.3 0-4.95 0-5.98 1.02C4.57 3.84 4.57 5.5 4.57 8.8v6.45c0 3.3 0 4.95 1.02 5.98 1.03 1.02 2.68 1.02 5.98 1.02'
        stroke='currentColor'
      />
      <circle cx='12' cy='14.93' r='3.93' stroke='currentColor' />
      <path
        d='M12.52 14.93a.52.52 0 1 1-1.04 0 .52.52 0 0 1 1.04 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.52 6.15a.52.52 0 1 1-1.04 0 .52.52 0 0 1 1.04 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
