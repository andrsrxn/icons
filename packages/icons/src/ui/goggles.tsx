import type { Icon } from './types'

export const IconGoggles: Icon = ({
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
      data-slot='icon-ui-goggles'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17.85 18.33c1.35 0 2.03 0 2.56-.2a3 3 0 0 0 1.68-1.68c.22-.54.22-1.21.22-2.56v-2.24c0-2.82 0-4.24-.88-5.12s-2.3-.88-5.12-.88H7.69c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v2.17c0 1.41 0 2.12.23 2.68a3 3 0 0 0 1.62 1.6c.56.24 1.26.24 2.68.23.59 0 .88 0 1.16-.05a3 3 0 0 0 1.03-.42c.24-.15.46-.35.89-.75l.26-.25c1.03-.97 1.54-1.46 2.16-1.55a2 2 0 0 1 .57 0c.62.08 1.14.55 2.19 1.5l.39.36c.4.37.6.56.83.7a3 3 0 0 0 1.06.41c.26.05.54.05 1.09.05'
        fill='currentColor'
      />
      <path
        d='M17.96 18.35c1.26 0 1.88 0 2.38-.19a3 3 0 0 0 1.78-1.78c.19-.5.19-1.13.19-2.38v-2.35c0-2.82 0-4.24-.88-5.12s-2.3-.88-5.12-.88H7.69c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v2.33c0 1.27 0 1.91.2 2.42a3 3 0 0 0 1.75 1.76c.5.19 1.15.19 2.42.19.6 0 .9 0 1.2-.06a3 3 0 0 0 1.24-.56c.23-.18.43-.4.83-.86l.2-.21c.9-1.04 1.36-1.55 1.92-1.72a2 2 0 0 1 1.11 0c.55.16 1.02.67 1.94 1.7l.23.26c.4.44.59.66.81.83a3 3 0 0 0 1.26.56c.28.06.58.06 1.16.06'
        stroke='currentColor'
      />
    </svg>
  )
}
