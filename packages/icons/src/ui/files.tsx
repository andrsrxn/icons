import type { Icon } from './types'

export const IconFiles: Icon = ({
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
      data-slot='icon-ui-files'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.12 11.5c-.02-1.1-.04-1.65-.3-2.1-.27-.45-.74-.72-1.68-1.27l-2.92-1.7-.43-.27a2 2 0 0 1-.78-1.79c0-.12.03-.24.09-.5s.09-.4.13-.51a2 2 0 0 1 1.54-1.31c.13-.02.26-.03.53-.04l2.36-.12c.67-.03 1-.05 1.27.02a2 2 0 0 1 1.47 1.4c.08.26.08.6.08 1.26 0 .64 0 .96.07 1.22a2 2 0 0 0 1.4 1.4c.26.07.58.07 1.22.07h.2a5 5 0 0 1 1.56.12 2 2 0 0 1 1.2 1.2 5 5 0 0 1 .12 1.56v4.68c0 1.43 0 2.15-.35 2.66a2 2 0 0 1-.52.52c-.51.35-1.23.35-2.66.35-1.4 0-2.1 0-2.6-.34a2 2 0 0 1-.53-.5c-.35-.5-.36-1.2-.4-2.6z'
        fill='currentColor'
      />
      <path
        d='m13.16 8.15-.72-.68a8 8 0 0 0-1.7-1.39l-.47-.19c-.52-.16-1.07-.16-2.19-.16-2.65 0-3.98 0-4.9.68q-.43.32-.75.74c-.68.93-.68 2.26-.68 4.91v3.2c0 3.29 0 4.93 1.01 5.95l.03.02c1.02 1.02 2.66 1.02 5.94 1.02s4.92 0 5.94-1.02l.02-.02c1.02-1.02 1.02-2.66 1.02-5.94v-1.7c0-1.51 0-2.26-.3-2.93-.29-.67-.84-1.19-1.95-2.21z'
        stroke='currentColor'
      />
      <path
        d='M15.8 18.35c2.77 0 4.16 0 5.1-.74q.34-.27.6-.6c.75-.95.75-2.34.75-5.12V9.67c0-1.5 0-2.26-.3-2.93-.29-.67-.84-1.18-1.95-2.2l-.3-.29-.74-.7A8 8 0 0 0 17.3 2.2a4 4 0 0 0-.53-.21c-.5-.16-1.04-.16-2.12-.16h-2.97a3.5 3.5 0 0 0-3.33 3.4v.38'
        stroke='currentColor'
      />
      <path d='M16.15 2.07c0 1.84 0 4.48.6 5.06s3.4.57 5.33.57' stroke='currentColor' />
      <path d='M9.35 6c0 1.84 0 4.48.6 5.05.6.58 3.39.58 5.32.58' stroke='currentColor' />
    </svg>
  )
}
