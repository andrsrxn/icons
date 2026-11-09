import type { Icon } from './types'

export const IconCopyCode: Icon = ({
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
      data-slot='icon-ui-copy-code'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.24 7.92c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-5.45a3 3 0 0 0-2.86 3.21v.31a3 3 0 0 0 2.8 2.83h.31l.82.02c.87.02 1.3.03 1.67.13a3 3 0 0 1 2.02 1.9c.13.35.17.78.24 1.64l.13 1.42.03.27a3 3 0 0 0 3.12 2.61h.3a3 3 0 0 0 2.86-2.87z'
        fill='currentColor'
      />
      <path
        d='M8.76 7.93h.35c3.3 0 4.95 0 5.97 1.02 1.03 1.03 1.03 2.68 1.03 5.98v.34c0 3.3 0 4.95-1.03 5.97-1.02 1.03-2.67 1.03-5.97 1.03h-.35c-3.3 0-4.95 0-5.97-1.03-1.03-1.02-1.03-2.67-1.03-5.97v-.34c0-3.3 0-4.95 1.03-5.98 1.02-1.02 2.67-1.02 5.97-1.02'
        stroke='currentColor'
      />
      <path
        d='M7.9 7.59c0-2.2 0-3.3.47-4.13q.47-.79 1.26-1.25c.81-.48 1.92-.48 4.12-.48h1.49c3.3 0 4.95 0 5.97 1.03 1.03 1.02 1.03 2.67 1.03 5.97v1.45c0 2.24 0 3.36-.5 4.18q-.46.76-1.21 1.22c-.83.5-1.95.5-4.19.5'
        stroke='currentColor'
      />
      <path
        d='m10.86 17.73.51-.5c1-1 1.5-1.5 1.5-2.13s-.5-1.12-1.5-2.12l-.5-.51'
        stroke='currentColor'
      />
      <path
        d='m7 17.73-.5-.5c-1-1-1.5-1.5-1.5-2.13s.5-1.12 1.5-2.12l.5-.51'
        stroke='currentColor'
      />
    </svg>
  )
}
