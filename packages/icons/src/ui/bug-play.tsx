import type { Icon } from './types'

export const IconBugPlay: Icon = ({
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
      data-slot='icon-ui-bug-play'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M13.91 18.55c0-2.17 0-3.26.66-3.7q.1-.08.21-.13c.73-.33 1.66.24 3.52 1.37 1.73 1.05 2.6 1.58 2.66 2.34v.24c-.06.76-.93 1.3-2.66 2.35-1.86 1.13-2.79 1.7-3.52 1.36l-.2-.12c-.67-.44-.67-1.53-.67-3.7'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M12 6.83h-.8c-1.87 0-2.81 0-3.55.3A4 4 0 0 0 5.5 9.3c-.3.74-.3 1.67-.3 3.55 0 2.82 0 4.23.45 5.34a6 6 0 0 0 3.23 3.22c1.1.47 2.52.47 5.33.47h.4v-7.09h1.72l2.48 1.52v-2.66c0-2.63 0-3.94-.6-4.9a4 4 0 0 0-1.3-1.32c-.97-.6-2.28-.6-4.91-.6'
        fill='currentColor'
      />
      <path
        d='M18.8 11.74c0-.85 0-1.27-.06-1.63a4 4 0 0 0-3.22-3.22c-.35-.06-.78-.06-1.63-.06h-2.68c-1.88 0-2.82 0-3.56.3A4 4 0 0 0 5.5 9.3c-.3.74-.3 1.67-.3 3.55v4.25a4.8 4.8 0 0 0 4.77 4.78'
        stroke='currentColor'
      />
      <path d='M5.2 13.42H1.82' stroke='currentColor' />
      <path
        d='m5.5 9.1-.09-.04a9 9 0 0 1-2.2-1.35c-.44-.45-.72-1-1.28-2.13l-.19-.38'
        stroke='currentColor'
      />
      <path
        d='m2.1 21.87.33-.7c.23-.49.35-.73.49-.95q.5-.76 1.32-1.25c.23-.14.5-.25 1.02-.47'
        stroke='currentColor'
      />
      <path
        d='m18.5 9.1.08-.04c1.17-.6 1.75-.9 2.2-1.35.44-.45.72-1 1.28-2.13l.19-.38'
        stroke='currentColor'
      />
      <path
        d='M15.48 6.83c0-1.96-.76-4.18-3.49-4.18-3.05 0-3.49 2.22-3.49 4.18'
        stroke='currentColor'
      />
    </svg>
  )
}
