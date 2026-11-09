import type { Icon } from './types'

export const IconLightningOff: Icon = ({
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
      data-slot='icon-ui-lightning-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m6.27 10.9 3.93-5.3c2.09-2.8 3.13-4.2 3.86-3.88s.4 2.04-.3 5.47l-.04.22c-.22 1.1-.33 1.66-.03 2.02s.86.37 2 .37h.63c1.73 0 2.59 0 2.87.55s-.24 1.24-1.26 2.64l-4 5.43c-2.1 2.86-3.16 4.28-3.89 3.96s-.38-2.06.32-5.54l.07-.36c.22-1.1.33-1.66.03-2.03s-.86-.36-2-.36h-.59c-1.74 0-2.6 0-2.88-.55s.24-1.25 1.28-2.65'
        fill='currentColor'
      />
      <path
        d='m8.23 8.25-1.96 2.64C5.23 12.3 4.7 13 4.99 13.54c.27.55 1.14.55 2.88.55h.6c1.13 0 1.7 0 2 .36.3.37.18.92-.04 2.03l-.07.36c-.7 3.48-1.05 5.21-.32 5.54.73.32 1.79-1.1 3.89-3.96l1.9-2.58'
        stroke='currentColor'
      />
      <path
        d='m17.43 13.67.5-.68c1.02-1.4 1.54-2.1 1.26-2.64-.28-.55-1.14-.55-2.87-.55h-.64c-1.13 0-1.69 0-1.99-.37-.3-.36-.19-.91.03-2.02l.05-.22c.68-3.43 1.02-5.15.3-5.47-.74-.33-1.78 1.08-3.87 3.88l-.45.6'
        stroke='currentColor'
      />
      <path d='m2.63 2.63 18.74 18.74' stroke='currentColor' />
    </svg>
  )
}
