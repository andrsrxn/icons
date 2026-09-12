import type { Icon } from './types'

export const IconPhoneDown: Icon = ({
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
      data-slot='icon-ui-phone-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M11.35 11.2h1.3c.74 0 1.1 0 1.42.1a2 2 0 0 1 1.03.8c.18.27.27.63.45 1.34.14.55.21.82.35 1.05a2 2 0 0 0 .74.75c.23.13.5.2 1.05.35l2.01.54c.9.23 1.36.35 1.71.15.36-.2.48-.65.73-1.55l.19-.67c.14-.5.21-.76.17-1.15a2 2 0 0 0-.3-.86c-.9-1.62-3.46-4.68-10.2-4.68-6.72 0-9.3 3.05-10.19 4.67-.17.32-.26.48-.3.87-.05.39.02.65.17 1.16l.18.67c.25.89.38 1.34.74 1.54.35.2.8.09 1.7-.15l2.04-.54c.54-.14.8-.21 1.03-.34a2 2 0 0 0 .76-.77c.13-.23.2-.5.33-1.04.18-.7.27-1.05.44-1.33a2 2 0 0 1 1.05-.82c.31-.1.67-.1 1.4-.1'
        fill='currentColor'
      />
      <path
        d='M11.35 11.2h1.3c.74 0 1.1 0 1.42.1a2 2 0 0 1 1.03.8c.18.27.27.63.45 1.34.14.55.21.82.35 1.05a2 2 0 0 0 .74.75c.23.13.5.2 1.05.35l2.01.54c.9.23 1.36.35 1.71.15.36-.2.48-.65.73-1.55l.19-.67c.14-.5.21-.76.17-1.15a2 2 0 0 0-.3-.86c-.9-1.62-3.46-4.68-10.2-4.68-6.72 0-9.3 3.05-10.19 4.67-.17.32-.26.48-.3.87-.05.39.02.65.17 1.16l.18.67c.25.89.38 1.34.74 1.54.35.2.8.09 1.7-.15l2.04-.54c.54-.14.8-.21 1.03-.34a2 2 0 0 0 .76-.77c.13-.23.2-.5.33-1.04.18-.7.27-1.05.44-1.33a2 2 0 0 1 1.05-.82c.31-.1.67-.1 1.4-.1'
        stroke='currentColor'
      />
    </svg>
  )
}
