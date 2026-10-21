import type { Icon } from './types'

export const IconBrowserCode: Icon = ({
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
      data-slot='icon-ui-browser-code'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.73 6.81c0-.75 0-1.13.1-1.44A2 2 0 0 1 3.12 4.1c.3-.1.68-.1 1.44-.1h14.9a5 5 0 0 1 1.44.1 2 2 0 0 1 1.27 1.27c.1.3.1.69.1 1.44 0 .38 0 .57-.04.73a1 1 0 0 1-.64.63c-.15.05-.34.05-.72.05H3.14c-.38 0-.57 0-.72-.05a1 1 0 0 1-.64-.63c-.05-.16-.05-.35-.05-.73'
        fill='currentColor'
      />
      <rect x='1.73' y='4' width='20.53' height='16' rx='3' stroke='currentColor' />
      <path d='M22.27 8.22H1.73' stroke='currentColor' />
      <path
        d='m14.09 16.96.72-.72c1-1 1.5-1.5 1.5-2.12s-.5-1.12-1.5-2.12l-.72-.73'
        stroke='currentColor'
      />
      <path
        d='m9.91 16.96-.72-.72c-1-1-1.5-1.5-1.5-2.12S8.19 13 9.19 12l.72-.73'
        stroke='currentColor'
      />
    </svg>
  )
}
