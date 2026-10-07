import type { Icon } from './types'

export const IconYoga: Icon = ({
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
      data-slot='icon-ui-yoga'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='12' cy='4.82' r='3.25' fill='currentColor' />
      <circle cx='12' cy='4.82' r='3.25' stroke='currentColor' />
      <path
        d='m12 10.83 1.43.72c1.21.62 1.82.93 2.48.96s1.29-.24 2.55-.77l1.05-.43'
        stroke='currentColor'
      />
      <path
        d='m12 10.83-1.43.72c-1.21.62-1.82.93-2.48.96s-1.29-.24-2.55-.77l-1.05-.43'
        stroke='currentColor'
      />
      <path
        d='M12 8.07v6.04c0 1.08 0 1.62.3 2.02s.81.55 1.85.86l.71.21c.54.16.82.24 1.03.4q.24.18.4.44c.13.23.18.5.29 1.06.15.8.22 1.2.12 1.54a1.5 1.5 0 0 1-.4.67c-.26.24-.65.36-1.42.6l-1.12.34'
        stroke='currentColor'
      />
      <path
        d='M12 8.07v6.07c0 1.06 0 1.6-.3 1.99-.28.4-.79.55-1.8.87l-.88.27c-.53.17-.8.25-1 .4q-.26.2-.42.49c-.12.23-.17.5-.25 1.05-.12.75-.18 1.13-.09 1.45q.12.4.44.7c.25.22.61.33 1.34.55l1.12.34'
        stroke='currentColor'
      />
    </svg>
  )
}
