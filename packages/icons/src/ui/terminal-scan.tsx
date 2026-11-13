import type { Icon } from './types'

export const IconTerminalScan: Icon = ({
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
      data-slot='icon-ui-terminal-scan'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M9.49 2.5c-3.3 0-4.95 0-5.98 1.02C2.5 4.55 2.5 6.2 2.5 9.5v5c0 3.3 0 4.95 1.02 5.98C4.54 21.5 6.2 21.5 9.5 21.5h5c3.3 0 4.96 0 5.98-1.02 1.03-1.03 1.03-2.68 1.03-5.98v-5c0-3.3 0-4.95-1.03-5.98C19.45 2.5 17.8 2.5 14.5 2.5z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M16 21.48c1.88 0 2.81 0 3.53-.34a3.5 3.5 0 0 0 1.63-1.63c.35-.72.35-1.66.35-3.54h0'
        stroke='currentColor'
      />
      <path
        d='M16.03 2.55c1.85 0 2.77 0 3.48.34a3.5 3.5 0 0 1 1.67 1.66c.33.71.33 1.63.33 3.48'
        stroke='currentColor'
      />
      <path
        d='M8 21.48c-1.87 0-2.81 0-3.54-.34a3.5 3.5 0 0 1-1.62-1.63c-.35-.72-.35-1.66-.35-3.54h0'
        stroke='currentColor'
      />
      <path
        d='M8 2.55c-1.87 0-2.81 0-3.54.35a3.5 3.5 0 0 0-1.62 1.62c-.35.73-.35 1.67-.35 3.55h0'
        stroke='currentColor'
      />
      <path
        d='m7.16 8.25.09.06c2.06 1.48 3.1 2.22 3.1 3.25s-1.03 1.77-3.1 3.25l-.09.06'
        stroke='currentColor'
      />
      <path d='M16.84 15.75h-4.89' stroke='currentColor' />
    </svg>
  )
}
