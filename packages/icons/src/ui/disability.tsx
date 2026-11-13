import type { Icon } from './types'

export const IconDisability: Icon = ({
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
      data-slot='icon-ui-disability'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M16.03 15.6a5.76 5.76 0 0 1-4.5 6.66 5.57 5.57 0 1 1-2.06-10.95 7 7 0 0 1 2.25 0l-.84 2.73 1.36.92h3.46z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <circle opacity='.2' cx='14.6' cy='3.98' r='2.34' fill='currentColor' />
      <path d='M15.48 19.41a5.56 5.56 0 0 1-9.81-5.27' stroke='currentColor' />
      <circle cx='14.6' cy='3.98' r='2.34' stroke='currentColor' />
      <path
        d='m7.47 11.16.55-.82c.59-.87.88-1.3 1.32-1.54s.96-.23 2-.23h1.52'
        stroke='currentColor'
      />
      <path
        d='m19.05 19.16-1.81-2.92c-.4-.64-.6-.96-.9-1.15l-.15-.07c-.33-.16-.7-.14-1.45-.12-1.79.05-2.68.08-3.14-.44l-.18-.25c-.35-.6-.05-1.44.55-3.12l.89-2.45'
        stroke='currentColor'
      />
    </svg>
  )
}
