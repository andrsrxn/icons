import type { Icon } from './types'

export const IconHospital: Icon = ({
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
      data-slot='icon-ui-hospital'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M5.47 3.12h13.09V21.5h-3.8l-.36-6.33-2.34-.59-2.38.59-.32 6.33H5.47z'
        fill='currentColor'
      />
      <path
        d='m4.98 10-.58.01a3 3 0 0 0-2.73 2.73c-.02.13-.02.28-.02.59v2.41c0 2.58 0 3.87.75 4.72q.13.15.28.29c.85.74 2.14.74 4.72.74h9.2c2.58 0 3.87 0 4.72-.74l.28-.29c.75-.85.75-2.14.75-4.72v-2.32c0-.39 0-.58-.02-.75a3 3 0 0 0-2.66-2.65c-.16-.02-.35-.02-.74-.02'
        stroke='currentColor'
      />
      <path
        d='M18.56 21.03V9.05c0-2.85 0-4.28-.79-5.25a4 4 0 0 0-.5-.5c-.97-.79-2.4-.79-5.25-.79s-4.29 0-5.25.79a4 4 0 0 0-.51.5c-.79.97-.79 2.4-.79 5.25v11.98'
        stroke='currentColor'
      />
      <path
        d='M14.58 21.03V17.6c0-1 0-1.5-.23-1.86a2 2 0 0 0-.47-.48c-.37-.23-.87-.23-1.87-.23s-1.5 0-1.86.23q-.29.18-.47.48c-.23.36-.23.86-.23 1.86v3.42'
        stroke='currentColor'
      />
      <path d='M9.6 9.23h4.83' stroke='currentColor' />
      <path d='M12.01 11.65V6.82' stroke='currentColor' />
    </svg>
  )
}
