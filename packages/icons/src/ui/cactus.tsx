import type { Icon } from './types'

export const IconCactus: Icon = ({
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
      data-slot='icon-ui-cactus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M5.22 14.94c.05-.82.73-1.47 1.55-1.47h10.4c.81 0 1.49.63 1.54 1.45v.18a6.77 6.77 0 1 1-13.5.06z'
        fill='currentColor'
      />
      <path
        d='M5.86 17.5c-.35-1.38-.53-2.08-.37-2.62a2 2 0 0 1 .87-1.11c.48-.3 1.19-.3 2.6-.3h6.1c1.4 0 2.1 0 2.58.3a2 2 0 0 1 .87 1.11c.17.54 0 1.23-.36 2.61-.43 1.7-.65 2.55-1.1 3.18A4 4 0 0 1 15.32 22c-.73.3-1.6.3-3.32.3-1.73 0-2.6 0-3.31-.3a4 4 0 0 1-1.72-1.33c-.46-.62-.68-1.47-1.12-3.16'
        stroke='currentColor'
      />
      <path d='m8.97 13.47-.64-7.7a3.7 3.7 0 1 1 7.37 0l-.67 7.7' stroke='currentColor' />
      <path d='m15.15 2.87 1.63-1.4' stroke='currentColor' />
      <path d='M12.02 13.47V9.8' stroke='currentColor' />
      <path d='M8.33 4.06 6.49 2.41' stroke='currentColor' />
      <path d='m8.33 8.1-2.03.77' stroke='currentColor' />
      <path d='m15.6 8.87 2.1.35' stroke='currentColor' />
    </svg>
  )
}
