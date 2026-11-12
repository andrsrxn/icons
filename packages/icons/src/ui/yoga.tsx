import type { Icon } from './types'

export const IconYoga: Icon = ({
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
      data-slot='icon-ui-yoga'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='4.82' r='3.25' fill='currentColor' />
      <circle cx='12' cy='4.82' r='3.25' stroke='currentColor' />
      <path d='M12 10.9s1.47 1.74 3.43 1.74a4.1 4.1 0 0 0 3.17-1.32' stroke='currentColor' />
      <path d='M12 10.9s-.88 1.74-3.43 1.74c-1.94 0-3.17-1.32-3.17-1.32' stroke='currentColor' />
      <path
        d='M12 10.9v4.02c0 .67 0 1.01.12 1.3q.15.32.42.56c.23.2.56.3 1.2.48h0l1.56.46a2.14 2.14 0 0 1 .02 4.1l-1.48.44'
        stroke='currentColor'
      />
      <path
        d='M12 10.92v3.21c0 .38 0 .57-.02.74a3 3 0 0 1-1.77 2.4c-.16.07-.34.13-.7.24l-.87.27a2.1 2.1 0 0 0 .08 4.03l1.59.43'
        stroke='currentColor'
      />
    </svg>
  )
}
