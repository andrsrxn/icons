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
        d='M8.93 11.6h9.67c-1.3 3.05-3.6 5.26-3.6 5.26s-3-2.59-6.07-5.27'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M5.3 20.35h13.08c.44 0 .66 0 .85-.04a1.5 1.5 0 0 0 1.08-1.08c.05-.19.05-.4.05-.85 0-.43 0-.65-.05-.83a1.5 1.5 0 0 0-1.05-1.08 4 4 0 0 0-.82-.07l-1.71-.05q-.42 0-.7.3a.9.9 0 0 1-.91.27l-1.2-.35-.41-.1-.38-.01H5.3c-.42 0-.63 0-.8.04a1.5 1.5 0 0 0-1.11 1.11c-.04.17-.04.38-.04.8 0 .41 0 .62.04.8.13.54.56.97 1.11 1.1.17.04.38.04.8.04Z'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M20.68 8.02c.64 1.33.96 2 .38 2.93-.6.94-1.56.94-3.5.94H6.44c-1.93 0-2.9 0-3.49-.94-.58-.94-.26-1.6.38-2.93A9.6 9.6 0 0 1 12 2.67a9.6 9.6 0 0 1 8.68 5.35'
        stroke='currentColor'
      />
      <path
        d='M9.46 11.89H3.8q0 0 0 0a2 2 0 0 0-2 2q0 0 0 0t0 0c0 1.1.9 2 2 2q0 0 0 0h9.5'
        stroke='currentColor'
      />
      <path
        d='M17.46 11.89h2.75q0 0 0 0a2 2 0 0 1 2 2q0 0 0 0t0 0a2 2 0 0 1-2 2q0 0 0 0h-3.89'
        stroke='currentColor'
      />
      <path
        d='M3.03 16.25c0 1.56 0 2.34.28 2.95a3 3 0 0 0 1.45 1.44c.6.28 1.38.28 2.94.28h8.6c1.56 0 2.34 0 2.94-.28a3 3 0 0 0 1.45-1.45c.28-.6.28-1.38.28-2.94'
        stroke='currentColor'
      />
      <path
        d='m8.2 11.89 5.32 4.15c.94.72 1.4 1.09 1.88.97.47-.12.7-.66 1.18-1.75l1.49-3.37'
        stroke='currentColor'
      />
    </svg>
  )
}
