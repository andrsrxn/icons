import type { Icon } from './types'

export const IconImage: Icon = ({
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
      data-slot='icon-ui-image'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.26 9.76c0-2.82 0-4.24-.87-5.12-.88-.88-2.3-.88-5.13-.88H7.74c-2.83 0-4.25 0-5.12.88s-.88 2.3-.88 5.12v1.31c0 2.52 0 3.78.69 4s1.43-.78 2.92-2.82l1.1-1.5c.77-1.05 1.16-1.58 1.68-1.57.53.02.89.56 1.6 1.65l2.18 3.3c.58.89.87 1.33 1.32 1.4s.85-.29 1.65-.98l.96-.82c.64-.55.96-.82 1.33-.82s.7.29 1.32.85l.43.4c1.44 1.3 2.15 1.95 2.75 1.68.6-.26.6-1.23.6-3.17z'
        fill='currentColor'
      />
      <path
        d='M17.95 8.04a.78.78 0 1 1-1.57 0 .78.78 0 0 1 1.57 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.26 20.24H9.74c-3.77 0-5.66 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83v-.48c0-3.77 0-5.65 1.17-6.82 1.17-1.18 3.06-1.18 6.83-1.18h4.52c3.77 0 5.66 0 6.83 1.18 1.17 1.17 1.17 3.05 1.17 6.82v.48c0 3.77 0 5.65-1.17 6.83s-3.06 1.17-6.83 1.17'
        stroke='currentColor'
      />
      <path
        d='m1.96 17.07 4.63-6.62c.78-1.12 1.17-1.68 1.7-1.66.54.01.9.6 1.61 1.76l2.05 3.35c.62 1.02.94 1.53 1.43 1.58s1.25-.82 2.07-1.7c.65-.7 1.2-1.24 1.61-1.25s.76.33 1.45 1l3.56 3.54'
        stroke='currentColor'
      />
    </svg>
  )
}
