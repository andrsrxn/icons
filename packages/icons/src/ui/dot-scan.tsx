import type { Icon } from './types'

export const IconDotScan: Icon = ({
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
      data-slot='icon-ui-dot-scan'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M9.5 2.52c-3.3 0-4.94 0-5.97 1.03-1.02 1.02-1.02 2.67-1.02 5.97v4.96c0 3.3 0 4.95 1.02 5.97 1.03 1.03 2.68 1.03 5.98 1.03h4.96c3.3 0 4.95 0 5.98-1.03 1.02-1.02 1.02-2.67 1.02-5.97V9.52c0-3.3 0-4.95-1.02-5.97-1.03-1.03-2.68-1.03-5.98-1.03z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M15.98 21.44c1.86 0 2.78 0 3.5-.33a3.5 3.5 0 0 0 1.65-1.66c.34-.71.34-1.64.34-3.5'
        stroke='currentColor'
      />
      <path
        d='M16.02 2.6c1.82-.01 2.73-.01 3.43.32a3.5 3.5 0 0 1 1.7 1.69c.32.7.32 1.61.32 3.44'
        stroke='currentColor'
      />
      <path
        d='M8.02 21.44c-1.86 0-2.78 0-3.5-.34a3.5 3.5 0 0 1-1.65-1.64c-.34-.72-.34-1.65-.34-3.5'
        stroke='currentColor'
      />
      <path
        d='M8.02 2.6c-1.86-.01-2.78-.01-3.5.33a3.5 3.5 0 0 0-1.65 1.65c-.34.72-.34 1.65-.34 3.5'
        stroke='currentColor'
      />
      <path
        d='M13.25 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
