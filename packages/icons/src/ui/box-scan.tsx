import type { Icon } from './types'

export const IconBoxScan: Icon = ({
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
      data-slot='icon-ui-box-scan'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M16 21.46c1.86 0 2.79 0 3.5-.34a3.5 3.5 0 0 0 1.65-1.64c.34-.72.34-1.65.34-3.52'
        stroke='currentColor'
      />
      <path
        d='M16.03 2.57c1.83 0 2.74 0 3.45.33a3.5 3.5 0 0 1 1.68 1.68c.33.7.33 1.62.33 3.46'
        stroke='currentColor'
      />
      <path
        d='M8 21.58c-1.97 0-2.94 0-3.7-.38a3.5 3.5 0 0 1-1.53-1.53c-.38-.75-.38-1.73-.38-3.7h0'
        stroke='currentColor'
      />
      <path
        d='M8.01 2.57c-1.86 0-2.8 0-3.52.34a3.5 3.5 0 0 0-1.63 1.64c-.35.72-.35 1.66-.35 3.53'
        stroke='currentColor'
      />
      <path
        d='m9.36 16.98.08.05c1.45.83 2.17 1.25 2.97 1.25h.03c.8 0 1.52-.42 2.97-1.25l.07-.05c1.37-.79 2.06-1.19 2.46-1.82l.1-.17c.35-.67.35-1.46.35-3.04s0-2.38-.36-3.04l-.1-.17c-.39-.64-1.08-1.03-2.45-1.82l-.07-.05c-1.45-.83-2.17-1.25-2.97-1.26h-.03c-.8 0-1.52.43-2.97 1.26l-.08.05C8 7.7 7.31 8.1 6.91 8.74l-.1.17c-.35.66-.35 1.46-.35 3.04s0 2.37.35 3.04l.1.17c.4.63 1.08 1.03 2.45 1.82'
        stroke='currentColor'
      />
      <path d='m6.8 9.12 5.62 3.1' stroke='currentColor' />
      <path d='M12.42 12.21v6.03' stroke='currentColor' />
      <path d='M9.45 10.41v2.92' stroke='currentColor' />
      <path d='m18.05 9.12-5.63 3.1' stroke='currentColor' />
      <path d='m9.45 10.41 5.79-3.43' stroke='currentColor' />
      <path
        opacity='.2'
        d='M14.5 2.48c3.3 0 4.94 0 5.97 1.03 1.02 1.02 1.02 2.67 1.02 5.97v5.03c0 3.3 0 4.95-1.02 5.98-1.03 1.02-2.68 1.02-5.98 1.02H9.46c-3.3 0-4.95 0-5.97-1.02-1.03-1.03-1.03-2.68-1.03-5.98V9.48c0-3.3 0-4.95 1.03-5.97C4.5 2.48 6.16 2.48 9.46 2.48zm-1.05 15.6 4.64-2.76q.24-.15.25-.44V9.92a.51.51 0 0 0-.75-.45l-4.64 2.47a.5.5 0 0 0-.27.46v5.23c0 .4.43.65.77.44'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
