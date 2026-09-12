import type { Icon } from './types'

export const IconHospital: Icon = ({
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
      data-slot='icon-ui-hospital'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M5.47 3.12h13.09V21.5h-3.8l-.36-6.33-2.34-.59-2.38.59-.32 6.33H5.47z'
        fill='currentColor'
      />
      <path
        d='M18.93 10c.39 0 .58 0 .74.02a3 3 0 0 1 2.66 2.65c.02.17.02.36.02.75v2.32c0 2.58 0 3.87-.75 4.72l-.28.29c-.85.74-2.14.74-4.72.74H7.4c-2.58 0-3.87 0-4.72-.74l-.28-.29c-.75-.85-.75-2.14-.75-4.72v-2.41c0-.3 0-.46.02-.59a3 3 0 0 1 2.73-2.73l.58-.01'
        stroke='currentColor'
      />
      <path
        d='M18.56 21.03V8.5c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-1.09c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v12.52'
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
