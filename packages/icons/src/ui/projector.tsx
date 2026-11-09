import type { Icon } from './types'

export const IconProjector: Icon = ({
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
      data-slot='icon-ui-projector'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.28 14.91c0 .97 0 1.46-.11 1.85a3 3 0 0 1-2.09 2.09c-.4.1-.88.1-1.84.1H6.57c-1.7 0-2.54 0-3.18-.33a3 3 0 0 1-1.27-1.23c-.34-.64-.36-1.49-.4-3.18.02-.4.02-.6.05-.77a3 3 0 0 1 2.62-2.55c.17-.02.37-.02.78-.02h3.95l.48.01a3 3 0 0 1 2.42 1.56l.27.4a3 3 0 0 0 2.14 1.15h1.01c1.05 0 2-.6 2.45-1.55l.13-.28a2.23 2.23 0 0 1 4.26.95z'
        fill='currentColor'
      />
      <path
        d='M11.37 10.87h-5.5c-.97 0-1.46 0-1.85.11a3 3 0 0 0-2.09 2.09c-.1.4-.1.88-.1 1.84s0 1.46.1 1.85a3 3 0 0 0 2.09 2.09c.4.1.88.1 1.84.1h12.38c.96 0 1.45 0 1.84-.1a3 3 0 0 0 2.09-2.09c.1-.4.1-.88.1-1.85v-.11c0-.86 0-1.3-.08-1.65a3 3 0 0 0-2.2-2.19c-.35-.09-.78-.09-1.64-.09'
        stroke='currentColor'
      />
      <path d='M18.28 11.06a3.37 3.37 0 1 0-6.75 0 3.37 3.37 0 0 0 6.75 0' stroke='currentColor' />
      <path d='M14.9 2.88V4.7' stroke='currentColor' />
      <path d='M5.1 14h2.42' stroke='currentColor' />
      <path d='m4.03 20.6 1.08-1.64' stroke='currentColor' />
      <path d='m20.22 20.6-1.07-1.64' stroke='currentColor' />
      <path d='m10.06 4.7 1.29 1.28' stroke='currentColor' />
      <path d='m19.75 4.7-1.28 1.28' stroke='currentColor' />
    </svg>
  )
}
