import type { Icon } from './types'

export const IconWebhook: Icon = ({
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
      data-slot='icon-ui-webhook'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17.66 21.39a3.61 3.61 0 1 1 1.87-6.98 3.61 3.61 0 0 1-1.87 6.98'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M2.81 15.06a3.61 3.61 0 1 1 5.11 5.11 3.61 3.61 0 0 1-5.1-5.1'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M15.76 5.37a3.61 3.61 0 1 1-6.98 1.87 3.61 3.61 0 0 1 6.98-1.87'
        fill='currentColor'
      />
      <path
        d='M17.66 21.39a3.61 3.61 0 1 0 1.2-7.1c-1.19-.08-1.78-.13-1.99-.26s-.37-.42-.7-1l-3.92-6.77'
        stroke='currentColor'
      />
      <path
        d='M2.81 15.06a3.61 3.61 0 1 0 5.55 4.59c.66-.98 1-1.47 1.22-1.59.22-.11.55-.11 1.21-.11h7.82'
        stroke='currentColor'
      />
      <path
        d='M15.76 5.37a3.61 3.61 0 1 0-6.74 2.51c.52 1.07.77 1.6.76 1.85 0 .25-.17.54-.5 1.11l-3.91 6.78'
        stroke='currentColor'
      />
    </svg>
  )
}
