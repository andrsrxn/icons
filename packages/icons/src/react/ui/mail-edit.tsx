import type { Icon } from './types'

export const IconMailEdit: Icon = ({
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
      data-slot='icon-ui-mail-edit'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.09 8.55c0-1.87 0-2.81.58-3.08s1.3.34 2.72 1.56l5.48 4.68c.62.53.93.8 1.3.8s.68-.27 1.3-.8l5.48-4.68c1.42-1.22 2.13-1.83 2.72-1.56.58.27.58 1.2.58 3.08v5.05l-2.18-.18-3.87 3.78-.96 2.8H8.1c-2.83 0-4.24 0-5.12-.88S2.1 16.82 2.1 14z'
        fill='currentColor'
      />
      <path
        d='M22.25 10.34V10c0-2.83 0-4.24-.88-5.12S19.07 4 16.25 4h-8.5c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v4c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h3.67'
        stroke='currentColor'
      />
      <path
        d='m3.34 5.1 4.47 4.5c2 2.02 3 3.03 4.26 3.03 1.24 0 2.25-1 4.25-3.02l4.49-4.5'
        stroke='currentColor'
      />
      <path
        d='M16.62 21.08c.2 0 .3 0 .4-.04q.1-.04.3-.24l4.62-4.46c.43-.42.64-.63.72-.87a1 1 0 0 0 0-.58c-.07-.25-.28-.46-.7-.88s-.63-.63-.88-.7a1 1 0 0 0-.57 0c-.25.08-.45.29-.87.71l-4.46 4.57c-.14.15-.21.22-.25.3-.04.1-.04.2-.04.4v.8c0 .46 0 .7.15.84s.38.15.85.15z'
        stroke='currentColor'
      />
      <path d='m21.18 16.78-2-2' stroke='currentColor' />
    </svg>
  )
}
