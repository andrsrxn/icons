import type { Icon } from './types'

export const IconBrowserCode: Icon = ({
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
      data-slot='icon-ui-browser-code'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.73 7.38A3.4 3.4 0 0 1 5.11 4H18.9a3.4 3.4 0 0 1 3.38 3.38c0 .46-.38.84-.85.84H2.58a.84.84 0 0 1-.85-.84'
        fill='currentColor'
      />
      <path
        d='M9.73 20h4.54c3.77 0 5.65 0 6.82-1.17 1.18-1.17 1.18-3.06 1.18-6.83v0c0-3.77 0-5.66-1.18-6.83C19.92 4 18.04 4 14.27 4H9.73C5.96 4 4.08 4 2.91 5.17 1.73 6.34 1.73 8.23 1.73 12v0c0 3.77 0 5.66 1.18 6.83C4.08 20 5.96 20 9.73 20'
        stroke='currentColor'
      />
      <path d='M22.03 8.22H1.97' stroke='currentColor' />
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
