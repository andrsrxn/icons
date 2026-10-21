import type { Icon } from './types'

export const IconBeach: Icon = ({
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
      data-slot='icon-ui-beach'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M12.6 16.17s-.15-2.91.72-5.18 2.39-3.56 2.39-3.56' stroke='currentColor' />
      <path d='M15.73 7.07a4 4 0 0 0-1.97-.73 4.3 4.3 0 0 0-2.46.43' stroke='currentColor' />
      <path d='M21.55 7.84a5 5 0 0 0-2.53-1.1 5 5 0 0 0-3.14.47' stroke='currentColor' />
      <path d='M18.23 11.06a4 4 0 0 0-.5-2.16 4.6 4.6 0 0 0-1.8-1.92' stroke='currentColor' />
      <path d='M15.84 6.98c.08-.54-.1-1.56-.57-2.47A5 5 0 0 0 13.2 2.3' stroke='currentColor' />
      <path
        d='M2.59 18.72c2.44-1.33 5.16-2.07 9.47-2.06 4.29 0 6.97.82 9.43 2.06'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M5.34 8.15a2.66 2.66 0 1 0 0-5.33 2.66 2.66 0 0 0 0 5.33'
        fill='currentColor'
      />
      <path d='M5.34 8.15a2.66 2.66 0 1 1 0-5.33 2.66 2.66 0 0 1 0 5.33' stroke='currentColor' />
      <path
        opacity='.2'
        d='M2.35 18.7v1.4c0 .92 0 1.38.28 1.66.27.28.72.28 1.63.28h15.47c.96 0 1.44 0 1.74-.3.3-.32.3-.81.3-1.8V18.7L16.84 17l-4.4-.19-4.44.2z'
        fill='currentColor'
      />
    </svg>
  )
}
