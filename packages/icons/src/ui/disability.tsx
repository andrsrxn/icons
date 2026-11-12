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
      <circle opacity='.2' cx='14.32' cy='4.26' r='2.59' fill='currentColor' />
      <path d='M15.48 19.41a5.56 5.56 0 0 1-9.81-5.27' stroke='currentColor' />
      <circle cx='14.32' cy='4.26' r='2.59' stroke='currentColor' />
      <path
        d='m7.47 11.16.35-.51C8.5 9.64 8.84 9.13 9.36 8.9c.52-.24 1.13-.15 2.33.02l.85.12'
        stroke='currentColor'
      />
      <path
        d='m19.05 19.16-1.8-2.9c-.41-.66-.62-1-.94-1.18l-.1-.05c-.33-.17-.72-.15-1.5-.13h0c-1.81.06-2.72.08-3.18-.46l-.13-.17c-.38-.6-.1-1.47.48-3.18l.66-1.96'
        stroke='currentColor'
      />
    </svg>
  )
}
