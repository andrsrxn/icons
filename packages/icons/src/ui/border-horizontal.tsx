import type { Icon } from './types'

export const IconBorderHorizontal: Icon = ({
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
      data-slot='icon-ui-border-horizontal'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M21.24 15.27c0 2.83 0 4.25-.88 5.13s-2.3.87-5.12.87H8.76c-2.83 0-4.24 0-5.12-.87-.88-.88-.88-2.3-.88-5.13V8.8c0-2.82 0-4.24.88-5.12s2.3-.88 5.12-.88h6.48c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12z'
        fill='currentColor'
      />
      <path
        d='M12 15.4V8.67m3.37 3.36H8.63M18.68 2.8a2.57 2.57 0 0 1 2.56 2.56V18.7a2.56 2.56 0 0 1-2.56 2.56m-7.97-.03h2.6m-2.6-18.48h2.6M5.34 21.2a2.56 2.56 0 0 1-2.57-2.56V5.3a2.57 2.57 0 0 1 2.57-2.56'
        stroke='currentColor'
      />
    </svg>
  )
}
