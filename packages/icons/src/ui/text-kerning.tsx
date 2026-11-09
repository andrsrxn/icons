import type { Icon } from './types'

export const IconTextKerning: Icon = ({
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
      data-slot='icon-ui-text-kerning'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m5.87 21-1.22-1.22c-.67-.67-1-1-1-1.41 0-.42.33-.75 1-1.42l1.22-1.22'
        stroke='currentColor'
      />
      <path
        d='m18.13 21 1.22-1.22c.67-.67 1-1 1-1.41 0-.42-.33-.75-1-1.42l-1.22-1.22'
        stroke='currentColor'
      />
      <path d='M4.02 18.36h15.94' stroke='currentColor' />
      <path
        d='m4.04 12.37 1.6-5.46h0c.8-2.7 1.2-4.04 1.93-4.03.74.01 1.1 1.37 1.82 4.08l1.44 5.41'
        stroke='currentColor'
      />
      <path d='M5.31 8.73H9.7' stroke='currentColor' />
      <path
        d='M15.62 2.88h1.49c1.2 0 2.18.98 2.18 2.19 0 1.2-.74 2.18-2.7 2.18h.82a2.55 2.55 0 0 1 0 5.1h-1.67m.03 0c-.7 0-1.06 0-1.31-.18a1 1 0 0 1-.24-.24c-.17-.25-.17-.6-.17-1.31V4.61c0-.7 0-1.06.17-1.31q.1-.15.24-.24c.25-.18.6-.18 1.31-.18'
        stroke='currentColor'
      />
    </svg>
  )
}
