import type { Icon } from './types'

export const IconHamburger: Icon = ({
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
      data-slot='icon-ui-hamburger'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M20.68 8.02c.64 1.33.96 2 .38 2.93-.6.94-1.56.94-3.5.94H6.44c-1.93 0-2.9 0-3.49-.94-.58-.94-.26-1.6.38-2.93A9.6 9.6 0 0 1 12 2.67a9.6 9.6 0 0 1 8.68 5.35'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M8.1 11.9h5.63c2.67 0 4.87-.3 4.87-.3a17 17 0 0 1-3.82 5.3s-3.6-2.33-6.69-5'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M20.43 20.35v-3.9l-4.02-.11-1.7-.18-2.72.3H3.54v3.9z'
        fill='currentColor'
      />
      <path
        d='M20.68 8.02c.64 1.33.96 2 .38 2.93-.6.94-1.56.94-3.5.94H6.44c-1.93 0-2.9 0-3.49-.94-.58-.94-.26-1.6.38-2.93A9.6 9.6 0 0 1 12 2.67a9.6 9.6 0 0 1 8.68 5.35'
        stroke='currentColor'
      />
      <path
        d='M9.46 11.89H3.77a2 2 0 0 0-1.98 1.98v.06a2 2 0 0 0 1.98 1.99h8.83'
        stroke='currentColor'
      />
      <path
        d='M17.46 11.89h2.77a2 2 0 0 1 1.98 1.98v.06a2 2 0 0 1-1.98 1.99h-4.05'
        stroke='currentColor'
      />
      <path
        d='M3.03 16.25c0 1.56 0 2.34.28 2.95a3 3 0 0 0 1.45 1.44c.6.28 1.38.28 2.94.28h8.6c1.56 0 2.34 0 2.94-.28a3 3 0 0 0 1.45-1.45c.28-.6.28-1.38.28-2.94'
        stroke='currentColor'
      />
      <path
        d='m8.2 11.89 2 1.87c1.82 1.7 2.73 2.55 3.66 2.68a3 3 0 0 0 2.15-.5c.77-.55 1.2-1.72 2.06-4.05'
        stroke='currentColor'
      />
      <path d='M12.6 6.18 12 8.3' stroke='currentColor' />
      <path d='m16.53 7.7-.04 1.03' stroke='currentColor' />
      <path d='m7.54 7.7.6 1.06' stroke='currentColor' />
    </svg>
  )
}
