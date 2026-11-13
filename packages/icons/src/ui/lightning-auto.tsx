import type { Icon } from './types'

export const IconLightningAuto: Icon = ({
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
      data-slot='icon-ui-lightning-auto'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m5.16 10.9 3.93-5.3c2.09-2.8 3.13-4.2 3.87-3.88.73.32.38 2.04-.3 5.47l-.05.22c-.22 1.1-.33 1.66-.03 2.03s.87.36 2 .36h.63c1.73 0 2.6 0 2.87.55.28.55-.23 1.24-1.26 2.64l-4 5.43c-2.1 2.86-3.15 4.28-3.89 3.96-.73-.33-.38-2.06.32-5.54l.07-.36c.23-1.1.34-1.66.04-2.03s-.87-.36-2-.36h-.6c-1.73 0-2.6 0-2.88-.55s.24-1.25 1.28-2.65'
        fill='currentColor'
      />
      <path
        d='m9.1 5.6-3.94 5.3c-1.04 1.39-1.56 2.09-1.28 2.64s1.15.55 2.88.55h.6c1.13 0 1.7 0 2 .36.3.37.19.92-.04 2.03l-.07.36c-.7 3.48-1.05 5.21-.32 5.54.74.32 1.79-1.1 3.9-3.96l4-5.43c1.02-1.4 1.53-2.1 1.25-2.64-.28-.55-1.14-.55-2.87-.55h-.63c-1.13 0-1.7 0-2-.37-.3-.36-.19-.91.03-2.02l.05-.22c.68-3.43 1.03-5.15.3-5.47-.74-.33-1.78 1.08-3.87 3.88'
        stroke='currentColor'
      />
      <path
        d='m17.26 22.45 1.23-4.16h0c.6-2.05.9-3.07 1.46-3.06s.83 1.04 1.38 3.1l1.1 4.12'
        stroke='currentColor'
      />
      <path d='M18.19 19.7h3.42' stroke='currentColor' />
    </svg>
  )
}
